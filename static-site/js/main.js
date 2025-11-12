// ====================================
// MAHALAKSHMI GRANITES & MARBLES
// Main JavaScript File
// ====================================

// ============ CONFIGURATION ============

const translations = {
  en: {
    'Mahalakshmi Granites & Marbles': 'Mahalakshmi Granites & Marbles',
    'Transform Your Space with Premium Natural Stones': 'Transform Your Space with Premium Natural Stones',
    'Explore Products': 'Explore Products',
    'Get Quote': 'Get Quote',
    'Why Choose Us': 'Why Choose Us',
    'Experience excellence in every stone, precision in every installation': 'Experience excellence in every stone, precision in every installation',
    'Premium Quality': 'Premium Quality',
    '100% authentic granites and marbles from trusted suppliers': '100% authentic granites and marbles from trusted suppliers',
    'Expert Installation': 'Expert Installation',
    'Professional installation services with attention to detail': 'Professional installation services with attention to detail',
    'Quick Delivery': 'Quick Delivery',
    'Fast and reliable delivery across Andhra Pradesh': 'Fast and reliable delivery across Andhra Pradesh',
    'Best Prices': 'Best Prices',
    'Competitive pricing with no compromise on quality': 'Competitive pricing with no compromise on quality',
    'Popular Collections': 'Popular Collections',
    'Discover our most sought-after granites and marbles': 'Discover our most sought-after granites and marbles',
    'View All Products': 'View All Products',
    'Happy Clients': 'Happy Clients',
    'Projects Completed': 'Projects Completed',
    'Product Varieties': 'Product Varieties',
    'Years of Expertise': 'Years of Expertise',
    'Ready to Transform Your Space?': 'Ready to Transform Your Space?',
    'Get in touch with us today for a free consultation and quote': 'Get in touch with us today for a free consultation and quote',
    'Contact Us Now': 'Contact Us Now'
  },
  te: {
    'Mahalakshmi Granites & Marbles': 'మహాలక్ష్మి గ్రానైట్స్ & మార్బుల్స్',
    'Transform Your Space with Premium Natural Stones': 'ప్రీమియం నేచురల్ స్టోన్స్ తో మీ స్పేస్ ని మార్చండి',
    'Explore Products': 'ఉత్పత్తులను చూడండి',
    'Get Quote': 'కోట్ పొందండి',
    'Why Choose Us': 'మమ్మల్ని ఎందుకు ఎంచుకోవాలి',
    'Experience excellence in every stone, precision in every installation': 'ప్రతి రాయిలో శ్రేష్ఠత, ప్రతి ఇన్స్టాలేషన్ లో ఖచ్చితత్వం',
    'Premium Quality': 'ప్రీమియం నాణ్యత',
    '100% authentic granites and marbles from trusted suppliers': 'విశ్వసనీయ సరఫరాదారుల నుండి 100% ప్రామాణికమైన గ్రానైట్స్ మరియు మార్బుల్స్',
    'Expert Installation': 'నిపుణుల ఇన్స్టాలేషన్',
    'Professional installation services with attention to detail': 'వివరాలను శ్రద్ధగా పరిగణిస్తూ వృత్తిపరమైన ఇన్స్టాలేషన్ సేవలు',
    'Quick Delivery': 'త్వరితమైన డెలివరీ',
    'Fast and reliable delivery across Andhra Pradesh': 'ఆంధ్ర ప్రదేశ్ అంతటా వేగవంతమైన మరియు నమ్మదగిన డెలివరీ',
    'Best Prices': 'ఉత్తమ ధరలు',
    'Competitive pricing with no compromise on quality': 'నాణ్యతపై రాజీలేకుండా పోటీ ధరలు',
    'Popular Collections': 'ప్రసిద్ధ సేకరణలు',
    'Discover our most sought-after granites and marbles': 'మా అత్యంత కోరిన గ్రానైట్స్ మరియు మార్బుల్స్ ను కనుగొనండి',
    'View All Products': 'అన్ని ఉత్పత్తులను చూడండి',
    'Happy Clients': 'సంతృప్త కస్టమర్లు',
    'Projects Completed': 'పూర్తయిన ప్రాజెక్ట్లు',
    'Product Varieties': 'ఉత్పత్తి రకాలు',
    'Years of Expertise': 'సంవత్సరాల అనుభవం',
    'Ready to Transform Your Space?': 'మీ స్పేస్ ను మార్చడానికి సిద్ధంగా ఉన్నారా?',
    'Get in touch with us today for a free consultation and quote': 'ఉచిత సంప్రదింపు మరియు కోట్ కోసం ఈ రోజే మాతో సంప్రదించండి',
    'Contact Us Now': 'ఇప్పుడే సంప్రదించండి'
  }
};

const festivals = [
  {
    name: 'Diwali',
    startDate: '2025-10-20',
    endDate: '2025-11-05',
    title: {
      en: '✨ Happy Diwali! ✨',
      te: '✨ దీపావళి శుభాకాంక్షలు! ✨'
    },
    message: {
      en: 'Illuminate your home with our premium granites & marbles - Special festive offers!',
      te: 'మా ప్రీమియం గ్రానైట్స్ & మార్బుల్స్ తో మీ ఇంటిని వెలిగించండి - ప్రత్యేక పండుగ ఆఫర్లు!'
    },
    theme: 'diwali'
  },
  {
    name: 'Ugadi',
    startDate: '2025-03-25',
    endDate: '2025-04-05',
    title: {
      en: '🌸 Happy Ugadi! 🌸',
      te: '🌸 ఉగాది శుభాకాంక్షలు! 🌸'
    },
    message: {
      en: 'Begin the new year with beautiful stone designs - Festival discounts available!',
      te: 'అందమైన రాతి డిజైన్లతో కొత్త సంవత్సరాన్ని ప్రారంభించండి - పండుగ తగ్గింపులు అందుబాటులో!'
    },
    theme: 'ugadi'
  },
  {
    name: 'Sankranti',
    startDate: '2025-01-12',
    endDate: '2025-01-18',
    title: {
      en: '🪁 Happy Sankranti! 🪁',
      te: '🪁 సంక్రాంతి శుభాకాంక్షలు! 🪁'
    },
    message: {
      en: 'Celebrate the harvest festival with our premium stone collection!',
      te: 'మా ప్రీమియం రాతి సేకరణతో పంట పండుగను జరుపుకోండి!'
    },
    theme: 'sankranti'
  }
];

