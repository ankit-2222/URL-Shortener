# 🌐 URL Shortener 🔗  
Turn long, boring links into sleek, shareable short URLs – with user accounts, live analytics, secure auth, and a responsive UI.

![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen)
![Express.js](https://img.shields.io/badge/Express.js-Fast%20%26%20Minimal-E7BDC8)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-success)
![EJS](https://img.shields.io/badge/EJS-Templating-orange)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-ff69b4)

---

## 🚀 Overview

A complete **URL shortening web app** built with **Node.js**, **Express**, **MongoDB**, and **EJS**.  
It allows users to:

- ✂️ Shorten URLs
- 🔐 Register/Login securely
- 📈 Track click analytics
- 🧾 View their own dashboard of links
- 🖥️ Experience server-side rendering via EJS

---

## ✨ Features

- ✅ User Authentication (JWT)
- ✅ Shorten any long URL
- ✅ Unique links per user
- ✅ Real-time click analytics
- ✅ Clean, responsive EJS templates
- ✅ MongoDB with Mongoose
- ✅ Auto-reload with **nodemon**

---

## 🧰 Tech Stack

| Tech        | Role                              |
|-------------|-----------------------------------|
| **Node.js** | Backend runtime                   |
| **Express** | Web framework                     |
| **MongoDB** | Database (NoSQL, with Mongoose)   |
| **EJS**     | Server-side rendering templates   |
| **JWT**     | Token-based authentication        |
| **Bcrypt**  | Password hashing                  |
| **Nodemon** | Live server reload (development)  |

---

## 🗂️ Folder Structure

```

URL-Shortner/
├── controllers/       # Business logic (user, URL)
├── middlewares/       # Auth middleware
├── models/            # Mongoose schemas
├── views/             # EJS frontend templates
├── public/            # Static assets (CSS, JS, images)
├── connect.js         # MongoDB connection
├── index.js           # Entry point
├── package.json       # Scripts and dependencies
└── .env               # Config variables (create this)

````

---

## ⚙️ Getting Started

1. **Clone the project:**

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
````

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Create a `.env` file in the root directory:

```env
PORT=8001
MONGO_URL=your_mongodb_connection_string_here
JWT_SECRET=your_secret_key_here
```

> 💡 Replace `your_mongodb_connection_string_here` with your personal **MongoDB Atlas or local URL**
> 💡 Replace `your_secret_key_here` with your personal **A safe secret key**

4. **Start the development server:**

```bash
npm start
```

This runs:

```bash
nodemon index.js
```

Visit the app at: [http://localhost:8001](http://localhost:8001)

---

## 📡 API Routes

| Method | Route        | Description                   | Auth |
| ------ | ------------ | ----------------------------- | ---- |
| POST   | `/register`  | Register a new user           | ❌    |
| POST   | `/login`     | Authenticate and get token    | ❌    |
| GET    | `/`          | View your short links & stats | ✅    |
| POST   | `/shorten`   | Create a new short URL        | ✅    |
| GET    | `/:shortId`  | Redirect to original URL      | ❌    |

---

## 📊 URL Analytics Example

```json
{
  "originalUrl": "https://example.com",
  "shortUrl": "http://localhost:8001/abc123",
  "clicks": 42
}
```

---

## 💻 UI Screens (Rendered with EJS)

* 📝 Registration & login
* 🏠 Home page
* 📂 Dashboard: your links
* 📈 URL click stats

---

## 📦 Scripts

| Command     | Description                   |
| ----------- | ----------------------------- |
| `npm start` | Start server with **nodemon** |

---

## 🔮 Upcoming Features

* 📆 Click history over time
* 🧩 Custom short links
* 🌍 Hosted version on Render/Vercel
* 📧 Email link reports (optional)

---

## 🤝 Contributing

💡 Found a bug? Have a feature request?
**Fork → Star → Code → PR.**
Let’s build smarter links together!

---

> Built with ❤️ using Node.js, MongoDB, Express, and EJS.

```

---

Would you like me to:
- ✅ Save this as `README.md` in your project folder?
- 📁 Also generate a sample `.env` template (`.env.example`)?

Let me know!
```
