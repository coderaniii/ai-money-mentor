import { useState } from "react";
import { motion } from "framer-motion";
import Form from "./pages/Form";
import Dashboard from "./pages/Dashboard";
import "./App.css";

export default function App() {
  const [data, setData] = useState(null);
  const [start, setStart] = useState(false);
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "app dark" : "app"}>
      
      {!start ? (
        <>
          {/* NAVBAR */}
          <div className="navbar">
            <h2>💸 AI Mentor</h2>
            <button className="toggle" onClick={() => setDark(!dark)}>
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          {/* HERO */}
          <div className="hero">
            <div className="blob blob1"></div>
            <div className="blob blob2"></div>

            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              AI Money Mentor 💸
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Smart AI-powered financial planning
            </motion.p>

            <motion.button
              className="cta"
              whileHover={{ scale: 1.1 }}
              onClick={() => setStart(true)}
            >
              🚀 Plan Your Expenses
            </motion.button>
          </div>

          {/* FEATURES */}
          <div className="features">
            {[
              "📊 Smart Insights",
              "🤖 AI Assistant",
              "🎤 Voice Input"
            ].map((item, i) => (
              <motion.div
                key={i}
                className="feature-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h3>{item}</h3>
                <p>Powerful feature for smarter finance</p>
              </motion.div>
            ))}
          </div>
        </>
      ) : !data ? (
        <Form setData={setData} />
      ) : (
        <Dashboard data={data} setData={setData} />
      )}
    </div>
  );
}