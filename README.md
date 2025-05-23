# Image Uploader with Node.js, MongoDB & Cloudinary

A full-stack image upload application built with Node.js, Express, MongoDB, and Cloudinary for cloud storage. This project demonstrates modern backend development practices for handling file uploads with a clean, responsive user interface.

## 🌟 Features

- **Image Upload**: Seamless file upload functionality using Multer middleware
- **Cloud Storage**: Integration with Cloudinary for reliable image hosting (25GB free storage)
- **Database Integration**: MongoDB for storing image metadata and file information
- **Responsive UI**: Clean, user-friendly interface for image selection and upload
- **File Management**: Proper file naming conventions and storage organization
- **Error Handling**: Robust error handling for upload failures and server issues

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **File Upload**: Multer middleware
- **Cloud Storage**: Cloudinary API

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- Cloudinary account (free tier available)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/image-uploader.git
   cd image-uploader
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   PORT=3000
   ```

## ⚙️ Configuration

### MongoDB Setup
1. Create a MongoDB database (local or Atlas)
2. Copy your connection string to the `.env` file

### Cloudinary Setup
1. Sign up for a free Cloudinary account at [cloudinary.com](https://cloudinary.com)
2. Navigate to your dashboard and copy:
   - Cloud Name
   - API Key
   - API Secret
3. Add these credentials to your `.env` file

## 🏃‍♂️ Running the Application

1. **Start the server**
   ```bash
   npm start
   ```

2. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
image-uploader/
├── public/
│   ├── uploads/          # Local file storage (temporary)
│   └── css/             # Stylesheets
├── views/               # HTML templates
├── models/              # MongoDB schemas
├── routes/              # Express routes
├── middleware/          # Custom middleware
├── config/              # Configuration files
├── .env                 # Environment variables
├── server.js            # Main server file
└── package.json         # Dependencies
```

## 🔧 Key Components

### Image Schema
The MongoDB schema stores essential image information:
- Original filename
- Cloudinary public ID
- Secure URL
- Upload timestamp
- File metadata

### File Upload Process
1. User selects image through the web interface
2. Multer middleware handles the multipart form data
3. File is temporarily stored locally
4. Image is uploaded to Cloudinary
5. Cloudinary response (public ID, secure URL) is saved to MongoDB
6. Local temporary file is cleaned up

## 🎯 API Endpoints

- `GET /` - Render upload form
- `POST /upload` - Handle image upload
- `GET /images` - Display uploaded images

---
![image](https://github.com/user-attachments/assets/74846f18-c2b7-4e2e-8fa3-3c3e310c84b8)
![image](https://github.com/user-attachments/assets/3ead54c1-485c-40ca-a239-ad57a6aa1ffa)


