import express from "express";
import cors from "cors";
import { questsRouter } from "./routes/quests.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/quests", questsRouter);

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
