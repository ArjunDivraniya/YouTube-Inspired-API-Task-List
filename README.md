# Video Management System API

Welcome to the **Video Management System API** project. This is a full-stack application built with **Node.js** and **MongoDB** that provides a comprehensive set of features for managing users, videos, comments, playlists, and subscriptions. This API can be used to perform CRUD operations on various resources like videos, users, playlists, and more.

## 🌟 Features

- **User Management**: Create, fetch, update, and delete user profiles.
- **Video Management**: Upload, update, and delete videos, along with managing video likes and views.
- **Comment Management**: Add, update, and delete comments on videos.
- **Playlist Management**: Create, update, and delete playlists, as well as add videos to playlists.
- **Subscription Management**: Subscribe and unsubscribe to channels, and view a user's subscriptions.
  

## 📑 Documentation

For detailed API documentation and example requests, please refer to the following:

- **Postman API Documentation**: [Click here for Postman Documentation](https://documenter.getpostman.com/view/39216595/2sAYQUpu22)
- **Google Drive Link for Task Overview and Code Explanation**: [Google Drive Link](https://drive.google.com/file/d/1WwJHNxpg0sD4ipq4WRgGEJkNCx5TVHUO/view?usp=sharing)


## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API Documentation**: [Postman Collection Link](https://www.postman.com/your-collection-link)

## 🚀 Task Overview

This project demonstrates the development of a **Video Management API** using REST principles. It covers the following areas:

- **User Management**: Handles the creation, update, and deletion of user profiles and associated data.
- **Video Management**: Facilitates video uploads, likes/dislikes, and deletion.
- **Comment Management**: Allows users to add comments to videos, as well as like and delete comments.
- **Playlist Management**: Enables users to create playlists and manage videos within them.
- **Subscription Management**: Allows users to subscribe to channels and manage their subscriptions.

### Major Routes

#### 👤 User Routes
<details>
  <summary><b>Click to Expand User Routes</b> <i class="fas fa-users"></i></summary>

  - **`GET /users`**: Fetch all users.
  - **`GET /users/:userId`**: Fetch a specific user by ID.
  - **`POST /users`**: Create a new user.
  - **`PATCH /users/:userId`**: Update user profile (e.g., update profile picture).
  - **`DELETE /users/:userId`**: Delete a user.

</details>

#### 🎥 Video Routes
<details>
  <summary><b>Click to Expand Video Routes</b> <i class="fas fa-video"></i></summary>

  - **`GET /videos`**: Fetch all videos.
  - **`GET /videos/:videoId`**: Fetch a specific video by ID.
  - **`POST /videos`**: Upload a new video.
  - **`PATCH /videos/:videoId/likes`**: Increment likes for a video.
  - **`DELETE /videos/:videoId`**: Delete a video.

</details>

#### 💬 Comment Routes
<details>
  <summary><b>Click to Expand Comment Routes</b> <i class="fas fa-comment"></i></summary>

  - **`GET /videos/:videoId/comments`**: Fetch all comments for a video.
  - **`POST /comments`**: Add a comment to a video.
  - **`PATCH /comments/:commentId/likes`**: Increment likes for a comment.
  - **`DELETE /comments/:commentId`**: Delete a comment.

</details>

#### 📂 Playlist Routes
<details>
  <summary><b>Click to Expand Playlist Routes</b> <i class="fas fa-play-circle"></i></summary>

  - **`GET /playlists/:userId`**: Fetch playlists for a user.
  - **`POST /playlists`**: Create a new playlist.
  - **`PUT /playlists/:playlistId/videos`**: Add videos to a playlist.
  - **`DELETE /playlists/:playlistId`**: Delete a playlist.

</details>

#### 🔔 Subscription Routes
<details>
  <summary><b>Click to Expand Subscription Routes</b> <i class="fas fa-bell"></i></summary>

  - **`GET /subscriptions/:userId`**: Fetch subscriptions for a user.
  - **`POST /subscriptions`**: Subscribe to a channel.

</details>

## 👨‍💻 Code Explanation

The project consists of several main files that define routes, models, and server configurations.

1. **app.js**: The entry point to the application, responsible for setting up the server and middleware.
2. **models/**: Contains MongoDB schema definitions for users, videos, comments, playlists, and subscriptions.
3. **routes/**: Contains route files for handling different API endpoints related to users, videos, comments, and playlists.

### Example of video upload:

```json
{
  "videoId": "v004",
  "title": "Node.js in Depth",
  "description": "Comprehensive guide to Node.js.",
  "uploader": "u001",
  "views": 0,
  "likes": 0,
  "dislikes": 0,
  "tags": ["Node.js", "Backend"],
  "uploadDate": "2023-10-01",
  "videoUrl": "http://codinggita.com/videos/nodejs.mp4"
}




