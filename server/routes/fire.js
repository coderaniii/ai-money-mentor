import express from "express";
import { firePlan } from "../utils/fireCalc.js";

const router = express.Router();

router.post("/", (req, res) => {
  const result = firePlan(req.body);
  res.json(result);
});

export default router;