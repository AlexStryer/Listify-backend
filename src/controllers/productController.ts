import { Request, Response } from "express";
import { getAllProducts, createProduct } from "../services/productService";

export function getProducts(req: Request, res: Response) {
  const products = getAllProducts();
  res.json(products);
}

export function createProductHandler(req: Request, res: Response) {
  const { name, category } = req.body;

  if (!name || !category) {
    return res.status(400).json({ error: "name and category are required" });
  }

  const id = createProduct({ name, category });
  res.status(201).json({ id, name, category });
}