import React from "react";
import { Line } from "react-chartjs-2";
import AIChat from "./AIChat";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard({ data, setData }) {
  const salary = Number(data.salary);
  const expenses = Number(data.expenses);
  const savings = salary - expenses;

  const score = salary > 0 ? (savings / salary) * 100 : 0;

  const chartData = {
    labels: ["Salary", "Expenses", "Savings"],
    datasets: [
      {
        label: "Financial Overview",
        data: [salary, expenses, savings],
        borderColor: "#00c6ff",
        backgroundColor: "rgba(0,198,255,0.2)",
        tension: 0.4
      }
    ]
  };

  return (
    <div className="dashboard">
      <div className="card big">
        <h2>📊 Dashboard</h2>

        <p>Salary: ₹{salary}</p>
        <p>Expenses: ₹{expenses}</p>
        <p>Savings: ₹{savings}</p>

        <h3>Score: {score.toFixed(0)}/100</h3>

        <Line key={JSON.stringify(chartData)} data={chartData} />

        <button onClick={() => setData(null)}>Reset</button>
      </div>

      <AIChat data={data} />
    </div>
  );
}