import { Line } from "react-chartjs-2";

export default function Dashboard({ data, setData }) {
  const savings = data.salary - data.expenses;
  const score = (savings / data.salary) * 100;

  let advice = "";
  if (score < 20) advice = "⚠️ Reduce expenses immediately!";
  else if (score < 50) advice = "👍 Good, but can improve.";
  else advice = "🔥 Excellent! Start investing.";

  const chartData = {
    labels: ["Salary", "Expenses", "Savings"],
    datasets: [
      {
        label: "Finance",
        data: [data.salary, data.expenses, savings],
        borderColor: "#2ecc71",
        backgroundColor: "rgba(46,204,113,0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="container">
      <div className="card big">
        <h2>Dashboard 📊</h2>

        <div className="stats">
          <p>💰 Salary: ₹{data.salary}</p>
          <p>💸 Expenses: ₹{data.expenses}</p>
          <p>💵 Savings: ₹{savings}</p>
        </div>

        <h3>Score: {score.toFixed(0)}/100</h3>

        <div className="insight">{advice}</div>

        <Line data={chartData} />

        <button onClick={() => setData(null)}>Reset</button>
      </div>
    </div>
  );
}