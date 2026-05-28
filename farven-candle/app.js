/* ============================================================
   farven candle — app.js
   Original Scented Candles EC
   ============================================================ */
'use strict';

/* ── DEFAULT PRODUCTS ─────────────────────────────────────── */
const DEFAULT_PRODUCTS = [
  { id:1,  name:'ヴァニラ アンバー',          category:'candle',   price:4800,  color:'amber',    colorHex:'#C4905A', colorLabel:'アンバー',    size:'200g', condition:'SOY WAX', season:'all',    isNew:true,  isLastOne:false, isSold:false, description:'甘く温かいヴァニラをベースに、アンバーとサンダルウッドが重なる深みのある香り。寒い夜のリビングに。',              measurements:{ 燃焼時間:'約40時間', 香りのノート:'ヴァニラ・アンバー・サンダルウッド', 素材:'ソイワックス100%' }, paymentLink:'', imageUrl:'' },
  { id:2,  name:'ホワイト リネン',             category:'candle',   price:3200,  color:'linen',    colorHex:'#E8E0D5', colorLabel:'リネン',      size:'120g', condition:'SOY WAX', season:'all',    isNew:true,  isLastOne:false, isSold:false, description:'清潔感のあるリネンにムスクとシトラスを合わせた、爽やかで上品な香り。洗面所や寝室に。',                            measurements:{ 燃焼時間:'約25時間', 香りのノート:'リネン・ムスク・シトラス', 素材:'ソイワックス100%' }, paymentLink:'', imageUrl:'' },
  { id:3,  name:'ローズ ペタル',               category:'candle',   price:4500,  color:'rose',     colorHex:'#D4A8B0', colorLabel:'ローズ',      size:'180g', condition:'SOY WAX', season:'spring', isNew:true,  isLastOne:true,  isSold:false, description:'フレッシュなローズに柔らかいパウダーを重ねた、華やかで甘すぎない香り。贈り物にも。',                              measurements:{ 燃焼時間:'約35時間', 香りのノート:'ローズ・パウダー・ムスク', 素材:'ソイワックス100%' }, paymentLink:'', imageUrl:'' },
  { id:4,  name:'シダーウッド & スモーク',      category:'candle',   price:5800,  color:'cedar',    colorHex:'#8A7060', colorLabel:'シダー',      size:'250g', condition:'SOY WAX', season:'autumn', isNew:true,  isLastOne:false, isSold:false, description:'深みのあるシダーウッドに微かなスモークノートが混ざる、インテリアにも映えるユニセックスな香り。',                  measurements:{ 燃焼時間:'約50時間', 香りのノート:'シダーウッド・スモーク・ベチバー', 素材:'ソイワックス100%' }, paymentLink:'', imageUrl:'' },
  { id:5,  name:'ラベンダー & ムスク',          category:'candle',   price:3500,  color:'lavender', colorHex:'#B8A8C8', colorLabel:'ラベンダー',  size:'120g', condition:'SOY WAX', season:'all',    isNew:false, isLastOne:true,  isSold:false, description:'ラベンダーの爽やかさとムスクの柔らかさが調和した、リラックスタイムのための香り。',                                measurements:{ 燃焼時間:'約25時間', 香りのノート:'ラベンダー・ムスク・ウッド', 素材:'ソイワックス100%' }, paymentLink:'', imageUrl:'' },
  { id:6,  name:'ベルガモット シトラス',         category:'candle',   price:4200,  color:'citrus',   colorHex:'#C8B460', colorLabel:'シトラス',    size:'150g', condition:'SOY WAX', season:'spring', isNew:false, isLastOne:false, isSold:false, description:'爽やかなベルガモットとシトラスのブレンド。朝の空間を明るくしてくれる清々しい香り。',                              measurements:{ 燃焼時間:'約30時間', 香りのノート:'ベルガモット・レモン・グリーン', 素材:'ソイワックス100%' }, paymentLink:'', imageUrl:'' },
  { id:7,  name:'ジャスミン & ウード',           category:'candle',   price:6800,  color:'floral',   colorHex:'#C8A880', colorLabel:'フローラル',  size:'200g', condition:'SOY WAX', season:'all',    isNew:false, isLastOne:true,  isSold:false, description:'ジャスミンの透明感にウードの深みが溶け合う、贅沢な夜のための一本。限定ブレンド。',                                measurements:{ 燃焼時間:'約40時間', 香りのノート:'ジャスミン・ウード・アンバー', 素材:'ソイワックス100%' }, paymentLink:'', imageUrl:'' },
  { id:8,  name:'サンダルウッド バニラ',         category:'candle',   price:7500,  color:'amber',    colorHex:'#B87840', colorLabel:'ウッドアンバー',size:'300g', condition:'SOY WAX', season:'autumn', isNew:false, isLastOne:false, isSold:false, description:'サンダルウッドの繊細な木の香りにヴァニラのふくよかさが寄り添う、長く愛せる定番ブレンド。',                    measurements:{ 燃焼時間:'約60時間', 香りのノート:'サンダルウッド・ヴァニラ・パチュリ', 素材:'ソイワックス100%' }, paymentLink:'', imageUrl:'' },
  { id:9,  name:'リネン & シーソルト',          category:'spray',    price:3800,  color:'linen',    colorHex:'#DCE8E8', colorLabel:'アクア',      size:'100ml',condition:'SPRAY',   season:'all',    isNew:false, isLastOne:false, isSold:false, description:'海を感じるシーソルトとリネンのルームスプレー。ひと吹きで空間がリフレッシュ。',                                    measurements:{ 内容量:'100ml', 香りのノート:'リネン・シーソルト・シトラス', 使用方法:'空間に数回スプレー' }, paymentLink:'', imageUrl:'' },
  { id:10, name:'ローズ & パウダー',            category:'diffuser', price:5500,  color:'rose',     colorHex:'#E0B8C0', colorLabel:'ローズ',      size:'100ml',condition:'DIFFUSER', season:'all',    isNew:false, isLastOne:false, isSold:false, description:'華やかなローズとパウダリーなムスクのリードディフューザー。玄関やリビングに。',                                    measurements:{ 内容量:'100ml', 香りのノート:'ローズ・パウダー・ムスク', 持続期間:'約60日' }, paymentLink:'', imageUrl:'' },
  { id:11, name:'ウッド & アンバー ギフトセット',category:'gift',     price:12800, color:'cedar',    colorHex:'#9A7858', colorLabel:'ウッディ',    size:'SET',  condition:'GIFT',    season:'all',    isNew:false, isLastOne:true,  isSold:false, description:'ウッド系キャンドル2本＋マッチ入りギフトボックス。贈り物に最適な人気セット。ラッピング込み。',                  measurements:{ 内容物:'キャンドル×2・マッチ', 燃焼時間:'約40時間×2', ラッピング:'専用BOX付き' }, paymentLink:'', imageUrl:'' },
  { id:12, name:'ミント & アクアティック',        category:'candle',   price:4000,  color:'fresh',    colorHex:'#8AB8A8', colorLabel:'フレッシュ',  size:'150g', condition:'SOY WAX', season:'spring', isNew:false, isLastOne:false, isSold:false, description:'クリアなミントとアクアティックノートが清々しい、夏向けのリフレッシュ系キャンドル。',                              measurements:{ 燃焼時間:'約30時間', 香りのノート:'ミント・アクア・シトラス', 素材:'ソイワックス100%' }, paymentLink:'', imageUrl:'' }
];