// ============ STATE MANAGEMENT ============

let currentLanguage = localStorage.getItem('language') || 'en';
let isDarkTheme = localStorage.getItem('theme') === 'dark';

// ============ DOM ELEMENTS ============

const body = document.body;
const header = document.getElementById('header');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');
const langSwitch = document.getElementById('langSwitch');
const currentLangElement = document.getElementById('currentLang');
const announcementBar = document.getElementById('announcementBar');
const announcementClose = document.getElementById('announcementClose');
const festivalBanner = document.getElementById('festivalBanner');
const festivalTitle = document.getElementById('festivalTitle');
const festivalMessage = document.getElementById('festivalMessage');
const currentYear = document.getElementById('currentYear');

// ============ INITIALIZATION ============

function init() {
  // Set current year
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Initialize theme
  if (isDarkTheme) {
    body.classList.add('dark-theme');
    updateThemeIcon();
  }

  // Initialize language
  updateLanguage();
  if (currentLangElement) {
    currentLangElement.textContent = currentLanguage.toUpperCase();
  }

  // Check for active festival
  checkActiveFestival();

  // Check announcement bar state
  const announcementHidden = localStorage.getItem('announcementHidden');
  if (announcementHidden) {
    hideAnnouncementBar();
  } else {
    showAnnouncementBar();
  }

  // Setup event listeners
  setupEventListeners();

  // Scroll animations
  setupScrollAnimations();
}

// ============ EVENT LISTENERS ============

function setupEventListeners() {
  // Mobile menu toggle
  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileMenu);
  }

  // Theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Language toggle
  if (langSwitch) {
    langSwitch.addEventListener('click', toggleLanguage);
  }

  // Announcement bar close
  if (announcementClose) {
    announcementClose.addEventListener('click', () => {
      hideAnnouncementBar();
      localStorage.setItem('announcementHidden', 'true');
    });
  }

  // Sticky header on scroll
  window.addEventListener('scroll', handleScroll);

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
      navMenu.classList.remove('active');
      mobileToggle.classList.remove('active');
    }
  });
}

// ============ MOBILE MENU ============

function toggleMobileMenu() {
  navMenu.classList.toggle('active');
  mobileToggle.classList.toggle('active');
}

// ============ THEME TOGGLE ============

function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  body.classList.toggle('dark-theme');
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  updateThemeIcon();
}

function updateThemeIcon() {
  const themeIcon = themeToggle.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = isDarkTheme ? '☀️' : '🌙';
  }
}

// ============ LANGUAGE TOGGLE ============

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'te' : 'en';
  localStorage.setItem('language', currentLanguage);
  
  if (currentLangElement) {
    currentLangElement.textContent = currentLanguage.toUpperCase();
  }
  
  updateLanguage();
  checkActiveFestival(); // Update festival banner text
}

function updateLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  
  elements.forEach(element => {
    const key = element.getAttribute(`data-${currentLanguage}`);
    if (key) {
      element.textContent = key;
    }
  });
}

// ============ FESTIVAL BANNER ============

function checkActiveFestival() {
  const today = new Date();
  const currentDate = today.toISOString().split('T')[0];
  
  const activeFestival = festivals.find(festival => {
    return currentDate >= festival.startDate && currentDate <= festival.endDate;
  });
  
  if (activeFestival && festivalBanner) {
    showFestivalBanner(activeFestival);
  } else if (festivalBanner) {
    festivalBanner.style.display = 'none';
  }
}

function showFestivalBanner(festival) {
  if (!festivalBanner) return;
  
  festivalTitle.textContent = festival.title[currentLanguage];
  festivalMessage.textContent = festival.message[currentLanguage];
  
  // Apply theme-specific styling
  festivalBanner.className = `festival-banner festival-${festival.theme}`;
  festivalBanner.style.display = 'block';
}

// ============ ANNOUNCEMENT BAR ============

function hideAnnouncementBar() {
  if (announcementBar) {
    announcementBar.style.display = 'none';
    body.classList.remove('has-announcement');
  }
}

function showAnnouncementBar() {
  if (announcementBar) {
    announcementBar.style.display = 'flex';
    body.classList.add('has-announcement');
  }
}

// ============ SCROLL EFFECTS ============

function handleScroll() {
  // Sticky header
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    '.feature-card, .product-card, .stat-item'
  );

  animateElements.forEach(el => observer.observe(el));
}

// ============ FORM HANDLING (for contact page) ============

function handleContactForm(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  console.log('Form submitted:', data);
  
  // Show success message
  alert(currentLanguage === 'en' 
    ? 'Thank you! We will contact you soon.' 
    : 'ధన్యవాదాలు! మేము త్వరలో మిమ్మల్ని సంప్రదిస్తాము.'
  );
  
  event.target.reset();
}

// ============ SMOOTH SCROLL ============

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============ START APP ============

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export functions for other pages
window.MahalakshmiGranites = {
  toggleTheme,
  toggleLanguage,
  handleContactForm,
  currentLanguage: () => currentLanguage,
  isDarkTheme: () => isDarkTheme
};

