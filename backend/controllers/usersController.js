import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import generateToken from '../utils/generateToken.js';

//desc      register a user
//route     POST/api/users/register
//access    public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error('All of fields is nececery');
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('hashed Password:', hashedPassword);
  const user = await User.create({ username, email, password: hashedPassword });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      email: user.email,
      username: user.username,
    });
  } else {
    res.status(400);
    throw new Error('User data Not valid');
  }
});
//desc      login a user
//route     POST/api/users/login
//access    public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error('All of fields is nececery');
  }
  const user = await User.findOne({ email });
  const compared = await bcrypt.compare(password, user.password);
  if (user && compared) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('email or password not valid');
  }
});
//desc      logout user
//route     POST/api/users/logout
//access    private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'User logged out' });
});

//desc      get  user profile
//route     Get/api/users/profile
//access    private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email,
  };
  res.status(201).json(user);
});

export { registerUser, loginUser, getUserProfile, logoutUser };
