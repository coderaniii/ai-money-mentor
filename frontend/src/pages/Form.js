import { useState } from "react";

export default function Form({ setData }) {
  const [salary, setSalary] = useState("");
  const [expenses, setExpenses] = useState("");

  const handleSubmit = () => {
    if (!salary || !expenses) return;
    setData({ salary: Number(salary), expenses: Number(expenses) });
  };

  return (
    <div className="card">
      <h2>Enter Your Financial Details</h2>

      <input
        type="number"
        placeholder="Monthly Salary"
        onChange={(e) => setSalary(e.target.value)}
      />

      <input
        type="number"
        placeholder="Monthly Expenses"
        onChange={(e) => setExpenses(e.target.value)}
      />

      <button onClick={handleSubmit}>Generate Plan</button>
    </div>
  );
}