/* =====================================================
   GUDEG BU TIN — main.js v4
   Data-driven cards + interactions
   ===================================================== */

/* ═══════════════════════════════════════════════════
   MENU DATA
   Untuk menambah menu: tambah 1 objek di array items.
   Untuk menambah kategori: tambah key baru di MENU.

   Field card:
     img      : path foto dari assets/images/menu/
                contoh: 'assets/images/menu/gudeg-spesial-opor.jpg'
                jika dikosongkan ('') → tampil emoji placeholder
     emoji    : ditampilkan saat img kosong/tidak ditemukan
     cat      : label kategori kecil di atas nama
     name     : nama menu
     desc     : deskripsi singkat (boleh dikosongkan)
     price    : harga
     badge    : label badge merah di foto (opsional)
     tag      : label kecil di pojok kanan bawah (opsional)
     featured : true → border emas
   ═══════════════════════════════════════════════════ */
const MENU = {
  gudeg: {
    label: 'Gudeg',
    note: 'Paket Gudeg tersedia dengan atau tanpa nasi, harga tetap sama.',
    items: [
      {
        img: 'assets/images/menu/gudeg-spesial-opor.jpg',
        emoji: '🍛',
        cat: 'Gudeg Spesial',
        name: 'Gudeg Spesial Opor Ayam Kampung',
        desc: 'Nasi + Gudeg + Krecek + Telur Setengah + Tahu/Tempe Bacem + Opor Ayam Kampung',
        price: 'Rp 31.000',
        badge: 'Terlaris',
        tag: 'Ayam Opor',
        featured: true,
      },
      {
        img: 'assets/images/menu/gudeg-spesial-bakar.jpg',
        emoji: '🔥',
        cat: 'Gudeg Spesial',
        name: 'Gudeg Spesial Bakar Ayam Kampung',
        desc: 'Nasi + Gudeg + Krecek + Telur Setengah + Tahu/Tempe Bacem + Ayam Bakar',
        price: 'Rp 31.000',
        badge: 'Spesial',
        tag: 'Ayam Bakar',
        featured: true,
      },
      {
        img: 'assets/images/menu/gudeg-spesial-goreng.jpg',
        emoji: '🍗',
        cat: 'Gudeg Spesial',
        name: 'Gudeg Spesial Goreng Ayam Kampung',
        desc: 'Nasi + Gudeg + Krecek + Telur Setengah + Tahu/Tempe Bacem + Ayam Goreng',
        price: 'Rp 31.000',
        tag: 'Ayam Goreng',
        featured: true,
      },
      {
        img: 'assets/images/menu/gudeg-biasa.jpg',
        emoji: '🍚',
        cat: 'Gudeg',
        name: 'Nasi Gudeg Biasa',
        desc: 'Nasi + Gudeg + Krecek + Telur Setengah + Tahu/Tempe Bacem',
        price: 'Rp 17.000',
        tag: 'Favorit',
      },
      {
        img: 'assets/images/menu/gudeg-telur-dadar.jpg',
        emoji: '🍳',
        cat: 'Gudeg',
        name: 'Nasi Gudeg Telur Dadar',
        desc: 'Nasi + Gudeg + Krecek + Telur Dadar + Tahu/Tempe Bacem',
        price: 'Rp 19.000',
        tag: 'Pilihan Telur',
      },
      {
        img: 'assets/images/menu/gudeg-telur-bacem.jpg',
        emoji: '🥚',
        cat: 'Gudeg',
        name: 'Nasi Gudeg Telur Bacem Utuh',
        desc: 'Nasi + Gudeg + Krecek + Telur Bacem Utuh + Tahu/Tempe Bacem',
        price: 'Rp 19.000',
        tag: 'Pilihan Telur',
      },
    ],
  },

  tongseng: {
    label: 'Tongseng',
    items: [
      {
        img: 'assets/images/menu/tongseng-kambing.jpg',
        emoji: '🥘',
        cat: 'Tongseng',
        name: 'Nasi Tongseng Kambing',
        desc: 'Tongseng daging kambing muda empuk berkuah gurih dengan rempah pilihan',
        price: 'Rp 31.000',
        badge: 'Unggulan',
        tag: 'Daging Kambing',
        featured: true,
      },
      {
        img: 'assets/images/menu/tongseng-sapi.jpg',
        emoji: '🥩',
        cat: 'Tongseng',
        name: 'Nasi Tongseng Sapi',
        desc: 'Tongseng daging sapi empuk berkuah gurih dengan rempah pilihan',
        price: 'Rp 28.000',
        tag: 'Daging Sapi',
      },
      {
        img: 'assets/images/menu/tongseng-ayam.jpg',
        emoji: '🍲',
        cat: 'Tongseng',
        name: 'Nasi Tongseng Ayam Kampung',
        desc: 'Tongseng ayam kampung kaya bumbu dengan kuah santan ringan',
        price: 'Rp 26.000',
        tag: 'Ayam Kampung',
      },
      // {
      //   img: 'assets/images/menu/soto-campur.jpg',
      //   emoji: '🍜',
      //   cat: 'Soto',
      //   name: 'Nasi Soto Campur',
      //   desc: 'Soto bening segar dengan isian lengkap, nasi dicampur dalam kuah harum',
      //   price: 'Rp 10.000',
      //   tag: 'Hemat',
      // },
      // {
      //   img: 'assets/images/menu/soto-pisah.jpg',
      //   emoji: '🥣',
      //   cat: 'Soto',
      //   name: 'Nasi Soto Pisah',
      //   desc: 'Soto bening segar disajikan terpisah dari nasi',
      //   price: 'Rp 15.000',
      //   tag: 'Segar',
      // },
    ],
  },

  nasi: {
    label: 'Nasi & Ayam',
    items: [
      {
        img: 'assets/images/menu/nasi-pecel.jpg',
        emoji: '🥗',
        cat: 'Nasi',
        name: 'Nasi Pecel Telor Dadar',
        desc: 'Nasi pecel segar dengan telur dadar crispy dan sambal kacang pilihan',
        price: 'Rp 14.000',
        badge: 'Pilihan',
        tag: 'Segar',
      },
      {
        img: 'assets/images/menu/nasi-tempe-penyet.jpg',
        emoji: '🫔',
        cat: 'Nasi',
        name: 'Nasi Telor Tempe Penyet',
        desc: 'Nasi dengan tempe penyet dan telur goreng, cocok dengan sambal',
        price: 'Rp 14.000',
        badge: 'Pilihan',
        tag: 'Hemat',
      },
      {
        img: 'assets/images/menu/nasi-ayam-kampung.jpg',
        emoji: '🍗',
        cat: 'Nasi',
        name: 'Nasi Ayam Kampung Opor / Bakar / Goreng',
        desc: 'Nasi dengan ayam kampung pilihan: opor gurih, bakar arang, atau goreng crispy',
        price: 'Rp 23.000',
        tag: 'Ayam Kampung',
      },
    ],
  },


  satuan: {
    label: 'Menu Satuan',
    note: 'Menu satuan bisa dikombinasikan bebas dengan paket nasi manapun.',
    items: [
      {
        img: 'assets/images/menu/ayam-kampung.jpg',
        emoji: '🍗',
        cat: 'Lauk',
        name: 'Ayam Kampung Opor / Bakar / Goreng',
        desc: 'Pilihan opor gurih, bakar arang, atau goreng crispy',
        price: 'Rp 17.000',
        tag: 'Lauk Utama',
      },
      {
        img: 'assets/images/menu/gudeg.jpg',
        emoji: '🥚',
        cat: 'Lauk',
        name: 'Gudeg',
        desc: 'Gudeg satuan manis gurih khas Jawa',
        price: 'Rp 5.000',
        tag: 'Lauk',
      },
      {
        img: 'assets/images/menu/krecek.jpg',
        emoji: '🥚',
        cat: 'Lauk',
        name: 'Krecek',
        desc: 'Krecek gurih khas Jawa',
        price: 'Rp 5.000',
        tag: 'Lauk',
      },
      {
        img: 'assets/images/menu/telor-bacem.jpg',
        emoji: '🥚',
        cat: 'Lauk',
        name: 'Telor Bacem',
        desc: 'Telur bacem manis gurih khas Jawa',
        price: 'Rp 5.000',
        tag: 'Lauk',
      },
      {
        img: 'assets/images/menu/tahu-tempe-bacem.jpg',
        emoji: '🫘',
        cat: 'Lauk',
        name: 'Tahu / Tempe Bacem',
        desc: 'Tahu atau tempe bacem manis dengan bumbu rempah khas',
        price: 'Rp 2.000',
        tag: 'Lauk',
      },
      {
        img: 'assets/images/menu/telor-dadar.jpg',
        emoji: '🍳',
        cat: 'Lauk',
        name: 'Telor Dadar',
        desc: 'Telur dadar tipis gurih sebagai pelengkap',
        price: 'Rp 5.000',
        tag: 'Lauk',
      },
      {
        img: 'assets/images/menu/nasi-putih.jpg',
        emoji: '🍚',
        cat: 'Tambahan',
        name: 'Nasi Putih',
        desc: 'Nasi putih pulen hangat',
        price: 'Rp 5.000',
        tag: 'Tambahan',
      },
    ],
  },

  minuman: {
    label: 'Minuman',
    items: [
      {
        img: 'assets/images/menu/wedhang-uwuh.jpg',
        emoji: '🌿',
        cat: 'Minuman Tradisional',
        name: 'Wedhang Uwuh',
        desc: 'Minuman rempah khas Jawa — jahe, kayu manis, cengkeh, daun pandan',
        price: 'Rp 10.000',
        badge: 'Khas',
        tag: 'Hangat',
        featured: true,
      },
      {
        img: 'assets/images/menu/susu-jahe.jpg',
        emoji: '🧋',
        cat: 'Minuman',
        name: 'Susu Jahe',
        desc: 'Susu hangat berpadu jahe segar, menghangatkan dari dalam',
        price: 'Rp 9.000',
        tag: 'Hangat',
      },
      {
        img: 'assets/images/menu/wedhang-jahe.jpg',
        emoji: '🍵',
        cat: 'Minuman Tradisional',
        name: 'Wedhang Jahe',
        desc: 'Jahe hangat murni, cocok menemani gudeg pagi hingga malam',
        price: 'Rp 6.000',
        tag: 'Hangat',
      },
      {
        img: 'assets/images/menu/es-jeruk.jpg',
        emoji: '🍊',
        cat: 'Minuman',
        name: 'Es Jeruk / Jeruk Anget',
        desc: 'Jeruk peras segar, tersedia dingin maupun hangat',
        price: 'Rp 5.000–6.000',
        tag: 'Segar',
      },
      {
        img: 'assets/images/menu/es-teh.jpg',
        emoji: '🍵',
        cat: 'Minuman',
        name: 'Es Teh / Teh Manis Anget / Teh Tawar',
        desc: 'Pilihan teh: manis dingin, manis hangat, atau tawar',
        price: 'Rp 2.000–4.000',
        tag: 'Pilihan',
      },
    ],
  },
};

