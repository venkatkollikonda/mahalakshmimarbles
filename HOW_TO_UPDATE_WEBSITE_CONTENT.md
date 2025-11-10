# 📝 How to Update Website Content (No Coding Required!)

## 🎯 **For Non-Technical Users**

You can now update your website content by simply editing JSON files - **no coding knowledge needed!**

---

## 📁 **Configuration Files Location**

All content is stored in: `src/assets/config/`

```
src/assets/config/
├── business-info.json    (Contact details, business info)
├── products.json         (All granite & marble products)
└── content.json          (Website text content)
```

---

## 🔧 **HOW TO EDIT**

### **Step 1: Open the File**
1. Go to `src/assets/config/` folder
2. Right-click the JSON file you want to edit
3. Open with **Notepad** or **VS Code**

### **Step 2: Edit the Values**
- Change text between the quotation marks `"..."`
- Keep the structure intact
- Don't remove commas or brackets

### **Step 3: Save**
- Press Ctrl+S to save
- The website will automatically update!

---

## 📋 **WHAT YOU CAN UPDATE**

### 1️⃣ **BUSINESS INFORMATION** (`business-info.json`)

#### ✏️ Update Phone Number:
```json
"phone": "+91 97001 76998"    ← Change this number
```

#### ✏️ Update Email:
```json
"email": "info@mahalakshmigranites.com"   ← Change email
```

#### ✏️ Update Location:
```json
"city": "Guntur",              ← Change city
"state": "Andhra Pradesh"      ← Change state
```

#### ✏️ Update Business Hours:
```json
"weekdays": "Mon - Sat: 9:00 AM - 7:00 PM"    ← Change hours
```

#### ✏️ Update Statistics:
```json
"clients": "100+",    ← Change number
"projects": "150+",   ← Change number
```

---

### 2️⃣ **PRODUCTS** (`products.json`)

#### ✏️ Add New Product:
Copy this template and add to granites or marbles section:

```json
{
  "id": 23,
  "name": "Product Name Here",
  "category": "granite",   ← or "marble"
  "description": "Product description here",
  "origin": "Location, India",
  "finish": "Polished",    ← or "Leather/Lapotra"
  "features": ["Feature 1", "Feature 2", "Feature 3"],
  "popular": false,        ← true for homepage display
  "image": "image-name.jpg"
}
```

#### ✏️ Edit Existing Product:
Find the product and change any value:
```json
"name": "Black Pearl Granite"   ← Change name
"description": "New description"  ← Change description
"origin": "New location"         ← Change origin
```

#### ✏️ Mark Product as Popular (shows on homepage):
```json
"popular": true    ← Shows on homepage
"popular": false   ← Doesn't show on homepage
```

#### ✏️ Remove Product:
Delete the entire product block (from `{` to `}` including the comma)

---

### 3️⃣ **WEBSITE CONTENT** (`content.json`)

#### ✏️ Update Homepage Hero Text:
```json
"title": "Premium Granites & Marbles"        ← Change title
"subtitle": "Transform Your Space..."        ← Change subtitle
"description": "Discover our exquisite..."   ← Change description
```

#### ✏️ Update Features Section:
```json
{
  "icon": "🎯",
  "title": "Premium Quality",           ← Change title
  "description": "We source the..."     ← Change description
}
```

#### ✏️ Update About Page Content:
```json
"mission": "To provide our customers..."   ← Change mission
"vision": "To be the most trusted..."      ← Change vision
```

#### ✏️ Update Footer Links:
```json
{"label": "Home", "url": "/"}      ← Change label or URL
{"label": "Products", "url": "/products"}
```

---

## 📝 **EXAMPLES**

### Example 1: Change Phone Number
**File:** `business-info.json`

**Before:**
```json
"phone": "+91 97001 76998"
```

**After:**
```json
"phone": "+91 98765 43210"
```

---

### Example 2: Add New Granite
**File:** `products.json`

Add this to the `granites` array (after the last granite, before `]`):

```json
,
{
  "id": 23,
  "name": "Red Granite",
  "category": "granite",
  "description": "Beautiful red granite with unique patterns",
  "origin": "India",
  "finish": "Polished",
  "features": ["Heat Resistant", "Unique Color", "Durable"],
  "popular": false,
  "image": "red-granite.jpg"
}
```

**Important:** Add a comma `,` before the new entry if needed!

---

### Example 3: Update Business Hours
**File:** `business-info.json`

**Before:**
```json
"weekdays": "Mon - Sat: 9:00 AM - 7:00 PM"
```

**After:**
```json
"weekdays": "Mon - Sat: 10:00 AM - 8:00 PM"
```

---

