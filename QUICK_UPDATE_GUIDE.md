# ⚡ QUICK UPDATE GUIDE - Cheat Sheet

## 🎯 **5-MINUTE UPDATES**

---

## 📞 **UPDATE PHONE NUMBER**

**File:** `src/assets/config/business-info.json`

```json
"phone": "+91 YOUR_NUMBER_HERE"
```
**Updates:** Contact page, Footer, WhatsApp button

---

## 📧 **UPDATE EMAIL**

**File:** `src/assets/config/business-info.json`

```json
"email": "your@email.com"
```
**Updates:** Contact page, Footer

---

## ⏰ **UPDATE BUSINESS HOURS**

**File:** `src/assets/config/business-info.json`

```json
"weekdays": "Mon - Sat: 9:00 AM - 7:00 PM",
"sunday": "Sunday: 10:00 AM - 5:00 PM"
```
**Updates:** Contact page

---

## 📊 **UPDATE STATISTICS**

**File:** `src/assets/config/business-info.json`

```json
"statistics": {
  "clients": "100+",     ← Change this
  "projects": "150+",    ← Change this
  "products": "22+",     ← Change this
  "experience": "2"      ← Change this
}
```
**Updates:** Homepage, About page

---

## ➕ **ADD NEW PRODUCT**

**File:** `src/assets/config/products.json`

**Copy and paste this template:**

```json
,
{
  "id": 23,                                    ← New unique number
  "name": "Product Name",                      ← Product name
  "category": "granite",                       ← "granite" or "marble"
  "description": "Description here",           ← Description
  "origin": "Location, India",                 ← Origin
  "finish": "Polished",                        ← Finish type
  "features": ["Feature 1", "Feature 2"],      ← Features list
  "popular": false,                            ← true = shows on homepage
  "image": "image-name.jpg"                    ← Image filename
}
```

**Add to:**
- Granites section: After last granite, before `]`
- Marbles section: After last marble, before `]`

---

## ⭐ **MAKE PRODUCT POPULAR** (Show on Homepage)

**File:** `src/assets/config/products.json`

**Find your product and change:**
```json
"popular": false    ← Not on homepage
```
**To:**
```json
"popular": true     ← Shows on homepage!
```

---

## ❌ **REMOVE PRODUCT**

**File:** `src/assets/config/products.json`

1. Find the product block `{ ... }`
2. Delete entire block including comma
3. Save

---

## 📝 **UPDATE HOMEPAGE TEXT**

**File:** `src/assets/config/content.json`

```json
"hero": {
  "title": "Your Title",              ← Main heading
  "subtitle": "Your Subtitle",        ← Subheading
  "description": "Your description"   ← Description text
}
```

---

## 🏢 **UPDATE ABOUT PAGE**

**File:** `src/assets/config/content.json`

```json
"mission": "Your mission statement",
"vision": "Your vision statement"
```

---

## 🔍 **COMMON MISTAKES**

### ❌ WRONG:
```json
phone: +91 1234567890          ← Missing quotes
"email" info@email.com         ← Missing colon
"city": "Guntur"               ← Missing comma (if not last)
'phone': '123'                 ← Single quotes (wrong)
```

### ✅ CORRECT:
```json
"phone": "+91 1234567890",
"email": "info@email.com",
"city": "Guntur"
```

---

## 🛠️ **BEFORE YOU SAVE**

- [ ] All quotes in place `"..."`
- [ ] Commas between items (not after last)
- [ ] Brackets match `{}` and `[]`
- [ ] Backup created
- [ ] Validated (optional)

---

## ⚠️ **IF SOMETHING BREAKS**

1. **Press Ctrl+Z** (Undo)
2. **Restore backup** file
3. **Validate** at https://jsonlint.com
4. **Fix errors** and save again

---

## 📍 **FILE LOCATIONS**

```
📁 src/assets/config/
├── 📄 business-info.json    (Contact, stats, location)
├── 📄 products.json         (All products)
└── 📄 content.json          (Website text)
```

---

## 🎯 **QUICK STEPS**

1. **Open** JSON file (Notepad or VS Code)
2. **Find** text to change
3. **Edit** between quotes `"..."`
4. **Save** (Ctrl+S)
5. **Refresh** website

---

## 💡 **PRO TIPS**

### ✅ Always:
- Make backup before editing
- Test after saving
- Keep structure intact

### ❌ Never:
- Remove quotes or brackets
- Add comma after last item
- Use single quotes

---

## 📊 **UPDATE FREQUENCY**

### Daily:
- Check for errors

### Weekly:
- Update product availability

### Monthly:
- Update statistics
- Add new products
- Review content

### As Needed:
- Contact information
- Business hours
- Special announcements

---

## 🚀 **3-STEP UPDATE**

```
STEP 1: Open file
↓
STEP 2: Edit value
↓
STEP 3: Save & Refresh
```

**That's it! ✅**

---

## 📞 **HELP**

**Stuck?** Read full guide: `HOW_TO_UPDATE_WEBSITE_CONTENT.md`

**Validate JSON:** https://jsonlint.com

**Format JSON:** https://jsonformatter.org

---

**Remember: You CAN'T break anything permanently - you can always undo or restore backup!** 💪

**Print this page and keep it handy for quick reference!** 📋




