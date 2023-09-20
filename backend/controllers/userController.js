import asyncHandler from "express-async-handler";

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
  res.status(200).json({ message: "register user" });
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
