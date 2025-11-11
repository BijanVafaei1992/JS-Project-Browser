// This file is the entry point of the application. It initializes the application and sets up middleware and routes.

const express = require('express');
const { setRoutes } = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup (if any)
// app.use(express.json()); // Uncomment if you need to parse JSON bodies

// Set up routes
setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});