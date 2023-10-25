import express from "express";
import dotEnv from "dotenv";
import mongoose from "mongoose";
const app = express();
import authRouter from "./routes/auth.js";
import roomsRouter from "./routes/rooms.js";
import hotelsRouter from "./routes/hotels.js";
import usersRouter from "./routes/users.js";
import cookieParser from "cookie-parser";

dotEnv.config();

// DB Connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("DB Connection");
  } catch (error) {
    console.log(error);
  }
};
// Middelware===============
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/users", usersRouter);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMsg = err.msg || "Something Wen Wrong";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    msg: errMsg,
    stack: err.stack,
  });
});

// Port Listning......====================
app.listen(process.env.PORT, () => {
  connect();
  console.log("listing....");
});
