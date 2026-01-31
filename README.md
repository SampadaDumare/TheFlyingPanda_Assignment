**The Flying Panda – Visa Alerts Tracker**

A mini internal tool to track visa slot alerts, built as part of The Flying Panda Full-Stack Developer Intern assignment.
Allows creating, viewing, updating, deleting, and filtering visa alerts for different countries and visa types.


🚀 **Live Demo**

- **Frontend (React App):** https://theflyingpanda-assignment.netlify.app/
- **Backend API (Node.js/Express):** https://theflyingpanda-assignment-backend.onrender.com

📦 Features

    Backend (Node.js + Express)
    REST API endpoints:
    GET /api/alerts → Get all alerts or filtered by country/status
    POST /api/alerts/addAlert → Add a new alert
    PUT /api/alerts/updateStatus/:id → Update status of an alert
    DELETE /api/alerts/deleteAlert/:id → Delete an alert
    Custom middleware (logger + centralized error handling)
    Query filtering (country and status)
    Proper HTTP status codes for success & error
    Data stored in MongoDB
    Environment variables used for API URL & port
    Frontend (React + Bootstrap)
    Form to create alerts
    Display all alerts in cards
    Update alert status directly from the card
    Delete alerts (admin role)
    Filter alerts by country and status
    Reset filters
    Context API (alertContext) to manage global state
    Default browser alerts for success messages

🛠️ Tech Stack

    Frontend: React.js, Bootstrap 5, Vite
    Backend: Node.js, Express.js
    Database: MongoDB (Atlas)
    State Management: React Context API
    Other: dotenv, express-validator, CORS

🚀 Setup Instructions

    Clone Repo

    git clone https://github.com/your-username/theflyingpandaassignment.git
    cd theflyingpandaassignment


Backend Setup

    cd Backend
    npm install


Create .env file with:

    PORT=4000
    MONGO_URI=<your-mongo-db-connection-string>


Start backend server:

    nodemon index.js


Frontend Setup

    cd ../
    npm install
    npm run dev


Make sure VITE_APP_API_URL=http://localhost:4000/api/alerts is set in .env

Open browser → http://localhost:5173

🎨 Design Decisions

    Used React Context for global state → all components get updated automatically on CRUD operations.

    Bootstrap cards for alerts → clean and responsive UI.

    Placed filter in navbar for better UX.

    API filtering implemented on the backend → efficient and scalable.

    Used default browser alerts for simplicity.