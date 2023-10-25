import express from "express";
import { login, register } from "../controller/auth.js";

const router = express.Router();
// user Register
router.post("/register", register);
// user login
router.post("/login", login);

export default router;
