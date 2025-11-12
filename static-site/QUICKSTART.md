# 🚀 Quick Start Guide
## Mahalakshmi Granites & Marbles - Static Website

### ⚡ Get Started in 2 Minutes

#### **Step 1: Open the Website**

**Option A - Using Python** (Recommended):
```bash
cd static-site
python -m http.server 8000
```
Then open: `http://localhost:8000`

**Option B - Using any Web Server**:
- Just upload all files to your web hosting
- Access via your domain name

**Option C - Direct Opening**:
- Double-click `index.html` 
- (Some features may be limited)

---

### 🎨 Quick Customizations

#### 1. **Update Contact Information**

Find and replace in ALL HTML files:

- **Phone**: `+91 97001 76998` → Your phone number
- **Email**: `info@mahalakshmigranites.com` → Your email
- **Location**: `Guntur, Andhra Pradesh` → Your location
- **WhatsApp**: `919700176998` → Your WhatsApp number (with country code, no + or spaces)

#### 2. **Change Announcement**

Edit `index.html` (or any page), find:
```html
<p class="announcement-text">🎉 Grand Opening Special - 10% Off All Products! 🎉</p>
```
Replace with your message.

#### 3. **Update Google Maps**

Edit `contact.html`, find the `<iframe>` and replace with your Google Maps embed URL.

**Get your map URL:**
1. Go to [Google Maps](https://maps.google.com)
2. Search your business
3. Click **Share** → **Embed a map**
4. Copy the `src="..."` part

#### 4. **Add Products**

Edit `products.html`, copy this template:

```html
<div class="product-card" data-category="granite">
    <div class="product-badge">Premium</div>
    <div class="product-image">
        <div class="placeholder-image">🪨 Your Product</div>
    </div>
    <div class="product-info">
        <h3>Product Name</h3>
        <p class="product-type">Product Type</p>
        <a href="contact.html" class="btn btn-primary">Get Quote</a>
    </div>
</div>
```

Change `data-category` to: `granite`, `marble`, or `granite imported`

---

### 🎯 Key Features

#### Theme Toggle
- Click the 🌙 / ☀️ button in header
- Automatically saves preference

#### Language Toggle
- Click **EN / TE** button
- Switches between English & Telugu
- Automatically saves preference

#### Festival Banners
- Automatically shows banners during festivals
- Edit dates and messages in `js/main.js`

#### Mobile Menu
- Hamburger menu appears on mobile devices
- Fully responsive design

---

### 🌐 Deploy (Choose One)

#### **Netlify** (Easiest - Free):
1. Go to [netlify.com](https://netlify.com)
2. Drag the `static-site` folder
3. Done! ✨

#### **GitHub Pages** (Free):
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
# Enable Pages in repo settings
```

#### **Traditional Hosting**:
- Upload all files via FTP
- Point to the folder
- Done!

---

### 🎨 Change Colors

Edit `css/styles.css`, find `:root {` section:

```css
:root {
  --accent-gold: #d4af37;       /* Primary gold color */
  --accent-bronze: #cd7f32;     /* Secondary bronze color */
  /* Change these to your brand colors */
}
```

---

### 📱 Test on Mobile

**Option 1 - QR Code**:
```bash
python -m http.server 8000
```
- Get your computer's IP address
- Generate QR code for `http://YOUR_IP:8000`
- Scan with phone

**Option 2 - Browser DevTools**:
- Open browser DevTools (F12)
- Click device toggle icon
- Select mobile device

---

### ✅ Checklist Before Going Live

- [ ] Updated all contact information
- [ ] Changed WhatsApp number in all pages
- [ ] Updated Google Maps location
- [ ] Added your logo (optional)
- [ ] Added your products
- [ ] Tested on mobile devices
- [ ] Updated announcement message
- [ ] Verified all links work
- [ ] Tested contact form
- [ ] Updated festival dates (if needed)

---

### 🆘 Need Help?

**Common Issues:**

**Q: WhatsApp button not working?**  
A: Make sure number is formatted as: `91XXXXXXXXXX` (no + or spaces)

**Q: Theme not saving?**  
A: Open from a web server, not directly from file system

**Q: Mobile menu not working?**  
A: Clear browser cache and try again

**Q: Festival banner not showing?**  
A: Check dates in `js/main.js` - must be in YYYY-MM-DD format

---

### 📞 Contact

- **Phone**: +91 97001 76998
- **Email**: info@mahalakshmigranites.com
- **WhatsApp**: +91 97001 76998

---

## 🎉 You're All Set!

Your website is ready. Upload and start getting customers! ✨

For detailed customization, see `README.md`

