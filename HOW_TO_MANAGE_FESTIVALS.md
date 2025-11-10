# 🎉 Festival Greeting Banner - Complete Guide

## 🎯 **WHAT IS THIS?**

Your website now shows beautiful greeting banners for festivals and special occasions!

**Features:**
- ✨ Beautiful animated banners
- 🎨 Unique themes for each festival
- 🪔 Special Diwali design (ready for tomorrow!)
- 🇮🇳 Republic Day & Independence Day themes
- 🎨 Holi colorful theme
- 🎊 New Year celebration theme
- ⚙️ Easy to add new festivals
- 📅 Automatic date detection
- ❌ User can dismiss banner
- 💾 Remembers if user dismissed

---

## 🪔 **DIWALI BANNER (TOMORROW!)**

### **Ready to Show:**
Your Diwali banner is already configured for **October 20-21, 2025**!

### **What It Shows:**
- 🪔 Animated diyas (lamps)
- ✨ Sparkling effects
- 🌟 Beautiful gradient (orange, gold, red)
- 💫 Floating animation
- 🎯 Greeting message

### **To Activate:**
The banner is **ALREADY ACTIVE** and will show tomorrow automatically!

---

## 📝 **HOW TO MANAGE FESTIVALS**

### **Configuration File:**
All festivals are in: `src/assets/config/festivals.json`

### **Open With:**
- Notepad
- VS Code
- Any text editor

---

## ⚡ **QUICK UPDATES**

### **1. Activate/Deactivate Festival:**

Find the festival and change `"active"`:

```json
{
  "id": "diwali-2025",
  "active": true,      ← true = shows, false = hidden
  "startDate": "2025-10-20",
  "endDate": "2025-10-21"
}
```

---

### **2. Change Dates:**

Update start and end dates:

```json
"startDate": "2025-10-20",    ← Start date (YYYY-MM-DD)
"endDate": "2025-10-21"       ← End date (YYYY-MM-DD)
```

**Note:** Banner shows on all days between start and end dates (inclusive)

---

### **3. Edit Messages:**

Change greeting text:

```json
"greeting": "Happy Diwali!",                                      ← Main heading
"message": "May this Festival of Lights brighten your home...",  ← Main message
"subMessage": "✨ Special Diwali Offers Available ✨"             ← Sub message
```

---

### **4. Change Auto-Dismiss Time:**

At bottom of file, change `autoDismissAfter`:

```json
"settings": {
  "autoDismissAfter": 10000,   ← Time in milliseconds (10000 = 10 seconds)
  "allowDismiss": true          ← Allow user to close banner
}
```

**Examples:**
- `5000` = 5 seconds
- `15000` = 15 seconds
- `30000` = 30 seconds
- `0` = Never auto-dismiss

---

## ➕ **ADD NEW FESTIVAL**

### **Template:**

Copy this and add to `festivals` array:

