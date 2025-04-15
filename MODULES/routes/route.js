const express = require('express');
const path = require('path');
const fs = require('fs');
const { validateSignup, validateSignin } = require('../middleware/middleware');
const { notFoundHandler, globalErrorHandler } = require('../errorHandler/errorHandler');
const games = require('../data/games');
const storeData = require('../data/storeData');
const { saveMessage } = require('../data/contactMessages');

const router = express.Router();
const userDataFile = path.join(__dirname, '../data/users.json');

// Route for signup page
router.get('/', (req, res) => {
    res.render('signup', { error: null });
});

// Route for signin page
router.get('/signin', (req, res) => {
    res.render('signin', { error: null });
});

// Route for home page
router.get('/home', (req, res) => {
    res.render('home');
});

// Route for store page
router.get('/store', (req, res) => {
    res.render('store', { storeData });
});

// Route for contact page
router.get('/contact', (req, res) => {
    res.render('contact', { message: null, messageType: null });
});

// Route for tournament page
router.get('/tournament', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/demo tournament.html'));
});

// Route for demo page
router.get('/demo', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/demo.html'));
});

// Route for review page
router.get('/review', (req, res) => {
    res.render('review', { games });
});

// Route for terms page
router.get('/terms', (req, res) => {
    res.render('terms');
});

// Route for checkout page
router.get('/checkout', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/checkout.html'));
});

// Route for store checkout page
router.get('/store-checkout', (req, res) => {
    res.render('store-checkout');
});

// Handle Signup Form Submission
router.post('/signup', validateSignup, (req, res) => {
    const { username, email, password } = req.body;
    
    fs.readFile(userDataFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading user data:', err);
            return res.render('signup', { error: 'Internal Server Error' });
        }

        const users = data ? JSON.parse(data) : [];

        if (users.find(user => user.email === email)) {
            return res.render('signup', { error: 'User already exists with this email.' });
        }

        users.push({ username, email, password });

        fs.writeFile(userDataFile, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error('Error writing user data:', err);
                return res.render('signup', { error: 'Internal Server Error' });
            }
            console.log('Signup Data:', { username, email, password });
            res.json({ success: true });
        });
    });
});

// Handle Signin Form Submission
router.post('/signin', validateSignin, (req, res) => {
    const { email, password } = req.body;
    
    fs.readFile(userDataFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading user data:', err);
            return res.render('signin', { error: 'Internal Server Error' });
        }

        const users = data ? JSON.parse(data) : [];
        const user = users.find(user => user.email === email && user.password === password);
        
        if (user) {
            console.log('Signin Data:', { email, password });
            res.json({ success: true });
        } else {
            res.render('signin', { error: 'Invalid email or password' });
        }
    });
});

// Handle contact form submission
router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Save the message to file
    const saved = saveMessage({ name, email, message });
    
    if (saved) {
        res.render('contact', { 
            message: 'Thank you for your message! We will get back to you soon.', 
            messageType: 'success' 
        });
    } else {
        res.render('contact', { 
            message: 'Sorry, there was an error sending your message. Please try again later.', 
            messageType: 'danger' 
        });
    }
});

// Apply Error Handlers
router.use(notFoundHandler);
router.use(globalErrorHandler);

module.exports = router;
