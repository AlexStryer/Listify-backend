import { Request, Response } from "express";
import { getAllLists, createList } from "../services/listService";

export function getLists(req: Request, res: Response) {
  const lists = getAllLists();
  res.json(lists);
}

export function createListHandler(req: Request, res: Response) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "name is required" });
  }

  const id = createList(name);
  res.status(201).json({ id, name });
}