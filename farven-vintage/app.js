/* ============================================================
   farven vintage — app.js  v2
   管理画面連携・決済リンク・Instagram対応
   ============================================================ */
'use strict';

/* ── DEFAULT PRODUCTS ─────────────────────────────────────── */
const DEFAULT_PRODUCTS = [
  { id:1,  name:'Y2K フォトプリント デニムジャケット', category:'outer',    price:14800, color:'blue',      colorHex:'#7BA7C4', colorLabel:'ブルー',        size:'M',  condition:'A', season:'all',    isNew:true,  isLastOne:true,  isSold:false, description:'2000年代初頭のフォトグラフィックプリントが特徴的なデニムジャケット。程よいヴィンテージ感が残るAランク。', measurements:{肩幅:'38cm',身幅:'48cm',着丈:'54cm',袖丈:'58cm'}, paymentLink:'', imageUrl:'' },
  { id:2,  name:'90s ニットベスト クルーネック',        category:'tops',     price:7800,  color:'beige',     colorHex:'#C9B99A', colorLabel:'ベージュ',      size:'F',  condition:'A', season:'autumn', isNew:true,  isLastOne:false, isSold:false, description:'90年代のクラシックなニットベスト。オフホワイト寄りのベージュで合わせやすい1点。',              measurements:{肩幅:'42cm',身幅:'52cm',着丈:'58cm'},              paymentLink:'', imageUrl:'' },
  { id:3,  name:'Y2K バタフライ刺繍 チュールスカート', category:'bottoms',  price:9500,  color:'pink',      colorHex:'#DFA8B8', colorLabel:'ピンク',        size:'S',  condition:'S', season:'spring', isNew:true,  isLastOne:true,  isSold:false, description:'繊細なバタフライ刺繍がポイントのチュールスカート。Y2Kフェミニンの象徴的な1点。Sランクのほぼ新品。', measurements:{ウエスト:'66cm',ヒップ:'94cm',着丈:'62cm'},         paymentLink:'', imageUrl:'' },
  { id:4,  name:'レオパード スリップドレス',            category:'onepiece', price:12500, color:'brown',     colorHex:'#9B7C5A', colorLabel:'ブラウン',      size:'M',  condition:'A', season:'all',    isNew:true,  isLastOne:false, isSold:true,  description:'クラシックなアニマルプリントのスリップドレス。単品でもインナーとしても着回し自在。',              measurements:{肩幅:'36cm',身幅:'44cm',着丈:'86cm'},              paymentLink:'', imageUrl:'' },
  { id:5,  name:'00s カーゴパンツ ローライズ',          category:'bottoms',  price:11800, color:'khaki',     colorHex:'#8A9070', colorLabel:'カーキ',        size:'S',  condition:'B', season:'all',    isNew:false, isLastOne:true,  isSold:false, description:'Y2K期の定番ローライズカーゴ。多ポケットのユーティリティデザイン。Bランクも全体的にキレイ。',      measurements:{ウエスト:'70cm',ヒップ:'98cm',股上:'22cm',股下:'74cm'}, paymentLink:'', imageUrl:'' },
  { id:6,  name:'90s フラワーニット プルオーバー',      category:'tops',     price:8900,  color:'white',     colorHex:'#E8E2DC', colorLabel:'ホワイト',      size:'F',  condition:'A', season:'autumn', isNew:false, isLastOne:false, isSold:false, description:'胸元の立体フラワーモチーフがポイントのニットプルオーバー。オフホワイトの上品な1点。',            measurements:{肩幅:'44cm',身幅:'54cm',着丈:'60cm',袖丈:'56cm'}, paymentLink:'', imageUrl:'' },
  { id:7,  name:'ベロア セットアップ ブラウン',          category:'outer',    price:24800, color:'darkbrown', colorHex:'#6B4836', colorLabel:'ダークブラウン', size:'M',  condition:'A', season:'winter', isNew:false, isLastOne:true,  isSold:false, description:'2000年代初頭のベロア素材セットアップ。ジャケット＋パンツの上下セット。深みのあるブラウン。',      measurements:{着丈:'58cm',ウエスト:'72cm',パンツ着丈:'98cm'},    paymentLink:'', imageUrl:'' },
  { id:8,  name:'Y2K チェーンベルト ミニスカート',      category:'bottoms',  price:8200,  color:'black',     colorHex:'#282020', colorLabel:'ブラック',      size:'XS', condition:'S', season:'all',    isNew:false, isLastOne:false, isSold:false, description:'チェーンベルト付きのY2Kミニスカート。クロスの金属装飾がポイント。ほぼ着用感のないSランク。',    measurements:{ウエスト:'62cm',ヒップ:'88cm',着丈:'36cm'},         paymentLink:'', imageUrl:'' },
  { id:9,  name:'00s バンドカラー フリルブラウス',       category:'tops',     price:7200,  color:'lavender',  colorHex:'#B8A8C8', colorLabel:'ラベンダー',    size:'M',  condition:'A', season:'spring', isNew:false, isLastOne:true,  isSold:false, description:'バンドカラーにフリルの重なりが繊細なブラウス。ラベンダーの柔らかな発色が春夏映え。',            measurements:{肩幅:'36cm',身幅:'46cm',着丈:'56cm',袖丈:'48cm'}, paymentLink:'', imageUrl:'' },
  { id:10, name:'ヴィンテージ フリースジャケット',       category:'outer',    price:9800,  color:'blue',      colorHex:'#6A9CB8', colorLabel:'スカイブルー',  size:'L',  condition:'B', season:'winter', isNew:false, isLastOne:false, isSold:false, description:'90年代のスポーティーなフリースジャケット。Bランクですが目立つダメージなし。ゆったりサイズ感。',  measurements:{肩幅:'46cm',身幅:'56cm',着丈:'62cm',袖丈:'60cm'}, paymentLink:'', imageUrl:'' },
  { id:11, name:'ストライプ オーバーオール',             category:'other',    price:13200, color:'navy',      colorHex:'#3A4A6A', colorLabel:'ネイビー',      size:'S',  condition:'A', season:'spring', isNew:false, isLastOne:true,  isSold:false, description:'ネイビー×ホワイトのクラシックなストライプオーバーオール。アメリカ製ヴィンテージ。',              measurements:{肩幅:'38cm',身幅:'50cm',着丈:'128cm'},             paymentLink:'', imageUrl:'' },
  { id:12, name:'ミルクメイド フローラルドレス',          category:'onepiece', price:15800, color:'cream',     colorHex:'#E4D5B8', colorLabel:'クリーム',      size:'M',  condition:'S', season:'spring', isNew:false, isLastOne:false, isSold:false, description:'フローラルプリントのミルクメイドドレス。スモッキング刺繍がポイント。Sランクの美品。',             measurements:{バスト:'88cm',ウエスト:'76cm',着丈:'110cm'},       paymentLink:'', imageUrl:'' }
];

