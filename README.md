# SWOT Segment Insights Agent

A full-stack AI-powered web app to generate strategic SWOT insights (Strengths, Weaknesses, Opportunities, Threats) for various customer segments.

Live Site: [https://swot-segment-insights-agent.vercel.app](https://swot-segment-insights-agent.vercel.app)  
Backend API: [https://swot-segment-insights-agent-1.onrender.com](https://swot-segment-insights-agent-1.onrender.com)

---

## 🧠 Features

- Select a customer segment and insight category
- Generates marketing insights using LLM (LLaMA 3 via Groq)
- Authentication via Firebase (login/signup/logout)
- Full Markdown rendering
- Dockerized for easy deployment

---

## 🧰 Tech Stack

### Frontend (Next.js + Tailwind CSS)
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Firebase Authentication
- React Markdown
- Vercel (Deployment)

### Backend (FastAPI)
- FastAPI
- Python 3.11+
- Hugging Face Transformers (CardiffNLP model)
- OpenRouter or Groq API (LLaMA 3)
- CORS, Pydantic, Uvicorn
- Docker + Docker Compose
- Render (Deployment)


---
