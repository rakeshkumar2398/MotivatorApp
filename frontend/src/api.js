import axios from "axios"; // ✅ Add this line

const API_URL = "http://18.208.194.95:5000/quotes"; // Updated with new EC2 IP

export const fetchQuotes = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const fetchRandomQuote = async () => {
    const response = await axios.get(`${API_URL}/random`);
    return response.data;
};

export const addQuote = async (quote) => {
    const response = await axios.post(API_URL, quote);
    return response.data;
};
