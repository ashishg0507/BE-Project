const express = require('express');
const path = require('path');
const fs = require('fs');
const { validateSignup, validateSignin } = require('../middleware/middleware');
const { notFoundHandler, globalErrorHandler } = require('../errorHandler/errorHandler');

const router = express.Router();
const userDataFile = path.join(__dirname, '../data/users.json');

// Route for signup page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/signup.html'));
});

// Route for signin page
router.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/signin.html'));
});

// Route for home page
router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/demo home 1.html'));
});

// Handle Signup Form Submission
router.post('/signup', validateSignup, (req, res) => {
    const { username, email, password } = req.body;
    
    fs.readFile(userDataFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading user data:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        const users = data ? JSON.parse(data) : [];

        if (users.find(user => user.email === email)) {
            return res.status(400).json({ message: 'User already exists with this email.' });
        }

        users.push({ username, email, password });

        fs.writeFile(userDataFile, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error('Error writing user data:', err);
                return res.status(500).json({ message: 'Internal Server Error' });
            }
            console.log('Signup Data:', { username, email, password });
            res.redirect('/signin');
        });
    });
});

// Handle Signin Form Submission
router.post('/signin', validateSignin, (req, res) => {
    const { email, password } = req.body;
    
    fs.readFile(userDataFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading user data:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        const users = data ? JSON.parse(data) : [];
        const user = users.find(user => user.email === email && user.password === password);
        
        if (user) {
            console.log('Signin Data:', { email, password });
            res.json({ success: true });
        } else {
            res.status(401).json({ success: false, message: 'Invalid email or password.' });
        }
    });
});

// Apply Error Handlers
router.use(notFoundHandler);
router.use(globalErrorHandler);

module.exports = router;
