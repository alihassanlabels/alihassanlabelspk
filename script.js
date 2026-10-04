/* ============================================================
   ALI HASSAN LABELS — COMPLETE WEBSITE JAVASCRIPT
   (wrapped in an IIFE so no function can overwrite window.open etc.)
   ============================================================ */
(function () {
"use strict";

/* ===== 1. BUSINESS SETTINGS ===== */
const BIZ = {
  name: "ALI HASSAN LABELS",
  phoneShow: "+92 319 3891973",
  phoneTel: "+923193891973",
  whatsapp: "923193891973",
  email: "alihassanlabels@gmail.com",
  social: {
    tiktok: "https://www.tiktok.com/@alihassanlabels",
    instagram: "https://www.instagram.com/alihassanlabels",
    facebook: "https://www.facebook.com/ali.hassan.labels"
  },
  directions: "https://www.google.com/maps/dir/?api=1&destination=Sidra+Enterprisess+Karachi+Pakistan"
};

/* ===== 2. WEBSITE IMAGES (change images ONLY here) ===== */
const WEBSITE_IMAGES = {
  hero: "hero.png",
  about: "about.jfif",
  products: {
    satinLabels: "satinlabel.png",
    zipperBags: "zipper.png",
    courierFlyer: "flyer.png",
    nonWovenBags: "nonwoven.png",
    keychains: "keychain.jpeg",
    wovenLabels: "woven.jpeg",
    leatherPatches: "leather.jpeg",
    metalLabels: "metal.jpeg",
    thankYouCards: "thankyou.jpeg",
    canvasLabels: "canvas.jpeg",
    roundStickers: "round.jpeg",
    rubberPatches: "custom.jpg"
  },
  gallery: {
    image1: "satinlabel.png",
    image2: "woven.jpeg",
    image3: "leather.jpeg",
    image4: "https://i.pinimg.com/1200x/0e/e6/d6/0ee6d636d680561647696ea9aa83a5bd.jpg",
    image5: "flyer.png",
    image6: "zipper.png",
    image7: "thankyou.jpeg",
    image8: "round.jpeg"
  },
  banners: {
    shipping: "https://i.pinimg.com/originals/21/ca/d5/21cad5d6dfee98ef9e858265af0e2ca9.jpg?nii=t",
    customOrders: "https://i.pinimg.com/originals/21/ca/d5/21cad5d6dfee98ef9e858265af0e2ca9.jpg?nii=t"
  }
};

/* ===== 3. HERO SETTINGS ===== */
const HERO_SETTINGS = { size: "cover", position: "center center", overlayOpacity: 0.55, zoom: true };

/* ===== 4. PRODUCTS (img = KEY from WEBSITE_IMAGES.products) ===== */
const PRODUCTS = [
  { id: 1, name: "Satin Labels", cat: "Clothing Labels", price: 3000, qty: "100 Pieces", img: "satinLabels",
    desc: "Premium-quality satin labels with a smooth finish, perfect for clothing brands, garments, and professional apparel branding.",
    feat: ["Smooth satin finish", "Custom logo & text", "Ideal for garments"] },
  { id: 2, name: "Zipper Bags", cat: "Packaging", price: 3500, qty: "100 Pieces", img: "zipperBags",
    desc: "Custom zipper packaging bags designed to give your products a professional and attractive presentation.",
    feat: ["Resealable zipper", "Custom branding", "Professional presentation"] },
  { id: 3, name: "Custom Courier Flyer", cat: "Packaging", price: 4800, qty: "100 Pieces", img: "courierFlyer",
    desc: "Customized courier flyers for secure, professional, and branded product deliveries.",
    feat: ["Secure shipping", "Custom print", "Branded deliveries"] },
  { id: 4, name: "Non-Woven Bags", cat: "Packaging", price: 5500, qty: "100 Pieces", img: "nonWovenBags",
    desc: "Durable and reusable non-woven bags with custom branding for shopping, packaging, and promotional purposes.",
    feat: ["Durable & reusable", "Custom branding", "Shopping & promotion"] },
  { id: 5, name: "Keychains", cat: "Promotional Products", price: 5500, qty: "100 Pieces", img: "keychains",
    desc: "Personalized branded keychains that help businesses promote their identity with a memorable custom accessory.",
    feat: ["Personalized design", "Memorable giveaway", "Brand promotion"] },
  { id: 6, name: "Woven Labels", cat: "Clothing Labels", price: 1600, qty: "50 Pieces", img: "wovenLabels",
    desc: "High-quality woven labels with detailed designs, ideal for clothing brands, fashion products, and apparel manufacturing.",
    feat: ["Detailed designs", "Durable weave", "Apparel ready"] },
  { id: 7, name: "Leather Patches", cat: "Patches", price: 15000, qty: "1,000 Pieces", img: "leatherPatches",
    desc: "Premium leather patches with elegant finishing for jackets, jeans, caps, and exclusive clothing collections.",
    feat: ["Elegant finishing", "Jackets, jeans & caps", "Premium leather"] },
  { id: 8, name: "Sewing Metal Labels", cat: "Clothing Labels", price: 12500, qty: "50 Pieces", img: "metalLabels",
    desc: "Premium metal labels designed to add a sophisticated, luxurious, and distinctive appearance to your products.",
    feat: ["Luxurious look", "Sew-on attachment", "Distinctive branding"] },
  { id: 9, name: "Thank You Cards", cat: "Packaging", price: 7500, qty: "1,000 Pieces", img: "thankYouCards",
    desc: "Beautiful custom thank-you cards to enhance customer experience and add a personal touch to every order.",
    feat: ["Custom design", "Personal touch", "Boosts customer experience"] },
  { id: 10, name: "Canvas Labels", cat: "Clothing Labels", price: 3500, qty: "100 Pieces", img: "canvasLabels",
    desc: "Durable canvas labels with a premium textured appearance, perfect for apparel and fashion accessories.",
    feat: ["Textured finish", "Durable", "Apparel & accessories"] },
  { id: 11, name: "Round Stickers", cat: "Packaging", price: 3000, qty: "100 Pieces", img: "roundStickers",
    desc: "Custom round stickers for product packaging, branding, promotional materials, and business identity.",
    feat: ["Custom print", "Packaging & promotion", "Round cut"] },
  { id: 12, name: "Rubber Patches", cat: "Patches", price: 3000, qty: "100 Pieces", img: "rubberPatches",
    desc: "High-quality customized rubber patches with detailed designs, durable material, and professional finishing.",
    feat: ["Detailed designs", "Durable material", "Professional finish"] }
];

/* ===== 5. GALLERY [imageKey, title, extraClass] ===== */
const GALLERY = [
  ["image1", "Satin Labels", ""], ["image2", "Woven Labels", ""], ["image3", "Leather Patches", ""],
  ["image4", "Rubber Patches", "w"], ["image5", "Courier Packaging", ""], ["image6", "Zipper Bags", "t"],
  ["image7", "Thank You Cards", ""], ["image8", "Custom Stickers", ""]
];

/* ===== 6. TESTIMONIALS ===== */
const TESTIMONIALS = [
  ["Replace with a genuine client review.", "Client Name", "Business Type"],
  ["Replace with a genuine client review.", "Client Name", "Business Type"],
  ["Replace with a genuine client review.", "Client Name", "Business Type"]
];

/* ===== 7. MARQUEE ===== */
const MARQUEE = "PREMIUM CUSTOM LABELS ✦ WORLDWIDE SHIPPING ✦ QUALITY PRINTING ✦ CUSTOM BRANDING SOLUTIONS ✦ ORDER YOUR CUSTOM LABELS TODAY ✦ ";

/* ===== 8. HELPERS ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const G = !!window.gsap && !RM;
const money = v => "Rs. " + Number(v || 0).toLocaleString("en-US");
const getNested = (obj, path) => path.split(".").reduce((v, k) => (v && v[k] !== undefined ? v[k] : undefined), obj);

/* ===== 9. PLACEHOLDER IMAGE ===== */
const PH = title => {
  const t = String(title || "ALI HASSAN LABELS").replace(/[<>&"']/g, "");
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">' +
    '<rect width="600" height="600" fill="#F7F6F2"/>' +
    '<rect x="24" y="24" width="552" height="552" fill="none" stroke="#B08D45" stroke-width="2"/>' +
    '<text x="300" y="292" font-family="Arial" font-size="26" font-weight="600" fill="#8C6A2F" text-anchor="middle">' + t + "</text>" +
    '<text x="300" y="330" font-family="Arial" font-size="15" fill="#999" text-anchor="middle">Image not found</text></svg>';
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
};

/* Global image-error fallback (works for every <img>, no inline handlers needed) */
document.addEventListener("error", e => {
  const el = e.target;
  if (el && el.tagName === "IMG" && !el.dataset.fb && el.id !== "heroImg") {
    el.dataset.fb = "1";
    el.src = PH(el.alt);
  }
}, true);

function productImage(p) {
  if (!p) return PH("ALI HASSAN LABELS");
  return WEBSITE_IMAGES.products[p.img] || PH(p.name);
}

function img(src, alt, extra) {
  return '<img src="' + (src || PH(alt)) + '" alt="' + (alt || "") + '" ' + (extra || "") + ">";
}

/* ===== 10. SMOOTH SCROLL (Locomotive v5 / Lenis) ===== */
let ls = null;
const LS = window.LocomotiveScroll || window.locomotiveScroll;
try {
  if (LS && !RM) ls = new LS({ lenisOptions: { lerp: 0.1, smoothWheel: true } });
} catch (err) { console.warn("Locomotive Scroll failed:", err); ls = null; }

if (!ls && window.Lenis && !RM) {
  try {
    const L = new window.Lenis({ lerp: 0.1 });
    ls = { lenisInstance: L };
    const raf = t => { L.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  } catch (err) { console.warn("Lenis failed:", err); ls = null; }
}

function getLenis() { return ls && (ls.lenisInstance || ls.lenis) || null; }

function goTo(target) {
  const el = typeof target === "string" ? $(target) : target;
  if (!el) return;
  try {
    const sm = getLenis();
    if (sm) { sm.scrollTo(el, { offset: -80 }); return; }
  } catch (err) {}
  el.scrollIntoView({ behavior: RM ? "auto" : "smooth" });
}

/* ===== 11. MODAL / SCROLL LOCK ===== */
function lockSync() {
  const locked = !!$(".modal.open,#drawer.open,#links.open,#lb.open");
  document.body.style.overflow = locked ? "hidden" : "";
  const veil = $("#veil");
  if (veil) veil.classList.toggle("on", !!$("#links.open,#drawer.open"));
  try {
    const sm = getLenis();
    if (sm) { locked ? sm.stop() : sm.start(); }
  } catch (err) {}
}

/* NOTE: named openEl (NOT "open") so window.open() keeps working for WhatsApp */
function openEl(el) {
  if (!el) return;
  el.classList.add("open");
  lockSync();
}

function closeAll() {
  $$(".modal.open,#drawer.open,#links.open,#lb.open").forEach(el => el.classList.remove("open"));
  const bg = $("#bg");
  if (bg) bg.setAttribute("aria-expanded", "false");
  lockSync();
}

/* ===== 12. STATIC IMAGES ===== */
$$("[data-img]").forEach(el => {
  el.src = getNested(WEBSITE_IMAGES, el.dataset.img) || PH(el.alt);
});

/* ===== 13. HERO IMAGE ===== */
const heroImg = $("#heroImg");
if (heroImg) {
  heroImg.addEventListener("error", function () {
    this.style.display = "none";
    const ov = $("#heroOv");
    if (ov) ov.style.opacity = "0";
    const bg = $(".hero-bg");
    if (bg) bg.style.background = "radial-gradient(circle at 70% 30%,#2a2417,#050505 70%)";
  }, { once: true });
  heroImg.style.objectFit = HERO_SETTINGS.size;
  heroImg.style.objectPosition = HERO_SETTINGS.position;
  const ov = $("#heroOv");
  if (ov) ov.style.opacity = String(HERO_SETTINGS.overlayOpacity);
  heroImg.src = WEBSITE_IMAGES.hero;
}

/* ===== 14. BUSINESS DETAILS ===== */
$$(".biz-phone").forEach(el => { el.innerHTML = '<a href="tel:' + BIZ.phoneTel + '">' + BIZ.phoneShow + "</a>"; });
$$(".biz-mail").forEach(el => { el.innerHTML = '<a href="mailto:' + BIZ.email + '">' + BIZ.email + "</a>"; });

/* ===== 15. WHATSAPP LINKS ===== */
function wa(message) {
  return "https://wa.me/" + BIZ.whatsapp + "?text=" + encodeURIComponent(message);
}

if ($("#call")) $("#call").href = "tel:" + BIZ.phoneTel;
if ($("#mail")) $("#mail").href = "mailto:" + BIZ.email;
if ($("#dir")) $("#dir").href = BIZ.directions;
if ($("#wa")) $("#wa").href = wa("Hello " + BIZ.name + ", I would like to enquire about your products.");
if ($("#intl")) $("#intl").href = wa("Hello " + BIZ.name + ", I would like to enquire about an international order.");

/* ===== 16. SOCIAL LINKS ===== */
const socialHTML =
  '<a href="' + BIZ.social.tiktok + '" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>' +
  '<a href="' + BIZ.social.instagram + '" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>' +
  '<a href="' + BIZ.social.facebook + '" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>';
if ($("#soc1")) $("#soc1").innerHTML = socialHTML;
if ($("#soc2")) $("#soc2").innerHTML = socialHTML;

/* ===== 17. MARQUEE ===== */
if ($("#mq")) $("#mq").innerHTML = "<span>" + MARQUEE.repeat(3) + "</span><span>" + MARQUEE.repeat(3) + "</span>";

/* ===== 18. FOOTER PRODUCTS ===== */
if ($("#fp")) {
  $("#fp").innerHTML = ["Satin Labels", "Woven Labels", "Rubber Patches", "Leather Patches", "Zipper Bags", "Courier Flyers"]
    .map(n => '<li><a href="#products" data-go data-s="' + n.split(" ")[0] + '">' + n + "</a></li>").join("");
}

/* ===== 19. QUOTE PRODUCT OPTIONS ===== */
if ($("#qType")) {
  $("#qType").innerHTML = PRODUCTS.map(p => "<option>" + p.name + "</option>").join("") + "<option>Other / Custom</option>";
}

/* ===== 20. TESTIMONIALS ===== */
if ($("#tg")) {
  $("#tg").innerHTML = TESTIMONIALS.map(t =>
    '<div class="tc rv"><em>DEMO CONTENT</em><i class="fa-solid fa-quote-left"></i><p>' + t[0] + "</p><b>" + t[1] + "</b><small>" + t[2] + "</small></div>"
  ).join("");
}

/* ===== 21. GALLERY ===== */
if ($("#gal")) {
  $("#gal").innerHTML = GALLERY.map(([key, title, cls]) =>
    '<div class="gi ' + cls + ' rv" tabindex="0" role="button" aria-label="View ' + title + '">' +
    img(WEBSITE_IMAGES.gallery[key], title, 'loading="lazy"') + "<span>" + title + "</span></div>"
  ).join("");
}

/* ===== 22. PRODUCTS: FILTER + SEARCH + RENDER ===== */
let activeCategory = "All Products";
let searchTerm = "";
const CATEGORIES = ["All Products", "Clothing Labels", "Packaging", "Patches", "Promotional Products"];

if ($("#filters")) {
  $("#filters").innerHTML = CATEGORIES.map(c =>
    '<button class="fl' + (c === activeCategory ? " on" : "") + '">' + c + "</button>").join("");
}

function renderProducts(first) {
  const grid = $("#grid");
  if (!grid) return;

  const list = PRODUCTS.filter(p => {
    const catOk = activeCategory === "All Products" || p.cat === activeCategory;
    const text = (p.name + " " + p.desc + " " + p.cat).toLowerCase();
    return catOk && text.includes(searchTerm);
  });

  if (!list.length) {
    grid.innerHTML = '<p class="none">No products match your search.</p>';
    return;
  }

  grid.innerHTML = list.map(p =>
    '<article class="card" data-id="' + p.id + '">' +
      '<div class="pi" data-view>' + img(productImage(p), p.name, 'loading="lazy"') + "</div>" +
      '<div class="pb"><h3>' + p.name + "</h3><p>" + p.desc + "</p>" +
        '<div class="meta"><span>Min. ' + p.qty + "</span><b>" + money(p.price) + "</b></div>" +
        '<div class="pbt"><button class="btn ghost" data-view>View Details</button><button class="btn" data-order>Order Now</button></div>' +
      "</div></article>"
  ).join("");

  if (!G) return;
  try {
    if (first && window.ScrollTrigger) {
      gsap.set(".card", { opacity: 0, y: 30 });
      ScrollTrigger.batch(".card", {
        start: "top 92%",
        once: true,
        onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.08, duration: 0.7, overwrite: true })
      });
    } else {
      gsap.fromTo(".card", { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.05, duration: 0.5 });
    }
  } catch (err) {
    console.warn("Product animation error:", err);
    $$(".card").forEach(c => { c.style.opacity = "1"; c.style.transform = "none"; });
  }
}

if ($("#filters")) {
  $("#filters").addEventListener("click", e => {
    const btn = e.target.closest(".fl");
    if (!btn) return;
    activeCategory = btn.textContent.trim();
    $$(".fl").forEach(b => b.classList.toggle("on", b === btn));
    renderProducts();
  });
}

if ($("#q")) {
  $("#q").addEventListener("input", e => {
    searchTerm = e.target.value.trim().toLowerCase();
    renderProducts();
  });
}

if ($("#sBtn")) {
  $("#sBtn").addEventListener("click", () => {
    goTo("#products");
    setTimeout(() => { if ($("#q")) $("#q").focus(); }, 600);
  });
}

/* ===== 23. PRODUCT DETAILS ===== */
let detailQuantity = 1;

function showProduct(id) {
  const product = PRODUCTS.find(p => p.id == id);
  const details = $("#pd");
  if (!product || !details) return;

  detailQuantity = 1;

  details.innerHTML =
    '<div class="imgf">' + img(productImage(product), product.name) + "</div>" +
    '<div class="pdi">' +
      "<h3>" + product.name + "</h3>" +
      '<div class="price">' + money(product.price) +
        ' <small style="font-size:.75rem;color:var(--tx2);font-weight:400">per pack of ' + product.qty + "</small></div>" +
      '<p style="color:var(--tx2);font-size:.92rem">' + product.desc + "</p>" +
      '<ul class="feat">' +
        product.feat.map(f => '<li><i class="fa-solid fa-check"></i>' + f + "</li>").join("") +
        '<li><i class="fa-solid fa-box"></i>Minimum order: ' + product.qty + "</li>" +
      "</ul>" +
      '<div style="font-size:.8rem;font-weight:600">Number of packs</div>' +
      '<div class="row" style="margin-top:8px">' +
        '<div class="qty"><button id="dm" aria-label="Decrease">&minus;</button><span id="dv">1</span><button id="dp" aria-label="Increase">+</button></div>' +
        '<b id="dt">' + money(product.price) + "</b>" +
      "</div>" +
      '<div class="row">' +
        '<button class="btn ghost" id="da"><i class="fa-solid fa-bag-shopping"></i>Add to Cart</button>' +
        '<button class="btn" id="dn">Order Now</button>' +
      "</div>" +
    "</div>";

  const update = () => {
    $("#dv").textContent = detailQuantity;
    $("#dt").textContent = money(product.price * detailQuantity);
  };

  $("#dm").onclick = () => { detailQuantity = Math.max(1, detailQuantity - 1); update(); };
  $("#dp").onclick = () => { detailQuantity++; update(); };
  $("#da").onclick = () => {
    addCart(product.id, detailQuantity);
    closeAll();
    openEl($("#drawer"));
  };
  $("#dn").onclick = () => {
    closeAll();
    orderItems([[product.id, detailQuantity]]);
  };

  openEl($("#m-prod"));
}

if ($("#grid")) {
  $("#grid").addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (!card) return;
    const id = Number(card.dataset.id);
    if (e.target.closest("[data-view]")) { showProduct(id); return; }
    if (e.target.closest("[data-order]")) orderItems([[id, 1]]);
  });
}

/* ===== 24. CART ===== */
let cart = {};
try {
  const saved = JSON.parse(localStorage.getItem("ahl_cart") || "{}");
  if (saved && typeof saved === "object" && !Array.isArray(saved)) cart = saved;
} catch (err) { cart = {}; }

function saveCart() {
  try { localStorage.setItem("ahl_cart", JSON.stringify(cart)); }
  catch (err) { console.warn("LocalStorage unavailable."); }
}

function getProduct(id) { return PRODUCTS.find(p => p.id == id); }

function addCart(id, quantity) {
  id = String(id);
  cart[id] = Number(cart[id] || 0) + Number(quantity || 1);
  paintCart();
}

function paintCart() {
  saveCart();
  const ids = Object.keys(cart).filter(id => getProduct(id));
  let total = 0, count = 0;
  const items = $("#items");
  if (!items) return;

  if (!ids.length) {
    items.innerHTML = '<div class="empty"><i class="fa-solid fa-bag-shopping"></i>Your cart is empty.<br>Browse our products to get started.</div>';
  } else {
    items.innerHTML = ids.map(id => {
      const p = getProduct(id);
      const q = Number(cart[id]);
      total += p.price * q;
      count += q;
      return '<div class="ci" data-id="' + id + '">' +
        img(productImage(p), p.name) +
        "<div><h4>" + p.name + "</h4><small>" + money(p.price) + " · " + p.qty + "</small>" +
          '<div class="qty" style="margin-top:6px"><button data-d="-1" aria-label="Decrease">&minus;</button><span>' + q + '</span><button data-d="1" aria-label="Increase">+</button></div></div>' +
        '<div style="text-align:right"><button class="rm" data-rm aria-label="Remove"><i class="fa-solid fa-trash"></i></button>' +
          '<div style="font-weight:600;font-size:.85rem;margin-top:8px">' + money(p.price * q) + "</div></div>" +
      "</div>";
    }).join("");
  }

  if ($("#sub")) $("#sub").textContent = money(total);
  if ($("#cnt")) $("#cnt").textContent = count;
  if ($("#chk")) {
    $("#chk").disabled = !ids.length;
    $("#chk").style.opacity = ids.length ? "1" : ".5";
  }
}

if ($("#items")) {
  $("#items").addEventListener("click", e => {
    const row = e.target.closest(".ci");
    if (!row) return;
    const id = row.dataset.id;
    if (e.target.closest("[data-rm]")) { delete cart[id]; paintCart(); return; }
    const btn = e.target.closest("[data-d]");
    if (btn) {
      cart[id] = Number(cart[id] || 0) + Number(btn.dataset.d);
      if (cart[id] < 1) delete cart[id];
      paintCart();
    }
  });
}

if ($("#cBtn")) $("#cBtn").addEventListener("click", () => openEl($("#drawer")));

/* ===== 25. ORDER FLOW ===== */
let cartLines = [];

function orderItems(lines) {
  cartLines = lines.filter(([id]) => getProduct(id));
  if (!cartLines.length) return;
  const field = $("#oItems");
  if (field) {
    field.value = cartLines.map(([id, q]) => {
      const p = getProduct(id);
      return p.name + " — " + q + " pack(s) of " + p.qty + " × " + money(p.price);
    }).join("\n");
  }
  openEl($("#m-order"));
}

if ($("#chk")) {
  $("#chk").addEventListener("click", () => {
    const lines = Object.keys(cart).filter(id => getProduct(id)).map(id => [id, Number(cart[id])]);
    if (!lines.length) return;
    closeAll();
    orderItems(lines);
  });
}

/* ===== 26. WHATSAPP SENDER (anchor click = never blocked, works on mobile + desktop) ===== */
function sendWA(form, buildMessage) {
  if (!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form));
  const url = wa(buildMessage(data));
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

if ($("#fOrder")) {
  $("#fOrder").addEventListener("submit", e => {
    e.preventDefault();
    sendWA(e.target, f => {
      let subtotal = 0;
      const lines = cartLines.map(([id, q], i) => {
        const p = getProduct(id);
        const lineTotal = p.price * q;
        subtotal += lineTotal;
        return (i + 1) + ". " + p.name + " | Qty: " + q + " pack(s) (" + p.qty + " each) | " + money(p.price) + " each | " + money(lineTotal);
      }).join("\n");
      return [
        "*NEW ORDER REQUEST — " + BIZ.name + "*", "",
        "*ORDER ITEMS*", lines, "",
        "*Subtotal: " + money(subtotal) + "*", "",
        "*CUSTOMER DETAILS*",
        "Name: " + f.Name,
        "WhatsApp: " + f.WhatsApp,
        "Email: " + f.Email,
        "Country: " + f.Country,
        "City: " + f.City,
        "Address: " + f.Address,
        "Customization: " + (f.Customization || "-"),
        "Instructions: " + (f.Notes || "-")
      ].join("\n");
    });
  });
}

if ($("#fQuote")) {
  $("#fQuote").addEventListener("submit", e => {
    e.preventDefault();
    sendWA(e.target, f => [
      "*CUSTOM QUOTE REQUEST — " + BIZ.name + "*", "",
      "Name: " + f.Name,
      "Phone: " + f.Phone,
      "Country: " + f.Country,
      "Product Type: " + f.Product,
      "Quantity: " + f.Quantity,
      "Customization: " + f.Customization,
      "Reference Image: " + (f.Reference || "-")
    ].join("\n"));
  });
}

if ($("#fContact")) {
  $("#fContact").addEventListener("submit", e => {
    e.preventDefault();
    sendWA(e.target, f => [
      "*WEBSITE ENQUIRY — " + BIZ.name + "*", "",
      "Name: " + f.Name,
      "Email: " + f.Email,
      "Phone: " + f.Phone,
      "Subject: " + f.Subject, "",
      "Message:",
      f.Message
    ].join("\n"));
  });
}

/* ===== 27. GALLERY LIGHTBOX ===== */
if ($("#gal")) {
  $("#gal").addEventListener("click", e => {
    const item = e.target.closest(".gi");
    if (!item) return;
    const image = $("img", item);
    const lbImg = $("#lb img");
    if (!image || !lbImg) return;
    lbImg.src = image.src;
    lbImg.alt = image.alt;
    openEl($("#lb"));
  });
  $("#gal").addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("gi")) {
      e.preventDefault();
      e.target.click();
    }
  });
}

