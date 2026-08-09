/* ═══════════════════════════════════════════════════════════
   RGS LABS™ — MOTION SYSTEM & INTERACTION ENGINE
   Version: 2.0
   =========================================================== */

(function(){
  'use strict';

  // ── CURSOR SYSTEM ──
  const dot = document.getElementById('cursorDot');
  if(dot && !window.matchMedia('(pointer: coarse)').matches){
    let mx = 0, my = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    function updateCursor(){ cx += (mx - cx) * .15; cy += (my - cy) * .15; dot.style.left = cx + 'px'; dot.style.top = cy + 'px'; requestAnimationFrame(updateCursor); }
    requestAnimationFrame(updateCursor);
    document.addEventListener('mousedown', () => dot.classList.add('clicking'));
    document.addEventListener('mouseup', () => dot.classList.remove('clicking'));
    document.querySelectorAll('a,button,.eco-card,.why-item,.stat-box,.social-link,.product-card,.project-card').forEach(el => {
      el.addEventListener('mouseenter', () => dot.classList.add('hover'));
      el.addEventListener('mouseleave', () => dot.classList.remove('hover'));
    });
  }

  // ── NAV SCROLL & INDICATOR ──
  const nav = document.getElementById('mainNav');
  if(nav){
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const st = window.scrollY;
      nav.classList.toggle('scrolled', st > 60);
      if(st > lastScroll && st > 200){ nav.style.transform = 'translateY(-100%)'; }
      else { nav.style.transform = 'translateY(0)'; }
      lastScroll = st;
    }, {passive:true});
  }

  // ── HERO CANVAS — TECH GRID ──
  (function(){
    const c = document.getElementById('heroCanvas');
    if(!c) return;
    const ctx = c.getContext('2d');
    let W, H, t = 0, particles = [];
    function resize(){ W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; }
    resize(); window.addEventListener('resize', resize);
    // Init particles
    for(let i = 0; i < 30; i++){
      particles.push({
        x: Math.random(), y: Math.random(),
        vx: (Math.random()-.5)*.0003, vy: (Math.random()-.5)*.0003,
        size: 1.5 + Math.random()*2, phase: Math.random()*Math.PI*2
      });
    }
    function draw(){
      ctx.clearRect(0,0,W,H);
      const gs = 70;
      // Grid
      ctx.strokeStyle = 'rgba(168,85,247,0.04)';
      ctx.lineWidth = .5;
      for(let x = 0; x < W; x += gs){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
      for(let y = 0; y < H; y += gs){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
      // Scan lines
      const scanY = (t*.3) % (H + 200) - 100;
      ctx.strokeStyle = 'rgba(168,85,247,0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, scanY); ctx.lineTo(W, scanY); ctx.stroke();
      // Particles & connections
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if(p.x < 0 || p.x > 1) p.vx *= -1;
        if(p.y < 0 || p.y > 1) p.vy *= -1;
        const fx = p.x * W, fy = p.y * H;
        const a = .25 + Math.sin(t*.015 + p.phase)*.15;
        ctx.fillStyle = `rgba(168,85,247,${a})`;
        ctx.beginPath(); ctx.arc(fx, fy, p.size, 0, Math.PI*2); ctx.fill();
        // Connections
        particles.slice(i+1).forEach(p2 => {
          const dx = (p.x-p2.x)*W, dy = (p.y-p2.y)*H, dist = Math.sqrt(dx*dx+dy*dy);
          if(dist < 180){
            ctx.strokeStyle = `rgba(168,85,247,${.08*(1-dist/180)})`;
            ctx.lineWidth = .5;
            ctx.beginPath(); ctx.moveTo(fx,fy); ctx.lineTo(p2.x*W,p2.y*H); ctx.stroke();
          }
        });
      });
      t++;
      requestAnimationFrame(draw);
    }
    draw();
  })();

  // ── REVEAL SYSTEM (IntersectionObserver) ──
  const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); revObs.unobserve(e.target); } });
  }, { threshold: .1, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale,.reveal-blur').forEach(el => revObs.observe(el));

  // ── SPOTLIGHT SYSTEM (cursor-following on cards) ──
  document.querySelectorAll('.spotlight-card,.eco-card,.stat-box,.why-item,.product-card,.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--spotlight-x', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--spotlight-y', (e.clientY - rect.top) + 'px');
    });
  });

  // ── MOUSE TRACKING FOR GHOST BUTTONS ──
  document.querySelectorAll('.btn-ghost').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty('--mouse-x', ((e.clientX - rect.left)/rect.width*100) + '%');
      btn.style.setProperty('--mouse-y', ((e.clientY - rect.top)/rect.height*100) + '%');
    });
  });

  // ── PAGE TRANSITION SYSTEM ──
  const transitionOverlay = document.getElementById('pageTransition');
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if(href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('javascript')){
      link.addEventListener('click', function(e){
        e.preventDefault();
        if(transitionOverlay){
          transitionOverlay.classList.add('active');
          setTimeout(() => { window.location.href = href; }, 400);
        } else {
          window.location.href = href;
        }
      });
    }
  });

  // ── LANGUAGE SYSTEM ──
  window.lang = 'en';
  window.setLang = function(l){
    window.lang = l;
    const btnEN = document.getElementById('btnEN');
    const btnES = document.getElementById('btnES');
    if(btnEN) btnEN.classList.toggle('active', l==='en');
    if(btnES) btnES.classList.toggle('active', l==='es');
    document.querySelectorAll('[data-en]').forEach(el => {
      const v = el.getAttribute('data-'+l);
      if(v) el.innerHTML = v;
    });
    // Update modal content if open
    const modalOverlay = document.getElementById('modalOverlay');
    if(modalOverlay && modalOverlay.classList.contains('active')){
      const currentKey = modalOverlay.dataset.currentKey;
      if(currentKey && window.modals && window.modals[currentKey]){
        const m = window.modals[currentKey][l] || window.modals[currentKey]['en'];
        document.getElementById('modalTitle').textContent = m.title;
        document.getElementById('modalContent').innerHTML = m.html;
      }
    }
  };

  // ── MODAL SYSTEM ──
  window.openModal = function(key){
    const m = (window.modals && window.modals[key]) ? (window.modals[key][window.lang] || window.modals[key]['en']) : null;
    if(!m) return;
    const overlay = document.getElementById('modalOverlay');
    if(overlay){
      overlay.dataset.currentKey = key;
      document.getElementById('modalTitle').textContent = m.title;
      document.getElementById('modalContent').innerHTML = m.html;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };
  window.closeAllModals = function(){
    const overlay = document.getElementById('modalOverlay');
    if(overlay){ overlay.classList.remove('active'); overlay.dataset.currentKey = ''; }
    document.body.style.overflow = '';
  };
  window.closeModal = function(e){ if(e.target === document.getElementById('modalOverlay')) closeAllModals(); };
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeAllModals(); });

  // ── SMOOTH SCROLL FOR ANCHORS ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); }
    });
  });

  // ── PARALLAX ON SCROLL (lightweight) ──
  let ticking = false;
  window.addEventListener('scroll', () => {
    if(!ticking){
      requestAnimationFrame(() => {
        const st = window.scrollY;
        document.querySelectorAll('.parallax-slow').forEach(el => {
          el.style.transform = `translateY(${st * .15}px)`;
        });
        document.querySelectorAll('.parallax-fast').forEach(el => {
          el.style.transform = `translateY(${st * -.08}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }, {passive:true});

  // ── ACTIVE NAV LINK HIGHLIGHTING ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if(href === currentPage || (currentPage === '' && href === 'index.html')){
      link.classList.add('active');
    }
  });

})();
