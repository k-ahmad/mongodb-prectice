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

module.exports = {
  registerUser
};