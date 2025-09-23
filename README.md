# Futuristic Portfolio Website
visit: https://portfolioyp-psi.vercel.app/
A modern, cyberpunk-inspired personal portfolio website built with a full-stack technology stack (MongoDB, Express, React, Node.js) and styled with modern CSS.

## 🚀 Features

### 🎨 Design & Animations
- **Cyberpunk/Neon Aesthetic**: Dark theme with glowing effects and neon colors
- **Smooth Animations**: Powered by Framer Motion for fluid interactions
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Interactive Elements**: Hover effects, parallax scrolling, and particle animations

### 🏠 Sections
1. **Hero Section**: Animated typewriter effect with rotating job titles
2. **About Me**: Timeline cards for education and experience
3. **Skills**: Animated skill bars and technology badges
4. **Projects**: Filterable project gallery with hover animations
5. **Contact**: Working contact form with backend integration
6. **Terminal**: Interactive terminal for navigation and information

### 🛠️ Technical Features
- **Full-Stack Technologies**: MongoDB, Express.js, React.js, Node.js
- **Modern Styling**: Modern CSS with custom cyberpunk theme
- **Form Handling**: Contact form with backend API and MongoDB storage
- **API Integration**: RESTful APIs for contact form submissions
- **Security**: Input validation, rate limiting, and CORS protection

## 🏗️ Architecture

```
my_portfolio/
├── frontend/                 # React.js frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Terminal.jsx
│   │   │   └── Navigation.jsx
│   │   ├── App.jsx
│   │   └── index.css        # TailwindCSS styles
│   ├── package.json
│   └── tailwind.config.js
└── backend/                  # Node.js/Express backend
    ├── models/
    │   └── Contact.js       # MongoDB schema
    ├── routes/
    │   └── contact.js       # API routes
    ├── server.js            # Main server file
    └── package.json
```

## 🎨 Color Palette

```css
- Primary Blue: #00D4FF (cyber-blue)
- Purple: #B400FF (cyber-purple)  
- Pink: #FF0080 (cyber-pink)
- Green: #00FF41 (cyber-green)
- Yellow: #FFFF00 (cyber-yellow)
- Dark Background: #0A0A0A
- Card Background: #1A1A1A
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cyber-yug/portfolio
   cd my_portfolio
   ```

2. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Setup Backend**
   ```bash
   cd ../backend
   npm install
   
   # Create .env file
   echo "NODE_ENV=development
   PORT=5001
   MONGODB_URI=mongodb://localhost:27017/portfolio
   FRONTEND_URL=http://localhost:5173" > .env
   
   npm run dev
   ```

4. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5001

## 🌐 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
# Deploy to Vercel
```

### Backend (Vercel)
```bash
cd backend
# Deploy to Vercel with vercel.json configuration
```

### Environment Variables for Production
```
NODE_ENV=production
MONGODB_URI=your_mongodb_atlas_uri
FRONTEND_URL=your_frontend_domain
```

## 🎮 Interactive Terminal

The portfolio includes a unique terminal feature where users can type commands:

- `help` - Show available commands
- `about` - Learn about Yug Patel
- `skills` - View technical skills
- `projects` - List recent projects
- `contact` - Get contact information
- `resume` - View resume/CV
- `clear` - Clear terminal
- `exit` - Close terminal

## 📱 Responsive Design

The portfolio is optimized for all screen sizes:
- **Desktop**: Full layout with side navigation and particle effects
- **Tablet**: Optimized grid layouts and touch-friendly interactions
- **Mobile**: Hamburger menu, stacked layouts, and touch gestures

## 🔧 Technologies Used

### Frontend
- React.js 18
- Framer Motion (animations)
- TailwindCSS (styling)
- Axios (API calls)
- Vite (build tool)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS, Helmet (security)
- Rate limiting
- Input validation

### Development Tools
- ESLint (code linting)
- Nodemon (development server)
- Git (version control)

## 📊 Performance Features

- **Lazy Loading**: Components load as needed
- **Optimized Images**: Responsive image handling
- **Code Splitting**: Bundle optimization with Vite
- **Animation Performance**: Hardware-accelerated animations
- **API Optimization**: Efficient MongoDB queries

## 🛡️ Security Features

- Input validation and sanitization
- Rate limiting on API endpoints
- CORS protection
- Helmet.js security headers
- Environment variable protection

## 📞 Contact Information

- **Email**: ypsworkstation@gmail.com
- **Phone**: +91 9558551573
- **Location**: Vadodara, Gujarat, India
- **LinkedIn**: [linkedin.com/in/yug-patel-287186307](https://www.linkedin.com/in/yug-patel-287186307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app)
- **GitHub**: [github.com/cyber-yug](https://github.com/cyber-yug)
- **Instagram**: [instagram.com/the.yugpatel](https://www.instagram.com/the.yugpatel?igsh=MWhmMnhvbDN4YnF5Yg==)
- **Portfolio**: [yugpatel.dev](https://yugpatel.dev)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from cyberpunk and sci-fi aesthetics
- Modern CSS for clean and efficient styling
- Framer Motion for smooth animations
- MongoDB for flexible data storage
- Vercel for seamless deployment

---

**Built with ❤️ by Yug Patel** | **Powered by Full-Stack Technologies** | **Styled with Modern CSS**
