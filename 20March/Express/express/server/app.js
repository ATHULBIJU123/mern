const express = require('express');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const app = express();
const port = 3000;

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/ums', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//     console.log('Connected to MongoDB');
//     startServer();
// });

// Define a mongoose schema for the "users" collection
const userSchema = new mongoose.Schema({
    name: String,
    email:{
        type : String,
        required : true,
        unique : true,
    },
    password: String,
});

const UserModel = mongoose.model('user', userSchema);

function startServer() {
    // Middleware to parse JSON and form data
    // app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Serve static files
    app.use(express.static('../client'));

    // Route to handle form submission
    app.post('/submit', async (req, res) => {
        try {
            const formData = req.body;
            console.log('Received data:', formData);

            // Create a new document using the UserModel
            const user = new UserModel(formData);

            // Save the document to the "users" collection
            await user.save();

            res.status(200).send('Form submitted successfully!');
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    });

    // Route to get form data
    app.get('/getFormData', async (req, res) => {
        try {
            const formDataArray = await UserModel.find();

            res.status(200).json(formDataArray);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    });

    // Route to get a single user's data
    app.get('/getSingleUserData/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const formData = await UserModel.findById(id);

            res.status(200).json(formData);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    });

    // Route to edit user data
    app.put('/editData', async (req, res) => {
        try {
            const { id, name, email, password } = req.body;

            // Update user data by finding and updating the document
            await UserModel.findByIdAndUpdate(id, { name, email, password });

            res.status(200).send('Success');
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    });

    // Route to delete user data
    app.delete('/deleteData', async (req, res) => {
        try {
            const id = req.body.id;

            // Delete user data by finding and removing the document
            await UserModel.findByIdAndRemove(id);

            res.status(200).send('Success');
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    });

    // Start the Express server
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}