const DEFAULT_CONFIG = {
  heroPrimary:       '売り場ではなく、\n倉庫を体験に変える。',
  heroSub:           '探す古着屋ではなく、選べる古着屋。',
  heroCta:           '最新入荷を見る',
  bgColor:           '#F7EAE3',
  darkColor:         '#181210',
  announcement:      '',
  announcementActive: false,
  instagramId:       'farven_vintage',
  saturdayNote:      '毎週土曜 12:00 に新入荷',
  aboutTitle:        '古着屋の常識を、\n変えたい。',
  aboutText:         'farven vintageは、「倉庫型×セレクト型」という新しい店舗フォーマットに挑戦するレディース古着ブランドです。\n\n広い空間に整然と並ぶラック。カラーで陳列されたアイテム。探し回らなくていい、選べる古着屋。\n\n感覚だけでなく、数字と再現性を重視した「仕組みで売れる」古着屋として、大阪から発信します。',
  igPosts:           []
};

const COLOR_PALETTE = [
  { key:'all',       hex:null,       label:'すべて' },
  { key:'white',     hex:'#E8E2DC',  label:'ホワイト' },
  { key:'black',     hex:'#282020',  label:'ブラック' },
  { key:'beige',     hex:'#C9B99A',  label:'ベージュ' },
  { key:'cream',     hex:'#E4D5B8',  label:'クリーム' },
  { key:'pink',      hex:'#DFA8B8',  label:'ピンク' },
  { key:'lavender',  hex:'#B8A8C8',  label:'ラベンダー' },
  { key:'blue',      hex:'#7BA7C4',  label:'ブルー' },
  { key:'navy',      hex:'#3A4A6A',  label:'ネイビー' },
  { key:'khaki',     hex:'#8A9070',  label:'カーキ' },
  { key:'brown',     hex:'#9B7C5A',  label:'ブラウン' },
  { key:'darkbrown', hex:'#6B4836',  label:'ダークブラウン' },
];

