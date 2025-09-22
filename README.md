# AI Chat Application

A modern, responsive chat application with a React frontend and Flask backend, powered by OpenRouter AI. This application allows users to interact with various AI models through a clean and intuitive interface.

## Features

- 🚀 Real-time chat interface with AI assistant
- 🎨 Responsive design that works on all devices
- 🔄 Conversation history management
- ⚡ Fast and efficient API communication
- 🔒 Secure API key management using environment variables
- 🛠 Built with modern web technologies

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- React Query for data fetching and state management
- Radix UI components for accessible UI elements

### Backend
- Python 3.12+
- Flask for the web server
- Flask-CORS for handling cross-origin requests
- python-dotenv for environment variable management
- OpenRouter API for AI model access

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Python 3.12+
- OpenRouter API key (get one at [OpenRouter](https://openrouter.ai/))

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PERSONAL-PROJECT2
   ```

2. **Set up the backend**
   ```bash
   cd server
   # Create and activate virtual environment (recommended)
   python -m venv .venv
   .\.venv\Scripts\activate  # On Windows
   
   # Install dependencies
   pip install -e .
   
   # Set up environment variables
   # Create a .env file in the server directory with:
   # OPENROUTER_API_KEY=your_api_key_here
   # FLASK_APP=main.py
   # FLASK_ENV=development
   ```

3. **Set up the frontend**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   flask run --port 5000
   ```

2. **Start the frontend development server**
   ```bash
   cd client
   npm run dev
   ```

3. **Access the application**
   Open your browser and navigate to `http://localhost:3000`
   Click on "AI Chat" in the navigation menu to start chatting

## Project Structure

```
PERSONAL PROJECT2/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/               # Source code
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── App.tsx        # Main application component
│   │   └── main.tsx       # Entry point
│   └── ...               # Configuration files
│
└── server/                # Backend Flask application
    ├── main.py           # Main application file
    ├── .env              # Environment variables
    └── pyproject.toml    # Python dependencies
```

## Configuration

### Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```
OPENROUTER_API_KEY=your_openrouter_api_key_here
FLASK_APP=main.py
FLASK_ENV=development
```

## Available Scripts

### Frontend (from `/client` directory)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Backend (from `/server` directory)
- `flask run` - Start development server
- `flask run --port 5000` - Start on specific port

## Security

- **API Keys**: Never commit your OpenRouter API key to version control. The `.env` file is included in `.gitignore` to prevent accidental commits.
- **CORS**: The backend is configured to only accept requests from the frontend's development server.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenRouter](https://openrouter.ai/) for providing access to various AI models
- [Vite](https://vitejs.dev/) for the excellent development experience
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible UI components