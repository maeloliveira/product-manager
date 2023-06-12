import express from "express";
import CarController from "../controllers/carController.js";

const router = express.Router();

router
  .get("/cars", CarController.listCar)
  .get("/cars/:id", CarController.listCarById)
  .post("/cars", CarController.registerCar)
  .put("/cars/:id", CarController.updateCar)
  .delete("/cars/:id", CarController.deleteCar);

export default router;
