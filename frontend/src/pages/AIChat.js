import { useState } from "react";
import { getAIResponse } from "../api.js";

export default function AIChat({ data }) {
  const [messages, setMessages] = useState([
    { text: "Hi 👋 I'm your AI Money Mentor", sender: "ai" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input) return;

    const userMsg = { text: input, sender: "user" };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const aiText = await getAIResponse(input);

    setLoading(false);

    // typing effect
    let index = 0;
    let tempText = "";

    const interval = setInterval(() => {
      tempText += aiText[index];
      index++;

      setMessages((prev) => {
        const newMsgs = [...prev];
        newMsgs[newMsgs.length - 1] = {
          text: tempText,
          sender: "ai"
        };
        return newMsgs;
      });

      if (index === aiText.length) {
        clearInterval(interval);
      }
    }, 20);

    // add empty AI message first
    setMessages((prev) => [
      ...prev,
      { text: "", sender: "ai" }
    ]);
  };

  return (
    <div className="chatbox">
      <h3>🤖 AI Assistant</h3>

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={msg.sender === "ai" ? "ai" : "user"}>
            {msg.text}
          </div>
        ))}

        {/* 🔥 LOADING ANIMATION */}
        {loading && <div className="ai typing">AI is thinking...</div>}
      </div>

      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about your money..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}