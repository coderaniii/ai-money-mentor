import { useState } from "react";
import Form from "./pages/Form";
import Dashboard from "./pages/Dashboard";
import "./App.css";

export default function App() {
  const [data, setData] = useState(null);
  const [start, setStart] = useState(false);

  if (!start) {
    return (
      <div className="hero">
        <h1>AI Money Mentor 💸</h1>
        <p>Smart AI-powered financial planning</p>

        <button className="cta" onClick={() => setStart(true)}>
          🚀 Plan Your Expenses
        </button>
      </div>
    );
  }

  if (!data) return <Form setData={setData} />;
  return <Dashboard data={data} setData={setData} />;
}