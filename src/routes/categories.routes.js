import { Router } from "express";
import { getAllCategories, saveCategory, updateCategory, deleteCategory } from "../controllers/categories.controller.js";

const categoriesRoutes = Router();

categoriesRoutes.get("/", getAllCategories);
categoriesRoutes.post("/", saveCategory);
categoriesRoutes.put("/:categoryId", updateCategory);
categoriesRoutes.delete("/:categoryId", deleteCategory)

export default categoriesRoutes;