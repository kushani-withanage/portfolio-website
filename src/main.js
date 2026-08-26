import { personalInfo, keyMetrics, projects, competencies, careerMilestones, educationList } from './data.js';
import cvPdf from './assets/documents/Msc CV.pdf.pdf';
import portfolioPdf from './assets/documents/Full Portfolio.pdf';

// SVG Icons Generator helper for crisp zero-latency vector rendering
const icons = {
  play: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
  sparkles: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  briefcase: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  calendar: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
  phone: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mail: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  mapPin: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  arrowRight: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  fileText: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>`,
  printer: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>`,
  check: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  copy: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  close: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  externalLink: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>`,
  award: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  video: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>`,
  trendingUp: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  users: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  bookOpen: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  graduationCap: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  chevronLeft: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
  chevronRight: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  send: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`
};

// Global state
let currentCategory = 'All';
let activeModalProject = null;
let activeVideoIndex = 0;
let activeGalleryIndex = 0;

// Toast helper
export function showToast(message) {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'flex items-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 text-white text-xs font-semibold shadow-2xl shadow-indigo-950/80 border border-indigo-400/40 animate-bounce duration-200 transition-all';
  toast.innerHTML = `${icons.check} <span>${message}</span>`;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2400);
}

// Copy to clipboard helper
export function copyToClipboard(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${label} to clipboard!`);
  }).catch(() => {
    showToast(`Copied: ${text}`);
  });
}

// Render Key Metrics Section
function renderMetrics() {
  const container = document.getElementById('metrics-grid');
  if (!container) return;

  container.innerHTML = keyMetrics.map(m => `
    <div class="p-6 rounded-2xl bg-[#0f172a] border border-white/5 hover:border-indigo-500/30 transition-all group">
      <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold uppercase tracking-wider text-indigo-400 mb-3">
        ${m.tag}
      </div>
      <div class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono group-hover:text-indigo-400 transition-colors">
        ${m.value}
      </div>
      <div class="text-sm font-bold text-slate-200 mt-2">
        ${m.label}
      </div>
      <div class="text-xs text-slate-400 mt-1 font-light leading-relaxed">
        ${m.sublabel}
      </div>
    </div>
  `).join('');
}

// Render Filter Tabs
function renderFilterTabs() {
  const container = document.getElementById('portfolio-tabs');
  if (!container) return;

  const categories = ['All', 'Events & Ceremonies', 'Podcasts & Video', 'Workshops & Tech', 'Study Abroad & Outreach'];

  container.innerHTML = categories.map(cat => {
    const count = cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length;
    const isActive = currentCategory === cat;
    return `
      <button 
        data-category="${cat}"
        class="portfolio-tab-btn px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${isActive
        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40 border border-indigo-500'
        : 'bg-[#0f172a] text-slate-400 hover:text-white border border-white/5 hover:border-white/15'
      }"
      >
        ${cat} (${count})
      </button>
    `;
  }).join('');

  // Add click handlers
  container.querySelectorAll('.portfolio-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.getAttribute('data-category');
      renderFilterTabs();
      renderPortfolioGrid();
    });
  });
}

