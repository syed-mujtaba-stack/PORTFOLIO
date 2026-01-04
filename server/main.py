import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import httpx
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:8080",  # Vite default port
    "http://localhost:5173",  # Vite alternative port
    "http://127.0.0.1:8080",
    "http://127.0.0.1:5173",
    "https://portfolio-75eg.vercel.app",  # Deployed frontend
    "*",  # Allow all origins (for development)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def read_root():
    return {"message": "Welcome to the Portfolio Backend API"}

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    api_key = os.getenv("OPENROUTER_API_KEY")
    if not api_key:
        raise HTTPException(status_code=500, detail="OpenRouter API Key not configured")

    headers = {
        "Authorization": f"Bearer {api_key}",
        "HTTP-Referer": "http://localhost:8080", # Optional, for including your app on openrouter.ai rankings.
        "X-Title": "Mujtaba Portfolio", # Optional. Shows in rankings on openrouter.ai.
        "Content-Type": "application/json"
    }

    data = {
        "model": "google/gemini-2.0-flash-exp:free", # Free model to avoid 402 errors
        "messages": [
            {"role": "system", "content": "You are a helpful AI assistant for a portfolio website. Answer questions about the portfolio owner's skills and projects professionally."},
            {"role": "user", "content": request.message}
        ]
    }

    async with httpx.AsyncClient() as client:
        try:
            response = await client.post("https://openrouter.ai/api/v1/chat/completions", headers=headers, json=data)
            response.raise_for_status()
            result = response.json()
            # OpenRouter/OpenAI format: choices[0].message.content
            ai_message = result["choices"][0]["message"]["content"]
            return {"response": ai_message}
        except httpx.HTTPStatusError as e:
            print(f"HTTP Error: {e.response.text}")
            if e.response.status_code == 402:
                 raise HTTPException(status_code=402, detail="AI Service Quota Exceeded. Please check your OpenRouter credits.")
            raise HTTPException(status_code=e.response.status_code, detail=f"OpenRouter API Error: {e.response.text}")
        except Exception as e:
            print(f"Error: {str(e)}")
            raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
