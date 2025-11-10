# Deployment Guide - Mahalakshmi Granites and Marbles

## Prerequisites

Before deploying, ensure you have:
- Node.js (v18 or higher) installed
- npm (comes with Node.js)
- Angular CLI installed globally: `npm install -g @angular/cli`

## Development Setup

### 1. Install Dependencies
```bash
cd mahalakshmi-granites
npm install
```

### 2. Run Development Server
```bash
npm start
# OR
ng serve
```

The application will be available at `http://localhost:4200`

### 3. Development Mode Features
- Hot reload (automatic browser refresh on code changes)
- Source maps for debugging
- Detailed error messages

## Production Build

### Create Production Build
```bash
npm run build
# OR
ng build --configuration production
```

This creates optimized files in the `dist/mahalakshmi-granites` directory.

### Production Build Features
- Minified JavaScript and CSS
- Tree-shaking (removes unused code)
- Ahead-of-Time (AOT) compilation
- Optimized bundle sizes

## Deployment Options

### Option 1: Firebase Hosting (Recommended for Angular)

#### Setup
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

#### Configure
- Select `dist/mahalakshmi-granites` as public directory
- Configure as single-page app: Yes
- Don't overwrite index.html

#### Deploy
```bash
npm run build
firebase deploy
```

#### Benefits
- Free SSL certificate
- Global CDN
- Easy rollbacks
- Custom domain support

### Option 2: Netlify

#### Via Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

#### Via Drag & Drop
1. Build the project: `npm run build`
2. Go to [Netlify](https://app.netlify.com)
3. Drag `dist/mahalakshmi-granites` folder to deploy

#### Netlify Configuration
Create `netlify.toml`:
```toml
[build]
  publish = "dist/mahalakshmi-granites"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: Vercel

#### Deploy
```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

#### Configuration
Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Option 4: GitHub Pages

#### Install Angular GitHub Pages Tool
```bash
npm install -g angular-cli-ghpages
```

#### Deploy
```bash
ng build --configuration production --base-href "https://yourusername.github.io/mahalakshmi-granites/"
npx angular-cli-ghpages --dir=dist/mahalakshmi-granites
```

### Option 5: Traditional Web Hosting (cPanel, etc.)

#### Steps
1. Build the project:
   ```bash
   npm run build
   ```

2. Upload contents of `dist/mahalakshmi-granites` to your web server

3. Configure server for Angular routing:

   **Apache (.htaccess)**
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

   **Nginx**
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;
     root /path/to/dist/mahalakshmi-granites;
     index index.html;

     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

### Option 6: AWS S3 + CloudFront

#### Setup S3 Bucket
1. Create S3 bucket
2. Enable static website hosting
3. Upload `dist/mahalakshmi-granites` contents
4. Set bucket policy for public access

#### CloudFront Setup
1. Create CloudFront distribution
2. Point to S3 bucket
3. Set default root object to `index.html`
4. Configure error pages (404 -> /index.html)

### Option 7: Docker

#### Create Dockerfile
```dockerfile
# Stage 1: Build
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=build /app/dist/mahalakshmi-granites /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Create nginx.conf
```nginx
server {
  listen 80;
  location / {
    root /usr/share/nginx/html;
    index index.html;
    try_files $uri $uri/ /index.html;
  }
}
```

#### Build and Run
```bash
docker build -t mahalakshmi-granites .
docker run -p 80:80 mahalakshmi-granites
```

## Environment Configuration

### For Multiple Environments

Create environment files:

**src/environments/environment.ts** (Development)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  companyName: 'Mahalakshmi Granites and Marbles'
};
```

**src/environments/environment.prod.ts** (Production)
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.yourdomain.com',
  companyName: 'Mahalakshmi Granites and Marbles'
};
```

## Pre-Deployment Checklist

### Content Updates
- [ ] Update contact information (phone, email, address)
- [ ] Add real product images
- [ ] Update company description
- [ ] Add actual team member photos and details
- [ ] Update business hours
- [ ] Add social media links

### Technical Checks
- [ ] Test all routes/pages
- [ ] Test contact form
- [ ] Test on mobile devices
- [ ] Check browser compatibility
- [ ] Verify all links work
- [ ] Test navigation menu
- [ ] Optimize images
- [ ] Add favicon.ico (proper icon file)

### SEO & Analytics
- [ ] Update meta tags in index.html
- [ ] Add Google Analytics
- [ ] Add Google Search Console
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Verify social media meta tags

### Performance
- [ ] Minimize bundle size
- [ ] Compress images
- [ ] Enable gzip compression on server
- [ ] Test page load speed
- [ ] Check Lighthouse scores

## Post-Deployment

### Monitoring
- Set up error tracking (e.g., Sentry)
- Monitor website uptime
- Track user analytics
- Monitor form submissions

### Maintenance
- Regular security updates
- Keep dependencies updated
- Regular content updates
- Backup website regularly

## Custom Domain Setup

### For Most Hosting Providers
1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. Get hosting provider's DNS settings
3. Update domain's nameservers or A records
4. Wait for DNS propagation (24-48 hours)
5. Configure SSL certificate

### SSL Certificate
Most modern hosting providers offer free SSL via Let's Encrypt.

## Troubleshooting

### Issue: Blank page after deployment
**Solution**: Check browser console for errors. Usually a base-href issue.
```bash
ng build --base-href="/subdirectory/"
```

### Issue: 404 on page refresh
**Solution**: Configure server to redirect all routes to index.html (see hosting-specific configs above)

### Issue: Assets not loading
**Solution**: Check asset paths are relative and base-href is set correctly

## Performance Optimization

### Image Optimization
```bash
# Install image optimization tools
npm install --save-dev imagemin imagemin-webp
```

### Lazy Loading Routes
Modify `app.routes.ts`:
```typescript
export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () => import('./components/products/products.component')
      .then(m => m.ProductsComponent)
  }
];
```

### Enable Service Worker (PWA)
```bash
ng add @angular/pwa
ng build --configuration production
```

## Support & Resources

- [Angular Deployment Guide](https://angular.io/guide/deployment)
- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)

## Budget Considerations

### Free Hosting Options
- **Firebase Hosting**: Free tier available
- **Netlify**: Free for personal projects
- **Vercel**: Free for personal use
- **GitHub Pages**: Free for public repos

### Paid Options (More Features)
- **AWS**: Pay-as-you-go
- **DigitalOcean**: Starting $5/month
- **Shared Hosting**: $3-10/month

## Conclusion

Choose the deployment method that best fits your needs:
- **Easiest**: Netlify drag & drop
- **Best for Angular**: Firebase Hosting
- **Most Control**: Docker + VPS
- **Budget**: GitHub Pages or Netlify Free

For production use, Firebase Hosting or Netlify are recommended for their ease of use, free SSL, and excellent performance.

