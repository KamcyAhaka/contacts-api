# CSE 341 - Contacts API

A RESTful API built with Node.js, Express, and MongoDB for CSE 341 (Web Services). This service connects to a MongoDB database to retrieve contact records.

## Live Deployment

- **Production URL**: [https://contacts-api-3zsh.onrender.com/contacts](https://contacts-api-3zsh.onrender.com/contacts)

---

## Features & Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Root status message |
| `GET` | `/contacts` | Returns all contacts from the database |
| `GET` | `/contacts/:id` | Returns a single contact by MongoDB `_id` |

---

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express
- **Database**: MongoDB (Native MongoDB Driver)
- **Deployment**: Render

---

## Getting Started

### 1. Clone & Install

```bash
git clone <repository-url>
cd contacts-api
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory and add your MongoDB connection string and port:

```env
PORT=3000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
```

### 3. Run the Application

- **Development mode** (with hot-reloading):
  ```bash
  npm run dev
  ```
- **Production mode**:
  ```bash
  npm start
  ```

---

## Testing

Use the included [`routes.rest`](./routes.rest) file with the VS Code REST Client extension to test both local and production endpoints.
