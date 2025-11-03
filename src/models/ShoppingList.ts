// src/models/ShoppingList.ts
import type { ListItem } from "./ListItem.js";

// Representa una lista completa del usuario
export interface ShoppingList {
  id: string;
  name: string;          // ej. "Súper semana 1" o "Costco"
  dateCreated: string;   // ISO string: new Date().toISOString()
  items: ListItem[];     // todos los productos de esta lista
}