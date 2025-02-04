import mongoose from "mongoose";
const GpsTrackerSchema = new mongoose.Schema(
  {
    device_id: { type: String, require: true },
    latitude: { type: Number, require: true },
    longitude: { type: Number, require: true },
    speed: { type: Number, require: true },
  },
  { timestamps: true }
);

export const GpsTrackerModel = mongoose.model("GpsTracker", GpsTrackerSchema);