const DEFAULT_CONFIG = {
  heroPrimary:        '灯りと香りで、\n空間をつくる。',
  heroSub:            'すべて手仕事。大阪から、オリジナルの香りを。',
  heroCta:            '新着アイテムを見る',
  bgColor:            '#F6EFE7',
  darkColor:          '#261A10',
  announcement:       '',
  announcementActive: false,
  instagramId:        'farven_candle',
  saturdayNote:       '毎週土曜 12:00 に新作・再入荷情報をお届けします',
  aboutTitle:         '香りは、\n記憶になる。',
  aboutText:          'farven candleは、大阪発のオリジナルキャンドルブランドです。\n\n日常の空間に、やさしい灯りと記憶に残る香りを。すべての香りは、自社でブレンドしたオリジナルフレグランスです。\n\n感覚と数字、どちらも大切にしながら、本当に良いものだけをお届けします。',
  igPosts:            []
};

const SCENT_PALETTE = [
  { key:'all',     hex:null,       label:'すべて' },
  { key:'floral',  hex:'#D4A8B0',  label:'フローラル' },
  { key:'rose',    hex:'#E0B8C0',  label:'ローズ' },
  { key:'amber',   hex:'#C4905A',  label:'アンバー' },
  { key:'cedar',   hex:'#8A7060',  label:'ウッディ' },
  { key:'citrus',  hex:'#C8B460',  label:'シトラス' },
  { key:'lavender',hex:'#B8A8C8',  label:'ラベンダー' },
  { key:'linen',   hex:'#E8E0D5',  label:'ムスク' },
  { key:'fresh',   hex:'#8AB8A8',  label:'フレッシュ' },
];

