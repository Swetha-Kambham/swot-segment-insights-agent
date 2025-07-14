import os
import httpx
from dotenv import load_dotenv
from prompt_templates import PROMPTS

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

async def generate_llm_response(segment: str, category: str):
    prompt_template = PROMPTS.get(category)
    if not prompt_template:
        return {"error": f"Unknown category: {category}"}

    final_prompt = prompt_template.format(segment=segment)

    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "llama3-70b-8192",
        "messages": [
            {"role": "system", "content": "You are a helpful strategist."},
            {"role": "user", "content": final_prompt}
        ],
        "temperature": 0.7
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(GROQ_API_URL, headers=headers, json=payload)
        if response.status_code != 200:
            return {"error": f"LLM request failed: {response.status_code}"}
        return response.json()

