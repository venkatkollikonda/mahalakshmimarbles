# 🏛️ Mahalakshmi Granites and Marbles

> A modern, professional website for showcasing premium granites and marbles

![Angular](https://img.shields.io/badge/Angular-19-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-Styling-pink?style=flat-square&logo=sass)
![Responsive](https://img.shields.io/badge/Responsive-Design-green?style=flat-square)

A complete, production-ready website built with **Angular 19** (Latest) for Mahalakshmi Granites and Marbles business. Features a world-class luxury design, fully responsive layout, and comprehensive functionality for showcasing products and services.

---

## ✨ Features

### 🎨 Design & UX
- **Modern UI**: Clean, professional design with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **Beautiful Color Scheme**: Professional palette with gradient backgrounds
- **Smooth Animations**: Fade-in effects and hover transitions
- **Mobile Navigation**: Hamburger menu for small screens
- **Sticky Header**: Navigation stays visible while scrolling

### 📄 Pages
- **Home**: Hero section, features, popular products, stats, and CTA
- **Products**: Filterable product catalog with detailed cards
- **Services**: Comprehensive service listings with process timeline
- **About**: Company story, mission, vision, values, and team
- **Contact**: Functional form with validation, contact info, and FAQs

### 🛠️ Technical Features
- Built with **Angular 19** (Latest - standalone components)
- **TypeScript** for type safety
- **SCSS** for advanced styling
- **Reactive Forms** with validation
- **Router** integration for smooth navigation
- **Mobile-first** responsive design
- SEO-friendly structure

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download the project**
   ```bash
   cd mahalakshmi-granites
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:4200
   ```

The application will automatically reload when you make changes to the source files.

---

## 📦 Project Structure

```
mahalakshmi-granites/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/          # Navigation header
│   │   │   ├── footer/          # Footer with links
│   │   │   ├── home/            # Home page
│   │   │   ├── products/        # Products catalog
│   │   │   ├── services/        # Services page
│   │   │   ├── about/           # About us page
│   │   │   └── contact/         # Contact page with form
│   │   ├── app.component.ts     # Root component
│   │   └── app.routes.ts        # Application routes
│   ├── assets/                  # Images and static files
│   ├── index.html               # Main HTML file
│   ├── main.ts                  # Application entry point
│   └── styles.scss              # Global styles
├── angular.json                 # Angular configuration
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

---

## 🎯 Key Pages Overview

### Home Page (`/`)
- Eye-catching hero section with CTA buttons
- Features section highlighting key benefits
- Popular products showcase
- Statistics section
- Call-to-action section

### Products Page (`/products`)
- Category filter (All/Granite/Marble)
- Product cards with descriptions and features
- Request quote functionality
- Product information section

### Services Page (`/services`)
- 6 comprehensive service offerings
- Step-by-step process timeline
- Benefits of choosing services
- Call-to-action for quotes

### About Page (`/about`)
- Company history and story
- Mission and vision statements
- Core values
- Team member profiles
- Company statistics

### Contact Page (`/contact`)
- Functional contact form with validation
- Multiple contact methods
- Map placeholder for location
- FAQ section

---

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm start
ng serve

# Build for production
npm run build
ng build --configuration production

# Run with watch mode
npm run watch
ng build --watch

# Run tests (if configured)
npm test
ng test
```

### Making Changes

#### Update Contact Information
Edit `src/app/components/footer/footer.component.html` and `src/app/components/contact/contact.component.ts`

#### Add New Products
Edit `src/app/components/products/products.component.ts` - Add to the `products` array

#### Customize Colors
Edit `src/styles.scss` - Modify CSS variables in `:root` section

#### Add Images
1. Place images in `src/assets/images/`
2. Update component templates to use the images
3. Replace placeholder backgrounds

---

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px+

---

## 🎨 Color Scheme

```scss
Primary Color:   #2c3e50 (Dark blue-grey)
Secondary Color: #e74c3c (Red)
Accent Color:    #f39c12 (Orange)
Light BG:        #ecf0f1 (Light grey)
Dark BG:         #34495e (Dark grey)
```

---

## 📚 Documentation

- **[PROJECT_FEATURES.md](PROJECT_FEATURES.md)** - Detailed feature documentation
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Complete deployment instructions

---

## 🚢 Deployment

### Quick Deploy Options

**Firebase Hosting** (Recommended)
```bash
npm install -g firebase-tools
npm run build
firebase init hosting
firebase deploy
```

**Netlify**
- Drag & drop the `dist/mahalakshmi-granites` folder to Netlify

**Vercel**
```bash
npm install -g vercel
vercel
```

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions.

---

## 🔧 Technology Stack

| Technology | Purpose |
|------------|---------|
| Angular 19 | Frontend framework (Latest) |
| TypeScript 5.6 | Programming language (Latest) |
| SCSS | Styling |
| Angular Router | Page navigation |
| Angular Forms | Form handling |
| Google Fonts | Typography |

---

## ✅ Pre-Launch Checklist

Before going live, update:
- [ ] Contact information (phone, email, address)
- [ ] Social media links
- [ ] Real product images
- [ ] Team member photos
- [ ] Company description
- [ ] Business hours
- [ ] Add proper favicon.ico file
- [ ] Configure Google Analytics (optional)

---

## 🎓 Learning Resources

New to Angular? Check these out:
- [Angular Official Docs](https://angular.io/docs)
- [Angular Tutorial](https://angular.io/tutorial)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 💡 Future Enhancements

Possible additions:
- Image gallery with lightbox
- Customer testimonials
- Blog section
- Online quote calculator
- Project portfolio
- Live chat widget
- Multi-language support
- Admin panel for content management

---

## 📄 License

This project is created for Mahalakshmi Granites and Marbles.

---

## 🤝 Support

For questions or support:
- 📧 Email: info@mahalakshmigranites.com
- 📞 Phone: +91 XXXXX XXXXX

---

## 🙏 Acknowledgments

Built with ❤️ using:
- [Angular](https://angular.io/)
- [Google Fonts](https://fonts.google.com/)
- Modern web technologies

---

**Made for Mahalakshmi Granites and Marbles** 🏛️