/* ── LOAD DATA ────────────────────────────────────────────── */
function loadProducts() {
  try { const s = localStorage.getItem('farven_candle_products'); return s ? JSON.parse(s) : DEFAULT_PRODUCTS; } catch { return DEFAULT_PRODUCTS; }
}
function loadConfig() {
  try { const s = localStorage.getItem('farven_candle_config'); return s ? Object.assign({}, DEFAULT_CONFIG, JSON.parse(s)) : DEFAULT_CONFIG; } catch { return DEFAULT_CONFIG; }
}

let PRODUCTS = loadProducts();
let CONFIG   = loadConfig();

/* ── APPLY CONFIG ─────────────────────────────────────────── */
function applyConfig() {
  const r = document.documentElement.style;
  r.setProperty('--bg',      CONFIG.bgColor   || '#F6EFE7');
  r.setProperty('--bg-dark', CONFIG.darkColor  || '#261A10');
  r.setProperty('--text',    CONFIG.darkColor  || '#261A10');

  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) heroTitle.innerHTML = (CONFIG.heroPrimary || '').replace(/\n/g, '<br>');
  const heroSub = document.querySelector('.hero-sub');
  if (heroSub) heroSub.textContent = CONFIG.heroSub || '';
  const heroCta = document.querySelector('.hero-cta');
  if (heroCta) heroCta.textContent = CONFIG.heroCta || '新着アイテムを見る';

  const aboutTitle = document.querySelector('.about-title');
  if (aboutTitle) aboutTitle.innerHTML = (CONFIG.aboutTitle || '').replace(/\n/g, '<br>');
  const aboutBodyPs = document.querySelectorAll('.about-text-body p');
  if (aboutBodyPs.length && CONFIG.aboutText) {
    const paras = CONFIG.aboutText.split('\n\n');
    aboutBodyPs.forEach((el, i) => { el.textContent = paras[i] || ''; el.style.display = paras[i] ? '' : 'none'; });
  }

  const bar = document.getElementById('announcementBar');
  if (bar) {
    bar.textContent = CONFIG.announcement || '';
    bar.style.display = (CONFIG.announcementActive && CONFIG.announcement) ? 'block' : 'none';
  }

  const igId   = CONFIG.instagramId || 'farven_candle';
  const igBase = 'https://www.instagram.com/' + igId + '/';
  document.querySelectorAll('.ig-handle').forEach(el => { el.textContent = '@' + igId; });
  document.querySelectorAll('[data-ig-href]').forEach(el => { el.href = igBase; });
  const igTitle = document.getElementById('igTitle');
  if (igTitle) igTitle.textContent = '@' + igId;

  const satEl = document.querySelector('.notify-note');
  if (satEl && CONFIG.saturdayNote) satEl.textContent = CONFIG.saturdayNote;
}