/* ── LOAD ADMIN DATA ──────────────────────────────────────── */
function loadProducts() {
  try {
    const stored = localStorage.getItem('farven_products');
    return stored ? JSON.parse(stored) : DEFAULT_PRODUCTS;
  } catch { return DEFAULT_PRODUCTS; }
}
function loadConfig() {
  try {
    const stored = localStorage.getItem('farven_config');
    return stored ? Object.assign({}, DEFAULT_CONFIG, JSON.parse(stored)) : DEFAULT_CONFIG;
  } catch { return DEFAULT_CONFIG; }
}

let PRODUCTS = loadProducts();
let CONFIG   = loadConfig();

/* ── APPLY CONFIG TO DOM ──────────────────────────────────── */
function applyConfig() {
  const r = document.documentElement.style;
  r.setProperty('--bg',      CONFIG.bgColor   || '#F7EAE3');
  r.setProperty('--bg-dark', CONFIG.darkColor  || '#181210');
  r.setProperty('--text',    CONFIG.darkColor  || '#181210');

  // Hero text
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) heroTitle.innerHTML = (CONFIG.heroPrimary || '').replace(/\n/g, '<br>');

  const heroSub = document.querySelector('.hero-sub');
  if (heroSub) heroSub.textContent = CONFIG.heroSub || '';

  const heroCta = document.querySelector('.hero-cta');
  if (heroCta) heroCta.textContent = CONFIG.heroCta || '最新入荷を見る';

  // About
  const aboutTitle = document.querySelector('.about-title');
  if (aboutTitle) aboutTitle.innerHTML = (CONFIG.aboutTitle || '').replace(/\n/g, '<br>');
  const aboutTexts = document.querySelectorAll('.about-text-body p');
  if (aboutTexts.length && CONFIG.aboutText) {
    const paras = CONFIG.aboutText.split('\n\n');
    aboutTexts.forEach((el, i) => { el.textContent = paras[i] || ''; el.style.display = paras[i] ? '' : 'none'; });
  }

  // Announcement
  const bar = document.getElementById('announcementBar');
  if (bar) {
    if (CONFIG.announcementActive && CONFIG.announcement) {
      bar.textContent = CONFIG.announcement;
      bar.style.display = 'block';
    } else {
      bar.style.display = 'none';
    }
  }

  // Instagram link
  const igId = CONFIG.instagramId || 'farven_vintage';
  document.querySelectorAll('.ig-handle').forEach(el => { el.textContent = '@' + igId; });
  document.querySelectorAll('[data-ig-href]').forEach(el => {
    el.href = 'https://www.instagram.com/' + igId + '/';
  });

  // Saturday note
  const satEl = document.querySelector('.notify-note');
  if (satEl && CONFIG.saturdayNote) satEl.textContent = CONFIG.saturdayNote;
}

