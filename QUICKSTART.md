# Quick Start Guide 🚀

Get your Mahalakshmi Granites and Marbles website up and running in minutes!

## For Angular Developers

Since you're already an Angular developer, you'll find this project very familiar!

### 1. ⚡ Install & Run (2 minutes)

```bash
# Navigate to project directory
cd mahalakshmi-granites

# Install dependencies
npm install

# Start development server
npm start
```

**That's it!** Open `http://localhost:4200` in your browser.

---

## 📂 Project Overview

### What You Got

✅ **Complete Angular 17 Application** with:
- 5 Pages (Home, Products, Services, About, Contact)
- Responsive header & footer
- Mobile-friendly hamburger menu
- Contact form with validation
- Product filtering system
- Beautiful animations

✅ **Modern Tech Stack**:
- Angular 17 (Standalone Components)
- TypeScript 5.2
- SCSS Styling
- Angular Router
- Reactive Forms

✅ **Professional Design**:
- Purple gradient hero sections
- Card-based layouts
- Hover effects
- Mobile responsive
- Modern color scheme

---

## 🎯 First Steps After Installation

### 1. Test the Website
```bash
npm start
```
Visit each page and test all functionality.

### 2. Customize Content

#### Update Contact Info
**File**: `src/app/components/footer/footer.component.html`

Replace:
- `+91 XXXXX XXXXX` with your phone
- `info@mahalakshmigranites.com` with your email
- `Your Address, City, State` with your address

**Also update**: `src/app/components/contact/contact.component.ts` (same info)

#### Update Products
**File**: `src/app/components/products/products.component.ts`

Add/edit products in the `products` array:
```typescript
{
  id: 9,
  name: 'Your Granite Name',
  category: 'granite', // or 'marble'
  description: 'Your description',
  origin: 'India',
  features: ['Feature 1', 'Feature 2', 'Feature 3']
}
```

#### Change Colors
**File**: `src/styles.scss`

Modify CSS variables at the top:
```scss
:root {
  --primary-color: #2c3e50;    // Change this
  --secondary-color: #e74c3c;  // And this
  --accent-color: #f39c12;     // And this
}
```

#### Add Your Logo
1. Place logo in `src/assets/images/logo.png`
2. Update header component to use it

---

## 🎨 Understanding the Structure

### Components

```
src/app/components/
├── header/          ← Navigation bar (sticky)
├── footer/          ← Footer with links & info
├── home/            ← Landing page
├── products/        ← Product catalog with filter
├── services/        ← Services offered
├── about/           ← Company info & team
└── contact/         ← Contact form + info
```

### Each Component Has:
- `.ts` file (TypeScript logic)
- `.html` file (Template/Structure)
- `.scss` file (Styling)

### Routing
**File**: `src/app/app.routes.ts`

Routes are already configured:
- `/` → Home
- `/products` → Products
- `/services` → Services
- `/about` → About
- `/contact` → Contact

---

## 🔧 Common Customizations

### Add a New Product Category

1. Edit `src/app/components/products/products.component.ts`
2. Add to `categories` array:
```typescript
categories = [
  { id: 'all', name: 'All Products' },
  { id: 'granite', name: 'Granites' },
  { id: 'marble', name: 'Marbles' },
  { id: 'quartz', name: 'Quartz' }  // New!
];
```

### Add Real Images

1. Place images in `src/assets/images/`
2. Update component templates:
```html
<!-- Replace this -->
<div class="placeholder-image">{{ product.name }}</div>

<!-- With this -->
<img [src]="'assets/images/' + product.image" [alt]="product.name">
```

3. Add image property to products:
```typescript
{
  name: 'Black Galaxy',
  image: 'black-galaxy.jpg',  // Add this
  // ... other properties
}
```

### Connect Contact Form to Backend

**File**: `src/app/components/contact/contact.component.ts`