/* ── CART ─────────────────────────────────────────────────── */
let cart = [];
try { cart = JSON.parse(localStorage.getItem('farven_candle_cart') || '[]'); } catch {}
function saveCart() { localStorage.setItem('farven_candle_cart', JSON.stringify(cart)); }

function addToCart(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p || p.isSold) return;
  if (cart.find(i => i.id === productId)) { showToast('このアイテムはすでに保存済みです'); return; }
  cart.push({ id: p.id, quantity: 1 });
  saveCart(); updateCartUI();
  showToast(`"${p.name.slice(0,14)}…" を保存しました`);
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart(); updateCartUI(); renderCartDrawer();
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
      : `<div style="width:100%;height:100%;background:${p.colorHex};display:flex;align-items:center;justify-content:center;"><span style="font-size:.5rem;color:rgba(255,255,255,.6);letter-spacing:.06em;">${p.colorLabel}</span></div>`;
    return `
      <div class="cart-item">
        <div class="cart-item-img">${thumb}</div>
        <div>
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-meta">${p.size} / ${p.condition}</div>
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
  el.textContent = msg; el.classList.add('show');
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
  if (p.isLastOne && !p.isSold)    badges.push('<span class="badge badge-last">残りわずか</span>');
  if (p.isSold)                    badges.push('<span class="badge badge-sold">SOLD OUT</span>');

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
      ${p.paymentLink
        ? `<a href="${p.paymentLink}" target="_blank" rel="noopener" class="card-add" onclick="event.stopPropagation()">今すぐ購入</a>`
        : '<span class="card-add card-add-soon">準備中</span>'}
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
    : `<div style="width:100%;height:100%;min-height:320px;background:${p.colorHex};display:flex;align-items:center;justify-content:center;"><span style="font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:300;color:rgba(255,255,255,.6);letter-spacing:.08em;">${p.colorLabel}</span></div>`;

  document.getElementById('modalInner').innerHTML = `
    <div class="modal-img">${imgContent}</div>
    <div class="modal-info">
      <div class="modal-tag">${catLabel(p.category)} · ${p.size}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-price">¥${p.price.toLocaleString()}<span style="font-size:.7rem;color:var(--text-muted);margin-left:6px;">(税込)</span></div>
      <div class="modal-divider"></div>
      <div>
        <div class="modal-detail-row"><span>香りの系統</span><span>${p.colorLabel}</span></div>
        <div class="modal-detail-row"><span>容量・サイズ</span><span>${p.size}</span></div>
        <div class="modal-detail-row"><span>素材タイプ</span><span>${p.condition}</span></div>
        ${measurements}
      </div>
      <div class="modal-divider"></div>
      <p style="font-size:.78rem;color:var(--text-mid);line-height:1.8;">${p.description}</p>
      ${p.isSold
        ? `<div class="modal-sold-block">SOLD OUT</div>`
        : p.paymentLink
          ? `<a href="${p.paymentLink}" target="_blank" rel="noopener" class="modal-buy-btn">今すぐ購入 — ¥${p.price.toLocaleString()}</a>
             <button class="modal-save-btn" onclick="addToCart(${p.id})">♡ お気に入りに保存</button>`
          : `<div class="modal-preparing-btn">決済準備中 — 近日対応予定</div>
             <button class="modal-save-btn" onclick="addToCart(${p.id})">♡ お気に入りに保存</button>`
      }
      ${p.isLastOne && !p.isSold ? '<p class="modal-sold-note">残りわずかです。お早めにどうぞ。</p>' : ''}
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

