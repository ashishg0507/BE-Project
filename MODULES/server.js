// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware to parse form data
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve static files (CSS, images, JS) from "public"
// app.use(express.static(path.join(__dirname, '../public')));

// // Route for signup page
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/signup.html'));
// });

// // Route for signin page
// app.get('/signin', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/signin.html'));
// });

// // Route for home page
// app.get('/home', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/demo home 1.html'));
// });

// // User data file
// const userDataFile = path.join(__dirname, './data/users.json');

// // Handle signup form submission
// app.post('/signup', (req, res) => {
//     const { username, email, password } = req.body;

//     // Read users from file
//     fs.readFile(userDataFile, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading user data:', err);
//             return res.status(500).send('Internal Server Error');
//         }

//         const users = data ? JSON.parse(data) : [];

//         // Check if user already exists
//         if (users.find(user => user.email === email)) {
//             return res.status(400).send('User already exists with this email.');
//         }

//         // Add new user
//         users.push({ username, email, password });

//         // Write updated users to file
//         fs.writeFile(userDataFile, JSON.stringify(users, null, 2), (err) => {
//             if (err) {
//                 console.error('Error writing user data:', err);
//                 return res.status(500).send('Internal Server Error');
//             }
//             console.log('Signup Data:', { username, email, password });
//             res.redirect('/signin');
//         });
//     });
// });

// // Handle signin form submission
// app.post('/signin', (req, res) => {
//     const { email, password } = req.body;

//     // Read user data from file ERROR HANDLING
//     fs.readFile(userDataFile, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading user data:', err);
//             return res.status(500).send('Internal Server Error');
//         }

//         const users = data ? JSON.parse(data) : [];

//         // Check if user exists and password matches ERROR HANDLING
//         const user = users.find(user => user.email === email && user.password === password);
//         if (user) {
//             console.log('Signin Data:', { email, password });
//             res.json({ success: true });
//         } else {
//             res.json({ success: false, message: 'Invalid email or password.' });
//         }
//     });
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
// });






// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const morgan = require('morgan'); // Logging Middleware
// const helmet = require('helmet'); // Security Middleware

// const app = express();
// const PORT = process.env.PORT || 3000;

// // =================== MIDDLEWARE ===================
// // Use Helmet for security
// app.use(helmet());

// // Logger Middleware
// const logger = (req, res, next) => {
//     console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//     next();
// };

// // Use Morgan for logging
// app.use(morgan('dev'));

// // Use custom logger middleware
// app.use(logger);

// // Middleware to parse form data
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve static files (CSS, images, JS) from "public"
// app.use(express.static(path.join(__dirname, '../public')));

// // Validation middleware for signup
// const validateSignup = (req, res, next) => {
//     const { username, email, password } = req.body;
//     if (!username || !email || !password) {
//         return res.status(400).json({ message: 'All fields are required.' });
//     }
//     next();
// };

// // Validation middleware for signin
// const validateSignin = (req, res, next) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required.' });
//     }
//     next();
// };

// // User data file path
// const userDataFile = path.join(__dirname, './data/users.json');

// // =================== ROUTES ===================
// // Route for signup page
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/signup.html'));
// });

// // Route for signin page
// app.get('/signin', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/signin.html'));
// });

// // Route for home page
// app.get('/home', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/demo home 1.html'));
// });

// // Handle signup form submission
// app.post('/signup', validateSignup, (req, res) => {
//     const { username, email, password } = req.body;
    
//     fs.readFile(userDataFile, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading user data:', err);
//             return res.status(500).json({ message: 'Internal Server Error' });
//         }

//         const users = data ? JSON.parse(data) : [];

//         if (users.find(user => user.email === email)) {
//             return res.status(400).json({ message: 'User already exists with this email.' });
//         }

//         users.push({ username, email, password });

//         fs.writeFile(userDataFile, JSON.stringify(users, null, 2), (err) => {
//             if (err) {
//                 console.error('Error writing user data:', err);
//                 return res.status(500).json({ message: 'Internal Server Error' });
//             }
//             console.log('Signup Data:', { username, email, password });
//             res.redirect('/signin');
//         });
//     });
// });

// // Handle signin form submission
// app.post('/signin', validateSignin, (req, res) => {
//     const { email, password } = req.body;
    
//     fs.readFile(userDataFile, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading user data:', err);
//             return res.status(500).json({ message: 'Internal Server Error' });
//         }

//         const users = data ? JSON.parse(data) : [];
//         const user = users.find(user => user.email === email && user.password === password);
        
//         if (user) {
//             console.log('Signin Data:', { email, password });
//             res.json({ success: true });
//         } else {
//             res.status(401).json({ success: false, message: 'Invalid email or password.' });
//         }
//     });
// });

// // =================== ERROR HANDLING ===================
// // 404 Error Handler
// app.use((req, res) => {
//     res.status(404).json({ message: 'Route not found' });
// });

// // Global Error Handler
// app.use((err, req, res, next) => {
//     console.error('Server Error:', err);
//     res.status(500).json({ message: 'Internal Server Error' });
// });

// // =================== START SERVER ===================
// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
// });




const express = require('express');
const { applyMiddleware } = require('./middleware/middleware');
const routes = require('./routes/route');
const { globalErrorHandler } = require('./errorHandler/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

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

