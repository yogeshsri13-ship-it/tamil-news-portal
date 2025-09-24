# Deploying Tamil News Portal to Vercel

## Step 1: Prepare Your Project for Deployment

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name your repository (e.g., `tamil-news-portal`)
   - Make it public
   - Click "Create repository"

2. Initialize and push your code to GitHub:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yogeshsri13-ship-it/tamil-news-portal.git
   git push -u origin main
   ```

## Step 2: Deploy on Vercel

1. Go to https://vercel.com
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: next build
   - Install Command: npm install
   
6. Add Environment Variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token
   NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
   ```

7. Click "Deploy"

## Step 3: Access Your Deployed Site

After successful deployment:
1. Your frontend will be available at: `https://your-project-name.vercel.app`
2. Your Sanity Studio will be available at: `https://your-project-name.vercel.app/admin`

## Step 4: First-Time Setup

1. Visit your Sanity Studio URL
2. Log in with your Google account
3. Create initial categories and content using the provided schemas

## Getting Your Sanity Project ID

1. Go to https://www.sanity.io/manage
2. Create a new project
3. Copy the Project ID
4. Update the Project ID in your Vercel environment variables

## Updating Your Site

Any changes pushed to your main branch on GitHub will automatically trigger a new deployment on Vercel.

## Local Development

To run the site locally:
```powershell
npm run dev
```

Then visit:
- Frontend: http://localhost:3000
- Sanity Studio: http://localhost:3000/admin