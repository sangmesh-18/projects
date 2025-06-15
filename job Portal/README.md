# 🧑‍💼 Job Portal Application - MERN Stack

This repository contains a full-featured **Job Portal Application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). The platform enables **job seekers** to find and apply for jobs, while **employers** can post and manage job listings.

---

## ✨ Features

- 🔐 **User Authentication**  
  Secure sign-up and login functionality for both job seekers and employers using JWT.

- 📄 **Job Listings**  
  Employers can create, edit, and delete job postings.

- 🔍 **Job Search and Filters**  
  Advanced job search with filters by:
  - Job Title
  - Location
  - Salary Range
  - Job Type, etc.

- 📂 **Job Application Management**  
  Job seekers can apply for jobs and track their application status.

- 📱 **Responsive Design**  
  Fully responsive UI that works seamlessly on desktop and mobile devices.

- 🛠️ **Admin Dashboard**  
  Admin panel for managing all user data and job postings.

---

## 🛠️ Tech Stack

### 🔷 Frontend
- React.js
- Redux (for state management)
- Bootstrap / Material-UI (for UI components and styling)

### 🔶 Backend
- Node.js
- Express.js (RESTful APIs and server-side logic)

### 🗄️ Database
- MongoDB (to store users, jobs, applications, etc.)

### 🔐 Authentication
- JWT (JSON Web Tokens) for secure access and session management

---

1.  Setup Environment Variables
# Create a .env file in the backend/ directory with:
🛢️ MongoDB Atlas URI
MONGO_URI=your_mongodb_connection_string

🔐 JWT Secret
JWT_SECRET=your_jwt_secret_key

☁️ Cloudinary Config
CLOUDINARY_CLOUD_NAME=your_cloud_name 

CLOUDINARY_API_KEY=your_api_key 

CLOUDINARY_API_SECRET=your_api_secret

2. Run Backend
   
   cd backend
   
   npm install
   
   npm run dev

4. Run Frontend
   
   cd frontend
   
   npm install
   
   npm start





