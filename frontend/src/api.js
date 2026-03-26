export async function getAIResponse(prompt) {
  try {
    const res = await fetch("http://localhost:5000/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    return data.reply;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "⚠️ Unable to get AI response. Please try again.";
  }
}