/* ===== 28. GLOBAL CLICKS ===== */
document.addEventListener("click", e => {
  if (e.target.closest("[data-close]")) { closeAll(); return; }

  const opener = e.target.closest("[data-open]");
  if (opener) {
    closeAll();
    const modal = $("#m-" + opener.dataset.open);
    if (modal) openEl(modal);
    return;
  }

  const go = e.target.closest("[data-go]");
  if (go) {
    e.preventDefault();
    closeAll();
    if (go.dataset.s) {
      searchTerm = go.dataset.s.toLowerCase();
      activeCategory = "All Products";
      if ($("#q")) $("#q").value = go.dataset.s;
      $$(".fl").forEach((b, i) => b.classList.toggle("on", i === 0));
      renderProducts();
    }
    goTo(go.getAttribute("href"));
  }
});

$$(".modal").forEach(modal => {
  modal.addEventListener("click", e => { if (e.target === modal) closeAll(); });
});

if ($("#lb")) {
  $("#lb").addEventListener("click", e => { if (e.target === $("#lb")) closeAll(); });
}

document.addEventListener("keydown", e => { if (e.key === "Escape") closeAll(); });

if ($("#veil")) $("#veil").addEventListener("click", closeAll);

/* ===== 29. MOBILE NAV ===== */
if ($("#bg")) {
  $("#bg").addEventListener("click", () => {
    const links = $("#links");
    if (!links) return;
    const state = links.classList.toggle("open");
    $("#bg").setAttribute("aria-expanded", String(state));
    lockSync();
  });
}

