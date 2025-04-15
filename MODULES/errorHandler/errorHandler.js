// 404 Error Handler
const notFoundHandler = (req, res) => {
    res.status(404).json({ message: 'Route not found' });
};

// Global Error Handler
const globalErrorHandler = (err, req, res, next) => {
    console.error('Server Error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = {
    notFoundHandler,
    globalErrorHandler
};