In `onSubmit()` method, add HTTP call:
```typescript
// 1. Import HttpClient in component
import { HttpClient } from '@angular/common/http';

// 2. Inject in constructor
constructor(private http: HttpClient) {}

// 3. Update onSubmit()
onSubmit() {
  if (this.formData.name && this.formData.email) {
    this.http.post('your-api-url', this.formData)
      .subscribe(
        response => {
          this.isSubmitted = true;
          // Handle success
        },
        error => {
          // Handle error
        }
      );
  }
}
```

---

## 📱 Testing Responsive Design

### Browser DevTools
1. Open DevTools (F12)
2. Click device toolbar (Ctrl+Shift+M)
3. Test different screen sizes

### Breakpoints Used
- **Mobile**: < 768px
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px+

---

## 🚀 Building for Production

### Create Production Build
```bash
npm run build
```

Output will be in `dist/mahalakshmi-granites/`

### What Gets Optimized
- Code minification
- Tree-shaking (removes unused code)
- Ahead-of-Time (AOT) compilation
- CSS optimization
- Small bundle sizes

---

## 🌐 Deployment Quick Guide

### Option 1: Netlify (Easiest)
1. Build: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop `dist/mahalakshmi-granites` folder
4. Done! ✅

### Option 2: Firebase (Recommended)
```bash
npm install -g firebase-tools
npm run build
firebase login
firebase init hosting
firebase deploy
```

### Option 3: Any Web Host
1. Build: `npm run build`
2. Upload contents of `dist/mahalakshmi-granites` to your server
3. Configure server for Angular routing (see DEPLOYMENT_GUIDE.md)

---

## 🐛 Troubleshooting

### Port 4200 is already in use
```bash
ng serve --port 4201
```

### Cannot find module errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Changes not reflecting
- Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Restart development server

---

## 📚 Learn More

### Key Angular Concepts Used

1. **Standalone Components** (Angular 17 feature)
   - No NgModule needed
   - Import dependencies directly in component

2. **Router**
   - Navigation between pages
   - File: `app.routes.ts`

3. **Forms**
   - Template-driven forms with validation
   - Used in contact page

4. **Services** (not used yet, but you can add)
   - For API calls
   - Shared data/logic

### Useful Angular Commands

```bash
# Generate new component
ng generate component components/testimonials

# Generate service
ng generate service services/api

# Build with source maps
ng build --source-map

# Lint code
ng lint
```

---

## 🎯 Next Steps

1. ✅ **Customize Content**
   - Update contact info
   - Add your products
   - Change colors to match your brand

2. ✅ **Add Images**
   - Replace placeholders with real images
   - Add your logo

3. ✅ **Test Everything**
   - Test on mobile
   - Test all forms
   - Test all links

4. ✅ **Deploy**
   - Choose hosting (Firebase/Netlify recommended)
   - Deploy your site
   - Configure custom domain

5. ✅ **SEO & Analytics**
   - Add Google Analytics
   - Update meta tags
   - Submit to Google Search Console

---

## 💡 Pro Tips

### For Development
- Use Chrome DevTools for debugging
- Install Angular DevTools browser extension
- Use VS Code with Angular extension pack

### For Performance
- Optimize images before adding them
- Use WebP format for images
- Enable lazy loading for routes

### For SEO
- Update title and meta tags in `index.html`
- Add descriptive alt texts to images
- Create sitemap.xml

---

## 🆘 Need Help?

### Documentation Files
- **README.md** - Overview and setup
- **PROJECT_FEATURES.md** - All features explained
- **DEPLOYMENT_GUIDE.md** - Detailed deployment steps

### Angular Resources
- [Official Docs](https://angular.io/docs)
- [Angular Tutorial](https://angular.io/tutorial)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/angular)

### Contact
For website-specific questions, check the code comments or documentation files.

---

## ✨ What Makes This Special

✅ **Production-Ready** - Not a template, but a complete working site
✅ **Modern Angular** - Uses latest Angular 17 features
✅ **Well-Structured** - Easy to understand and modify
✅ **Responsive** - Works on all devices
✅ **Documented** - Comprehensive documentation included
✅ **Customizable** - Easy to adapt to your needs

---

**You're all set! Happy coding! 🎉**

If you're stuck, remember: the code is well-commented and the documentation is comprehensive. You've got this! 💪