```json
,
{
  "id": "festival-name-2026",
  "name": "Festival Name",
  "active": true,
  "startDate": "2026-01-01",
  "endDate": "2026-01-01",
  "greeting": "Happy Festival!",
  "message": "Your greeting message here",
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

### **Available Themes:**
- `"diwali"` - Diya lamps, sparkles, orange-gold gradient
- `"republic-day"` - Indian flag colors and animations
- `"independence-day"` - Same as republic day
- `"holi"` - Colorful splashes, rainbow gradient
- `"new-year"` - Confetti, golden gradient

---

## 🎨 **CUSTOMIZE COLORS**

### **Change Theme Colors:**

```json
"colors": {
  "primary": "#FF6B35",     ← Main color (hex code)
  "secondary": "#F7931E",   ← Secondary color
  "accent": "#FFD700"       ← Accent color (gold)
}
```

### **Popular Color Combinations:**

#### Diwali:
```json
"primary": "#FF6B35",    ← Orange
"secondary": "#F7931E",  ← Golden orange
"accent": "#FFD700"      ← Gold
```

#### Christmas:
```json
"primary": "#C41E3A",    ← Red
"secondary": "#165B33",  ← Green
"accent": "#FFD700"      ← Gold
```

#### Holi:
```json
"primary": "#FF006E",    ← Pink
"secondary": "#8338EC",  ← Purple
"accent": "#FFBE0B"      ← Yellow
```

---

## 📅 **PRE-CONFIGURED FESTIVALS**

### **1. Diwali** ✅ ACTIVE FOR TOMORROW
```
Date: October 20-21, 2025
Theme: Diwali (diyas, sparkles)
Status: ACTIVE
```

### **2. Republic Day**
```
Date: January 26, 2026
Theme: Indian flag
Status: Ready (set active when needed)
```

### **3. Independence Day**
```
Date: August 15, 2026
Theme: Indian flag
Status: Ready (set active when needed)
```

### **4. Holi**
```
Date: March 14, 2026
Theme: Colorful splashes
Status: Ready (set active when needed)
```

### **5. New Year**
```
Date: January 1-2, 2026
Theme: Confetti
Status: Ready (set active when needed)
```

---

## 🔧 **COMMON TASKS**

### **Task 1: Activate Next Festival**

1. Open `festivals.json`
2. Find next festival
3. Change `"active": false` to `"active": true`
4. Update dates if needed
5. Save

---

### **Task 2: Extend Festival Duration**

**Example:** Show Diwali banner for 3 days

```json
"startDate": "2025-10-20",
"endDate": "2025-10-22"     ← Changed from 10-21 to 10-22
```

---

### **Task 3: Add Custom Message**

```json
"greeting": "Happy Diwali Sale!",
"message": "Get 20% OFF on all premium granites and marbles!",
"subMessage": "🎊 Limited Time Offer - Visit Today! 🎊"
```

---

### **Task 4: Disable Banner**

**Temporary disable:**
```json
"active": false     ← Banner won't show
```

**Or change auto-dismiss to hide quickly:**
```json
"autoDismissAfter": 3000    ← Hides after 3 seconds
```

---

## 🎯 **EXAMPLES**

### **Example 1: Diwali Sale Promotion**

```json
{
  "id": "diwali-sale-2025",
  "name": "Diwali Sale",
  "active": true,
  "startDate": "2025-10-20",
  "endDate": "2025-10-25",
  "greeting": "Diwali Mega Sale! 🎉",
  "message": "Get FLAT 25% OFF on all Granites & Marbles!",
  "subMessage": "🪔 Visit our showroom today! Limited stock! 🪔",
  "theme": "diwali",
  "colors": {
    "primary": "#FF6B35",
    "secondary": "#F7931E",
    "accent": "#FFD700"
  },
  "emoji": "🎊",
  "showOnPages": ["all"]
}
```

---

### **Example 2: Republic Day Offer**

```json
{
  "id": "republic-day-2026",
  "name": "Republic Day",
  "active": true,
  "startDate": "2026-01-26",
  "endDate": "2026-01-26",
  "greeting": "Happy Republic Day! 🇮🇳",
  "message": "Celebrating 77 years of democracy with special offers!",
  "subMessage": "🎯 15% OFF on all orders - Today Only! 🎯",
  "theme": "republic-day",
  "colors": {
    "primary": "#FF9933",
    "secondary": "#138808",
    "accent": "#000080"
  },
  "emoji": "🇮🇳",
  "showOnPages": ["all"]
}
```

---

### **Example 3: Weekend Special**

```json
{
  "id": "weekend-special-oct",
  "name": "Weekend Special",
  "active": true,
  "startDate": "2025-10-25",
  "endDate": "2025-10-26",
  "greeting": "Weekend Special! 🎉",
  "message": "Visit our showroom this weekend for exclusive deals!",
  "subMessage": "✨ Saturday-Sunday Only ✨",
  "theme": "new-year",
  "colors": {
    "primary": "#FFD700",
    "secondary": "#FF69B4",
    "accent": "#00CED1"
  },
  "emoji": "🎯",
  "showOnPages": ["all"]
}
```

---

## ⚙️ **ADVANCED SETTINGS**

### **Banner Position:**
```json
"settings": {
  "position": "top"     ← Position on screen (currently fixed to top)
}
```

### **Animation Settings:**
```json
"settings": {
  "showAnimation": true    ← Enable/disable animations
}
```

### **Allow User Dismiss:**
```json
"settings": {
  "allowDismiss": true     ← true = show close button
}
```

---

## 📱 **MOBILE RESPONSIVE**

The banner automatically adjusts for mobile devices:
- ✅ Smaller size
- ✅ Stacked layout
- ✅ Larger touch-friendly close button
- ✅ Optimized animations

---

## 🎨 **ANIMATION EFFECTS**

### **Diwali Theme:**
- 🪔 Flickering diyas (lamps)
- ✨ Twinkling sparkles
- 🌟 Glowing text
- 💫 Floating movement

### **Republic/Independence Day:**
- 🇮🇳 Waving flags
- 🎨 Tri-color gradient
- 🎯 Patriotic animations

### **Holi Theme:**
- 🎨 Color splashes
- 🌈 Rainbow effects
- 💥 Bursting colors
- ✨ Shimmer effects

### **New Year:**
- 🎊 Falling confetti
- ✨ Sparkles
- 🎉 Celebration vibes
- 💫 Rotating animations

---

## ⚠️ **IMPORTANT RULES**

### ✅ **DO:**
- Keep date format as `YYYY-MM-DD`
- Use double quotes `"..."`
- Set `active: true` to show banner
- Test after saving
- Make backup before editing

### ❌ **DON'T:**
- Change theme names (use existing ones)
- Remove required fields
- Use wrong date format
- Forget commas between items
- Delete emoji field

---

## 🔍 **TROUBLESHOOTING**

### **Banner Not Showing?**

1. **Check Active Status:**
   ```json
   "active": true    ← Must be true
   ```

2. **Check Dates:**
   ```json
   "startDate": "2025-10-20",   ← Today's date should be between
   "endDate": "2025-10-21"      ← start and end dates
   ```

3. **Check Browser:**
   - Hard refresh: `Ctrl + Shift + R`
   - Clear cache
   - Check console for errors

4. **Check If Already Dismissed:**
   - Banner remembers if user closed it
   - Clear browser localStorage
   - Or use incognito mode to test

---

### **Banner Shows on Wrong Dates?**

Check date format:
```json
✅ Correct: "2025-10-20"
❌ Wrong: "20-10-2025"
❌ Wrong: "10/20/2025"
```

---

### **Animations Not Working?**

Check animations setting:
```json
"settings": {
  "showAnimation": true    ← Must be true
}
```

---

## 📊 **BEST PRACTICES**

### **Update Schedule:**

#### **1 Week Before Festival:**
- Set dates
- Write messages
- Set `active: true`
- Test banner

#### **Day Before Festival:**
- Verify dates
- Check messages
- Test on mobile
- Confirm activation

#### **Festival Day:**
- Monitor banner
- Check customer feedback
- Make adjustments if needed

#### **After Festival:**
- Set `active: false`
- Keep for next year
- Update year in dates

---

### **Message Guidelines:**

#### **Greeting:** (Short & Catchy)
```json
"greeting": "Happy Diwali!"
"greeting": "Happy New Year 2026!"
"greeting": "Diwali Sale is Here!"
```

#### **Message:** (Clear & Informative)
```json
"message": "May this festival bring joy and prosperity to your home!"
"message": "Get 25% OFF on all premium stones!"
```

#### **Sub-Message:** (Call to Action)
```json
"subMessage": "✨ Visit our showroom today! ✨"
"subMessage": "🎊 Limited time offer! 🎊"
"subMessage": "🪔 Call: +91 97001 76998 🪔"
```

---

## 🎯 **FESTIVAL CALENDAR 2026**

### **Upcoming Festivals:**

| Festival | Month | Configure By | Theme |
|----------|-------|--------------|-------|
| New Year | Jan 1-2 | Dec 25 | new-year |
| Republic Day | Jan 26 | Jan 20 | republic-day |
| Holi | Mar 14 | Mar 10 | holi |
| Independence | Aug 15 | Aug 10 | independence-day |
| Ganesh Chaturthi | Sep 2 | Aug 28 | diwali |
| Diwali | Oct 20-21 | Oct 15 | diwali |
| Christmas | Dec 25 | Dec 20 | new-year |

---

## 📝 **CHECKLIST**

### **Before Activating Banner:**

- [ ] Dates are correct (YYYY-MM-DD)
- [ ] Messages are spelled correctly
- [ ] `active: true` is set
- [ ] Theme matches festival
- [ ] Emoji is appropriate
- [ ] Colors are correct
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Auto-dismiss time is set
- [ ] Backup created

---

## 🚀 **QUICK REFERENCE**

### **File Location:**
```
src/assets/config/festivals.json
```

### **To Activate Diwali (Tomorrow):**
```
Already activated! ✅
Will show automatically on Oct 20-21
```

### **To Add New Festival:**
1. Copy existing festival block
2. Change ID, name, dates
3. Update messages
4. Set `active: true`
5. Save

### **To Deactivate:**
```json
"active": false
```

### **To Test:**
1. Save file
2. Refresh website (Ctrl + Shift + R)
3. Check banner appears
4. Test close button
5. Test on mobile

---

## 💡 **PRO TIPS**

1. **Reuse for Next Year:**
   - Keep festival configs
   - Just update year in dates
   - Saves time!

2. **Multiple Banners:**
   - Only one shows at a time
   - System picks first active festival

3. **Special Offers:**
   - Add offer details in subMessage
   - Include phone number
   - Add urgency ("Today Only!")

4. **Test Mode:**
   - Use today's date to test
   - Then change to actual date

5. **Backup:**
   - Copy file before editing
   - Easy to restore if needed

---

## ✅ **SUMMARY**

### **What You Have:**
✅ Beautiful animated festival banners  
✅ 5 pre-configured festivals  
✅ Diwali banner ready for tomorrow  
✅ Easy-to-edit JSON configuration  
✅ Automatic date detection  
✅ Mobile responsive  
✅ User can dismiss  

### **What You Can Do:**
✅ Activate/deactivate any festival  
✅ Change dates  
✅ Edit messages  
✅ Add new festivals  
✅ Customize colors  
✅ Set auto-dismiss time  

### **Diwali Banner Status:**
🪔 **READY FOR TOMORROW (Oct 20-21, 2025)!**  
Will show automatically with beautiful animations!

---

**Your festival greeting system is ready! Happy Diwali! 🪔✨**

**Questions?** Just edit `festivals.json` and save!  
**Need help?** Check examples in this guide!  
**Ready to test?** Refresh your website tomorrow!