/* ── CART ─────────────────────────────────────────────────── */
let cart = [];
try { cart = JSON.parse(localStorage.getItem('farven_cart') || '[]'); } catch {}

function saveCart() { localStorage.setItem('farven_cart', JSON.stringify(cart)); }

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || product.isSold) return;
  if (cart.find(i => i.id === productId)) { showToast('このアイテムはすでに保存済みです'); return; }
  cart.push({ id: product.id, quantity: 1 });
  saveCart();
  updateCartUI();
  showToast(`"${product.name.slice(0,16)}…" を保存しました`);
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  renderCartDrawer();
}

function updateCartUI() {
  document.getElementById('cartCount').textContent = cart.length;
  renderCartDrawer();
}

function renderCartDrawer() {
  const container = document.getElementById('cartItems');
  const footer    = document.getElementById('cartFooter');
  const totalEl   = document.getElementById('cartTotal');
  if (!container) return;

  if (!cart.length) {
    container.innerHTML = '<p class="cart-empty">保存済みアイテムはありません</p>';
    if (footer) footer.style.display = 'none';
    return;
  }

  let total = 0;
  container.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return '';
    total += p.price;
    const thumb = p.imageUrl
      ? `<img src="${p.imageUrl}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">`
      : `<div style="width:100%;height:100%;background:${p.colorHex};display:flex;align-items:center;justify-content:center;"><span style="font-size:0.5rem;color:rgba(255,255,255,0.6);letter-spacing:0.06em;">${p.colorLabel}</span></div>`;
    return `
      <div class="cart-item">
        <div class="cart-item-img">${thumb}</div>
        <div>
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-meta">${p.size} / ${p.condition}ランク</div>
          <div class="cart-item-price">¥${p.price.toLocaleString()}</div>
          ${p.paymentLink ? `<a href="${p.paymentLink}" target="_blank" rel="noopener" class="cart-buy-link">今すぐ購入 →</a>` : ''}
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${p.id})">×</button>
      </div>`;
  }).join('');

  if (totalEl) totalEl.textContent = `¥${total.toLocaleString()}`;
  if (footer) { footer.style.display = 'flex'; footer.style.flexDirection = 'column'; footer.style.gap = '0.75rem'; }
}

/* ── TOAST ────────────────────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

/* ── PRODUCT CARD ─────────────────────────────────────────── */
function createProductCard(p) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.id = p.id; card.dataset.cat = p.category; card.dataset.color = p.color;

  const badges = [];
  if (p.isNew)                     badges.push('<span class="badge badge-new">NEW</span>');
  if (p.isLastOne && !p.isSold)    badges.push('<span class="badge badge-last">残り1点</span>');
  if (p.isSold)                    badges.push('<span class="badge badge-sold">SOLD</span>');
  badges.push(`<span class="badge badge-cond">${p.condition}</span>`);

  const imgContent = p.imageUrl
    ? `<img src="${p.imageUrl}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">`
    : `<div class="card-color-bg" style="background:${p.colorHex};"><span class="card-color-label">${p.colorLabel}</span></div>`;

  card.innerHTML = `
    <div class="card-img">${imgContent}<div class="card-badges">${badges.join('')}</div></div>
    <div class="card-info">
      <div class="card-name">${p.name}</div>
      <div class="card-meta-row">
        <span class="card-price">¥${p.price.toLocaleString()}</span>
        <div class="card-tags"><span class="card-tag">${p.size}</span></div>
      </div>
    </div>
    ${!p.isSold ? `<div class="card-actions">
      <button class="card-save" onclick="event.stopPropagation();addToCart(${p.id})" title="お気に入りに保存">♡</button>
      ${p.paymentLink ? `<a href="${p.paymentLink}" target="_blank" rel="noopener" class="card-add" onclick="event.stopPropagation()">今すぐ購入</a>` : '<span class="card-add card-add-soon">準備中</span>'}
    </div>` : ''}`;

  card.addEventListener('click', () => openModal(p.id));
  return card;
}

