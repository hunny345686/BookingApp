import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

// User Register
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(200).send("user has been created");
  } catch (error) {
    next(error);
  }
};

// user login

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return next(createError(404, "User Not found"));
    }
    const isPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isPassword) {
      return next(createError(400, "Wrong Password and username"));
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET
    );
    user.password = undefined;
    user.isAdmin = undefined;
    res
      .cookie("acces_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(user);
  } catch (error) {
    next(error);
  }
};
