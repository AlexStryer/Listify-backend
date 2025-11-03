import express from "express";
import cors from "cors";
import { getProducts, createProductHandler } from "./controllers/productController";
import { getLists, createListHandler } from "./controllers/listController";
import { getItems, addItem } from "./controllers/listItemController";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => res.send("✅ Listify API is alive"));

app.get("/products", getProducts);
app.post("/products", createProductHandler);

app.get("/lists", getLists);
app.post("/lists", createListHandler);

app.get("/lists/:id/items", getItems);
app.post("/lists/:id/items", addItem);

const PORT = 3000;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => {
  console.log(`🚀 API corriendo en http://${HOST}:${PORT}`);
});

process.stdin.resume();