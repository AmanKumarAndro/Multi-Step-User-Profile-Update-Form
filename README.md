# 🧑‍💼 User Profile Update Form – MERN Stack

A multi-step user profile update form built with **Vite + React** (frontend) and **Node.js + Express + MongoDB** (backend). It supports image upload, field validations, dynamic country/state/city data, conditional fields based on profession/gender, and strong password verification.

---

## 🔧 Features

- 🌐 Multi-step form with live validation
- 📸 Profile photo upload (base64 encoded)
- 🔐 Password update with strength check and verification
- 🏢 Conditional fields based on profession and gender
- 📍 Dynamic country, state, city dropdowns
- ✅ Real-time username check
- 📦 Clean, modern React frontend with Tailwind CSS
- ⚙️ MongoDB backend with Express API

---

## 🖼️ Preview

![form-preview](https://i.ibb.co/fdG44h7Y/Screenshot-2025-05-28-030411.png)

---

## 🧪 Tech Stack

- **Frontend:** React (Vite), Tailwind CSS, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB

---

### 1. Clone the Repository

```bash
git clone https://github.com/AmanKumarAndro/Multi-Step-User-Profile-Update-Form.git
cd Multi-Step-User-Profile-Update-Form
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create .env file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/userProfileForm
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd client
npm install
```

Create .env file:

```env
VITE_API_URL=http://localhost:5000
```

Run the frontend:

```bash
npm run dev
```

---

## 🗂️ Project Structure

```bash
/server
  ├── controllers/
  ├── models/
  ├── routes/
  ├── .env
  └── index.js

/client
  ├── components/
  ├── App.jsx
  ├── main.jsx
  └── .env
```

---

## 📡 API Overview

**POST /api/user/username**
Check if a username exists.

**POST /api/user/update-user**
Submit the final user profile data.

**POST /api/location/countries**
Get available countries.

**GET /api/location/states/:country**
Get states by selected country.

**GET /api/location/cities/:countryName/:stateName**
Get cities by selected state.

---

## 📌 Notes

- Profile photo is converted to Base64 string for easy transmission.
- Optional fields (customGender, companyName) are sent only if applicable.
- Username must be unique and 4–20 characters with no spaces.
- Password must be 8+ characters with at least one uppercase, lowercase, number, and special character.

---

## 🧑‍💻 Author

Made with ❤️ by Aman
---

## 📄 License

This project is licensed under the MIT License.

---

## 📬 Feedback

Feel free to submit issues or pull requests. If you liked this project, star it ⭐ and share it!
