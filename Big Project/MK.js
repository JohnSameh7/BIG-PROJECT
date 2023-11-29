const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle form submission for contact
app.post('/contact', (req, res) => {
    const { location, phone, email } = req.body;

    // Here you can process the form data, e.g., save it to a database

    // For demonstration, let's just log the received data
    console.log('Received Contact Form Submission:');
    console.log('Location:', location);
    console.log('Phone:', phone);
    console.log('Email:', email);

    res.status(200).send('Form submission successful');
});

// Start the server
const port = 3000; // You can use any port you prefer
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
