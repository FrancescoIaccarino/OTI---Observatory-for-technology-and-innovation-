# Quick Setup Guide for OTI Website

## Step 1: Upload to GitHub

1. Open your terminal/command prompt
2. Navigate to the website folder
3. Run these commands:

```bash
cd oti-website
git init
git add .
git commit -m "Initial commit: OTI website"
git branch -M main
git remote add origin https://github.com/FrancescoIaccarino/OTI---Observatory-for-technology-and-innovation-.git
git push -u origin main
```

## Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. Save the changes

## Step 3: Wait for Deployment

- GitHub Actions will automatically build and deploy your site
- Check the "Actions" tab to see the progress
- Once complete, your site will be live at:
  `https://francescoiaccarino.github.io/OTI---Observatory-for-technology-and-innovation-/`

## Step 4: Local Development (Optional)

To work on the site locally:

```bash
cd oti-website
npm install
npm run dev
```

Open http://localhost:3000 in your browser

## Common Issues

### Issue: npm install fails
**Solution**: Make sure you have Node.js 18+ installed. Download from https://nodejs.org/

### Issue: Site not deploying
**Solution**: 
1. Check the Actions tab for error messages
2. Make sure GitHub Pages is enabled in Settings
3. Ensure the workflow file is in `.github/workflows/deploy.yml`

### Issue: Images not showing
**Solution**: 
1. Make sure images are in the `public/images/` folder
2. Check that image paths start with `/images/`

## Need Help?

Contact the development team or refer to the full README.md file.
