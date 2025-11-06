// src/app.ts
import express from "express";
import cors from "cors";

import * as listController from "./controllers/listController";
import * as productController from "./controllers/productController";
import * as listItemController from "./controllers/listItemController";

const app = express();

app.use(cors());
app.use(express.json());

// ----- rutas de productos -----
app.get("/products", productController.getProducts);
app.post("/products", productController.createProductHandler); // 👈 nombre real

// ----- rutas de listas -----
app.get("/lists", listController.getLists);
app.post("/lists", listController.createListHandler); // 👈 nombre real

// ----- rutas de items de lista -----
app.get("/lists/:id/items", listItemController.getItems);
app.post("/lists/:id/items", listItemController.addItem);

export default app;