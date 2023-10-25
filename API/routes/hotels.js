import express from "express";
const router = express.Router();
import {
  createHotel,
  updateHotel,
  deleteHotel,
  singleHotel,
  allHotel,
  countByCity,
  countByType,
  getHotelRooms,
} from "../controller/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

// Create
router.post("/", verifyAdmin, createHotel);
//Update
router.put("/:id", verifyAdmin, updateHotel);
// Delete
router.delete("/:id", verifyAdmin, deleteHotel);
// Get
router.get("/find/:id", singleHotel);
// GetAll
router.get("/", allHotel);
//Count By city
router.get("/countByCity", countByCity);
//countByType
router.get("/countByType", countByType);

router.get("/room/:id", getHotelRooms);

export default router;
