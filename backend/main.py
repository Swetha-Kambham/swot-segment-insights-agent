from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import SWOTRequest
from llm_service import generate_llm_response

app = FastAPI()

# Allow frontend access (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set frontend domain in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/swot")
async def get_swot(data: SWOTRequest):
    return await generate_llm_response(data.segment, data.category)
