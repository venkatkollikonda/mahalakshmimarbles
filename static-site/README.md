# Mahalakshmi Granites & Marbles - Static Website

A beautiful, feature-rich static website for **Mahalakshmi Granites and Marbles**, a premium stone supplier in Guntur, Andhra Pradesh.

## 🌟 Features

### Core Features
- ✨ **Premium Stone-Inspired Design** - Gold and bronze accents with sophisticated grays
- 🌓 **Dark/Light Theme Toggle** - Smooth theme switching with localStorage persistence
- 🌍 **Bilingual Support** - English & Telugu language toggle
- 🎉 **Festival Banner System** - Automatic festival banners (Diwali, Ugadi, Sankranti)
- 📢 **Announcement Bar** - Dismissible top banner for special offers
- 📱 **Fully Responsive** - Works perfectly on all devices
- 💬 **WhatsApp Integration** - Floating WhatsApp button for instant contact
- 🎨 **Smooth Animations** - Professional fade-in effects and transitions
- 🚀 **Fast Loading** - Pure HTML/CSS/JavaScript, no frameworks

### Pages Included
1. **Home** (`index.html`) - Hero section, features, popular products, stats, CTA
2. **Products** (`products.html`) - Product catalog with filtering (All/Granites/Marbles/Imported)
3. **Services** (`services.html`) - Service offerings showcase
4. **Gallery** (`gallery.html`) - Project showcase gallery
5. **About Us** (`about.html`) - Company story, values, achievements
6. **Contact** (`contact.html`) - Contact form, info cards, Google Maps integration

## 📁 File Structure

```
static-site/
├── index.html              # Home page
├── products.html           # Products page
├── services.html           # Services page
├── gallery.html            # Gallery page
├── about.html              # About page
├── contact.html            # Contact page
├── css/
│   └── styles.css          # All styles including dark theme
├── js/
│   └── main.js             # All interactive functionality
└── README.md               # This file
```

## 🚀 Quick Start

### Option 1: Simple File Server (Any OS)

1. **Using Python** (Recommended):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

2. **Using Node.js**:
```bash
npx http-server . -p 8000
```

3. **Using PHP**:
```bash
php -S localhost:8000
```

Then open: `http://localhost:8000`

### Option 2: Direct Opening (Limited Features)

Simply double-click `index.html` to open in your browser.

**Note**: Some features like localStorage may have limitations when opening files directly.

## 🎨 Customization Guide

### 1. Business Information

Edit the HTML files to update:

**In all HTML files** - Update footer contact information:
```html
<li><span class="icon">📍</span><span>Your Location</span></li>
<li><span class="icon">📞</span><span>Your Phone</span></li>
<li><span class="icon">✉️</span><span>Your Email</span></li>
```

**WhatsApp Links** - Replace `919700176998` with your WhatsApp number:
```html
<a href="https://wa.me/YOUR_WHATSAPP_NUMBER" ...>
```

### 2. Colors & Branding

Edit `css/styles.css` - Change CSS variables in `:root`:

```css
:root {
  --accent-gold: #d4af37;        /* Primary accent color */
  --accent-bronze: #cd7f32;      /* Secondary accent color */
  --gray-900: #1a1a1a;           /* Primary text/dark color */
  /* ... more variables */
}
```

### 3. Festival Banners

Edit `js/main.js` - Modify the `festivals` array:

```javascript
const festivals = [
  {
    name: 'Diwali',
    startDate: '2025-10-20',      // YYYY-MM-DD format
    endDate: '2025-11-05',
    title: {
      en: '✨ Happy Diwali! ✨',
      te: '✨ దీపావళి శుభాకాంక్షలు! ✨'
    },
    message: {
      en: 'Your English message',
      te: 'Your Telugu message'
    },
    theme: 'diwali'
  },
  // Add more festivals...
];
```

### 4. Products

Edit `products.html` - Add/modify product cards:

```html
<div class="product-card" data-category="granite">
    <div class="product-badge">Premium</div>
    <div class="product-image">
        <div class="placeholder-image">🪨 Product Name</div>
    </div>
    <div class="product-info">
        <h3>Product Name</h3>
        <p class="product-type">Product Type</p>
        <a href="contact.html" class="btn btn-primary">Get Quote</a>
    </div>
</div>
```

### 5. Announcement Bar

Edit any HTML file:

```html
<div class="announcement-bar" id="announcementBar">
    <div class="container">
        <p class="announcement-text">🎉 Your Announcement Here! 🎉</p>
    </div>
    <button class="announcement-close" id="announcementClose">&times;</button>
</div>
```

### 6. Google Maps

Edit `contact.html` - Replace the Google Maps embed URL:

```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" ...></iframe>
```

**To get your embed URL:**
1. Go to Google Maps
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL

### 7. Add Your Logo

Replace the emoji logo with your actual logo:

