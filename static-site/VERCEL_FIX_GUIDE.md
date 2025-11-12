# 🔧 Vercel Deployment Fix Guide
## Mahalakshmi Granites & Marbles

---

## 🚨 Common Vercel Issues & Solutions

### Issue 1: CSS/JS Not Loading

**Symptoms:**
- Website shows but no styling
- Broken layout
- JavaScript features not working

**Solution:**

#### Method 1: Redeploy with Configuration (Recommended)

1. I've created `vercel.json` in your static-site folder
2. Redeploy to Vercel:

```bash
cd static-site
vercel --prod
```

Or via Vercel Dashboard:
- Go to your project settings
- Trigger a new deployment

#### Method 2: Check Build Settings in Vercel Dashboard

1. Go to your Vercel project
2. Settings → General
3. Set these values:
   - **Framework Preset**: Other
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty or set to `.`
   - **Install Command**: Leave empty

4. Click "Save" and redeploy

---

### Issue 2: 404 Errors on Page Refresh

**Symptoms:**
- Direct URLs don't work
- Refreshing pages shows 404

**Solution:**
The `vercel.json` file I created fixes this with clean URLs.

---

### Issue 3: Deployed Wrong Folder

**Symptoms:**
- Site shows directory listing
- Missing files

**Solution:**

Make sure you're deploying from inside the `static-site` folder:

```bash
cd C:\Users\qemployee\mahalakshmi-granites\static-site
vercel --prod
```

NOT from the parent `mahalakshmi-granites` folder!

---

## 🚀 Correct Deployment Steps

### Using Vercel CLI (Recommended):

1. **Install Vercel CLI** (if not installed):
```bash
npm install -g vercel
```

2. **Navigate to static-site folder**:
```bash
cd C:\Users\qemployee\mahalakshmi-granites\static-site
```

3. **Login to Vercel**:
```bash
vercel login
```

4. **Deploy**:
```bash
vercel --prod
```

### Using Vercel Dashboard:

1. **Delete existing deployment** (if needed)
2. **Go to** [vercel.com/new](https://vercel.com/new)
3. **Upload the `static-site` folder** (drag & drop)
4. **Project settings**:
   - Framework Preset: **Other**
   - Root Directory: **Leave as is** (should be `.`)
   - Build Command: **Leave empty**
   - Output Directory: **Leave empty**
5. **Click "Deploy"**

---

## ✅ Verification Checklist

After deployment, test these:

- [ ] Home page loads with styling
- [ ] CSS is applied (gold/bronze colors visible)
- [ ] Navigation works (click Products, Services, etc.)
- [ ] Dark/Light theme toggle works (🌙/☀️ button)
- [ ] Language toggle works (EN/TE button)
- [ ] WhatsApp button visible and clickable
- [ ] Mobile menu works (test on phone or resize browser)
- [ ] All pages accessible
- [ ] Console has no errors (F12 → Console tab)

---

## 🔍 Debugging Steps

### 1. Check Browser Console

Press **F12** → Go to **Console** tab

**Look for errors like:**
- `Failed to load resource: css/styles.css` ❌
- `Failed to load resource: js/main.js` ❌

**If you see these errors:**

Check the Network tab (F12 → Network) and see what's actually loading.

### 2. Check File Paths

In browser DevTools → Network tab, verify:
- ✅ `css/styles.css` returns 200 OK
- ✅ `js/main.js` returns 200 OK
- ✅ All HTML files return 200 OK

### 3. Check Vercel Deployment Logs

1. Go to Vercel Dashboard
2. Click your project
3. Click the deployment
4. Check "Build Logs" and "Function Logs"

Look for errors or warnings.

---

## 💡 Quick Fixes

### Fix 1: Force Clear Cache

After redeploying:
1. Hard refresh: **Ctrl + Shift + R** (Windows) or **Cmd + Shift + R** (Mac)
2. Or clear browser cache completely

### Fix 2: Check Deployed Files

In Vercel Dashboard:
1. Go to your deployment
2. Click "Source" tab
3. Verify all files are present:
   - index.html
   - products.html
   - services.html
   - gallery.html
   - about.html
   - contact.html
   - css/styles.css
   - js/main.js

If files are missing, you deployed the wrong folder!

### Fix 3: Simple Static Deployment

If nothing works, try the absolute simplest approach:

1. Delete the project from Vercel
2. Create new project
3. Import from Git or upload folder
4. Don't change ANY settings
5. Just click Deploy

---

## 🌐 Alternative: Use Netlify Instead

If Vercel continues to have issues:

### Netlify Deployment (Often Easier):

1. Go to [netlify.com](https://netlify.com)
2. Login/Signup
3. **Drag and drop** the entire `static-site` folder
4. Done! It just works! ✨

No configuration needed - Netlify auto-detects static sites.

---

## 📱 Test Your Live Site

Once deployed, test:

```
Your Vercel URL: https://your-project.vercel.app
```

### Quick Test Checklist:

1. **Home page**: Should show hero section with "Mahalakshmi Granites"
2. **Styling**: Gold buttons, dark hero section
3. **Click Products**: Should navigate to products page
4. **Click 🌙 icon**: Should switch to dark theme
5. **Click EN/TE**: Should switch language
6. **Scroll down**: Should see products, features, footer

---

## 🆘 Still Not Working?

### Send me these details:

1. **Vercel URL**: Your deployment URL
2. **Console Errors**: Screenshot of F12 → Console
3. **Network Tab**: Screenshot of F12 → Network (show failed requests)
4. **Deployment Method**: Did you use CLI, GitHub, or drag & drop?

### Common Error Messages & Fixes:

| Error | Solution |
|-------|----------|
| "Failed to load css/styles.css" | Wrong folder deployed - redeploy from static-site |
| "404 Not Found" | Add vercel.json (already created) and redeploy |
| "Blank white page" | Check console for JavaScript errors |
| "Directory listing shown" | Wrong folder - must deploy static-site contents |

---

## ✅ Expected Result

Your site should look like this:

- **Header**: Logo + Navigation + Theme/Language toggles
- **Hero**: Large heading "Mahalakshmi Granites & Marbles"
- **Features**: 4 cards with icons (💎 🏗️ ⚡ 💰)
- **Products**: Product cards with images
- **Stats**: 100+ clients, 150+ projects, etc.
- **Footer**: Company info, links, contact details
- **WhatsApp Button**: Green floating button bottom-right

---

## 📞 Need More Help?

1. Check browser console (F12)
2. Check Vercel deployment logs
3. Try Netlify as alternative
4. Verify you deployed the correct folder

---

**Most Common Fix**: Redeploy from correct folder!

```bash
cd static-site    # ← Make sure you're HERE!
vercel --prod
```

NOT from `mahalakshmi-granites` folder!

