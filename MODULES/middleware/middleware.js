const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const compression = require('compression');
const cookieParser = require('cookie-parser'); 

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100, 
    message: { message: 'Too many requests from this IP, please try again later.' },
    headers: true
});

// CORS Middleware
const corsOptions = {
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
};


const applyMiddleware = (app) => {
  
    app.use(compression());

 
    app.use(cors(corsOptions));


    app.use(limiter);

    // Logging Middleware
    app.use(morgan('dev'));

    //  Logger Middleware
    app.use((req, res, next) => {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
        next();
    });

    // Body Parser Middleware
    app.use(bodyParser.urlencoded({ extended: true }));

    // Cookie Parser Middleware
    app.use(cookieParser());

    
    app.use(express.static(path.join(__dirname, '../public')));
};

// Validation Middleware 
const validateSignup = (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    next();
};


const validateSignin = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }
    next();
};

module.exports = {
    applyMiddleware,
    validateSignup,
    validateSignin
};


