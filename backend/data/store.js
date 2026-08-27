import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "quests.json");

export function readQuests() {
  const raw = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(raw);
}

export function writeQuests(quests) {
  fs.writeFileSync(dataPath, JSON.stringify(quests, null, 2));
}
