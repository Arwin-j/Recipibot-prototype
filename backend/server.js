import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate", async (req, res) => {
    try {
        const { prompt } = req.body;
        const groqResponse = await axios.post("https://api.groq.com/openai/v1/chat/completions", 
        {
            model: "llama-3.1-8b-instant",
            messages: [{ role: "user", content: prompt }],
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
            },
        }
    );

    res.json({ result: groqResponse.data.choices[0].message.content });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while processing your request." });
    }
});

app.listen(5000, () => console.log("Server is running on port 5000"));