#!/bin/bash

echo "🚀 Deploying Portfolio to Vercel..."

# Check if we're in the correct directory
if [ ! -d "frontend" ] || [ ! -d "backend" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "📦 Building frontend..."
cd frontend
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Frontend build successful!"
else
    echo "❌ Frontend build failed!"
    exit 1
fi

cd ..

echo "🌐 Deploying to Vercel..."
echo "🔧 Make sure you have Vercel CLI installed: npm i -g vercel"
echo "🔧 Run: vercel --prod"

echo "📋 Post-deployment checklist:"
echo "1. Set environment variables in Vercel dashboard:"
echo "   - VITE_API_URL: https://your-backend-url.vercel.app"
echo "2. Deploy backend separately or use serverless functions"
echo "3. Update CORS settings in backend for production domain"
echo "4. Test contact form functionality"

echo "🎉 Deployment preparation complete!"