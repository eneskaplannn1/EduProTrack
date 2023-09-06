const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const validator = require("validator");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Student Must have a name"],
  },
  username: {
    type: String,
    required: [true, "Student must have a username!"],
    unique: true,
  },
  phoneNum: {
    type: String,
    required: [true, "Student must have a phone number!"],
    validate: [validator.isMobilePhone, "Please provide valid phone number"],
  },
  gender: {
    type: "String",
    enum: { values: ["male", "female"], message: `{VALUE} did not supported` },
    required: [true, "Student must have a gender!"],
  },
  age: {
    type: Number,
    required: [true, "Student must have a age!"],
    min: [15, "age must be more then 15"],
    max: [100, "age must be less then 100"],
  },
  address: {
    type: String,
  },
  adminssionDate: {
    type: Date,
    default: Date.now(),
  },
  password: {
    type: String,
    required: [true, "Student must have a password!"],
    select: false,
    minLength: [8, "Password must be at least 8 characters"],
  },
  role: {
    type: String,
    enum: ["Student"],
    default: "Student",
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    require: [true, "A Student must have a Teacher"],
  },
  email: {
    type: String,
    required: [true, "Please tell us your email!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    require: [true, "the student must belong to a class"],
  },
  active: {
    type: Boolean,
    default: true,
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  verified: {
    type: Boolean,
    default: false,
  },
});

StudentSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

StudentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 15);
  next();
});

StudentSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) return next();
  this.passwordChangedAt = Date.now();
  next();
});

StudentSchema.methods.correctPassword = async (
  candidatePassword,
  userPassword
) => await bcrypt.compare(candidatePassword, userPassword);

StudentSchema.methods.changedPasswordAfter = function (JWT_TIMESTAMP) {
  if (this.passwordChangedAt) {
    const changedTime = parseInt(this.passwordChangedAt.getTime() / 1000);
    // console.log(changedTime, JWT_TIMESTAMP);
    // console.log(JWT_TIMESTAMP > changedTime);
    return changedTime > JWT_TIMESTAMP;
  }
  return false;
};

StudentSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now + 5 * 60 * 1000;

  return resetToken;
};

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
