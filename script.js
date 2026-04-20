// ── Data ──────────────────────────────────────────────
const skills = [
  { name: 'HTML & CSS', icon: '🎨', level: 'Expert' },
  { name: 'JavaScript', icon: '⚡', level: 'Advanced' },
  { name: 'React', icon: '⚛️', level: 'Advanced' },
  { name: 'Node.js', icon: '🟢', level: 'Intermediate' },
  { name: 'Tailwind CSS', icon: '💨', level: 'Expert' },
  { name: 'Git & GitHub', icon: '🐙', level: 'Advanced' },
  { name: 'PostgreSQL', icon: '🐘', level: 'Intermediate' },
  { name: 'Figma', icon: '🎭', level: 'Intermediate' },
];

const projects = [
  {
    title: 'E-Commerce App',
    desc: 'Aplikasi belanja online dengan fitur cart, checkout, dan payment gateway.',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: '#6C63FF',
    emoji: '🛒',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Task Manager',
    desc: 'Aplikasi manajemen tugas dengan drag & drop, label, dan reminder.',
    tags: ['Vue.js', 'Firebase'],
    color: '#FF6584',
    emoji: '✅',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Weather Dashboard',
    desc: 'Dashboard cuaca real-time menggunakan OpenWeather API dengan visualisasi data.',
    tags: ['JavaScript', 'Chart.js', 'API'],
    color: '#43B89C',
    emoji: '🌤️',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Blog Platform',
    desc: 'Platform blog dengan markdown editor, kategori, dan sistem komentar.',
    tags: ['Next.js', 'PostgreSQL'],
    color: '#F59E0B',
    emoji: '📝',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Chat App',
    desc: 'Aplikasi chat real-time dengan rooms, emoji, dan notifikasi.',
    tags: ['Socket.io', 'Express', 'React'],
    color: '#EC4899',
    emoji: '💬',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Portfolio v1',
    desc: 'Website portfolio pertama saya yang dibangun dengan HTML, CSS, dan JS murni.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#8B5CF6',
    emoji: '🌐',
    demo: '#',
    repo: '#',
  },
];

// ── Render Skills ──────────────────────────────────────
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = skills.map(skill => `
    <div class="skill-card reveal">
      <div class="text-4xl mb-3">${skill.icon}</div>
      <h3 class="font-semibold text-white">${skill.name}</h3>
      <p class="text-xs text-primary mt-1">${skill.level}</p>
    </div>
  `).join('');
}

// ── Render Projects ────────────────────────────────────
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = projects.map(p => `
    <div class="project-card reveal">
      <div class="h-40 flex items-center justify-center text-6xl" style="background: ${p.color}22; border-bottom: 1px solid ${p.color}33;">
        ${p.emoji}
      </div>
      <div class="p-5 space-y-3">
        <h3 class="font-bold text-lg">${p.title}</h3>
        <p class="text-gray-400 text-sm leading-relaxed">${p.desc}</p>
        <div class="flex flex-wrap gap-2">
          ${p.tags.map(t => `<span class="text-xs px-2 py-1 rounded-full" style="background:${p.color}22; color:${p.color}">${t}</span>`).join('')}
        </div>
        <div class="flex gap-3 pt-2">
          <a href="${p.demo}" class="text-sm text-primary hover:underline">Live Demo →</a>
          <a href="${p.repo}" class="text-sm text-gray-400 hover:text-white transition">GitHub</a>
        </div>
      </div>
    </div>
  `).join('');
}

// ── Navbar scroll effect ───────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
}

// ── Mobile menu ────────────────────────────────────────
function initMobileMenu() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.add('hidden'));
  });
}

// ── Scroll reveal ──────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Contact form ───────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.opacity = '0.5';
    form.style.pointerEvents = 'none';
    setTimeout(() => {
      form.reset();
      form.style.opacity = '1';
      form.style.pointerEvents = 'auto';
      success.classList.remove('hidden');
      setTimeout(() => success.classList.add('hidden'), 4000);
    }, 1000);
  });
}

// ── Active nav link on scroll ──────────────────────────
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('text-primary', link.getAttribute('href') === `#${current}`);
    });
  });
}

// ── Init ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  initNavbar();
  initMobileMenu();
  initActiveNav();
  initContactForm();
  // Observe after render
  setTimeout(initScrollReveal, 100);
});
