import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { message } = req.body;

  // Temporary response
  res.json({
    reply: "You should start SIP for long-term investment 📈"
  });
});

export default router;