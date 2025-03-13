const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Define Quote Schema
const quoteSchema = new mongoose.Schema({
    author: String,
    text: String
});

const Quote = mongoose.model("Quote", quoteSchema);

// Get all quotes
app.get('/quotes', async (req, res) => {
    try {
        const quotes = await Quote.find();
        res.json(quotes);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
});

// Get a random quote
app.get('/quotes/random', async (req, res) => {
    try {
        const quotes = await Quote.find();
        if (quotes.length === 0) return res.status(404).json({ message: "No quotes available" });
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        res.json(randomQuote);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
});

// Add a new quote
app.post('/quotes', async (req, res) => {
    try {
        const { author, text } = req.body;
        if (!author || !text) return res.status(400).json({ message: "Author and text are required" });

        const newQuote = new Quote({ author, text });
        await newQuote.save();

        res.status(201).json(newQuote);
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