/* ── PRODUCT MODAL ────────────────────────────────────────── */
function openModal(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  const measurements = Object.entries(p.measurements || {})
    .map(([k,v]) => `<div class="modal-detail-row"><span>${k}</span><span>${v}</span></div>`).join('');

  const imgContent = p.imageUrl
    ? `<img src="${p.imageUrl}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">`
    : `<div style="width:100%;height:100%;min-height:320px;background:${p.colorHex};display:flex;align-items:center;justify-content:center;"><span style="font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:300;color:rgba(255,255,255,0.6);letter-spacing:0.08em;">${p.colorLabel}</span></div>`;

  document.getElementById('modalInner').innerHTML = `
    <div class="modal-img">${imgContent}</div>
    <div class="modal-info">
      <div class="modal-tag">${categoryLabel(p.category)} · ${seasonLabel(p.season)}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-price">¥${p.price.toLocaleString()}<span style="font-size:0.7rem;color:var(--text-muted);margin-left:6px;">(税込)</span></div>
      <div class="modal-divider"></div>
      <div>
        <div class="modal-detail-row"><span>サイズ</span><span>${p.size}</span></div>
        <div class="modal-detail-row"><span>コンディション</span><span>${p.condition}ランク</span></div>
        <div class="modal-detail-row"><span>カラー</span><span>${p.colorLabel}</span></div>
        ${measurements}
      </div>
      <p class="modal-cond-legend">S：ほぼ新品 · A：使用感極少 · B：軽微な使用感あり</p>
      <div class="modal-divider"></div>
      <p style="font-size:0.78rem;color:var(--text-mid);line-height:1.8;">${p.description}</p>
      ${p.isSold
        ? `<div class="modal-sold-block">SOLD OUT</div>`
        : p.paymentLink
          ? `<a href="${p.paymentLink}" target="_blank" rel="noopener" class="modal-buy-btn">今すぐ購入 — ¥${p.price.toLocaleString()}</a>
             <button class="modal-save-btn" onclick="addToCart(${p.id})">♡ お気に入りに保存</button>`
          : `<div class="modal-preparing-btn">決済準備中 — 近日対応予定</div>
             <button class="modal-save-btn" onclick="addToCart(${p.id})">♡ お気に入りに保存</button>`
      }
      ${p.isLastOne && !p.isSold ? '<p class="modal-sold-note">残り1点。お早めに。</p>' : ''}
    </div>`;

  document.getElementById('productModal').classList.add('open');
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function categoryLabel(c) { return {tops:'トップス',bottoms:'ボトムス',outer:'アウター',onepiece:'ワンピース',other:'その他'}[c]||c; }
function seasonLabel(s)   { return {spring:'春夏',summer:'春夏',autumn:'秋冬',winter:'秋冬',all:'オールシーズン'}[s]||s; }

/* ── RENDER SECTIONS ──────────────────────────────────────── */
function renderNewIn() {
  const grid = document.getElementById('newInGrid');
  if (!grid) return;
  PRODUCTS.filter(p => p.isNew).slice(0,8).forEach(p => grid.appendChild(createProductCard(p)));
}

let activeCategory = 'all';
let activeSort     = 'new';

function renderShop() {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;
  grid.innerHTML = '';
  let items = [...PRODUCTS];
  if (activeCategory !== 'all') items = items.filter(p => p.category === activeCategory);
  if (activeSort === 'low')  items.sort((a,b) => a.price - b.price);
  if (activeSort === 'high') items.sort((a,b) => b.price - a.price);
  if (activeSort === 'new')  items.sort((a,b) => (b.isNew?1:0)-(a.isNew?1:0));
  items.forEach(p => grid.appendChild(createProductCard(p)));
}

function initShopControls() {
  document.getElementById('catTabs')?.addEventListener('click', e => {
    const tab = e.target.closest('.tab'); if (!tab) return;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeCategory = tab.dataset.cat;
    renderShop();
  });
  document.getElementById('sortSelect')?.addEventListener('change', e => { activeSort = e.target.value; renderShop(); });
}

/* ── COLOR BROWSE ─────────────────────────────────────────── */
let activeColorFilter = 'all';

function renderColorPalette() {
  const palette = document.getElementById('colorPalette');
  if (!palette) return;
  COLOR_PALETTE.forEach(color => {
    const chip = document.createElement('div');
    chip.className = 'color-chip' + (color.key === 'all' ? ' active' : '');
    chip.dataset.key = color.key;
    chip.innerHTML = `
      <div class="chip-swatch" style="${color.hex ? `background:${color.hex}` : 'background:conic-gradient(#E8E2DC,#DFA8B8,#7BA7C4,#8A9070,#C9B99A,#282020,#E8E2DC)'}"></div>
      <span class="chip-label">${color.label}</span>`;
    chip.addEventListener('click', () => {
      document.querySelectorAll('.color-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeColorFilter = color.key;
      renderColorProducts();
    });
    palette.appendChild(chip);
  });
}

function renderColorProducts() {
  const container = document.getElementById('colorProducts');
  if (!container) return;
  container.innerHTML = '';
  let items = activeColorFilter === 'all' ? [...PRODUCTS] : PRODUCTS.filter(p => p.color === activeColorFilter);
  if (!items.length) { container.innerHTML = '<p style="text-align:center;color:var(--text-muted);font-size:0.78rem;letter-spacing:0.1em;padding:2rem;">このカラーの在庫は現在ありません</p>'; return; }
  const grid = document.createElement('div');
  grid.className = 'product-grid';
  items.forEach(p => grid.appendChild(createProductCard(p)));
  container.appendChild(grid);
}

/* ── INSTAGRAM GRID ───────────────────────────────────────── */
const IG_FALLBACK_COLORS = ['#C4B4A8','#8BA8BC','#D4C4B0','#A8C4A8','#C8A8B8','#BCC4A8','#A8B4C8','#D4B8A8','#C4C4B0','#B8A8C0','#C8B8A8','#A4B8C4'];

function renderInstagram() {
  const grid = document.getElementById('igGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const igId   = CONFIG.instagramId || 'farven_vintage';
  const igBase = 'https://www.instagram.com/' + igId + '/';
  const posts  = CONFIG.igPosts || [];

  for (let i = 0; i < 12; i++) {
    const cell = document.createElement('div');
    cell.className = 'ig-cell';
    const postUrl = posts[i] ? posts[i] : igBase;
    const color   = IG_FALLBACK_COLORS[i % IG_FALLBACK_COLORS.length];

    if (posts[i]) {
      const shortcode = extractIgShortcode(posts[i]);
      cell.innerHTML = `
        <a href="${posts[i]}" target="_blank" rel="noopener" style="display:block;width:100%;height:100%;">
          ${shortcode
            ? `<iframe src="https://www.instagram.com/p/${shortcode}/embed/" frameborder="0" scrolling="no" style="width:100%;height:100%;pointer-events:none;" loading="lazy"></iframe>`
            : `<div style="width:100%;height:100%;background:${color};"></div>`}
          <div class="ig-overlay">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></svg>
          </div>
        </a>`;
    } else {
      cell.innerHTML = `
        <a href="${igBase}" target="_blank" rel="noopener" style="display:block;width:100%;height:100%;">
          <div class="ig-inner" style="background:${color};width:100%;height:100%;min-height:80px;"></div>
          <div class="ig-overlay">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></svg>
          </div>
        </a>`;
    }
    grid.appendChild(cell);
  }

  // Update IG header link
  const igTitle = document.querySelector('#instagram .section-title');
  if (igTitle) igTitle.textContent = '@' + igId;
  document.querySelectorAll('[data-ig-href]').forEach(el => { el.href = igBase; });
}

function extractIgShortcode(url) {
  const m = url.match(/instagram\.com\/p\/([A-Za-z0-9_-]+)/);
  return m ? m[1] : null;
}

/* ── COUNTDOWN ────────────────────────────────────────────── */
function getNextSaturday() {
  const now = new Date();
  const daysUntilSat = (6 - now.getDay() + 7) % 7 || 7;
  const next = new Date(now);
  next.setDate(now.getDate() + daysUntilSat);
  next.setHours(12, 0, 0, 0);
  return next;
}
function startCountdown() {
  function tick() {
    const diff = getNextSaturday() - new Date();
    if (diff <= 0) return;
    const d = Math.floor(diff/86400000), h = Math.floor((diff%86400000)/3600000);
    const m = Math.floor((diff%3600000)/60000), s = Math.floor((diff%60000)/1000);
    ['cDays','cHours','cMins','cSecs'].forEach((id,i) => {
      const el = document.getElementById(id);
      if (el) el.textContent = String([d,h,m,s][i]).padStart(2,'0');
    });
  }
  tick(); setInterval(tick, 1000);
}

/* ── UI INITS ─────────────────────────────────────────────── */
function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 40), {passive:true});
}
function initCartDrawer() {
  const drawer  = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  const open    = () => { drawer?.classList.add('open'); overlay?.classList.add('open'); document.body.style.overflow='hidden'; };
  const close   = () => { drawer?.classList.remove('open'); overlay?.classList.remove('open'); document.body.style.overflow=''; };
  document.getElementById('cartBtn')?.addEventListener('click', open);
  document.getElementById('cartClose')?.addEventListener('click', close);
  overlay?.addEventListener('click', close);
}
function initMobileMenu() {
  const btn  = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  btn?.addEventListener('click', () => { const o = menu.classList.toggle('open'); btn.classList.toggle('open', o); });
  menu?.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => { menu.classList.remove('open'); btn?.classList.remove('open'); }));
}
function initModal() {
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  document.getElementById('modalOverlay')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}
function initForms() {
  document.getElementById('notifyForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const inp = e.target.querySelector('input');
    if (inp?.value) { inp.value=''; showToast('ご登録いただきました。毎週土曜日に入荷通知をお送りいたします'); }
  });
  document.getElementById('memberForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const code = document.getElementById('referralInput')?.value.trim();
    if (code?.length >= 4) { document.getElementById('referralInput').value=''; showToast('コード確認中… アーリーアクセスを解放しました！'); }
    else showToast('有効な紹介コードを入力してください');
  });
}
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); window.scrollTo({top: t.getBoundingClientRect().top + window.scrollY - 72, behavior:'smooth'}); }
    });
  });
}
function setCardDate() {
  const el = document.getElementById('cardDate');
  if (!el) return;
  const n = new Date();
  el.textContent = `${n.getFullYear()}.${String(n.getMonth()+1).padStart(2,'0')}.${String(n.getDate()).padStart(2,'0')}`;
}
function initFadeIn() {
  const style = document.createElement('style');
  style.textContent = '.fade-in{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease}.fade-in.visible{opacity:1;transform:none}';
  document.head.appendChild(style);
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, {threshold:0.1});
  document.querySelectorAll('.product-card,.step,.about-text>*,.member-text>*').forEach(el => { el.classList.add('fade-in'); obs.observe(el); });
}

/* ── MAIN INIT ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  renderNewIn();
  renderShop();
  renderColorPalette();
  renderColorProducts();
  renderInstagram();
  startCountdown();
  setCardDate();

  initHeaderScroll();
  initCartDrawer();
  initMobileMenu();
  initModal();
  initForms();
  initShopControls();
  initSmoothScroll();
  updateCartUI();

  setTimeout(initFadeIn, 100);

  // Listen for admin updates (same tab)
  window.addEventListener('storage', e => {
    if (e.key === 'farven_products' || e.key === 'farven_config') location.reload();
  });
});
