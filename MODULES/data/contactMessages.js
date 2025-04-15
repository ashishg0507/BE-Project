const fs = require('fs');
const path = require('path');

const contactMessagesFile = path.join(__dirname, 'contactMessages.json');

// Initialize the file if it doesn't exist
if (!fs.existsSync(contactMessagesFile)) {
    fs.writeFileSync(contactMessagesFile, JSON.stringify([], null, 2));
}

// Function to save a new message
const saveMessage = (message) => {
    try {
        const messages = JSON.parse(fs.readFileSync(contactMessagesFile, 'utf8'));
        message.id = Date.now(); // Add a unique ID
        message.date = new Date().toISOString(); // Add timestamp
        messages.push(message);
        fs.writeFileSync(contactMessagesFile, JSON.stringify(messages, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving contact message:', error);
        return false;
    }
};

// Function to get all messages
const getMessages = () => {
    try {
        return JSON.parse(fs.readFileSync(contactMessagesFile, 'utf8'));
    } catch (error) {
        console.error('Error reading contact messages:', error);
        return [];
    }
};

module.exports = {
    saveMessage,
    getMessages
}; 