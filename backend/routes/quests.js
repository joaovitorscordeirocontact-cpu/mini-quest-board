import { Router } from "express";
import { readQuests, writeQuests } from "../data/store.js";

export const questsRouter = Router();

questsRouter.get("/", (req, res) => {
  res.json(readQuests());
});

questsRouter.get("/:id", (req, res) => {
  const quests = readQuests();
  const quest = quests.find((q) => q.id === Number(req.params.id));

  if (!quest) {
    return res.status(404).json({ error: "Quest not found" });
  }

  res.json(quest);
});

questsRouter.post("/", (req, res) => {
  const { title, category } = req.body;

  if (!title || !category) {
    return res.status(400).json({ error: "title and category are required" });
  }

  const quests = readQuests();
  const newQuest = {
    id: quests.length ? Math.max(...quests.map((q) => q.id)) + 1 : 1,
    title,
    category,
    completed: false,
  };

  quests.push(newQuest);
  writeQuests(quests);
  res.status(201).json(newQuest);
});

questsRouter.patch("/:id", (req, res) => {
  const quests = readQuests();
  const index = quests.findIndex((q) => q.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "Quest not found" });
  }

  quests[index] = { ...quests[index], ...req.body };
  writeQuests(quests);
  res.json(quests[index]);
});

questsRouter.delete("/:id", (req, res) => {
  const quests = readQuests();
  const index = quests.findIndex((q) => q.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "Quest not found" });
  }

  const [deleted] = quests.splice(index, 1);
  writeQuests(quests);
  res.json(deleted);
});