// Render Portfolio Cards Grid
function renderPortfolioGrid() {
  const container = document.getElementById('portfolio-grid');
  if (!container) return;

  const filtered = currentCategory === 'All'
    ? projects
    : projects.filter(p => p.category === currentCategory);

  container.innerHTML = filtered.map((project, idx) => `
    <div class="project-card rounded-2xl bg-[#0f172a] border border-white/5 overflow-hidden hover:border-indigo-500/30 transition-all flex flex-col group" data-project-id="${project.id}">
      
      <!-- Card Image & Inline Video Area -->
      <div class="relative aspect-video w-full bg-[#020617] overflow-hidden">
        <!-- Media Image -->
        <img 
          src="${project.coverImage}" 
          alt="${project.title}" 
          loading="lazy"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 card-cover-img"
        />

        <!-- Overlay Gradients & Badges -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-black/40 pointer-events-none"></div>

        <!-- Top Badges -->
        <div class="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-indigo-400 border border-white/10 pointer-events-auto">
            ${project.category}
          </span>
          ${project.featured ? `
            <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/90 text-black border border-emerald-400/40 pointer-events-auto">
              Flagship
            </span>
          ` : ''}
        </div>

        <!-- In-Place Video Play Trigger Button -->
        ${project.videos && project.videos.length > 0 ? `
          <button 
            data-play-video="${project.id}"
            class="play-inline-video-btn absolute inset-0 m-auto w-12 h-12 rounded-full bg-indigo-600/90 hover:bg-indigo-500 text-white flex items-center justify-center shadow-2xl shadow-black/80 hover:scale-110 transition-all border border-white/20"
            title="Play Video Highlight"
          >
            ${icons.play}
          </button>
        ` : ''}

        <!-- Inline Video Player Container (Hidden initially) -->
        <div class="inline-player-wrapper absolute inset-0 bg-black hidden z-20">
          <iframe 
            class="w-full h-full border-0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>
          <button class="close-inline-video-btn absolute top-2 right-2 p-1.5 rounded-full bg-black/80 text-white hover:bg-red-600 transition-colors z-30">
            ${icons.close}
          </button>
        </div>
      </div>

      <!-- Card Content -->
      <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div class="text-[11px] font-mono text-indigo-400 font-semibold mb-1">
            ${project.role} • ${project.venue || project.date}
          </div>
          <h3 class="text-lg font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors line-clamp-1">
            ${project.title}
          </h3>
          <p class="text-xs text-slate-400 mt-2 line-clamp-2 font-light leading-relaxed">
            ${project.summary}
          </p>

          <!-- Metrics summary pill row -->
          <div class="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5">
            ${project.metrics.slice(0, 2).map(met => `
              <div class="p-2 rounded-xl bg-[#020617] border border-white/5">
                <div class="text-[10px] text-slate-400">${met.label}</div>
                <div class="text-xs font-bold text-white font-mono mt-0.5">${met.value}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Card Action Footer -->
        <div class="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
          <div class="flex items-center gap-2 text-xs text-slate-400">
            <span>${project.videos ? project.videos.length : 0} Videos</span>
            <span>•</span>
            <span>${project.gallery ? project.gallery.length : 0} Photos</span>
          </div>

          <button 
            data-open-modal="${project.id}"
            class="open-project-modal-btn text-xs font-bold text-indigo-400 hover:text-white uppercase tracking-wider flex items-center gap-1.5 hover:translate-x-0.5 transition-all"
          >
            <span>View Details</span>
            ${icons.arrowRight}
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Attach Inline Video Listeners
  container.querySelectorAll('.play-inline-video-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projId = btn.getAttribute('data-play-video');
      const proj = projects.find(p => p.id === projId);
      if (!proj || !proj.videos || proj.videos.length === 0) return;

      const card = btn.closest('.project-card');
      const wrapper = card.querySelector('.inline-player-wrapper');
      const iframe = wrapper.querySelector('iframe');

      iframe.src = proj.videos[0].embedUrl;
      wrapper.classList.remove('hidden');
    });
  });

  // Attach Close Inline Video Listeners
  container.querySelectorAll('.close-inline-video-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const wrapper = btn.closest('.inline-player-wrapper');
      const iframe = wrapper.querySelector('iframe');
      iframe.src = '';
      wrapper.classList.add('hidden');
    });
  });

  // Attach Open Project Modal Listeners
  container.querySelectorAll('.open-project-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-open-modal');
      openProjectModal(projId);
    });
  });

  // Click anywhere on card header opens modal
  container.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('button') || e.target.closest('a')) return;
      const projId = card.getAttribute('data-project-id');
      openProjectModal(projId);
    });
  });
}

// Open Project Detail Modal
function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  activeModalProject = project;
  activeVideoIndex = 0;
  activeGalleryIndex = 0;

  const modal = document.getElementById('project-detail-modal');
  const modalContent = document.getElementById('project-modal-content');
  if (!modal || !modalContent) return;

  renderProjectModalContent();
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-detail-modal');
  if (!modal) return;

  // Stop active video playback
  const iframe = modal.querySelector('iframe');
  if (iframe) iframe.src = '';

  modal.classList.add('hidden');
  document.body.style.overflow = '';
  activeModalProject = null;
}

