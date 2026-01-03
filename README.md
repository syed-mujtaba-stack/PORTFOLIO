# Syed Mujtaba's Dynamic Portfolio 🚀

A high-performance, AI-integrated portfolio website featuring a **Dark Developer (Neon Green)** aesthetic. Built with React for the frontend and FastAPI for the AI-powered backend.

![Aesthetic](https://img.shields.io/badge/Aesthetic-Terminal--Matrix-brightgreen)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20FastAPI%20%7C%20Tailwind-blue)

## ✨ Key Features

- **AI Assistant Widget**: A custom-built, Matrix-themed AI chat widget with orbital SVG animations.
- **Dynamic Loading Screen**: A sophisticated system initialization sequence with progress monitoring.
- **Professional Resume Engine**: Integrated PDF generation and print-ready resume downloads.
- **Cyberpunk UI**: A dedicated "Developer Mode" theme with neon green accents and monospace typography.
- **Lightning Background**: High-performance interactive background effects in the hero section.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Shadcn/UI
- **Icons**: Lucide React + Custom Animated SVGs
- **Animations**: Framer Motion + CSS Keyframes
- **State Management**: React Query (TanStack)

### Backend
- **Core**: FastAPI (Python)
- **AI Integration**: OpenRouter API (Accessing 100+ LLMs)
- **Server**: Uvicorn

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Python 3.10+
- [uv](https://github.com/astral-sh/uv) (Recommended for Python)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/syed-mujtaba-stack/PORTFOLIO.git
   cd PORTFOLIO
   ```

2. **Frontend Setup**
   ```bash
   cd client
   npm install
   cp .env.example .env # Add your VITE_API_URL
   npm run dev
   ```

3. **Backend Setup**
   ```bash
   cd server
   pip install -r requirements.txt # or 'uv sync'
   cp .env.example .env # Add your OPENROUTER_API_KEY
   uvicorn main:app --reload --port 5000
   ```

## 📂 Project Structure

```text
PORTFOLIO/
├── client/          # Vite + React Frontend
│   ├── src/
│   │   ├── components/ # AIWidget, AIIcon, ProfileCard, etc.
│   │   ├── pages/      # Index, About (Customized)
│   │   └── utils/      # downloadResume logic
├── server/          # FastAPI Backend
│   └── main.py      # AI Chat API & OpenRouter Integration
└── .github/         # CI/CD Workflows
```

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
*Built with 💚 by Syed Mujtaba Abbas*
