const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB connection details
const uri = "mongodb://127.0.0.1:27017"; 
const dbName = "youtube";

// Middleware
app.use(express.json());

let db, users ,videos,comments,playlists,subscriptions;

// Connect to MongoDB and initialize collections
async function initializeDatabase() {
    try {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        db = client.db(dbName);
        users = db.collection("users");
        videos = db.collection("videos");
        comments = db.collection("comments");
        playlists = db.collection("playlists");
        subscriptions=db.collection("subscriptions")


        // Start server after successful DB connection
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit if database connection fails
    }
}

// Initialize Database
initializeDatabase();

// Routes

// GET: List all students
app.get('/users', async (req, res) => {
    try {
        const allStudents = await users.find().toArray();
        res.status(200).json(allStudents);
    } catch (err) {
        res.status(500).send("Error fetching students: " + err.message);
    }
});

app.get('/users/:userId', async (req, res) => {
    try {
        const userId = req.params.userId; 

        const allStudents = await users.find({userId}).toArray();
        res.status(200).json(allStudents);
    } catch (err) {
        res.status(500).send("Error fetching students: " + err.message);
    }
});
// POST: Add a new student
app.post('/users', async (req, res) => {
    try {
        const newStudent = req.body;
        const result = await users.insertOne(newStudent);
        res.status(201).send(`Student added with ID: ${result.insertedId}`);
    } catch (err) {
        res.status(500).send("Error adding student: " + err.message);
    }
});



// PATCH: Partially update a student
app.patch('/users/:userId', async (req, res) => {
    try {
        const userId =req.params.userId;
        const updates = req.body;
        const result = await users.updateOne({ userId }, { $set: updates });
        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error partially updating student: " + err.message);
    }
});

// DELETE: Remove a student
app.delete('/users/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const result = await users.deleteOne({ userId });
        res.status(200).send(`${result.deletedCount} document(s) deleted`);
    } catch (err) {
        res.status(500).send("Error deleting student: " + err.message);
    }
});



//  videos


app.get('/videos', async (req, res) => {
    try {
        const allVideos = await videos.find().toArray();
        if (!allVideos.length) {
            return res.status(404).send("No videos found.");
        }
        res.status(200).json(allVideos);
    } catch (err) {
        console.error('Error fetching videos:', err.message);
        res.status(500).send("Error fetching videos: " + err.message);
    }
});

app.get('/videos/:videoId', async (req, res) => {
    try {
        const videoId = req.params.videoId;
        const video = await videos.findOne({ videoId: videoId });
        if (!video) {
            return res.status(404).send(`Video with ID ${videoId} not found.`);
        }
        res.status(200).json(video);
    } catch (err) {
        console.error('Error fetching video:', err.message);
        res.status(500).send("Error fetching video: " + err.message);
    }
});

// POST: Add a new student
app.post('/videos', async (req, res) => {
    try {
        const newStudent = req.body;
        const result = await videos.insertOne(newStudent);
        res.status(201).send(`Student added with ID: ${result.insertedId}`);
    } catch (err) {
        res.status(500).send("Error adding student: " + err.message);
    }
});

// PUT: Update a student completely
app.put('/playlists/:playlistId/videos', async (req, res) => {
    try {
        const playlistId = req.params.playlistId;
        const updatedStudent = req.body;
        const result = await playlists.replaceOne({ playlistId }, updatedStudent);
        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error updating student: " + err.message);
    }
});



// DELETE: Remove a student
app.delete('/playlists/:playlistId', async (req, res) => {
    try {
        const playlistId = req.params.playlistId;
        const result = await playlists.deleteOne({ playlistId });
        res.status(200).send(`${result.deletedCount} document(s) deleted`);
    } catch (err) {
        res.status(500).send("Error deleting student: " + err.message);
    }
});


//comments


app.get('/videos/:videoId/comments', async (req, res) => {
    try {
        const allVideos = await comments.find().toArray();
       
        res.status(200).json(allVideos);
    } catch (err) {
        console.error('Error fetching videos:', err.message);
        res.status(500).send("Error fetching videos: " + err.message);
    }
});



// POST: Add a new student
app.post('/comments', async (req, res) => {
    try {
        const newStudent = req.body;
        const result = await comments.insertOne(newStudent);
        res.status(201).send(`Student added with ID: ${result.insertedId}`);
    } catch (err) {
        res.status(500).send("Error adding student: " + err.message);
    }
});



// PATCH: Partially update a student
app.patch('/comments/:commentId/likes', async (req, res) => {
    try {
        const commentId =req.params.commentId;
        const updates = req.body;
        const result = await comments.updateOne({ commentId }, { $set: updates });
        res.status(200).send(`${result.modifiedCount} document(s) updated`);
    } catch (err) {
        res.status(500).send("Error partially updating student: " + err.message);
    }
});

// DELETE: Remove a student
app.delete('/comments/:commentId', async (req, res) => {
    try {
        const commentId = req.params.commentId;
        const result = await comments.deleteOne({ commentId });
        res.status(200).send(`${result.deletedCount} document(s) deleted`);
    } catch (err) {
        res.status(500).send("Error deleting student: " + err.message);
    }
});


//playlists


app.get('/playlists/:userId', async (req, res) => {
    try {
        userId=req.params.userId
        const allVideos = await comments.find({userId}).toArray();
       
        res.status(200).json(allVideos);
    } catch (err) {
        console.error('Error fetching videos:', err.message);
        res.status(500).send("Error fetching videos: " + err.message);
    }
});



// POST: Add a new student
app.post('/playlists', async (req, res) => {
    try {
        const newStudent = req.body;
        const result = await comments.insertOne(newStudent);
        res.status(201).send(`Student added with ID: ${result.insertedId}`);
    } catch (err) {
        res.status(500).send("Error adding student: " + err.message);
    }
});


// DELETE: Remove a student
app.delete('/comments/:commentId', async (req, res) => {
    try {
        const commentId = req.params.commentId;
        const result = await comments.deleteOne({ commentId });
        res.status(200).send(`${result.deletedCount} document(s) deleted`);
    } catch (err) {
        res.status(500).send("Error deleting student: " + err.message);
    }
});



//subscriptions


app.get('/subscriptions/:subscriptionId', async (req, res) => {
    try {
        userId=req.params.subscriptionId
        const allVideos = await subscriptions.find({userId}).toArray();
       
        res.status(200).json(allVideos);
    } catch (err) {
        console.error('Error fetching videos:', err.message);
        res.status(500).send("Error fetching videos: " + err.message);
    }
});



// POST: Add a new student
app.post('/subscriptions', async (req, res) => {
    try {
        const newStudent = req.body;
        const result = await subscriptions.insertOne(newStudent);
        res.status(201).send(`Student added with ID: ${result.insertedId}`);
    } catch (err) {
        res.status(500).send("Error adding student: " + err.message);
    }
});
