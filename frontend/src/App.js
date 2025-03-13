import React, { useState, useEffect } from "react";
import { fetchQuotes, fetchRandomQuote, addQuote } from "./api";

function App() {
    const [quotes, setQuotes] = useState([]);
    const [randomQuote, setRandomQuote] = useState(null);
    const [newQuote, setNewQuote] = useState({ author: "", text: "" });

    useEffect(() => {
        fetchQuotes().then(setQuotes);
    }, []);

    const handleRandomQuote = async () => {
        const quote = await fetchRandomQuote();
        setRandomQuote(quote);
    };

    const handleAddQuote = async () => {
        if (newQuote.author && newQuote.text) {
            const addedQuote = await addQuote(newQuote);
            setQuotes([...quotes, addedQuote]);
            setNewQuote({ author: "", text: "" });
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Motivator App</h1>
            
            <button onClick={handleRandomQuote}>Get Random Quote</button>
            {randomQuote && (
                <blockquote>
                    <p>"{randomQuote.text}"</p>
                    <cite>- {randomQuote.author}</cite>
                </blockquote>
            )}
            
            <h2>All Quotes</h2>
            <ul>
                {quotes.map((q) => (
                    <li key={q.id}>
                        "{q.text}" - <strong>{q.author}</strong>
                    </li>
                ))}
            </ul>

            <h2>Add a Quote</h2>
            <input
                type="text"
                placeholder="Author"
                value={newQuote.author}
                onChange={(e) => setNewQuote({ ...newQuote, author: e.target.value })}
            />
            <input
                type="text"
                placeholder="Quote"
                value={newQuote.text}
                onChange={(e) => setNewQuote({ ...newQuote, text: e.target.value })}
            />
            <button onClick={handleAddQuote}>Submit</button>
        </div>
    );
}

export default App;

