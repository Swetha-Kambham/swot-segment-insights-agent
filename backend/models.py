from pydantic import BaseModel

class SWOTRequest(BaseModel):
    segment: str
    category: str
