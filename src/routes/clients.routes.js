import { Router } from "express";
import { getClients, saveClient, updateClient, deleteClient } from "../controllers/clients.controller.js";

const clientsRoutes = Router();

clientsRoutes.get("/", getClients);
clientsRoutes.post("/", saveClient);
clientsRoutes.put("/:clientId", updateClient);
clientsRoutes.delete("/:clientId", deleteClient)

export default clientsRoutes;