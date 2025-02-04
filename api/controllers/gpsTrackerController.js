import { GpsTrackerModel } from "../model/GpsTracker.model.js";
export const createGpsTracker = async (req, res) => {
  try {
    const { device_id, latitude, longitude, speed } = req.body;
    const gpsTracker = new GpsTrackerModel({
      device_id,
      latitude,
      longitude,
      speed,
    });
    await gpsTracker.save();
    res
      .status(201)
      .json({ message: "Gps Tracker created successfully", gpsTracker });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const getGpsTracker = async (req, res) => {
  try {
    const gpsTracker = await GpsTrackerModel.find();
    res
      .status(200)
      .json({ message: "Gps Tracker fetched successfully", gpsTracker });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
