# OTI - Observatory for Technology and Innovation

A modern, professional website for the Observatory for Technology and Innovation, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first approach, works on all devices
- **Performance Optimized**: Static site generation for fast loading
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG 2.1 AA compliance
- **Smooth Animations**: Framer Motion for engaging user experience

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Git

## 🛠️ Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/FrancescoIaccarino/OTI---Observatory-for-technology-and-innovation-.git
   cd OTI---Observatory-for-technology-and-innovation-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Building for Production

```bash
npm run build
```

This will create an optimized production build in the `out` directory.

## 🚀 Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. **Create `.github/workflows/deploy.yml`** in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to Pages
   - Under "Build and deployment", select "GitHub Actions" as the source
   - Save the changes

3. **Push your changes**:
   ```bash
   git add .
   git commit -m "Add website and GitHub Actions deployment"
   git push origin main
   ```

4. **Access your site**:
   Your site will be available at: `https://francescoiaccarino.github.io/OTI---Observatory-for-technology-and-innovation-/`

### Option 2: Manual Deployment

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Install gh-pages** (if not already installed):
   ```bash
   npm install -D gh-pages
   ```

3. **Add deploy script** to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"
     }
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  'oti-navy': '#002B5C',
  'oti-blue': '#1E4D7B',
  'oti-light-blue': '#5A8AB8',
  'oti-gray': '#F5F7FA',
}
```

### Content
- Homepage sections: `components/home/`
- Navigation: `components/Navigation.tsx`
- Footer: `components/Footer.tsx`

### Images
Place your images in the `public/images/` directory and reference them using `/images/filename.ext`

## 📁 Project Structure

```
oti-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── [other-pages]/      # Additional pages
├── components/
│   ├── home/               # Homepage components
│   ├── Navigation.tsx      # Main navigation
│   └── Footer.tsx          # Site footer
├── public/
│   └── images/             # Static images
├── lib/                    # Utility functions
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json            # Dependencies
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Copyright © 2026 Observatory for Technology and Innovation. All rights reserved.

## 👥 Team

- Rocco Totaro - Co-Founder
- Gaetano Loffredo - Co-Founder
- Benito Piscitelli - Co-Founder

## 📧 Contact

For questions or support, contact: info@oti-observatory.org

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
