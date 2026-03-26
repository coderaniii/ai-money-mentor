import { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function Form({ setData }) {
  const [salary, setSalary] = useState("");
  const [expenses, setExpenses] = useState("");

  const { transcript, listening } = useSpeechRecognition();

  const handleVoice = () => {
    SpeechRecognition.startListening();
    setTimeout(() => {
      const nums = transcript.match(/\d+/g);
      if (nums) {
        setSalary(nums[0]);
        setExpenses(nums[1] || "");
      }
      SpeechRecognition.stopListening();
    }, 4000);
  };

  const handleSubmit = () => {
    if (!salary || !expenses) return alert("Fill all fields");

    setData({
      salary: Number(salary),
      expenses: Number(expenses),
    });
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Enter Financial Details</h2>

        <input
          type="number"
          placeholder="Monthly Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <input
          type="number"
          placeholder="Monthly Expenses"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
        />

        <button className="primary" onClick={handleSubmit}>
          Generate Plan 🚀
        </button>

        <button className="secondary" onClick={handleVoice}>
          🎤 {listening ? "Listening..." : "Use Voice"}
        </button>
      </div>
    </div>
  );
}