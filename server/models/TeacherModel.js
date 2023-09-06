const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const crypto = require("crypto");

const TeacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Teacher Must have a name"],
  },
  username: {
    type: String,
    required: [true, "Teacher must have a username!"],
    unique: true,
  },
  phoneNum: {
    type: String,
    required: [true, "Teacher must have a phone number!"],
    validate: [validator.isMobilePhone, "Please provide valid phone number"],
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
  gender: {
    type: "String",
    enum: ["male", "female"],
    required: [true, "Teacher must have a gender!"],
  },
  age: {
    type: Number,
    required: [true, "Teacher must have a age!"],
    min: [25, "age must be more then 25"],
    max: [100, "age must be less then 100"],
  },
  address: {
    type: String,
    required: [true, "Teacher must have a address!"],
  },
  adminssionDate: {
    type: Date,
    default: Date.now(),
  },
  password: {
    type: String,
    required: [true, "Teacher must have a password!"],
    select: false,
  },
  role: {
    type: String,
    enum: ["Teacher"],
    default: "Teacher",
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  email: {
    type: String,
    required: [true, "Please tell us your email!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  changedPasswordAt: Date,
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    require: [true, "A teacher must be associated with a class"],
  },
  active: {
    type: Boolean,
    default: true,
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  verified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

TeacherSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

TeacherSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 15);
  next();
});

TeacherSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) return next();
  this.changedPasswordAt = Date.now();
  next();
});

TeacherSchema.methods.correctPassword = (candidatePassword, userPassword) =>
  bcrypt.compare(candidatePassword, userPassword);

TeacherSchema.methods.changedPasswordAfter = function (JWT_TIMESTAMP) {
  if (this.changedPasswordAt) {
    const changedTime = parseInt(this.changedPasswordAt.getTime() / 1000);
    // console.log(changedTime, JWT_TIMESTAMP);
    return changedTime > JWT_TIMESTAMP;
  }

  return false;
};

TeacherSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 5 * 60 * 1000;

  return resetToken;
};

const Teacher = mongoose.model("Teacher", TeacherSchema);
module.exports = Teacher;