function catLabel(c) { return { candle:'キャンドル', diffuser:'ディフューザー', spray:'ルームスプレー', gift:'ギフトセット', other:'その他' }[c] || c; }

/* ── RENDER SECTIONS ──────────────────────────────────────── */
function renderNewIn() {
  const grid = document.getElementById('newInGrid');
  if (!grid) return;
  PRODUCTS.filter(p => p.isNew).slice(0, 8).forEach(p => grid.appendChild(createProductCard(p)));
}

let activeCategory = 'all', activeSort = 'new';

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
    tab.classList.add('active'); activeCategory = tab.dataset.cat; renderShop();
  });
  document.getElementById('sortSelect')?.addEventListener('change', e => { activeSort = e.target.value; renderShop(); });
}

/* ── SCENT PALETTE ────────────────────────────────────────── */
let activeScentFilter = 'all';

function renderScentPalette() {
  const palette = document.getElementById('scentPalette');
  if (!palette) return;
  SCENT_PALETTE.forEach(s => {
    const chip = document.createElement('div');
    chip.className = 'color-chip' + (s.key === 'all' ? ' active' : '');
    chip.dataset.key = s.key;
    chip.innerHTML = `
      <div class="chip-swatch" style="${s.hex ? `background:${s.hex}` : 'background:conic-gradient(#D4A8B0,#C4905A,#8A7060,#B8A8C8,#C8B460,#8AB8A8,#E8E0D5,#D4A8B0)'}"></div>
      <span class="chip-label">${s.label}</span>`;
    chip.addEventListener('click', () => {
      document.querySelectorAll('.color-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active'); activeScentFilter = s.key; renderScentProducts();
    });
    palette.appendChild(chip);
  });
}

function renderScentProducts() {
  const container = document.getElementById('scentProducts');
  if (!container) return;
  container.innerHTML = '';
  let items = activeScentFilter === 'all' ? [...PRODUCTS] : PRODUCTS.filter(p => p.color === activeScentFilter);
  if (!items.length) { container.innerHTML = '<p style="text-align:center;color:var(--text-muted);font-size:.78rem;letter-spacing:.1em;padding:2rem;">この香りの在庫は現在ありません</p>'; return; }
  const grid = document.createElement('div');
  grid.className = 'product-grid';
  items.forEach(p => grid.appendChild(createProductCard(p)));
  container.appendChild(grid);
}

/* ── INSTAGRAM ────────────────────────────────────────────── */
const IG_COLORS = ['#D4B4A8','#C4905A','#E8D4B0','#B8C4A8','#C8A8B8','#C4B4A8','#A8B8C8','#D4C4B0','#B8A8C0','#C8B8A8','#E0C8B0','#A8C4B8'];

