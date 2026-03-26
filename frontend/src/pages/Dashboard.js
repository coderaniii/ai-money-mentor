import React from "react";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

export default function Dashboard({ data }) {
  if (!data) return null;

  // ✅ define variables (THIS WAS MISSING)
  const savings = data.salary - data.expenses;
  const score = Math.min(100, (savings / data.salary) * 100);

  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  let total = 0;
  const growth = months.map(() => {
    total += savings;
    return total;
  });

  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Savings Growth",
        data: growth,
        borderColor: "green",
      },
    ],
  };

  return (
    <div className="card">
      <h2>Dashboard 📊</h2>

      <p><b>Salary:</b> ₹{data.salary}</p>
      <p><b>Expenses:</b> ₹{data.expenses}</p>
      <p><b>Savings:</b> ₹{savings}</p>

      <h3>Money Health Score: {score.toFixed(0)}/100</h3>

      <div style={{ marginTop: "20px" }}>
        <Line data={chartData} />
      </div>

      <button onClick={() => window.location.reload()}>
        Reset
      </button>
    </div>
  );
}