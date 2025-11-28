# AI Engineer Portfolio

A modern, interactive portfolio website showcasing AI and machine learning projects with a space-themed design and an AI-powered chatbot assistant.

## Features

- **AI Chatbot Assistant (Nancy)**: Interactive AI assistant powered by Google Gemini API that can answer questions about projects, experience, and skills
- **Space-themed Design**: Immersive visual experience with animated backgrounds, particle effects, and smooth transitions
- **Interactive Timeline**: Experience section displayed as a vertical timeline with alternating cards
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior
- **3D Graphics**: Three.js integration for dynamic visual elements
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Glassmorphism UI**: Modern glass-effect components with backdrop blur
- **Framer Motion Animations**: Smooth, physics-based animations throughout the site

## Tech Stack

### Frontend
- React 19.2.0
- Vite 7.2.4
- Framer Motion 12.23.24
- Three.js 0.181.2
- React Three Fiber 9.4.0
- React Three Drei 10.7.7

### AI & ML
- Google Generative AI (Gemini) 0.24.1
- React Markdown 10.1.0

### Styling
- CSS3 with custom properties
- Glassmorphism design patterns
- Custom animations and keyframes

### Icons & Assets
- Lucide React 0.554.0
- Custom SVG assets
- Video backgrounds (WebM format)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/TensorTorch777/my_portfolio_2025.git
cd my_portfolio_2025
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

4. Get your Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

## Usage

### Development Server
```bash
npm run dev
```
Access the application at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Configure environment variables:
   - Go to Project Settings > Environment Variables
   - Add: `VITE_GEMINI_API_KEY` with your API key value
   - Apply to Production, Preview, and Development environments
5. Deploy

The Nancy AI chatbot will work immediately on your deployed site.

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [Netlify](https://netlify.com) and sign in with GitHub
3. Click "Add new site" > "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add environment variables:
   - Go to Site settings > Environment variables
   - Add: `VITE_GEMINI_API_KEY` with your API key value
7. Deploy

### Important Notes for Deployment

- The `.env` file is not pushed to GitHub (it's in `.gitignore`)
- You must configure `VITE_GEMINI_API_KEY` in your deployment platform's environment variables
- Nancy will show setup instructions to local developers who clone without an API key
- Your deployed site will have Nancy fully functional for all visitors


## Project Structure

```
space_portfolio/
├── public/              # Static assets (images, videos, icons)
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Nancy.jsx    # AI Chatbot
│   │   └── ...
│   ├── constants/       # Data and configurations
│   │   ├── resumeData.js
│   │   ├── nancyPrompt.js
│   │   └── index.js
│   ├── styles/          # CSS stylesheets
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── .env                 # Environment variables (not in repo)
├── .gitignore
├── package.json
└── vite.config.js
```

## Key Components

### Nancy AI Chatbot
An AI-powered assistant that can:
- Answer questions about projects and experience
- Provide technical details about implementations
- Discuss skills and technologies
- Engage in natural conversation

Built with Google's Gemini API and featuring a custom system prompt tailored to the portfolio content.

### Timeline Experience Section
Interactive timeline displaying professional experience with:
- Alternating card layout
- Smooth scroll-into-view animations
- Responsive design for mobile devices

### 3D Scene
Three.js powered 3D graphics with:
- Particle background effects
- Interactive animations
- Performance-optimized rendering

## Configuration

### Environment Variables
- `VITE_GEMINI_API_KEY`: Google Gemini API key for the AI chatbot

### Customization
- Update personal information in `src/constants/resumeData.js`
- Modify Nancy's personality in `src/constants/nancyPrompt.js`
- Adjust theme colors in `src/index.css` CSS variables

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading for video assets
- Optimized 3D rendering
- Code splitting with Vite
- Efficient animation with Framer Motion

## License

MIT License - feel free to use this project as a template for your own portfolio.

## Contact

Built by Nimish Vadgaonkar

For inquiries: nimishvadgaonkar@zohomail.in
