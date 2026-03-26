import express from "express";
import { calculateScore } from "../utils/score.js";

const router = express.Router();

router.post("/", (req, res) => {
  const score = calculateScore(req.body);

  res.json({
    score,
    message: score > 70 ? "Good financial health 👍" : "Needs improvement ⚠️"
  });
});

export default router;