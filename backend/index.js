const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ROOT ROUTE
app.get("/", (req, res) => {
  res.status(200).send("Backend is running 🚀");
});

// API ROUTE
app.get("/api", (req, res) => {
  res.status(200).send("API is working 🚀");
});

// POST API
app.post("/api/ai", (req, res) => {
  const { message } = req.body;

  res.status(200).json({
    reply: `You said: ${message}`,
  });
});

// IMPORTANT FIX
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});