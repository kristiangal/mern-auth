import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// * ASYNC HANDLER - nemusi sa pouzivat v async funkciach try/catch, vyriesi to error handling za nas + pomocou error handling middlewaru
const authUser = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: "User auth." });
});

/* 
@desc Create a new user
route POST /api/users
@access Public
*/
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(401);
    throw new Error("User already exists.");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  }
});

/* 
@desc Logout the user
route POST /api/users/logout
@access Private
*/
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout user" });
});

/* 
@desc Get user profile
route GET /api/users/profile
@access Private
*/
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile" });
});

/* 
@desc Update user profile
route PUT /api/users/profile
@access Private
*/
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update user profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
