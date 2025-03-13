# MotivatorApp
# motivator-app
NodeJs app
Project:Motivator App

Backend - Node.js (Express)
Create a simple API to handle quotes.
Use an in-memory database (JSON file) for simplicity.
Provide endpoints to:
Get a random quote.
Get all quotes.
Add a new quote.
Frontend - React
Fetch and display motivational quotes.
Allow users to submit new quotes
 
Structure :

motivator-app/
│── backend/               # Node.js (Express) Backend
│   ├── quotes.json        # JSON file to store quotes
│   ├── server.js          # Express server
│   ├── package.json       # Backend dependencies
│   ├── package-lock.json  # Backend package lock file
│
│── frontend/              # React Frontend
│   ├── public/            # Static files
│   ├── src/               # React components
│   │   ├── App.js         # Main component
│   │   ├── QuoteList.js   # Displays quotes
│   │   ├── AddQuote.js    # Form to add a quote
│   │   ├── api.js         # API calls
│   ├── package.json       # Frontend dependencies
│   ├── package-lock.json  # Frontend package lock file
│   ├── index.js           # React entry point
│
└── README.md              # Documentation
