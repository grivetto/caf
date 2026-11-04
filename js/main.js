// ============================================
// CAF Italia - Multilingual Support (IT / EN / ES / TH)
// ============================================

const CAF_LANG_META = {
  it: {
    code: 'IT',
    flag: 'https://flagcdn.com/w40/it.png',
    alt: 'Italiano',
    title: 'Switch to English',
    next: 'en'
  },
  en: {
    code: 'EN',
    flag: 'https://flagcdn.com/w40/gb.png',
    alt: 'English',
    title: 'Cambiar a Español',
    next: 'es'
  },
  es: {
    code: 'ES',
    flag: 'https://flagcdn.com/w40/es.png',
    alt: 'Español',
    title: 'Switch to Thai (ภาษาไทย)',
    next: 'th'
  },
  th: {
    code: 'TH',
    flag: 'https://flagcdn.com/w40/th.png',
    alt: 'ภาษาไทย',
    title: 'Passa a Italiano',
    next: 'it'
  }
};

const CAF_TRANSLATIONS = {
  it: {
    idx_page_title: "CAF Italia – Seleziona Stile",
    idx_h1: "Seleziona Stile<small><span class=\"accent\">CAF</span> Italia</small>",
    idx_sub: "Scegli tra il sito che preferisci",
    idx_c1_title: "Moderno",
    idx_c1_desc: "Design pulito e professionale. Perfetto per uno studio tradizionale.",
    idx_c2_title: "Futuristico",
    idx_c2_desc: "Stile dinamico, multilingua e multiservizio. Per chi guarda avanti.",
    idx_c3_title: "Retrò",
    idx_c3_desc: "Look istituzionale e rassicurante. La tradizione del fisco italiano.",
    idx_bottom: "Scegli lo stile e inizia la navigazione",
    nav_services: "Servizi",
    nav_about: "Chi Siamo",
    nav_news: "Novità",
    nav_forms: "Moduli",
    nav_contact: "Contatti",
    nav_locations: "Sedi",
    btn_send_msg: "Invia messaggio",
    read_more: "Leggi tutto",
    footer_useful_links: "Link Utili",
    opt_select_service: "Seleziona un servizio",
    opt_consulting: "Consulenza Fiscale",
    opt_other: "Altro",
    v1_page_title: "CAF Italia - Centro di Assistenza Fiscale",
    v1_topbar_hours: "<i class=\"fas fa-clock\"></i> Orario: 09:00 - 12:30 | 15:00 - 18:00",
    v1_hero_h1: "Assistenza Fiscale Semplice, Rapida e Sicura",
    v1_hero_p: "I migliori esperti al tuo servizio per Modello 730, ISEE, successioni e consulenza fiscale a 360°.",
    v2_hero_h1: "IL FUTURO DEI SERVIZI FISCALI",
    v2_hero_sub: "Piattaforma digitale integrata per cittadini, lavoratori e imprese.",
    v3_page_title: "CAF Italia - Consulenza e Pratiche Fiscali",
    v3_hero_h1: "La Tradizione della Consulenza Fiscale",
    v3_hero_p: "Da oltre trent'anni al fianco di famiglie e imprese per la corretta gestione degli adempimenti fiscali.",
    v3_contact_btn: "Invia Richiesta"
  },
  en: {
    idx_page_title: "CAF Italia – Select Style",
    idx_h1: "Select Style<small><span class=\"accent\">CAF</span> Italia</small>",
    idx_sub: "Choose your preferred layout design",
    idx_c1_title: "Modern",
    idx_c1_desc: "Clean and professional design. Perfect for a traditional accounting firm.",
    idx_c2_title: "Futuristic",
    idx_c2_desc: "Dynamic, multilingual and multi-service. Built for forward-thinking clients.",
    idx_c3_title: "Retro",
    idx_c3_desc: "Institutional and reassuring look. The heritage of Italian tax advisory.",
    idx_bottom: "Select a style and begin browsing",
    nav_services: "Services",
    nav_about: "About Us",
    nav_news: "News",
    nav_forms: "Forms",
    nav_contact: "Contact",
    nav_locations: "Offices",
    btn_send_msg: "Send Message",
    read_more: "Read More",
    footer_useful_links: "Useful Links",
    opt_select_service: "Select a service",
    opt_consulting: "Tax Advisory",
    opt_other: "Other",
    v1_page_title: "CAF Italia - Tax Advisory Center",
    v1_topbar_hours: "<i class=\"fas fa-clock\"></i> Hours: 09:00 - 12:30 | 15:00 - 18:00",
    v1_hero_h1: "Simple, Fast and Secure Tax Assistance",
    v1_hero_p: "Top experts at your service for 730 tax returns, ISEE, inheritances, and 360° tax consulting.",
    v2_hero_h1: "THE FUTURE OF TAX SERVICES",
    v2_hero_sub: "Integrated digital platform for citizens, workers, and businesses.",
    v3_page_title: "CAF Italia - Tax Advisory & Filing Services",
    v3_hero_h1: "The Heritage of Trusted Tax Advisory",
    v3_hero_p: "Over thirty years supporting families and businesses through fiscal compliance.",
    v3_contact_btn: "Send Request"
  },
  es: {
    idx_page_title: "CAF Italia – Seleccionar Estilo",
    idx_h1: "Seleccionar Estilo<small><span class=\"accent\">CAF</span> Italia</small>",
    idx_sub: "Elige entre el diseño de portal que prefieras",
    idx_c1_title: "Moderno",
    idx_c1_desc: "Diseño limpio y profesional. Perfecto para un despacho tradicional.",
    idx_c2_title: "Futurista",
    idx_c2_desc: "Estilo dinámico, multilingüe y multiservicio. Para quienes miran hacia adelante.",
    idx_c3_title: "Retro",
    idx_c3_desc: "Aspecto institucional y de confianza. La tradición fiscal italiana.",
    idx_bottom: "Elige el estilo y comienza la navegación",
    nav_services: "Servicios",
    nav_about: "Quiénes Somos",
    nav_news: "Novedades",
    nav_forms: "Formularios",
    nav_contact: "Contacto",
    nav_locations: "Sedes",
    btn_send_msg: "Enviar mensaje",
    read_more: "Leer más",
    footer_useful_links: "Enlaces Útiles",
    opt_select_service: "Selecciona un servicio",
    opt_consulting: "Asesoría Fiscal",
    opt_other: "Otro",
    v1_page_title: "CAF Italia - Centro de Asistencia Fiscal",
    v1_topbar_hours: "<i class=\"fas fa-clock\"></i> Horario: 09:00 - 12:30 | 15:00 - 18:00",
    v1_hero_h1: "Asistencia Fiscal Sencilla, Rápida y Segura",
    v1_hero_p: "Los mejores expertos a tu servicio para Declaraciones de Renta, ISEE y asesoría tributaria integral.",
    v2_hero_h1: "EL FUTURO DE LOS SERVICIOS FISCALES",
    v2_hero_sub: "Plataforma digital integrada para ciudadanos, trabajadores y empresas.",
    v3_page_title: "CAF Italia - Asesoría y Servicios Fiscales",
    v3_hero_h1: "La Tradición del Asesoramiento Fiscal",
    v3_hero_p: "Desde hace más de treinta años al lado de familias y profesionales para la correcta gestión tributaria.",
    v3_contact_btn: "Enviar Solicitud"
  },
  th: {
    idx_page_title: "CAF อิตาลี – เลือกรูปแบบเว็บไซต์",
    idx_h1: "เลือกสไตล์<small><span class=\"accent\">CAF</span> Italia</small>",
    idx_sub: "เลือกหน้าตาเว็บไซต์ที่คุณต้องการ",
    idx_c1_title: "โมเดิร์น",
    idx_c1_desc: "ดีไซน์สะอาดตาและมืออาชีพ เหมาะสำหรับสำนักงานแบบดั้งเดิม",
    idx_c2_title: "ฟิวเจอร์ริสติก",
    idx_c2_desc: "ไดนามิก หลากหลายภาษา และครบวงจร สำหรับผู้มองการณ์ไกล",
    idx_c3_title: "เรโทร",
    idx_c3_desc: "ภาพลักษณ์น่าเชื่อถือและดั้งเดิม ตามแบบฉบับภาษีอิตาลี",
    idx_bottom: "เลือกสไตล์แล้วเริ่มต้นใช้งาน",
    nav_services: "บริการ",
    nav_about: "เกี่ยวกับเรา",
    nav_news: "ข่าวสาร",
    nav_forms: "แบบฟอร์ม",
    nav_contact: "ติดต่อเรา",
    nav_locations: "สาขา",
    btn_send_msg: "ส่งข้อความ",
    read_more: "อ่านเพิ่มเติม",
    footer_useful_links: "ลิงก์ที่เป็นประโยชน์",
    opt_select_service: "เลือกประเภทบริการ",
    opt_consulting: "ที่ปรึกษาภาษี",
    opt_other: "อื่นๆ",
    v1_page_title: "CAF Italia - ศูนย์บริการด้านภาษี",
    v1_topbar_hours: "<i class=\"fas fa-clock\"></i> เวลาทำการ: 09:00 - 12:30 | 15:00 - 18:00",
    v1_hero_h1: "บริการด้านภาษี สะดวก รวดเร็ว และปลอดภัย",
    v1_hero_p: "ผู้เชี่ยวชาญพร้อมดูแลการยื่นภาษี Modello 730, ISEE, มรดก และคำปรึกษาครบวงจร",
    v2_hero_h1: "อนาคตของบริการด้านภาษี",
    v2_hero_sub: "แพลตฟอร์มดิจิทัลแบบบูรณาการสำหรับประชาชนและธุรกิจ",
    v3_page_title: "CAF Italia - บริการและคำปรึกษาภาษี",
    v3_hero_h1: "สืบทอดความเชี่ยวชาญด้านภาษี",
    v3_hero_p: "เคียงข้างครอบครัวและธุรกิจมากว่า 30 ปีในการจัดการภาระภาษีอย่างถูกต้อง",
    v3_contact_btn: "ส่งคำขอรับบริการ"
  }
};

