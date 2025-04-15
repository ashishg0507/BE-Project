const express = require('express');
const { applyMiddleware } = require('./middleware/middleware');
const routes = require('./routes/route');
const { globalErrorHandler } = require('./errorHandler/errorHandler');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Apply Middleware
applyMiddleware(app);

// Use Routes
app.use('/', routes);

// Global Error Handler
app.use(globalErrorHandler);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

