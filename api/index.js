import express from "express";
import "./utils/db.js";
import { ENV_VAR } from "./config/envVar.js";
import cors from "cors";

import EmployeeRouter from "./routers/employee.route.js";
import GpsTrackerRouter from "./routers/gpsTracker.route.js";

const app = express();
const PORT = ENV_VAR.PORT || 5000;

const corsOptions = {
  origin: ENV_VAR.ORIGIN,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(express.json());
// app.use(cors(corsOptions))
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.use("/api/employee", EmployeeRouter);
app.use("/api/gpsTracker", GpsTrackerRouter);

app.listen(PORT, () =>
  console.log(`server is running at port number: ${PORT}`)
);