/* ===== 30. HEADER + TOP BUTTON ===== */
window.addEventListener("scroll", () => {
  if ($("#hd")) $("#hd").classList.toggle("sc", window.scrollY > 20);
  if ($("#top")) $("#top").classList.toggle("on", window.scrollY > 600);
}, { passive: true });

if ($("#top")) $("#top").addEventListener("click", () => goTo("#home"));

/* ===== 31. KEYBOARD: open product from focused card ===== */
document.addEventListener("keydown", e => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const card = e.target.closest && e.target.closest(".card");
  if (!card) return;
  if (["BUTTON", "A", "INPUT"].includes(e.target.tagName)) return;
  e.preventDefault();
  showProduct(Number(card.dataset.id));
});

/* ===== 32. GSAP ANIMATIONS ===== */
function initAnimations() {
  if (!G || !window.gsap) return;
  try {
    if (window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      const sm = getLenis();
      if (sm && typeof sm.on === "function") sm.on("scroll", ScrollTrigger.update);

      $$(".rv").forEach(el => {
        gsap.from(el, {
          y: 40, opacity: 0, duration: 0.9, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true }
        });
      });
    }

    if (heroImg && HERO_SETTINGS.zoom) {
      gsap.fromTo(heroImg, { scale: 1.12 }, { scale: 1, duration: 2.6, ease: "power2.out" });
    }

    const tl = gsap.timeline({ delay: 0.5 });
    if ($(".hero h1 .ln span")) {
      tl.from(".hero h1 .ln span", { yPercent: 110, duration: 1, stagger: 0.12, ease: "power4.out" });
    }
    tl.from("#h-tag,#h-d,#h-bt,#h-t", { y: 24, opacity: 0, duration: 0.8, stagger: 0.12 }, "-=0.6");

    /* Magnetic buttons */
    $$(".btn,.logo").forEach(el => {
      el.addEventListener("mousemove", e => {
        const r = el.getBoundingClientRect();
        gsap.to(el, {
          x: (e.clientX - r.left - r.width / 2) * 0.18,
          y: (e.clientY - r.top - r.height / 2) * 0.25,
          duration: 0.3
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,.5)" });
      });
    });

    /* Custom cursor */
    const cursor = $("#cur");
    if (cursor && window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
      cursor.classList.add("on");
      window.addEventListener("mousemove", e => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.25 });
      });
      document.addEventListener("mouseover", e => {
        cursor.classList.toggle("h", !!e.target.closest("a,button,.pi,.gi,input,select,textarea"));
      });
    }
  } catch (err) {
    console.warn("GSAP initialization failed:", err);
  }
}

/* ===== 33. LOADER ===== */
function hideLoader() {
  const loader = $("#loader");
  if (loader) loader.classList.add("done");
}

function initLoader() {
  if (G && window.gsap && $("#loader i")) {
    gsap.fromTo("#loader i", { width: 0 }, {
      width: "100%", duration: 1, ease: "power2.inOut",
      onComplete: () => setTimeout(hideLoader, 150)
    });
    setTimeout(hideLoader, 3000);
  } else {
    hideLoader();
  }
}

/* ===== 34. INIT ===== */
function initWebsite() {
  renderProducts(true);
  paintCart();
  initAnimations();
  initLoader();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initWebsite);
} else {
  initWebsite();
}

})();