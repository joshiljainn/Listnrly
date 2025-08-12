# Listnrly - Feedback Analytics Platform

**Listnrly** is a full‑stack feedback analytics platform that ingests user reviews from App Store, Google Play, Trustpilot, Reddit and Twitter/X, processes them with a fine‑tuned BERT model into 16 categories, and provides actionable insights through an intuitive dashboard interface.

## 🚀 Live Demo

Visit the live demo: [Listnrly Demo](https://your-github-username.github.io/listnrly)

## ✨ Features

### 🎯 Core Functionality
- **Multi-Source Data Ingestion**: Collect reviews from App Store, Google Play, Trustpilot, Reddit, and Twitter/X
- **AI-Powered Analysis**: Fine-tuned BERT model for sentiment analysis and categorization
- **Real-time Dashboard**: Interactive analytics with charts, trends, and insights
- **Smart Categorization**: 16 predefined categories for comprehensive feedback analysis
- **Export Capabilities**: Generate reports and export data in multiple formats

### 🎨 User Experience
- **Beautiful Landing Page**: Modern, responsive design with smooth animations
- **Seamless Onboarding**: 20-second simulated setup process
- **Interactive Dashboard**: Real-time data visualization and filtering
- **Mobile Responsive**: Works perfectly on all devices
- **Dark/Light Theme**: User preference support

### 🔧 Technical Features
- **React 19**: Latest React with modern hooks and features
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first styling with custom components
- **Vite**: Lightning-fast build tool and development server
- **Sample Data**: Comprehensive demo with realistic mock data

## 🏗️ Architecture

### Frontend Structure
```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── bolt/           # Bolt Frontend components
│   │   └── ui/            # Custom UI components
│   ├── pages/              # Application pages
│   │   ├── Landing/        # Landing page
│   │   ├── Signup/         # Registration form
│   │   ├── Loading/        # Setup simulation
│   │   └── Dashboard/      # Analytics dashboard
│   ├── contexts/           # React contexts
│   ├── lib/               # Utilities and helpers
│   └── routes/            # Routing configuration
```

### Backend Structure
```
backend/
├── dashboard/             # Main dashboard app
├── reviews/              # Review processing
├── onboard/              # User onboarding
├── gemini_integration/   # AI integration
└── manage.py            # Django management
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm package manager
- Python 3.8+ (for backend)
- Git

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/listnrly.git
   cd listnrly
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Backend Setup (Optional)

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations**
   ```bash
   python manage.py migrate
   ```

5. **Start development server**
   ```bash
   python manage.py runserver
   ```

## 🎯 Demo Flow

### 1. Landing Page
- Beautiful hero section with call-to-action
- Features, pricing, and about sections
- Smooth scrolling navigation
- Authentication modal

### 2. Signup Process
- Company domain input (e.g., "www.netflix.com")
- Form validation and submission
- Redirects to loading simulation

### 3. Loading Experience
- **10 seconds**: Data scraping simulation
- **10 seconds**: Review analysis simulation
- Real-time progress indicators
- Automatic navigation to dashboard

### 4. Dashboard
- Company-specific sample data
- Interactive charts and graphs
- Sentiment analysis breakdown
- Trending topics and insights
- Feedback sources distribution

## 🎨 Sample Data Themes

The platform includes realistic sample data for different company types:

- **Netflix**: Entertainment and streaming focused
- **Uber**: Transportation and ride-sharing focused  
- **Spotify**: Music and audio streaming focused
- **Airbnb**: Travel and accommodation focused

Each theme includes:
- Realistic reviews and feedback
- Appropriate sentiment distribution
- Relevant trending topics
- Industry-specific insights

## 🛠️ Development

### Available Scripts

```bash
# Development
pnpm run dev          # Start development server
pnpm run build        # Build for production
pnpm run preview      # Preview production build
pnpm run lint         # Run ESLint

# Backend (if using Django)
python manage.py runserver    # Start Django server
python manage.py migrate      # Run database migrations
python manage.py collectstatic # Collect static files
```

### Key Dependencies

**Frontend:**
- React 19
- TypeScript 5.7+
- Tailwind CSS 3.4
- Vite 6.3
- React Router DOM
- Recharts (data visualization)
- Radix UI (accessible components)

**Backend:**
- Django 4.2+
- Django REST Framework
- Celery (task queue)
- PostgreSQL (database)
- Redis (caching)

## 📱 Screenshots

### Landing Page
![Landing Page](docs/landing.png)

### Dashboard
![Dashboard](docs/dashboard.png)

### Sentiment Analysis
![Sentiment Analysis](docs/sentiment.png)

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:8000
VITE_APP_NAME=Listnrly
```

### Tailwind Configuration

The project uses a custom Tailwind configuration with:
- Custom color palette
- Responsive utilities
- Dark mode support
- Custom animations

## 🚀 Deployment

### GitHub Pages

1. **Build the project**
   ```bash
   cd frontend
   pnpm run build
   ```

2. **Deploy to GitHub Pages**
   - Go to repository Settings > Pages
   - Select source: Deploy from a branch
   - Choose branch: `main` and folder: `/docs`
   - Copy build output to `/docs` folder

### Vercel

1. **Connect repository to Vercel**
2. **Set build command**: `cd frontend && pnpm install && pnpm run build`
3. **Set output directory**: `frontend/dist`
4. **Deploy**

### Netlify

1. **Connect repository to Netlify**
2. **Set build command**: `cd frontend && pnpm install && pnpm run build`
3. **Set publish directory**: `frontend/dist`
4. **Deploy**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Bolt Frontend**: Beautiful landing page components
- **React Team**: Amazing frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Lightning-fast build tool

## 📞 Support

For support, email support@listnrly.com or create an issue in this repository.

---

**Listnrly** - Transform scattered feedback into actionable intelligence. 🚀
# Listnrly