// Render Project Modal Internal State
function renderProjectModalContent() {
  const project = activeModalProject;
  if (!project) return;

  const container = document.getElementById('project-modal-content');
  if (!container) return;

  const currentVid = project.videos && project.videos.length > 0 ? project.videos[activeVideoIndex] : null;
  const currentPhoto = project.gallery && project.gallery.length > 0 ? project.gallery[activeGalleryIndex] : null;

  container.innerHTML = `
    <!-- Modal Header -->
    <div class="p-6 sm:p-8 border-b border-white/5 flex items-start justify-between gap-4 bg-[#0b1329]">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold uppercase tracking-wider text-indigo-400">
            ${project.category}
          </span>
          <span class="text-xs text-slate-400 font-mono">•</span>
          <span class="text-xs text-slate-400 font-mono">${project.role}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
          ${project.title}
        </h2>
        <p class="text-xs sm:text-sm text-slate-400 mt-1 font-light">
          ${project.subtitle} • <span class="text-indigo-400 font-medium">${project.venue || project.date}</span>
        </p>
      </div>

      <button id="close-modal-x-btn" class="p-2 rounded-xl bg-[#020617] text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-all">
        ${icons.close}
      </button>
    </div>

    <!-- Modal Body -->
    <div class="p-6 sm:p-8 space-y-8 overflow-y-auto max-h-[calc(85vh-120px)]">
      
      <!-- Video Showcase Section (If videos exist) -->
      ${project.videos && project.videos.length > 0 ? `
        <div>
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xs font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
              ${icons.video}
              <span>Media Highlight Player (${activeVideoIndex + 1}/${project.videos.length})</span>
            </h3>
            <span class="text-xs font-mono text-slate-400">${currentVid.duration} • ${currentVid.views}</span>
          </div>

          <!-- Responsive 16:9 Video Player -->
          <div class="aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
            <iframe 
              src="${currentVid.embedUrl}" 
              title="${currentVid.title}" 
              class="w-full h-full border-0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            ></iframe>
          </div>

          <!-- Video Selector Tabs if multiple -->
          ${project.videos.length > 1 ? `
            <div class="flex flex-wrap gap-2 mt-3">
              ${project.videos.map((vid, vIdx) => `
                <button 
                  data-video-idx="${vIdx}"
                  class="modal-video-tab-btn px-3 py-1.5 rounded-xl text-xs font-medium border text-left transition-all ${activeVideoIndex === vIdx
      ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
      : 'bg-[#020617] text-slate-300 border-white/10 hover:border-white/20'
    }"
                >
                  ${vid.title}
                </button>
              `).join('')}
            </div>
          ` : ''}
        </div>
      ` : ''}

      <!-- Photo Gallery Section -->
      ${project.gallery && project.gallery.length > 0 ? `
        <div>
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xs font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
              ${icons.sparkles}
              <span>Documented Event Gallery</span>
            </h3>
            <div class="flex items-center gap-2">
              <button id="prev-photo-btn" class="p-1.5 rounded-lg bg-[#020617] border border-white/10 hover:border-indigo-400 text-slate-300">
                ${icons.chevronLeft}
              </button>
              <span class="text-xs font-mono text-slate-400">${activeGalleryIndex + 1} / ${project.gallery.length}</span>
              <button id="next-photo-btn" class="p-1.5 rounded-lg bg-[#020617] border border-white/10 hover:border-indigo-400 text-slate-300">
                ${icons.chevronRight}
              </button>
            </div>
          </div>

          <!-- Featured Gallery Display -->
          <div class="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#020617]">
            <img 
              src="${currentPhoto.url}" 
              alt="${currentPhoto.title}" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
              <div class="text-sm font-bold text-white">${currentPhoto.title}</div>
              <div class="text-xs text-slate-300 font-light mt-0.5">${currentPhoto.caption}</div>
            </div>
          </div>

          <!-- Thumbnail Strip -->
          <div class="flex gap-2 mt-3 overflow-x-auto pb-2">
            ${project.gallery.map((g, gIdx) => `
              <button 
                data-photo-idx="${gIdx}"
                class="modal-thumb-btn w-20 h-14 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${activeGalleryIndex === gIdx ? 'border-indigo-500 scale-95' : 'border-transparent opacity-60 hover:opacity-100'
      }"
              >
                <img src="${g.url}" alt="${g.title}" class="w-full h-full object-cover" />
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Detailed Description & Overview -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="md:col-span-2 space-y-4">
          <h3 class="text-xs font-bold text-indigo-400 uppercase tracking-widest">
            Executive Summary & Methodology
          </h3>
          <p class="text-sm text-slate-300 leading-relaxed font-light">
            ${project.details}
          </p>

          <!-- Key Responsibilities Checklist -->
          <div class="pt-4">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Core Responsibilities Executed
            </h4>
            <div class="space-y-2">
              ${project.responsibilities.map(resp => `
                <div class="flex items-start gap-2.5 text-xs text-slate-300">
                  <span class="text-indigo-400 mt-0.5 shrink-0">${icons.check}</span>
                  <span>${resp}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Metrics & Impact Sidebar -->
        <div class="space-y-4">
          <h3 class="text-xs font-bold text-indigo-400 uppercase tracking-widest">
            Documented Impact
          </h3>
          <div class="space-y-2.5">
            ${project.metrics.map(met => `
              <div class="p-3 rounded-xl bg-[#020617] border border-white/5">
                <div class="text-[11px] text-slate-400 font-light">${met.label}</div>
                <div class="text-base font-bold text-white font-mono mt-0.5">${met.value}</div>
              </div>
            `).join('')}
          </div>

          <!-- Tags -->
          <div class="pt-2">
            <div class="text-[11px] text-slate-400 mb-2 font-medium">Domain Tags:</div>
            <div class="flex flex-wrap gap-1.5">
              ${project.tags.map(tag => `
                <span class="px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#020617] text-slate-300 border border-white/5">
                  ${tag}
                </span>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- External Media Links -->
      ${project.mediaLinks && project.mediaLinks.length > 0 ? `
        <div class="pt-4 border-t border-white/5 flex flex-wrap items-center gap-3">
          <span class="text-xs text-slate-400 font-medium">Direct Links:</span>
          ${project.mediaLinks.map(link => `
            <a 
              href="${link.url}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#020617] text-indigo-400 hover:text-white border border-white/10 hover:border-indigo-400 text-xs font-bold transition-all"
            >
              <span>${link.label}</span>
              ${icons.externalLink}
            </a>
          `).join('')}
        </div>
      ` : ''}

    </div>
  `;

  // Attach X Close button
  document.getElementById('close-modal-x-btn')?.addEventListener('click', closeProjectModal);

  // Attach video tab clicks
  container.querySelectorAll('.modal-video-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeVideoIndex = parseInt(btn.getAttribute('data-video-idx'));
      renderProjectModalContent();
    });
  });

  // Attach gallery navigation
  document.getElementById('prev-photo-btn')?.addEventListener('click', () => {
    if (activeGalleryIndex > 0) {
      activeGalleryIndex--;
    } else {
      activeGalleryIndex = project.gallery.length - 1;
    }
    renderProjectModalContent();
  });

  document.getElementById('next-photo-btn')?.addEventListener('click', () => {
    if (activeGalleryIndex < project.gallery.length - 1) {
      activeGalleryIndex++;
    } else {
      activeGalleryIndex = 0;
    }
    renderProjectModalContent();
  });

  container.querySelectorAll('.modal-thumb-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeGalleryIndex = parseInt(btn.getAttribute('data-photo-idx'));
      renderProjectModalContent();
    });
  });
}

