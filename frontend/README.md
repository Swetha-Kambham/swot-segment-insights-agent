# SWOT Segment Insights Agent – Frontend

This is the frontend for the **SWOT Segment Insights Agent** project, built using **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, and **Firebase Authentication**. It allows users to log in, choose market segments and categories, and generate SWOT-style insights from a backend API powered by LLMs.

---

## 📁 Folder Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── app/                # App router pages (e.g., login.tsx, signup.tsx, page.tsx)
│   ├── components/         # UI components like Header
│   ├── context/            # Firebase AuthContext
│   ├── firebase.ts         # Firebase config
├── .env.local              # Firebase credentials (NOT checked into git)
├── tailwind.config.ts      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
├── next.config.js          # Next.js config
└── Dockerfile              # Dockerfile for frontend
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/swot-segment-insights-agent.git
cd swot-segment-insights-agent/frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Firebase

- Go to [Firebase Console](https://console.firebase.google.com)
- Create a project (e.g., `swot-insights-auth`)
- Enable **Authentication > Email/Password**
- Go to **Project Settings > General > Web App**
- Copy the config and paste it in `.env.local`

**`.env.local` example:**

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🔐 Authentication

- `/login`: Email/Password login
- `/signup`: Register new user
- AuthContext ensures that users must be authenticated to access the root dashboard
- Firebase handles login, logout, session tracking

---

## ⚙️ Docker Setup

If you want to run the app in Docker:

**Dockerfile**

```Dockerfile
# Use official Node image
FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

---

## 🧠 API Integration

The frontend sends POST requests to:

```
POST http://localhost:8000/api/swot
```

**Payload:**
```json
{
  "segment": "Gen Z Creators",
  "category": "Marketing OKRs"
}
```

**Expected Response (OpenAI-style):**
```json
{
  "choices": [
    {
      "message": {
        "content": "Here are your insights..."
      }
    }
  ]
}
```

---

## 📝 Scripts

| Command         | Description             |
|----------------|-------------------------|
| `npm run dev`  | Run dev server          |
| `npm run build`| Build production bundle |
| `npm run start`| Start production server |

---

## 📦 Build & Deploy

To build the app for production:

```bash
npm run build
npm run start
```

You can deploy the frontend to:
- [Vercel](https://vercel.com/)
- [Render](https://render.com/)
- Your own VPS or Docker

---

## ✅ Features

- ✅ Firebase Auth (Email/Password)
- ✅ React + App Router
- ✅ Protected Routes (Redirect to login if not authenticated)
- ✅ Segment + Category Selection UI
- ✅ Insight Fetch from Backend
- ✅ Tailwind Styling
- ✅ Dockerfile Included

---