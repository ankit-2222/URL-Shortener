# 🌐 URL Shortener 🔗  
Turn **long, messy links** into sleek, shareable short URLs – with user accounts, secure auth, and full control.

![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen)
![Express.js](https://img.shields.io/badge/Express.js-Fast%20%26%20Minimal-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-success)
![EJS](https://img.shields.io/badge/EJS-Templating-orange)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-ff69b4)


---

## 🚀 What is this?

This is a full-stack **URL shortening service** built using **Node.js**, **Express**, and **MongoDB**. Whether you're sharing links on social media or just want cleaner URLs, this app lets you:

- 🔐 Register and log in as a user  
- ✂️ Instantly shorten any long URL  
- 🚀 Redirect from short links to the original destination  
- 🛡️ Stay secure with JWT-based authentication

---

## 🧰 Tech Stack

| Tech        | Description                        |
|-------------|------------------------------------|
| **Node.js** | Runtime for JavaScript backend     |
| **Express** | Fast, minimalist web framework     |
| **MongoDB** | Flexible NoSQL database (Mongoose) |
| **JWT**     | Secure user authentication         |
| **Bcrypt**  | Password hashing                   |
| **Dotenv**  | Environment config management      |

---

## 🗂️ Folder Structure

```

URL-Shortner/
├── controllers/       # App logic (user + URL)
├── middlewares/       # Authentication middleware
├── models/            # Database schemas
├── connect.js         # MongoDB connection
├── index.js           # App entry point
├── .hintrc            # Linter config
├── package.json       # Project metadata
└── .env               # (You create this for secrets)

````

---

## ⚙️ How to Run Locally

1. **Clone the repo:**

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
````

2. **Install dependencies:**

```bash
npm install
```

3. **Create a `.env` file** in the root folder with:

```env
PORT=3000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_super_secret_key
```

4. **Start the server:**

```bash
node index.js
```

---

## 📡 API Overview

| Method | Endpoint    | Description              | Auth |
| ------ | ----------- | ------------------------ | ---- |
| POST   | `/register` | Register a new user      | ❌    |
| POST   | `/login`    | Login with credentials   | ❌    |
| POST   | `/shorten`  | Shorten a long URL       | ✅    |
| GET    | `/:shortId` | Redirect to original URL | ❌    |

---

## 🧪 Sample Usage

**Shorten a URL** (after login):

```http
POST /shorten
Authorization: Bearer <your_token>
Content-Type: application/json

{
  "originalUrl": "https://example.com/some/very/long/link"
}
```

**Response:**

```json
{
  "shortUrl": "http://localhost:3000/xyz123"
}
```

---

## ✨ What's Next?

* 🧩 Custom aliases for short links

---

## 🤝 Contributing

Love this project? Found a bug? Got an idea?
**Fork it → Star it → Code it → Pull request it.**
Let’s build this together!

---

> Built with ❤️ using Node.js, Express.js, Ejs, MongoDB, and a passion for clean links.