### Example 4: Change Statistics
**File:** `business-info.json`

**Before:**
```json
"clients": "100+",
"projects": "150+"
```

**After:**
```json
"clients": "200+",
"projects": "300+"
```

---

## ⚠️ **IMPORTANT RULES**

### ✅ DO:
- ✅ Keep quotation marks `"..."`
- ✅ Keep commas `,` between items
- ✅ Keep brackets `{}` and `[]`
- ✅ Save the file after changes
- ✅ Check if website updated (refresh browser)

### ❌ DON'T:
- ❌ Remove quotation marks
- ❌ Remove commas between items
- ❌ Remove brackets
- ❌ Add extra commas at the end
- ❌ Use single quotes `'` (use double `"`)

---

## 🔍 **JSON SYNTAX GUIDE**

### Basic Structure:
```json
{
  "key": "value",          ← Text value
  "number": 123,           ← Number (no quotes)
  "array": ["item1", "item2"],    ← List of items
  "nested": {              ← Another object
    "key": "value"
  }
}
```

### Common Mistakes:

❌ **Wrong:**
```json
"phone": +91 97001 76998    ← Missing quotes
"email" info@email.com      ← Missing colon and quotes
"city": "Guntur"            ← Missing comma (if not last item)
```

✅ **Correct:**
```json
"phone": "+91 97001 76998",
"email": "info@email.com",
"city": "Guntur"
```

---

## 🛠️ **TOOLS TO USE**

### **Option 1: Notepad (Windows)**
1. Right-click JSON file → Open with → Notepad
2. Make changes
3. File → Save (Ctrl+S)

### **Option 2: VS Code (Better)**
1. Install VS Code (free): https://code.visualstudio.com
2. Open folder `src/assets/config/`
3. Edit files (it will highlight errors!)
4. Save (Ctrl+S)

### **Option 3: Online JSON Validator**
- Copy file content
- Paste at: https://jsonlint.com
- Check for errors
- Copy back if valid

---

## 🚀 **QUICK TASKS**

### Task 1: Update Phone Number
1. Open `business-info.json`
2. Find `"phone":`
3. Change the number
4. Save
5. Refresh website

### Task 2: Add New Product
1. Open `products.json`
2. Go to `granites` or `marbles` section
3. Copy last product block
4. Paste below it (add comma before)
5. Change ID, name, description
6. Save
7. Refresh website

### Task 3: Update Statistics
1. Open `business-info.json`
2. Find `"statistics":`
3. Change numbers
4. Save
5. Refresh website

---

## 📞 **NEED HELP?**

### If Something Breaks:

1. **Don't Panic!**
2. **Undo** (Ctrl+Z) your changes
3. **Check for:**
   - Missing commas
   - Missing quotation marks
   - Extra brackets
4. **Validate JSON:** Paste at https://jsonlint.com
5. **Save again**

### Common Errors:

**Error:** "Unexpected token"
- **Fix:** Check for missing comma or quote

**Error:** "JSON parsing failed"
- **Fix:** Validate at jsonlint.com

**Error:** Content doesn't update
- **Fix:** Hard refresh browser (Ctrl+Shift+R)

---

## 🎓 **LEARNING RESOURCES**

### JSON Basics:
- JSON Tutorial: https://www.w3schools.com/js/js_json_intro.asp
- JSON Validator: https://jsonlint.com
- JSON Formatter: https://jsonformatter.org

---

## ✅ **CHECKLIST BEFORE SAVING**

- [ ] All quotation marks in place `"..."`
- [ ] Commas between items (but not after last item)
- [ ] Brackets match `{` has `}`, `[` has `]`
- [ ] No extra commas at end of lists
- [ ] File validated (optional but recommended)
- [ ] Backup created (copy file before editing)

---

## 🎯 **SUMMARY**

### What You Can Update Without Coding:

✅ Phone numbers  
✅ Email addresses  
✅ Business hours  
✅ Location details  
✅ Statistics (clients, projects)  
✅ Products (add/remove/edit)  
✅ Product descriptions  
✅ Features & benefits  
✅ Homepage text  
✅ About page content  
✅ Services descriptions  
✅ Footer links  
✅ Social media links  

### What You CAN'T Change (needs developer):
❌ Website design/colors  
❌ Page layout  
❌ Navigation structure  
❌ Forms functionality  
❌ Advanced features  

---

**Remember:** Always make a backup copy before editing! Copy the file, rename it to `filename-backup.json`, then edit the original.

**Need Developer Help?** Contact your web developer for:
- Design changes
- New pages
- Functionality changes
- Complex updates

---

**This system makes it easy to keep your website updated without touching any code!** 🎉




