const userModel = require("../models/userModels");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    const new_user = await userModel.register({
      name,
      email,
      password,
      phone,
      address
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: new_user
    });

  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
      error: error.message
    });
  }
};


const getUsers = async (req, res) => {
  try {
    const users = await userModel.getUsers();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message
    });
  }
};


const getUserById = async (req, res) => {
  try {
    const user = await userModel.getUserById(req.params.id);

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch user",
      error: error.message
    });
  }
};


module.exports = {
  registerUser,
  getUsers,
  getUserById
};