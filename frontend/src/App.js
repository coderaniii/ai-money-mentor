import { useState } from "react";
import Form from "./pages/Form";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="app">
      <h1 className="title">AI Money Mentor 💸</h1>

      {!data ? (
        <Form setData={setData} />
      ) : (
        <Dashboard data={data} />
      )}
    </div>
  );
}

export default App;