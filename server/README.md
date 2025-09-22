# AI Chat Backend

This is the backend server for the AI Chat application, built with Python Flask and integrated with the OpenRouter API to provide AI-powered chat functionality.

## Features

- 💬 RESTful API for chat functionality
- 🔐 Secure API key management
- 🔄 Conversation history management
- 🌐 CORS support for frontend integration
- ⚡ Lightweight and fast

## Prerequisites

- Python 3.12+
- pip (Python package manager)
- OpenRouter API key

## Installation

1. **Create and activate a virtual environment** (recommended):
   ```bash
   python -m venv .venv
   # On Windows:
   .\.venv\Scripts\activate
   # On macOS/Linux:
   # source .venv/bin/activate
   ```

2. **Install dependencies**:
   ```bash
   pip install -e .
   ```

3. **Set up environment variables**:
   Create a `.env` file in the server directory with:
   ```
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   FLASK_APP=main.py
   FLASK_ENV=development
   ```

## Running the Server

```bash
# Development mode (auto-reloads on changes)
flask run --port 5000

# Production mode (using waitress as an example)
# pip install waitress
# waitress-serve --port=5000 main:app
```

## API Endpoints

### `POST /api/chat`
Send a message to the AI and get a response.

**Request Body:**
```json
{
  "message": "Hello, how are you?"
}
```

**Response:**
```json
{
  "response": "I'm doing well, thank you! How can I assist you today?"
}
```

### `GET /api/health`
Check if the server is running.

**Response:**
```json
{
  "status": "healthy",
  "service": "AI Chat Backend"
}
```

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `OPENROUTER_API_KEY` | Your OpenRouter API key | Yes | - |
| `FLASK_APP` | Main application file | No | `main.py` |
| `FLASK_ENV` | Environment (development/production) | No | `development` |
| `PORT` | Port to run the server on | No | `5000` |

## Project Structure

```
server/
├── .env                     # Environment variables
├── main.py                 # Main application file
├── pyproject.toml          # Project metadata and dependencies
└── README.md               # This file
```

## Dependencies

- `flask`: Web framework
- `flask-cors`: CORS support
- `python-dotenv`: Environment variable management
- `requests`: HTTP client for API calls

## Development

### Running Tests
```bash
# Install test dependencies
pip install pytest

# Run tests
pytest
```

### Linting
```bash
# Install flake8
pip install flake8

# Run linter
flake8 .
```

## Deployment

For production deployment, consider using:
- **WSGI Server**: Gunicorn or uWSGI
- **Process Manager**: systemd, Supervisor, or PM2
- **Reverse Proxy**: Nginx or Apache

Example with Gunicorn:
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 main:app
```

## Security

- **API Keys**: Never commit your `.env` file to version control
- **CORS**: Configured to only allow requests from trusted origins
- **Input Validation**: Implement input validation for all API endpoints

## Troubleshooting

- **Port already in use**: Try changing the port with `--port` flag
- **Missing dependencies**: Run `pip install -e .` to install all required packages
- **API key issues**: Verify your OpenRouter API key is correct and has sufficient credits

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.