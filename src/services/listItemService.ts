// src/services/listItemService.ts
import db from "./db";

export interface ListItemRow {
  id: number;
  quantity: number;
  bought: number;
  productName: string;
  productCategory: string;
}

export function addItemToList(
  listId: number,
  productId: number,
  quantity: number
): number {
  const stmt = db.prepare(
    "INSERT INTO list_items (list_id, product_id, quantity, bought) VALUES (?, ?, ?, 0)"
  );
  const info = stmt.run(listId, productId, quantity);
  return info.lastInsertRowid as number;
}

export function getItemsForList(listId: number): ListItemRow[] {
  const stmt = db.prepare(`
    SELECT 
      li.id,
      li.quantity,
      li.bought,
      p.name AS productName,
      p.category AS productCategory
    FROM list_items li
    JOIN products p ON p.id = li.product_id
    WHERE li.list_id = ?
  `);
  return stmt.all(listId) as ListItemRow[];
}