```html
<!-- Current (emoji) -->
<span class="logo-icon">🏛️</span>

<!-- Replace with (image) -->
<img src="images/logo.png" alt="Mahalakshmi Granites" class="logo-icon">
```

Then add CSS:
```css
.logo-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}
```

## 🌐 Deployment

### Deploy to Netlify (Free)

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the `static-site` folder
3. Your site is live! ✨

### Deploy to GitHub Pages (Free)

```bash
# Create a new repository on GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main

# Enable GitHub Pages in repository settings
# Select main branch as source
```

### Deploy to Vercel (Free)

1. Create account at [vercel.com](https://vercel.com)
2. Import your project
3. Deploy! ✨

### Traditional Web Hosting

Upload all files to your web hosting via FTP:
- Upload the entire `static-site` folder contents
- Ensure `index.html` is in the root directory
- All done!

## 🎯 Features Documentation

### Theme Toggle

The theme toggle automatically saves user preference:
- **Light Theme** (default): Clean, bright design
- **Dark Theme**: Dark backgrounds with adjusted colors

Preference saved in localStorage and persists across visits.

### Language Toggle

Switch between English and Telugu:
- Toggle button shows current language (EN/TE)
- All translatable text uses `data-en` and `data-te` attributes
- Preference saved in localStorage

**To add more translations:**

1. Add `data-en` and `data-te` attributes to elements:
```html
<span data-en="Hello" data-te="నమస్కారం">Hello</span>
```

2. The JavaScript automatically handles the switching!

### Festival System

The festival banner automatically appears based on date ranges:
- Checks current date against festival dates
- Shows appropriate banner with bilingual messages
- Smooth animations included
- Easy to add new festivals in `main.js`

### Product Filtering

Product page includes category filtering:
- **All Products**: Shows everything
- **Granites**: Granite products only
- **Marbles**: Marble products only
- **Imported**: Imported products only

Products are tagged with `data-category` attribute.

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints:
- **Desktop**: 968px and above
- **Tablet**: 576px to 968px
- **Mobile**: Below 576px

Mobile features:
- Hamburger menu
- Optimized layout
- Touch-friendly buttons
- Responsive grid systems

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ⚠️ IE 11 (limited support)

## 📊 SEO Features

- ✅ Semantic HTML5
- ✅ Meta descriptions
- ✅ Open Graph tags ready
- ✅ Mobile-friendly
- ✅ Fast loading
- ✅ Clean URLs
- ✅ Alt texts for images
- ✅ Structured data ready

**To improve SEO further:**

1. Add Open Graph tags in `<head>`:
```html
<meta property="og:title" content="Mahalakshmi Granites">
<meta property="og:description" content="Premium Quality Stone Solutions">
<meta property="og:image" content="url-to-image.jpg">
```

2. Add structured data (JSON-LD):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mahalakshmi Granites and Marbles",
  "telephone": "+91-97001-76998",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Guntur",
    "addressRegion": "Andhra Pradesh",
    "addressCountry": "India"
  }
}
</script>
```

## 🎨 Adding Real Images

Replace placeholder images:

1. Create an `images` folder:
```
static-site/
├── images/
│   ├── hero-bg.jpg
│   ├── products/
│   │   ├── black-galaxy.jpg
│   │   ├── kashmir-white.jpg
│   │   └── ...
│   └── gallery/
│       ├── project-1.jpg
│       └── ...
```

2. Update HTML:
```html
<!-- Replace placeholder -->
<div class="placeholder-image">🪨 Product Name</div>

<!-- With real image -->
<img src="images/products/product-name.jpg" alt="Product Name">
```

3. Add CSS for images:
```css
.product-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
```

## 📞 Contact Form Integration

The contact form currently shows an alert. To make it functional:

### Option 1: Email Service (e.g., Formspree)

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
</form>
```

### Option 2: Custom Backend

Modify `handleContactForm()` in `main.js` to send to your backend:

```javascript
function handleContactForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  
  fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    alert('Message sent successfully!');
  });
}
```

## 🎁 Additional Features You Can Add

1. **Image Lightbox** - For gallery images
2. **Product Quick View** - Modal for product details
3. **Testimonials Slider** - Customer reviews
4. **Live Chat Integration** - e.g., Tawk.to
5. **Analytics** - Google Analytics
6. **Cookie Consent** - GDPR compliance
7. **Social Media Feed** - Instagram integration
8. **Newsletter Signup** - Mailchimp integration

## 📝 License

This website is created for Mahalakshmi Granites and Marbles. All rights reserved.

## 🆘 Support

For customization help or questions:
- 📧 Email: info@mahalakshmigranites.com
- 📞 Phone: +91 97001 76998
- 💬 WhatsApp: +91 97001 76998

## 🎉 Enjoy Your New Website!

Your static website is ready to go live. Simply upload to any web hosting and start attracting customers!

---

**Built with ❤️ for Mahalakshmi Granites and Marbles**

