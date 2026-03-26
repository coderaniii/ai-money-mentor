import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.js";
import fireRoutes from "./routes/fire.js";
import chatRoutes from "./routes/chat.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/health", healthRoutes);
app.use("/fire", fireRoutes);
app.use("/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("API working 🚀");
});

app.listen(5000, () => console.log("Server running on 5000"));