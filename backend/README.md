# 🧠 SWOT Segment Insights Agent – Backend (FastAPI)

This is the backend service for the **SWOT Segment Insights Agent**, an internal tool built as part of the Subconscious.ai case study. It exposes a FastAPI server that queries an LLM to generate SWOT-style insights for different customer segments using Groq's hosted LLaMA 3 model.

---

## 🚀 Features

- Query LLM for SWOT-style strategic insights
- 100% async FastAPI server with OpenAPI docs
- Prompt templates for:
  - OKRs
  - Strengths, Weaknesses, Opportunities, Threats
  - Buyer Personas & Positioning
- Dockerized and ready for deployment
- Connected to **Groq API** (no GPU or payment needed)

---

## 🛠️ Getting Started

### 1. Clone this repo

```bash
git clone https://github.com/your-username/swot-segment-insights-agent.git
cd swot-segment-insights-agent/backend
```

### 2. Install Python dependencies

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Create `.env` file

```env
GROQ_API_KEY=your_actual_api_key_here
```

> ⚠️ Never commit your `.env` to GitHub!

### 4. Run the server

```bash
uvicorn main:app --reload
```

Visit: [http://localhost:8000/docs](http://localhost:8000/docs) for Swagger UI

---

## 🐳 Docker Usage

### 1. Build the image

```bash
docker build -t swot-backend .
```

### 2. Run the container

```bash
docker run -p 8000:8000 --env-file .env swot-backend
```

---

## 🔗 LLM Integration (Groq)

- **Provider**: [Groq Cloud](https://console.groq.com)
- **Model Used**: `llama3-70b-8192`
- **Endpoint**: `https://api.groq.com/openai/v1/chat/completions`
- **Token Limit**: 8192 tokens

---

## 📁 File Structure

```
backend/
│
├── main.py               # FastAPI app entry point
├── llm_service.py        # LLM query logic (Groq integration)
├── prompt_templates.py   # Predefined prompt formats
├── requirements.txt
├── Dockerfile
├── .dockerignore
└── README.md
```

---

## ✨ Example API Usage

```
POST /api/swot

{
  "segment": "Gen Z Creators",
  "category": "Opportunities"
}
```

Response:
```json
{
  "content": "Targeting Gen Z Creators unlocks opportunities such as..."
}
```