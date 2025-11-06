import { Request, Response } from "express";
import { addItemToList, getItemsForList } from "../services/listItemService";

export function getItems(req: Request, res: Response) {
  const listId = Number(req.params.id);
  const items = getItemsForList(listId);
  res.json(items);
}

export function addItem(req: Request, res: Response) {
  const listId = Number(req.params.id);
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res
      .status(400)
      .json({ error: "productId and quantity are required" });
  }

  const itemId = addItemToList(listId, productId, quantity);
  res.status(201).json({ id: itemId });
}