function getCurrentCafLanguage() {
  const saved = localStorage.getItem('caf_lang');
  if (saved && CAF_LANG_META[saved]) return saved;
  return 'it';
}

function applyCafLanguage(lang) {
  if (!CAF_LANG_META[lang]) lang = 'it';
  localStorage.setItem('caf_lang', lang);
  document.documentElement.lang = lang;

  const meta = CAF_LANG_META[lang];
  const flagEl = document.getElementById('langFlag');
  const codeEl = document.getElementById('langCode');
  const btnEl = document.getElementById('langToggleBtn');

  if (flagEl) flagEl.src = meta.flag;
  if (codeEl) codeEl.textContent = meta.code;
  if (btnEl) btnEl.title = meta.title;

  const dict = CAF_TRANSLATIONS[lang] || CAF_TRANSLATIONS.it;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (dict[key].includes('<') && dict[key].includes('>')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
}

function cycleCafLanguage() {
  const current = getCurrentCafLanguage();
  const next = CAF_LANG_META[current].next;
  applyCafLanguage(next);
}

document.addEventListener('DOMContentLoaded', () => {
  applyCafLanguage(getCurrentCafLanguage());

  const btn = document.getElementById('langToggleBtn');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      cycleCafLanguage();
    });
  }
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav ul');

hamburger?.addEventListener('click', () => {
  navUl?.classList.toggle('active');
  hamburger.innerHTML = navUl?.classList.contains('active')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close menu on link click
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    navUl?.classList.remove('active');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop?.classList.toggle('visible', window.scrollY > 400);
});

backToTop?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Counter animation
const counters = document.querySelectorAll('.stat-number');

const animateCounter = (el) => {
  const target = parseInt(el.dataset.target);
  const duration = 1500;
  const step = Math.ceil(target / (duration / 16));
  let current = 0;

  const update = () => {
    current += step;
    if (current >= target) {
      el.textContent = target + '+';
      return;
    }
    el.textContent = current;
    requestAnimationFrame(update);
  };

  update();
};

// Intersection Observer for counters
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => observer.observe(c));

// Simple contact form handler
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button');
  btn.textContent = 'Messaggio inviato ✓';
  btn.style.background = '#27ae60';
  setTimeout(() => {
    btn.textContent = 'Invia messaggio';
    btn.style.background = '';
    form.reset();
  }, 3000);
});
