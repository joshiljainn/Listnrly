# Deploying Listnrly on Render

This guide will help you deploy your Listnrly application on Render, a modern cloud platform for hosting web applications.

## 🚀 Quick Deploy

### Option 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Render deployment"
   git push origin main
   ```

2. **Connect to Render**
   - Go to [render.com](https://render.com) and sign up/login
   - Click "New +" and select "Static Site"
   - Connect your GitHub repository
   - Configure the deployment settings

3. **Deployment Settings**
   - **Name**: `listnrly-frontend`
   - **Build Command**: `cd frontend && pnpm install && pnpm run build`
   - **Publish Directory**: `frontend/dist`
   - **Environment**: Static Site

### Option 2: Deploy using render.yaml

1. **Push your code with render.yaml**
   ```bash
   git add .
   git commit -m "Add Render configuration"
   git push origin main
   ```

2. **Deploy on Render**
   - Go to [render.com](https://render.com)
   - Click "New +" and select "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect and use the `render.yaml` file

## ⚙️ Configuration Details

### Build Process
- **Node.js Version**: 18.x
- **Package Manager**: pnpm
- **Build Command**: `cd frontend && pnpm install && pnpm run build`
- **Output Directory**: `frontend/dist`

### Environment Variables
- `NODE_VERSION`: 18 (set automatically)
- `NPM_FLAGS`: `--legacy-peer-deps` (if needed)

### Routing Configuration
The application uses client-side routing with React Router. The `render.yaml` includes a rewrite rule to handle SPA routing:
```yaml
routes:
  - type: rewrite
    source: /*
    destination: /index.html
```

## 🔧 Manual Deployment Steps

### 1. Prepare Your Repository
Ensure your repository has:
- ✅ `render.yaml` in the root directory
- ✅ `frontend/package.json` with proper scripts
- ✅ `frontend/vite.config.ts` with correct build settings
- ✅ All source files in `frontend/src/`

### 2. Create Render Account
1. Visit [render.com](https://render.com)
2. Sign up with GitHub, GitLab, or email
3. Verify your email address

### 3. Deploy the Application
1. **Click "New +"** in your Render dashboard
2. **Select "Static Site"**
3. **Connect your repository**:
   - Choose your GitHub account
   - Select the `listnrly` repository
   - Select the `main` branch

4. **Configure the deployment**:
   - **Name**: `listnrly-frontend`
   - **Build Command**: `cd frontend && pnpm install && pnpm run build`
   - **Publish Directory**: `frontend/dist`
   - **Environment**: Static Site

5. **Click "Create Static Site"**

### 4. Wait for Deployment
- Render will automatically build and deploy your application
- The first deployment may take 5-10 minutes
- You'll receive a URL like: `https://listnrly-frontend.onrender.com`

## 🌐 Custom Domain (Optional)

1. **Add Custom Domain**:
   - Go to your service dashboard on Render
   - Click "Settings" → "Custom Domains"
   - Add your domain (e.g., `app.listnrly.com`)

2. **Configure DNS**:
   - Add a CNAME record pointing to your Render URL
   - Wait for DNS propagation (up to 24 hours)

## 📊 Monitoring & Analytics

### Render Dashboard Features
- **Build Logs**: View detailed build and deployment logs
- **Performance**: Monitor response times and uptime
- **Analytics**: Track visitor statistics
- **Alerts**: Set up notifications for downtime

### Health Checks
- Render automatically monitors your application
- Returns 200 status for healthy deployments
- Automatic restarts on failures

## 🔄 Continuous Deployment

### Automatic Deployments
- Render automatically deploys on every push to `main`
- Preview deployments available for pull requests
- Rollback to previous versions with one click

### Manual Deployments
- Trigger manual deployments from the dashboard
- Deploy specific branches or commits
- Clear build cache when needed

## 🛠️ Troubleshooting

### Common Issues

1. **Build Fails**
   - Check build logs in Render dashboard
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **404 Errors on Routes**
   - Ensure `render.yaml` has the rewrite rule
   - Check that `vite.config.ts` has `base: '/'`
   - Verify React Router configuration

3. **Styling Issues**
   - Check Tailwind CSS configuration
   - Ensure PostCSS is properly configured
   - Verify all CSS files are imported

4. **Performance Issues**
   - Enable gzip compression in Render settings
   - Optimize bundle size with code splitting
   - Use CDN for static assets

### Debug Commands
```bash
# Test build locally
cd frontend
pnpm install
pnpm run build

# Check bundle size
npx vite-bundle-analyzer

# Test production build
pnpm run preview
```

## 📈 Performance Optimization

### Build Optimizations
- **Code Splitting**: Automatic with Vite
- **Tree Shaking**: Removes unused code
- **Minification**: Compressed production builds
- **Source Maps**: Disabled in production

### Render Optimizations
- **Global CDN**: Automatic content delivery
- **Gzip Compression**: Enabled by default
- **HTTP/2**: Modern protocol support
- **Edge Caching**: Fast global access

## 🔐 Security

### HTTPS
- Automatic SSL certificates
- HTTP/2 and HTTP/3 support
- Security headers included

### Environment Variables
- Secure storage for sensitive data
- Not exposed in client-side code
- Encrypted at rest

## 📞 Support

### Render Support
- [Render Documentation](https://render.com/docs)
- [Community Forum](https://community.render.com)
- [Status Page](https://status.render.com)

### Application Support
- Check build logs for errors
- Review deployment configuration
- Verify repository structure

## 🎉 Success!

Once deployed, your Listnrly application will be available at:
- **Render URL**: `https://your-app-name.onrender.com`
- **Custom Domain**: `https://your-domain.com` (if configured)

Your application is now live and will automatically update with every push to the main branch! 🚀