function renderInstagram() {
  const grid = document.getElementById('igGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const igId   = CONFIG.instagramId || 'farven_candle';
  const igBase = 'https://www.instagram.com/' + igId + '/';
  const posts  = CONFIG.igPosts || [];

  for (let i = 0; i < 12; i++) {
    const cell = document.createElement('div');
    cell.className = 'ig-cell';
    const color = IG_COLORS[i % IG_COLORS.length];
    const postUrl = posts[i] || igBase;

    if (posts[i]) {
      const m = posts[i].match(/instagram\.com\/p\/([A-Za-z0-9_-]+)/);
      const sc = m ? m[1] : null;
      cell.innerHTML = `<a href="${posts[i]}" target="_blank" rel="noopener" style="display:block;width:100%;height:100%;">
        ${sc ? `<iframe src="https://www.instagram.com/p/${sc}/embed/" frameborder="0" scrolling="no" style="width:100%;height:100%;pointer-events:none;" loading="lazy"></iframe>`
             : `<div style="width:100%;height:100%;background:${color};"></div>`}
        <div class="ig-overlay"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></svg></div>
      </a>`;
    } else {
      cell.innerHTML = `<a href="${igBase}" target="_blank" rel="noopener" style="display:block;width:100%;height:100%;">
        <div class="ig-inner" style="background:${color};width:100%;height:100%;min-height:80px;"></div>
        <div class="ig-overlay"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></svg></div>
      </a>`;
    }
    grid.appendChild(cell);
  }
}

/* ── COUNTDOWN ────────────────────────────────────────────── */
function getNextSaturday() {
  const now = new Date(), d = (6 - now.getDay() + 7) % 7 || 7;
  const next = new Date(now); next.setDate(now.getDate() + d); next.setHours(12, 0, 0, 0); return next;
}
function startCountdown() {
  function tick() {
    const diff = getNextSaturday() - new Date(); if (diff <= 0) return;
    const vals = [Math.floor(diff/86400000), Math.floor((diff%86400000)/3600000), Math.floor((diff%3600000)/60000), Math.floor((diff%60000)/1000)];
    ['cDays','cHours','cMins','cSecs'].forEach((id,i) => { const el = document.getElementById(id); if (el) el.textContent = String(vals[i]).padStart(2,'0'); });
  }
  tick(); setInterval(tick, 1000);
}

/* ── UI INITS ─────────────────────────────────────────────── */
function initHeaderScroll() {
  const h = document.getElementById('header');
  window.addEventListener('scroll', () => h?.classList.toggle('scrolled', window.scrollY > 40), {passive:true});
}
function initCartDrawer() {
  const drawer = document.getElementById('cartDrawer'), overlay = document.getElementById('cartOverlay');
  const open = () => { drawer?.classList.add('open'); overlay?.classList.add('open'); document.body.style.overflow='hidden'; };
  const close= () => { drawer?.classList.remove('open'); overlay?.classList.remove('open'); document.body.style.overflow=''; };
  document.getElementById('cartBtn')?.addEventListener('click', open);
  document.getElementById('cartClose')?.addEventListener('click', close);
  overlay?.addEventListener('click', close);
}
function initMobileMenu() {
  const btn = document.getElementById('menuBtn'), menu = document.getElementById('mobileMenu');
  btn?.addEventListener('click', () => { const o = menu.classList.toggle('open'); btn.classList.toggle('open', o); });
  menu?.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => { menu.classList.remove('open'); btn?.classList.remove('open'); }));
}
function initModal() {
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  document.getElementById('modalOverlay')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key==='Escape') closeModal(); });
}
function initForms() {
  document.getElementById('notifyForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const inp = e.target.querySelector('input');
    if (inp?.value) { inp.value=''; showToast('ご登録いただきました。毎週土曜日に新作情報をお送りいたします'); }
  });
}
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 72, behavior:'smooth' }); }
    });
  });
}
function initFadeIn() {
  const style = document.createElement('style');
  style.textContent = '.fade-in{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease}.fade-in.visible{opacity:1;transform:none}';
  document.head.appendChild(style);
  const obs = new IntersectionObserver(e => e.forEach(x => { if (x.isIntersecting) { x.target.classList.add('visible'); obs.unobserve(x.target); } }), {threshold:0.1});
  document.querySelectorAll('.product-card,.step,.about-text>*,.craft-text>*').forEach(el => { el.classList.add('fade-in'); obs.observe(el); });
}

/* ── MAIN INIT ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  renderNewIn();
  renderShop();
  renderScentPalette();
  renderScentProducts();
  renderInstagram();
  startCountdown();
  initHeaderScroll();
  initCartDrawer();
  initMobileMenu();
  initModal();
  initForms();
  initShopControls();
  initSmoothScroll();
  updateCartUI();
  setTimeout(initFadeIn, 100);

  window.addEventListener('storage', e => {
    if (e.key === 'farven_candle_products' || e.key === 'farven_candle_config') location.reload();
  });
});
