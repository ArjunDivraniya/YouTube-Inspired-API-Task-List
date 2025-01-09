﻿# YouTube-Inspired-API-Task-List

# Project: Full-Stack API for Video Management System

This project is a **full-stack REST API** built with **Node.js** and **MongoDB**, enabling users to manage videos, comments, playlists, and subscriptions. The API allows for CRUD operations (Create, Read, Update, Delete) for users, videos, comments, and other entities in the system.

## 🛠️ Tech Stack
- **Backend**: Node.js (Express.js)
- **Database**: MongoDB
- **API Documentation**: Postman

## 🧑‍💻 Task Overview
This project involves the following tasks:
- **User Management**: Managing user profiles and CRUD operations for users.
- **Video Management**: Uploading, updating, and deleting videos.
- **Comment Management**: Adding, updating, and deleting comments for videos.
- **Playlist Management**: Managing playlists for users, adding videos to playlists.
- **Subscription Management**: Allowing users to subscribe to channels and view their subscriptions.

## 🚀 Features
- **User Management**: Fetch, create, update, and delete user profiles.
- **Video Management**: Fetch video details, upload new videos, and update video likes/dislikes.
- **Comment Management**: Add, update, and delete comments for videos.
- **Playlist Management**: Create and manage playlists, add/remove videos from playlists.
- **Subscription Management**: Subscribe/unsubscribe to channels and fetch subscriptions.

## 🧩 API Endpoints

### User Management

- `GET /users`: Fetch all users.
- `GET /users/:userId`: Fetch user details by ID.
- `POST /users`: Create a new user.
- `PATCH /users/:userId`: Update user profile picture.
- `DELETE /users/:userId`: Delete a user.

### Video Management

- `GET /videos`: Fetch all videos.
- `GET /videos/:videoId`: Fetch a specific video by ID.
- `POST /videos`: Upload a new video.
- `PATCH /videos/:videoId/likes`: Increment likes for a video.
- `DELETE /videos/:videoId`: Delete a video.

### Comment Management

- `GET /videos/:videoId/comments`: Fetch comments for a video.
- `POST /comments`: Add a comment to a video.
- `PATCH /comments/:commentId/likes`: Increment likes for a comment.
- `DELETE /comments/:commentId`: Delete a comment.

### Playlist Management

- `GET /playlists/:userId`: Fetch all playlists for a user.
- `POST /playlists`: Create a new playlist.
- `PUT /playlists/:playlistId/videos`: Add a video to a playlist.
- `DELETE /playlists/:playlistId`: Delete a playlist.

### Subscription Management

- `GET /subscriptions/:userId`: Fetch subscriptions for a user.
- `POST /subscriptions`: Subscribe to a channel.

## 📜 Code Explanation

The code consists of multiple routes for handling various functionalities like users, videos, playlists, and comments. The key files involved are:

- `app.js`: Main file to initialize the server and set up API routes.
- `routes/videos.js`: Routes for handling video CRUD operations.
- `routes/users.js`: Routes for managing users.
- `models/video.js`: Video schema and model for MongoDB.
- `models/user.js`: User schema and model for MongoDB.

## 📝 Database Schema
The MongoDB collections include:
- **users**: Stores user details like name, email, channel name, etc.
- **videos**: Stores video details such as title, description, uploader, and video URL.
- **comments**: Stores comments on videos, including user ID, comment text, and likes.
- **playlists**: Stores playlists created by users, with a list of video IDs.
- **subscriptions**: Stores subscription details of users for various channels.

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/video-management-api.git
