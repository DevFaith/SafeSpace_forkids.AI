const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

const responses = {
    "What is 2+2?": "2+2 equals 4! Easy peasy, right?",
    "Why do cats purr?": "Cats purr to show they’re happy. It’s their way of saying ‘I love you!’",
    "How do birds fly?": "Birds fly using their wings and the air around them. It’s like magic, but it’s science!",
};

app.post("/ask", (req, res) => {
    const { question } = req.body;

    // Basic filter for inappropriate topics
    const inappropriateTopics = ["politics", "taxes", "war"];
    if (inappropriateTopics.some((topic) => question.toLowerCase().includes(topic))) {
        return res.json({ answer: "Hmm, that's not a question for kids. Let’s talk about something fun!" });
    }

    const answer = responses[question] || "That’s an interesting question! I’ll learn more and get back to you.";
    res.json({ answer });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