// Render Core Competencies Section
function renderCompetencies() {
  const container = document.getElementById('competencies-grid');
  if (!container) return;

  container.innerHTML = competencies.map(c => {
    const iconSvg = icons[c.icon] || icons.award;
    return `
      <div class="p-6 rounded-2xl bg-[#0f172a] border border-white/5 hover:border-indigo-500/30 transition-all flex flex-col justify-between group">
        <div>
          <div class="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            ${iconSvg}
          </div>
          <h3 class="text-lg font-bold text-white tracking-tight uppercase group-hover:text-indigo-400 transition-colors">
            ${c.title}
          </h3>
          <p class="text-xs text-slate-400 mt-2 font-light leading-relaxed">
            ${c.description}
          </p>
        </div>

        <div class="mt-6 pt-4 border-t border-white/5">
          <div class="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-2.5">
            Key Execution Capabilities
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${c.skills.map(s => `
              <span class="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#020617] text-slate-300 border border-white/5">
                ${s}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Render Career Timeline & Education Section
function renderResumeSection() {
  const expContainer = document.getElementById('experience-timeline');
  if (expContainer) {
    expContainer.innerHTML = careerMilestones.map(m => `
      <div class="relative pl-8 pb-8 border-l-2 border-indigo-500/30 last:border-transparent group">
        <!-- Dot -->
        <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#020617] border-2 border-indigo-500 group-hover:scale-125 transition-transform"></div>

        <div class="p-5 rounded-2xl bg-[#0f172a] border border-white/5 hover:border-indigo-500/30 transition-all">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span class="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                ${m.period}
              </span>
              <h3 class="text-base font-bold text-white uppercase tracking-tight mt-1.5">
                ${m.role}
              </h3>
              <div class="text-xs font-semibold text-indigo-400">${m.company} • <span class="text-slate-400 font-normal">${m.location}</span></div>
            </div>
          </div>

          <p class="text-xs text-slate-300 mt-3 font-light leading-relaxed">
            ${m.description}
          </p>

          <div class="mt-3 space-y-1.5">
            ${m.achievements.map(ach => `
              <div class="flex items-start gap-2 text-xs text-slate-400 font-light">
                <span class="text-indigo-400 shrink-0 mt-0.5">${icons.check}</span>
                <span>${ach}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  const eduContainer = document.getElementById('education-list');
  if (eduContainer) {
    eduContainer.innerHTML = educationList.map(edu => `
      <div class="p-5 rounded-2xl bg-[#0f172a] border border-white/5 hover:border-indigo-500/30 transition-all">
        <span class="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold uppercase tracking-wider text-indigo-400">
          ${edu.period}
        </span>
        <h3 class="text-base font-bold text-white uppercase tracking-tight mt-1.5">
          ${edu.degree}
        </h3>
        <div class="text-xs text-slate-300 font-medium mt-0.5">
          ${edu.institution}
        </div>
        <p class="text-xs text-slate-400 mt-2 font-light leading-relaxed">
          ${edu.details}
        </p>
      </div>
    `).join('');
  }
}

// Render Printable CV Modal Content
function renderPrintableCVModal() {
  const modal = document.getElementById('printable-cv-modal');
  const container = document.getElementById('printable-cv-content');
  if (!modal || !container) return;

  container.innerHTML = `
    <!-- Header Controls (No Print) -->
    <div class="no-print p-4 sm:p-6 bg-[#0b1329] border-b border-white/10 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <button id="trigger-window-print-btn" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-indigo-900/50 transition-all">
          ${icons.printer}
          <span>Print / Save as PDF</span>
        </button>
      </div>

      <button id="close-cv-modal-btn" class="p-2 rounded-xl bg-[#020617] text-slate-400 hover:text-white border border-white/10">
        ${icons.close}
      </button>
    </div>

    <!-- Clean High-Density Executive CV Body -->
    <div class="p-6 sm:p-10 text-left space-y-8 print-bg-light">
      
      <!-- Top Profile & Contact -->
      <div class="pb-6 border-b border-white/10 print-border flex flex-col sm:flex-row items-start justify-between gap-6">
        <div class="flex-1">
          <h1 class="text-3xl font-extrabold text-white print-text-dark tracking-tight uppercase">
            ${personalInfo.name}
          </h1>
          <p class="text-sm font-bold text-indigo-400 uppercase tracking-wider mt-1">
            ${personalInfo.title}
          </p>
          <p class="text-xs text-slate-300 print-text-muted mt-1 font-light leading-relaxed">
            ${personalInfo.headline}
          </p>

          <div class="flex flex-wrap items-center gap-4 mt-4 text-xs font-mono text-slate-300 print-text-dark">
            <span class="flex items-center gap-1.5">
              ${icons.phone}
              <span>${personalInfo.phone}</span>
            </span>
            <span>•</span>
            <span class="flex items-center gap-1.5">
              ${icons.mail}
              <span>${personalInfo.email}</span>
            </span>
            <span>•</span>
            <span class="flex items-center gap-1.5">
              ${icons.mapPin}
              <span>${personalInfo.location}</span>
            </span>
          </div>
        </div>

        <div class="w-24 h-28 rounded-2xl overflow-hidden border border-white/15 shrink-0 bg-[#020617]">
          <img src="${personalInfo.photoUrl}" alt="${personalInfo.name}" class="w-full h-full object-cover object-top" />
        </div>
      </div>

      <!-- Executive Profile Summary -->
      <div>
        <h2 class="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">
          Executive Profile Summary
        </h2>
        <p class="text-xs text-slate-300 print-text-dark leading-relaxed font-light">
          ${personalInfo.shortBio}
        </p>
      </div>

      <!-- Professional Career Milestones -->
      <div>
        <h2 class="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">
          Professional Career Experience
        </h2>
        <div class="space-y-6">
          ${careerMilestones.map(m => `
            <div class="space-y-1.5">
              <div class="flex flex-wrap items-center justify-between">
                <h3 class="text-sm font-bold text-white print-text-dark uppercase">${m.role}</h3>
                <span class="text-xs font-mono text-indigo-400">${m.period}</span>
              </div>
              <div class="text-xs font-medium text-slate-400 print-text-muted">${m.company} — ${m.location}</div>
              <p class="text-xs text-slate-300 print-text-dark font-light pt-1">${m.description}</p>
              <ul class="list-disc list-inside text-xs text-slate-400 print-text-muted space-y-1 pt-1">
                ${m.achievements.map(a => `<li>${a}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Education & Academic Credentials -->
      <div>
        <h2 class="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
          Education & Qualifications
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${educationList.map(e => `
            <div class="p-3.5 rounded-xl bg-[#020617] print-bg-light border border-white/10 print-border">
              <div class="text-xs font-bold text-white print-text-dark uppercase">${e.degree}</div>
              <div class="text-xs text-indigo-400 mt-0.5">${e.institution}</div>
              <div class="text-[11px] text-slate-400 print-text-muted mt-1 font-light">${e.details}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Core Skills Grid -->
      <div>
        <h2 class="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2.5">
          Key Expertise & Competencies
        </h2>
        <div class="flex flex-wrap gap-1.5">
          ${competencies.flatMap(c => c.skills).map(sk => `
            <span class="px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#020617] print-bg-light text-slate-300 print-text-dark border border-white/10 print-border">
              ${sk}
            </span>
          `).join('')}
        </div>
      </div>

    </div>
  `;

  // Attach Print trigger
  document.getElementById('trigger-window-print-btn')?.addEventListener('click', () => {
    window.print();
  });

  // Attach Close trigger
  document.getElementById('close-cv-modal-btn')?.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  });
}

export function openPrintableCV() {
  const modal = document.getElementById('printable-cv-modal');
  if (!modal) return;
  renderPrintableCVModal();
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Global App Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavMenu = document.getElementById('mobile-nav-menu');
  if (mobileMenuBtn && mobileNavMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavMenu.classList.toggle('hidden');
    });

    mobileNavMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavMenu.classList.add('hidden');
      });
    });
  }

  // Bind 1-Click Copy Buttons
  document.querySelectorAll('[data-copy-text]').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy-text');
      const label = btn.getAttribute('data-copy-label') || 'Information';
      copyToClipboard(text, label);
    });
  });

  // Open CV PDF directly in a new tab on click
  document.querySelectorAll('[data-open-cv-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(cvPdf, '_blank');
    });
  });

  // Open Portfolio PDF directly in a new tab on click
  document.querySelectorAll('[data-open-portfolio-pdf]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(portfolioPdf, '_blank');
    });
  });

  // Contact Form Submission Simulation
  const contactForm = document.getElementById('contact-inquiry-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `${icons.check} Sending Message...`;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = `${icons.check} Message Sent Successfully!`;
        showToast('Thank you! Your message was sent to Kushani Withanage.');
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 3000);
      }, 1000);
    });
  }

  // Escape key closes open modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      const cvModal = document.getElementById('printable-cv-modal');
      if (cvModal) {
        cvModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }
  });

  // Close modals when clicking backdrop
  document.getElementById('project-detail-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'project-detail-modal') {
      closeProjectModal();
    }
  });

  document.getElementById('printable-cv-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'printable-cv-modal') {
      document.getElementById('printable-cv-modal').classList.add('hidden');
      document.body.style.overflow = '';
    }
  });

  // Render all initial sections
  renderMetrics();
  renderFilterTabs();
  renderPortfolioGrid();
  renderCompetencies();
  renderResumeSection();
});
