# Firebase + React + Node.js (Express) Starter

This project demonstrates how to integrate **Firebase Firestore** with a **React frontend** and **Express backend**.

## 🚀 Features
- React Vite frontend
- Express Node.js backend
- Firebase Firestore for database
---

## 📂 Folder Structure
```
react-express-firebase-app/
│── backend/                # Express Backend
│   ├── config/             # Firebase Admin SDK JSON file
│   │   ├── firebaseServiceAccount.json
│   ├── routes/             # Express Routes
│   │   ├── userRoutes.js
│   ├── controllers/        # Business Logic
│   │   ├── userController.js
│   ├── index.js            # Main Server File
│   ├── package.json
│
│── frontend/               # React Frontend
│   ├── src/
│   │   ├── components/     # UI Components
│   │   ├── pages/          # Page Components
│   │   ├── firebase.js     # Firebase Config
│   │   ├── App.js
│   │   ├── index.js
│   ├── public/
│   ├── package.json
```

---

## ⚡ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone <git@github.com:iAmAreza/FirebaseReactExpress.git>
cd react-express-firebase-app
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```
- Add **Firebase Admin SDK JSON file** to `backend/config/`
- Start the backend:
```bash
node index.js
```

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm start
```

---

## 🔥 Firebase Configuration
### 1️⃣ Backend - Firebase Admin SDK
- Get Firebase credentials from Firebase Console
- Place the JSON file in `backend/config/firebaseServiceAccount.json`
- Modify `backend/config/firebase.js`:
```javascript
const admin = require("firebase-admin");
const fs = require("fs");
const serviceAccount = JSON.parse(fs.readFileSync("config/firebaseServiceAccount.json"));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();
module.exports = { admin, db };
```

### 2️⃣ Frontend - Firebase Client SDK
- Update `frontend/src/firebase.js`:
```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
```

---

## 📌 API Endpoints
### Backend - User Routes (`backend/routes/userRoutes.js`)
#### ➤ **Get Users**
```http
GET /users
```
#### ➤ **Add User**
```http
POST /users
```
Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

## 📌 React Frontend Example
Fetch and display users from Firestore (`frontend/src/App.js`):
```javascript
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

## ✅ Deployment
### 🔹 Frontend (Vercel/Netlify)
```bash
npm run build
```
Deploy `frontend/build/` folder.

### 🔹 Backend (Render/Railway)
1. Push backend to GitHub.
2. Deploy using **Render** or **Railway**.

---

## ⚠️ Important: `.gitignore`
Before pushing to GitHub, **add these files to `.gitignore`**:
```
backend/config/firebaseServiceAccount.json
backend/.env
backend/node_modules/
frontend/node_modules/
frontend/build/
```

---

## 🎯 Summary
✅ React frontend calls Express backend APIs
✅ Express backend interacts with Firebase Firestore
✅ Secure Firebase integration using Firebase Admin SDK


