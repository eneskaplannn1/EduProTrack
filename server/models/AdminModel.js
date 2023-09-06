const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const validator = require("validator");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Admin Must have a name"],
  },
  username: {
    type: String,
    required: [true, "Admin must have a username!"],
    unique: true,
  },
  adminssionDate: {
    type: Date,
    default: Date.now(),
  },
  password: {
    type: String,
    required: [true, "Admin must have a password!"],
    select: false,
    minLength: [8, "Password must be at least 8 characters"],
  },
  role: {
    type: String,
    enum: ["Admin"],
    default: "Admin",
  },
  email: {
    type: String,
    required: [true, "Please tell us your email!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
  active: {
    type: Boolean,
    default: true,
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

AdminSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 15);
  next();
});

AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) return next();
  this.passwordChangedAt = Date.now();
  next();
});

AdminSchema.methods.correctPassword = async (candidatePassword, userPassword) =>
  await bcrypt.compare(candidatePassword, userPassword);

AdminSchema.methods.changedPasswordAfter = function (JWT_TIMESTAMP) {
  if (this.passwordChangedAt) {
    const changedTime = parseInt(this.passwordChangedAt.getTime() / 1000);
    // console.log(changedTime, JWT_TIMESTAMP);
    // console.log(JWT_TIMESTAMP > changedTime);
    return changedTime > JWT_TIMESTAMP;
  }
  return false;
};

AdminSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now + 5 * 60 * 1000;

  return resetToken;
};

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