/* ═══════════════════════════════════════════════════
   BUILD MENU — render dari data
   ═══════════════════════════════════════════════════ */
function buildMenu() {
  const tabsEl   = document.getElementById('menu-tabs');
  const panelsEl = document.getElementById('menu-panels');
  if (!tabsEl || !panelsEl) return;

  const keys = Object.keys(MENU);

  keys.forEach((key, idx) => {
    const cat = MENU[key];

    /* Tab button */
    const btn = document.createElement('button');
    btn.className  = 'tab-btn' + (idx === 0 ? ' active' : '');
    btn.dataset.tab = key;
    btn.textContent = cat.label;
    tabsEl.appendChild(btn);

    /* Panel */
    const panel = document.createElement('div');
    panel.className = 'menu-panel' + (idx === 0 ? ' active' : '');
    panel.id = 'panel-' + key;

    /* Card grid */
    const grid = document.createElement('div');
    grid.className = 'cards';

    cat.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'mcard' + (item.featured ? ' featured' : '');

      /* Image area: pakai <img> jika ada path, fallback emoji */
      const imgHTML = item.img
        ? `<img src="${item.img}" alt="${item.name}" loading="lazy"
             onerror="this.parentElement.innerHTML='<div class=\\'c-img-ph\\'>${item.emoji}</div>'">`
        : `<div class="c-img-ph">${item.emoji}</div>`;

      card.innerHTML = `
        <div class="c-img">
          ${imgHTML}
          ${item.badge ? `<span class="c-badge">${item.badge}</span>` : ''}
        </div>
        <div class="c-body">
          <p class="c-cat">${item.cat}</p>
          <h3 class="c-name">${item.name}</h3>
          ${item.desc ? `<p class="c-desc">${item.desc}</p>` : ''}
          <div class="c-foot">
            <span class="c-price">${item.price}</span>
            ${item.tag ? `<span class="c-tag">${item.tag}</span>` : ''}
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    panel.appendChild(grid);

    /* Note */
    if (cat.note) {
      const note = document.createElement('div');
      note.className = 'menu-note';
      note.innerHTML = `<strong>Catatan:</strong> ${cat.note}`;
      panel.appendChild(note);
    }

    panelsEl.appendChild(panel);
  });

  // Ganti tab click handler yang lama dengan ini
  let currentIdx = 0;

  function goToPanel(idx) {
    currentIdx = idx;

    const hint = document.getElementById('swipe-hint');
    if (hint && idx !== 0) {
      hint.style.opacity = '0';
      hint.style.transition = 'opacity 0.4s';
      setTimeout(() => hint.style.display = 'none', 400);
    }
    
    // geser track
    track.style.transform = `translateX(-${idx * 100}%)`;
    // update tab aktif
    tabsEl.querySelectorAll('.tab-btn').forEach((b, i) =>
      b.classList.toggle('active', i === idx)
    );
    // scroll tab yang aktif ke tengah
    const activeBtn = tabsEl.querySelectorAll('.tab-btn')[idx];
    activeBtn?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    // update dots
    document.querySelectorAll('.tabs-dot').forEach((d, i) =>
      d.classList.toggle('active', i === idx)
    );
    // reveal cards panel aktif
    revealCards(document.getElementById('panel-' + keys[idx]));
    // sesuaikan tinggi track dengan panel aktif
    const activePanel = document.getElementById('panel-' + keys[idx]);
    track.style.height = activePanel.offsetHeight + 'px';
  }

  // Bungkus semua panel dalam track
  const track = document.createElement('div');
  track.className = 'panels-track';
  while (panelsEl.firstChild) track.appendChild(panelsEl.firstChild);
  panelsEl.appendChild(track);
  // set tinggi awal sesuai panel pertama
  const firstPanel = document.getElementById('panel-' + keys[0]);
  track.style.height = firstPanel.offsetHeight + 'px';

  // Tab click
  tabsEl.addEventListener('click', e => {
    const b = e.target.closest('.tab-btn');
    if (!b) return;
    const idx = [...tabsEl.querySelectorAll('.tab-btn')].indexOf(b);
    goToPanel(idx);
  });

  // Swipe touch
  let touchStartX = 0;
  let touchStartY = 0;
  panelsEl.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  panelsEl.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    // pastikan swipe horizontal, bukan scroll vertikal
    if (Math.abs(dx) < Math.abs(dy) || Math.abs(dx) < 50) return;
    if (dx < 0 && currentIdx < keys.length - 1) goToPanel(currentIdx + 1); // swipe kiri → next
    if (dx > 0 && currentIdx > 0) goToPanel(currentIdx - 1);               // swipe kanan → prev
  }, { passive: true });

  // Dot click juga bisa pindah panel
  document.getElementById('tabs-dots')?.addEventListener('click', e => {
    const dot = e.target.closest('.tabs-dot');
    if (!dot) return;
    const idx = [...document.querySelectorAll('.tabs-dot')].indexOf(dot);
    goToPanel(idx);
  });
  

  /* Reveal first panel */
  setTimeout(() => revealCards(document.getElementById('panel-' + keys[0])), 150);

  // Fade hilang saat scroll sudah di ujung kanan
  const wrap = tabsEl?.parentElement;
  tabsEl?.addEventListener('scroll', () => {
    const atEnd = tabsEl.scrollLeft + tabsEl.clientWidth >= tabsEl.scrollWidth - 8;
    wrap?.classList.toggle('end', atEnd);
  });

  // Dot indicator
  const dotsWrap = document.getElementById('tabs-dots');
  if (dotsWrap) {
    // buat dot sebanyak jumlah tab
    keys.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'tabs-dot' + (i === 0 ? ' active' : '');
      dotsWrap.appendChild(dot);
    });

    // update dot aktif saat tab diklik
    tabsEl.addEventListener('click', e => {
      const b = e.target.closest('.tab-btn');
      if (!b) return;
      const idx = [...tabsEl.children].indexOf(b);
      dotsWrap.querySelectorAll('.tabs-dot').forEach((d, i) =>
        d.classList.toggle('active', i === idx)
      );
    });

    // update dot saat scroll
    tabsEl.addEventListener('scroll', () => {
      const ratio = tabsEl.scrollLeft / (tabsEl.scrollWidth - tabsEl.clientWidth);
      const idx = Math.round(ratio * (keys.length - 1));
      dotsWrap.querySelectorAll('.tabs-dot').forEach((d, i) =>
        d.classList.toggle('active', i === idx)
      );
    });
  }
}

function revealCards(panel) {
  if (!panel) return;
  panel.querySelectorAll('.mcard').forEach((c, i) => {
    c.classList.remove('in');
    setTimeout(() => c.classList.add('in'), i * 55);
  });
}

/* ═══════════════════════════════════════════════════
   NAVBAR — scroll + active link
   ═══════════════════════════════════════════════════ */
function initNav() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    });
  }, { threshold: 0.4 });
  sections.forEach(s => obs.observe(s));
}

/* ═══════════════════════════════════════════════════
   SCROLL REVEAL
   ═══════════════════════════════════════════════════ */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        e.target.querySelectorAll('.pcard').forEach((c, i) =>
          setTimeout(() => c.classList.add('in'), i * 100)
        );
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal, section').forEach(el => obs.observe(el));
}

/* ═══════════════════════════════════════════════════
   COUNTER ANIMATION
   ═══════════════════════════════════════════════════ */
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('[data-count]').forEach(el => {
          const target = parseInt(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          let v = 0; const step = target / 60;
          (function tick() {
            v += step;
            if (v >= target) { el.textContent = target + suffix; return; }
            el.textContent = Math.floor(v) + suffix;
            requestAnimationFrame(tick);
          })();
        });
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el.closest('section') || el));
}

/* ═══════════════════════════════════════════════════
   MOBILE DRAWER
   ═══════════════════════════════════════════════════ */
function initDrawer() {
  const drawer  = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');
  const ham     = document.querySelector('.hamburger');
  if (!drawer || !overlay || !ham) return;
  const toggle = open => { drawer.classList.toggle('open', open); overlay.classList.toggle('open', open); };
  ham.addEventListener('click', () => toggle(drawer.classList.contains('open') ? false : true));
  overlay.addEventListener('click', () => toggle(false));
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle(false)));
}

/* ═══════════════════════════════════════════════════
   SMOOTH SCROLL
   ═══════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a =>
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    })
  );
}

/* ═══════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  buildMenu();
  initNav();
  initReveal();
  initCounters();
  initDrawer();
  initSmoothScroll();
  // Lightbox
  const lightbox     = document.getElementById('lightbox');
  const lightboxImg  = document.getElementById('lightbox-img');
  const lightboxCap  = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxCap.textContent = caption || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  // delegasi klik ke semua foto card
  document.getElementById('menu-panels').addEventListener('click', e => {
    const img = e.target.closest('.c-img img');
    if (!img) return;
    const name = img.closest('.mcard')?.querySelector('.c-name')?.textContent || '';
    openLightbox(img.src, name);
  });

  // tutup lightbox
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
});
