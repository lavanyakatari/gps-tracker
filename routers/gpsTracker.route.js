import express from "express";
import {
  createGpsTracker,
  getGpsTracker,
} from "../controllers/gpsTrackerController.js";

const router = express.Router();

router.post("/create", createGpsTracker);
router.get("/get", getGpsTracker);

export default router;
