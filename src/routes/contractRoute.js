import express  from "express";
import UserController from "../controllers/contractController.js";

const router = express.Router();

router
.post("/contracts", UserController.createContract)
.get("/contracts", UserController.listContractById)
.get("/contracts", UserController.listContract)

export default router;