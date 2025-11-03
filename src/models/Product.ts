// src/models/Product.ts

// Categorías básicas del súper.
// Las puedes cambiar o extender después sin romper el resto del modelo.
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

// Producto genérico del catálogo.
// NO tiene cantidad porque la cantidad vive en la lista.
export interface Product {
  id: string;        // id único del producto en el catálogo
  name: string;      // nombre visible: "Pan integral"
  category: Category;
  // más adelante puedes agregar: brand, defaultUnit, notes, etc.
}