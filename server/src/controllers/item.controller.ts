import express from "express";
import { IItem } from "../models/interfaces/item.interface";

let items: IItem[] = [];

const getItems = async (req: express.Request, res: express.Response) => {
  res.status(200).json({ items });
};

const addItem = async (req: express.Request, res: express.Response) => {};

export default { getItems, addItem };
