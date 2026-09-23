const userModel = require("../models/userModels");

// REGISTER
const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    const new_user = await userModel.register({
      name,
      email,
      password,
      phone,
      address,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: new_user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
};

// GET ALL USERS
const getUsers = async (req, res) => {
  try {
    const users = await userModel.getUsers();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};

// GET USER BY ID
const getUserById = async (req, res) => {
  try {
    const user = await userModel.getUserById(req.params.id);

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch user",
      error: error.message,
    });
  }
};

// UPDATE USER
const updateUser = async (req, res) => {
  try {
    const user = await userModel.updateUser(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update user",
      error: error.message,
    });
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  try {
    const user = await userModel.deleteUser(req.params.id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete user",
      error: error.message,
    });
  }
};

module.exports = {
  registerUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
