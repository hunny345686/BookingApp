import express from "express";
const router = express.Router();
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createRooms,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controller/room.js";

// Create
router.post("/:hotelId", verifyAdmin, createRooms);
//Update
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);
// Delete
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
// Get
router.get("/:id", getRoom);
// GetAll
router.get("/", getRooms);

export default router;
