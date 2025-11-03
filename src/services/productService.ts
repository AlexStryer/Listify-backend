// src/services/productService.ts
import db from "./db";

export type Category =
  | "frutas"
  | "verduras"
  | "carbohidratos"
  | "proteinas"
  | "lacteos"
  | "bebidas"
  | "limpieza"
  | "congelados"
  | "otros";

export interface Product {
  id?: number;
  name: string;
  category: Category;
}

export function createProduct(product: Product): number {
  const stmt = db.prepare(
    "INSERT INTO products (name, category) VALUES (?, ?)"
  );
  const info = stmt.run(product.name, product.category);
  return info.lastInsertRowid as number;
}

export function getAllProducts(): Product[] {
  const stmt = db.prepare("SELECT id, name, category FROM products");
  return stmt.all() as Product[];
}