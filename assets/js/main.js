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
        price: 'Rp 30.000',
        badge: 'Terlaris',
        tag: 'Ayam Kampung',
        featured: true,
      },
      {
        img: 'assets/images/menu/gudeg-spesial-bakar.jpg',
        emoji: '🔥',
        cat: 'Gudeg Spesial',
        name: 'Gudeg Spesial Bakar Ayam Kampung',
        desc: 'Nasi + Gudeg + Krecek + Telur Setengah + Tahu/Tempe Bacem + Ayam Bakar',
        price: 'Rp 30.000',
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
        price: 'Rp 30.000',
        tag: 'Ayam Goreng',
        featured: true,
      },
      {
        img: 'assets/images/menu/gudeg-biasa.jpg',
        emoji: '🍚',
        cat: 'Gudeg',
        name: 'Nasi Gudeg Biasa',
        desc: 'Nasi + Gudeg + Krecek + Telur Setengah + Tahu/Tempe Bacem',
        price: 'Rp 16.000',
        tag: 'Favorit',
      },
      {
        img: 'assets/images/menu/gudeg-telur-dadar.jpg',
        emoji: '🍳',
        cat: 'Gudeg',
        name: 'Nasi Gudeg Telur Dadar',
        desc: 'Nasi + Gudeg + Krecek + Telur Dadar + Tahu/Tempe Bacem',
        price: 'Rp 18.000',
        tag: 'Pilihan Telur',
      },
      {
        img: 'assets/images/menu/gudeg-telur-bacem.jpg',
        emoji: '🥚',
        cat: 'Gudeg',
        name: 'Nasi Gudeg Telur Bacem Utuh',
        desc: 'Nasi + Gudeg + Krecek + Telur Bacem Utuh + Tahu/Tempe Bacem',
        price: 'Rp 18.000',
        tag: 'Pilihan Telur',
      },
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
        price: 'Rp 13.000',
        tag: 'Segar',
      },
      {
        img: 'assets/images/menu/nasi-tempe-penyet.jpg',
        emoji: '🫔',
        cat: 'Nasi',
        name: 'Nasi Telor Tempe Penyet',
        desc: 'Nasi dengan tempe penyet dan telur goreng, cocok dengan sambal',
        price: 'Rp 13.000',
        tag: 'Hemat',
      },
      {
        img: 'assets/images/menu/nasi-ayam-kampung.jpg',
        emoji: '🍗',
        cat: 'Nasi',
        name: 'Nasi Ayam Kampung Opor / Bakar / Goreng',
        desc: 'Nasi dengan ayam kampung pilihan: opor gurih, bakar arang, atau goreng crispy',
        price: 'Rp 22.000',
        badge: 'Pilihan',
        tag: 'Ayam Kampung',
      },
    ],
  },

  tongseng: {
    label: 'Tongseng & Soto',
    items: [
      {
        img: 'assets/images/menu/tongseng-kambing.jpg',
        emoji: '🥘',
        cat: 'Tongseng',
        name: 'Nasi Tongseng Kambing',
        desc: 'Tongseng daging kambing muda empuk berkuah gurih dengan rempah pilihan',
        price: 'Rp 30.000',
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
        price: 'Rp 27.000',
        tag: 'Daging Sapi',
      },
      {
        img: 'assets/images/menu/tongseng-ayam.jpg',
        emoji: '🍲',
        cat: 'Tongseng',
        name: 'Nasi Tongseng Ayam Kampung',
        desc: 'Tongseng ayam kampung kaya bumbu dengan kuah santan ringan',
        price: 'Rp 25.000',
        tag: 'Ayam Kampung',
      },
      {
        img: 'assets/images/menu/soto-campur.jpg',
        emoji: '🍜',
        cat: 'Soto',
        name: 'Nasi Soto Campur',
        desc: 'Soto bening segar dengan isian lengkap, nasi dicampur dalam kuah harum',
        price: 'Rp 10.000',
        tag: 'Hemat',
      },
      {
        img: 'assets/images/menu/soto-pisah.jpg',
        emoji: '🥣',
        cat: 'Soto',
        name: 'Nasi Soto Pisah',
        desc: 'Soto bening segar disajikan terpisah dari nasi',
        price: 'Rp 15.000',
        tag: 'Segar',
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

  /* Tab click handler */
  tabsEl.addEventListener('click', e => {
    const b = e.target.closest('.tab-btn');
    if (!b) return;
    tabsEl.querySelectorAll('.tab-btn').forEach(x => x.classList.remove('active'));
    panelsEl.querySelectorAll('.menu-panel').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    const p = document.getElementById('panel-' + b.dataset.tab);
    p.classList.add('active');
    revealCards(p);
  });

  /* Reveal first panel */
  setTimeout(() => revealCards(document.getElementById('panel-' + keys[0])), 150);
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
});
