import express  from "express";
import ProductController from "../controllers/productsController.js";

const router = express.Router();

router
.get("/products", ProductController.listProduct)
.get("/products/:id", ProductController.listProductbyId)
.post("/products", ProductController.registerProduct)
.put("/products/:id", ProductController.updateProduct)
.delete("/products/:id", ProductController.deleteProduct);

export default router;