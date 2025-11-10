# 🎉 Festival Banner - Quick Reference

## 🪔 **DIWALI BANNER - READY FOR TOMORROW!**

### Status: ✅ **ACTIVE**
- **Shows:** October 20-21, 2025
- **Theme:** Beautiful Diwali theme with diyas & sparkles
- **Auto-dismiss:** After 10 seconds
- **User can close:** Yes

---

## ⚡ **QUICK TASKS**

### **Activate/Deactivate Banner**

**File:** `src/assets/config/festivals.json`

```json
"active": true     ← Banner shows
"active": false    ← Banner hidden
```

---

### **Change Dates**

```json
"startDate": "2025-10-20",    ← Start date
"endDate": "2025-10-21"       ← End date
```

Format: `YYYY-MM-DD` (Year-Month-Day)

---

### **Edit Messages**

```json
"greeting": "Happy Diwali!",
"message": "May this Festival of Lights...",
"subMessage": "✨ Special Offers ✨"
```

---

### **Change Auto-Dismiss Time**

```json
"settings": {
  "autoDismissAfter": 10000    ← Milliseconds (10000 = 10 sec)
}
```

---

## 🎨 **AVAILABLE THEMES**

| Theme | Used For | Animations |
|-------|----------|------------|
| `diwali` | Diwali, Ganesh Chaturthi | Diyas, sparkles |
| `republic-day` | Republic Day | Flags, tri-color |
| `independence-day` | Independence Day | Flags, tri-color |
| `holi` | Holi | Color splashes |
| `new-year` | New Year, Christmas | Confetti |

---

## 📋 **PRE-CONFIGURED FESTIVALS**

### ✅ **Diwali** (ACTIVE)
- Oct 20-21, 2025
- Theme: Diwali

### **Republic Day** (Ready)
- Jan 26, 2026
- Theme: republic-day
- To activate: Set `"active": true`

### **Independence Day** (Ready)
- Aug 15, 2026
- Theme: independence-day
- To activate: Set `"active": true`

### **Holi** (Ready)
- Mar 14, 2026
- Theme: holi
- To activate: Set `"active": true`

### **New Year** (Ready)
- Jan 1-2, 2026
- Theme: new-year
- To activate: Set `"active": true`

---

## ➕ **ADD NEW FESTIVAL (2 MINUTES)**

1. Open `src/assets/config/festivals.json`
2. Copy this template:

```json
,
{
  "id": "your-festival-2026",
  "name": "Festival Name",
  "active": true,
  "startDate": "2026-01-01",
  "endDate": "2026-01-01",
  "greeting": "Happy Festival!",
  "message": "Your message here",
  "subMessage": "✨ Your sub-message ✨",
  "theme": "diwali",
  "colors": {
    "primary": "#FF6B35",
    "secondary": "#F7931E",
    "accent": "#FFD700"
  },
  "emoji": "🎉",
  "showOnPages": ["all"]
}
```

3. Paste into `festivals` array
4. Edit values
5. Save

---

## 🔧 **COMMON UPDATES**

### **Update for Diwali Sale:**

```json
{
  "greeting": "Diwali Mega Sale! 🎊",
  "message": "Get FLAT 25% OFF on all Granites & Marbles!",
  "subMessage": "🪔 Limited Time - Visit Today! 🪔"
}
```

### **Extend Banner Duration:**

```json
"startDate": "2025-10-20",
"endDate": "2025-10-25"     ← Extended to 5 days
```

### **Quick Auto-Dismiss:**

```json
"autoDismissAfter": 5000    ← Hides after 5 seconds
```

### **Never Auto-Dismiss:**

```json
"autoDismissAfter": 0       ← User must close manually
```

---

## ⚠️ **TROUBLESHOOTING**

### **Banner Not Showing?**

1. Check: `"active": true`
2. Check dates are today
3. Refresh browser: `Ctrl + Shift + R`
4. Clear browser cache
5. Check if you dismissed it (use incognito to test)

### **Wrong Dates?**

Use format: `YYYY-MM-DD`
- ✅ `"2025-10-20"`
- ❌ `"20-10-2025"`
- ❌ `"10/20/2025"`

---

## 📅 **FESTIVAL CALENDAR**

| Date | Festival | Action Needed |
|------|----------|---------------|
| Oct 20-21 | **Diwali** | ✅ Active |
| Jan 1-2 | New Year | Set active |
| Jan 26 | Republic Day | Set active |
| Mar 14 | Holi | Set active |
| Aug 15 | Independence | Set active |

---

## 💡 **PRO TIPS**

1. **Set up 1 week before** festival
2. **Test in incognito mode** to see banner again
3. **Use emoji** for visual appeal
4. **Keep messages short** and clear
5. **Include call-to-action** in subMessage

---

## 📝 **EXAMPLES**

### **Example 1: Weekend Special**

```json
{
  "id": "weekend-oct",
  "active": true,
  "startDate": "2025-10-25",
  "endDate": "2025-10-26",
  "greeting": "Weekend Special! 🎉",
  "message": "Visit us this weekend for exclusive deals!",
  "subMessage": "📞 Call: +91 97001 76998",
  "theme": "new-year",
  "emoji": "🎯"
}
```

### **Example 2: Month-End Sale**

```json
{
  "greeting": "Month-End Clearance! 🎊",
  "message": "Huge discounts on selected granite & marble varieties!",
  "subMessage": "🏃 Hurry! Limited Stock Available!"
}
```

---

## ✅ **CHECKLIST**

Before activating:
- [ ] Dates are correct
- [ ] Messages spell-checked
- [ ] `active: true`
- [ ] Theme selected
- [ ] Emoji added
- [ ] Tested on desktop
- [ ] Tested on mobile

---

## 📞 **FILE LOCATION**

```
src/assets/config/festivals.json
```

---

## 🚀 **TOMORROW (DIWALI)**

Your beautiful Diwali banner will automatically show with:
- 🪔 Flickering diya animations
- ✨ Twinkling sparkles
- 🌟 Golden gradient colors
- 💫 Floating effect
- 🎯 Greeting message

**No action needed - it's ready!** 🎉

---

**For detailed guide:** Read `HOW_TO_MANAGE_FESTIVALS.md`

**Questions?** Edit `festivals.json` and save!

**Happy Diwali!** 🪔✨




