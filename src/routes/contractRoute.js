import express  from "express";
import UserController from "../controllers/contractController.js";

const router = express.Router();

router
.post("/contract", UserController.createContract)

export default router;