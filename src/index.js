import express from "express";
import { config } from "dotenv";
import morgan from "morgan"

import categoriesRoutes from "./routes/categories.routes.js";
import productsRoutes from "./routes/products.routes.js";
import clientsRoutes from "./routes/clients.routes.js";
import employeesRoutes from "./routes/employees.routes.js";

config();

const port = process.env.PORT;

const app = express();

app.set('port', port);

app.use(morgan('dev')) // Logger
app.use(express.json());
app.use('/api/categories', categoriesRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/clients', clientsRoutes);
app.use('/api/employees', employeesRoutes);

app.listen(app.get('port'), ()=>{
    console.log(`App running at port ${app.get('port')}`)
})
