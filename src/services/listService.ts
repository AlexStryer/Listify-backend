// src/services/listService.ts
import db from "./db";

export interface ShoppingList {
  id?: number;
  name: string;
  dateCreated: string;
}

export function createList(name: string): number {
  const stmt = db.prepare(
    "INSERT INTO shopping_lists (name, date_created) VALUES (?, ?)"
  );
  const info = stmt.run(name, new Date().toISOString());
  return info.lastInsertRowid as number;
}

export function getAllLists(): ShoppingList[] {
  const stmt = db.prepare(
    "SELECT id, name, date_created as dateCreated FROM shopping_lists"
  );
  return stmt.all() as ShoppingList[];
}