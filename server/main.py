from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import requests

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# OpenRouter configuration
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions"

# Track conversation history
conversation_history = []

# Default system message
SYSTEM_MESSAGE = {
    "role": "system",
    "content": "You are a helpful AI assistant. Provide clear and concise responses."
}

def get_ai_response(messages):
    """
    Send messages to OpenRouter API and get AI response
    """
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",  # Your frontend URL
        "X-Title": "AI Chat Assistant"
    }
    
    payload = {
        "model": "openai/gpt-3.5-turbo",  # You can change this to any model supported by OpenRouter
        "messages": [SYSTEM_MESSAGE] + messages,
        "temperature": 0.7,
        "max_tokens": 1000
    }
    
    try:
        response = requests.post(
            OPENROUTER_API_URL,
            headers=headers,
            json=payload
        )
        response.raise_for_status()
        return response.json()["choices"][0]["message"]["content"]
    except Exception as e:
        print(f"Error calling OpenRouter API: {str(e)}")
        return "I'm sorry, I encountered an error. Please try again later."

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '').strip()
    
    if not user_message:
        return jsonify({"error": "Message cannot be empty"}), 400
    
    # Add user message to conversation history
    conversation_history.append({"role": "user", "content": user_message})
    
    # Get AI response
    ai_response = get_ai_response(conversation_history)
    
    # Add AI response to conversation history
    conversation_history.append({"role": "assistant", "content": ai_response})
    
    # Keep conversation history manageable
    if len(conversation_history) > 10:  # Keep last 5 exchanges (10 messages)
        conversation_history.pop(0)
        conversation_history.pop(0)
    
    return jsonify({"response": ai_response})

@app.route('/api/health')
def health_check():
    return jsonify({"status": "healthy", "service": "AI Chat Backend"})

def main():
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)

if __name__ == "__main__":
    main()
