const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

const UserSchema = mongoose.model("User", userSchema);

const User = {
  // CREATE
  register: (userData) => {
    return UserSchema.create(userData);
  },

  // READ ALL
  getUsers: () => {
    return UserSchema.find();
  },

  // READ ONE
  getUserById: (id) => {
    return UserSchema.findById(id);
  },

  // UPDATE
  updateUser: (id, data) => {
    return UserSchema.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  },

  // DELETE
  deleteUser: (id) => {
    return UserSchema.findByIdAndDelete(id);
  },
};

module.exports = User;
