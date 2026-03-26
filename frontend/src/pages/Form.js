import { useState } from "react";

export default function Form({ setData }) {
  const [salary, setSalary] = useState("");
  const [expenses, setExpenses] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setData({
      salary: Number(salary),
      expenses: Number(expenses),
    });
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleSubmit}>
        <h2>Enter Financial Details</h2>

        <input
          placeholder="Monthly Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <input
          placeholder="Monthly Expenses"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
        />

        <button type="submit">Generate Plan</button>
      </form>
    </div>
  );
}