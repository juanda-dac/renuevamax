import { Router } from "express";
import { getProducts, saveProduct, updateProduct, deleteProduct } from "../controllers/products.controller.js";

const productsRoutes = Router();

productsRoutes.get("/", getProducts);
productsRoutes.post("/", saveProduct);
productsRoutes.put("/:productId", updateProduct);
productsRoutes.delete("/:productId", deleteProduct)

export default productsRoutes;
