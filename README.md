# 🚀 DevSpace

A full-stack developer community platform — showcase your skills, write blog posts, and connect with other developers.

---

## 📁 Project Structure

```
devspace/
├── backend/                  # Node.js + Express API
│   ├── config/
│   │   └── db.js             # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── blogController.js
│   │   ├── messageController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js           # JWT protect + optionalAuth
│   │   ├── errorHandler.js   # Global error handler
│   │   └── validate.js       # express-validator helper
│   ├── models/
│   │   ├── Blog.js
│   │   ├── Message.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── blogs.js
│   │   ├── messages.js
│   │   └── users.js
│   ├── utils/
│   │   └── jwt.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
└── frontend/                 # Next.js + Tailwind CSS
    ├── components/
    │   ├── blog/
    │   │   └── BlogManager.js
    │   ├── layout/
    │   │   ├── Footer.js
    │   │   ├── Layout.js
    │   │   └── Navbar.js
    │   ├── messaging/
    │   │   └── SendMessageForm.js
    │   └── profile/
    │       └── ProfileEditor.js
    ├── lib/
    │   ├── api.js            # Axios instance with JWT interceptor
    │   └── auth.js           # AuthContext + useAuth hook
    ├── pages/
    │   ├── blog/
    │   │   ├── [slug].js     # Single post
    │   │   ├── index.js      # Blog listing
    │   │   └── new.js        # Create post
    │   ├── dashboard/
    │   │   ├── edit-blog/
    │   │   │   └── [id].js
    │   │   └── index.js
    │   ├── explore/
    │   │   └── index.js
    │   ├── messages/
    │   │   └── index.js
    │   ├── u/
    │   │   └── [username].js # Public profile
    │   ├── _app.js
    │   ├── _document.js
    │   ├── 404.js
    │   ├── index.js          # Homepage
    │   ├── login.js
    │   └── register.js
    ├── styles/
    │   └── globals.css
    ├── .env.example
    ├── next.config.js
    ├── postcss.config.js
    └── tailwind.config.js
```

---

## ⚙️ Prerequisites

- **Node.js** v18+
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- **Google Cloud Console** account (for OAuth)

---

## 🛠️ Setup Instructions

### 1. Clone & Install

```bash
# Backend
cd devspace/backend
npm install

# Frontend
cd ../frontend
npm install
```

### 2. Configure Environment Variables

**Backend** (`backend/.env`):
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/devspace
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRES_IN=7d
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FRONTEND_URL=http://localhost:3000
```

**Frontend** (`frontend/.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
```

### 3. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project → **APIs & Services** → **Credentials**
3. Create **OAuth 2.0 Client ID** (Web application)
4. Add authorized origins: `http://localhost:3000`
5. Add redirect URIs: `http://localhost:3000`
6. Copy the **Client ID** and **Client Secret** to your `.env` files

### 4. Run the App

```bash
# Terminal 1 – Backend
cd backend
npm run dev       # Starts on http://localhost:5000

# Terminal 2 – Frontend
cd frontend
npm run dev       # Starts on http://localhost:3000
```

---

## 🔌 API Reference

### Auth
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | ❌ | Register with email/password |
| POST | `/api/auth/login` | ❌ | Login |
| POST | `/api/auth/google` | ❌ | Google OAuth login |
| GET  | `/api/auth/me` | ✅ | Get current user |

### Users
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET  | `/api/users` | ❌ | List all users (paginated) |
| GET  | `/api/users/search?q=` | ❌ | Search users |
| GET  | `/api/users/:username` | ❌ | Public profile |
| PUT  | `/api/users/profile` | ✅ | Update own profile |

### Blogs
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET  | `/api/blogs` | ❌ | List blogs (paginated, filter by tag) |
| GET  | `/api/blogs/my` | ✅ | My blogs |
| GET  | `/api/blogs/:slug` | ❌ | Single post |
| POST | `/api/blogs` | ✅ | Create post |
| PUT  | `/api/blogs/:id` | ✅ | Update post |
| DELETE | `/api/blogs/:id` | ✅ | Delete post |
| POST | `/api/blogs/:id/like` | ✅ | Toggle like |
| POST | `/api/blogs/:id/comments` | ✅ | Add comment |
| DELETE | `/api/blogs/:id/comments/:commentId` | ✅ | Delete comment |

### Messages
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/messages` | ✅ | Send message |
| GET  | `/api/messages/inbox` | ✅ | Get inbox |
| GET  | `/api/messages/sent` | ✅ | Get sent messages |
| GET  | `/api/messages/unread-count` | ✅ | Unread count |
| GET  | `/api/messages/:id` | ✅ | Read message |
| DELETE | `/api/messages/:id` | ✅ | Delete message |

---

## 🌟 Features

- **Auth** – Email/password + Google OAuth, JWT-based sessions
- **Profiles** – LinkedIn-style with bio, skills, experience, projects
- **Blog** – Markdown editor, likes, comments, tags, drafts
- **Messaging** – Inbox/sent system with unread count badge
- **Explore** – Search and browse developers by name/skill
- **Dashboard** – Manage profile, blog posts in one place

---

## 🚀 Production Deployment

### Backend (Railway / Render / Fly.io)
1. Set all env vars in the platform dashboard
2. Set `NODE_ENV=production`
3. Update `FRONTEND_URL` to your deployed frontend URL

### Frontend (Vercel)
1. Connect your GitHub repo
2. Set env vars: `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_GOOGLE_CLIENT_ID`
3. Deploy — Vercel handles the rest

### MongoDB
Use [MongoDB Atlas](https://www.mongodb.com/atlas) free tier — update `MONGO_URI` with the connection string.
