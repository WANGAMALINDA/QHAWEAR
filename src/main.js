const cart = [];
let nextItemId = 0;

const asset = (path) => new URL(`../${path}`, import.meta.url).href;

const acidwashItems = [
  { name: 'Acid Wash V2 Cream', image: asset('Assets/Acid wash/t7 v3 green.jpeg'), price: 500 },
  { name: 'Acid Wash V5 Khaki', image: asset('Assets/Acid wash/v5 khaki.jpeg'), price: 500 },
  { name: 'Acid Wash V3 Black', image: asset('Assets/Acid wash/t7 v3 black.jpeg'), price: 500 },
  { name: 'Acid Wash V3 Red', image: asset('Assets/Acid wash/t7 v3 red.jpeg'), price: 500 },
  { name: 'Acid Wash V3 Cream', image: asset('Assets/Acid wash/t7 v3 cream.jpeg'), price: 500 },
  { name: 'Acid Wash V3 Grey', image: asset('Assets/Acid wash/v4 grey.jpeg'), price: 500 },
];

const cottonItems = [
  { name: 'Cotton V1', image: asset('Assets/Cotton/co.png'), price: 400 },
  { name: 'Cotton V3', image: asset('Assets/Cotton/t3.jpeg'), price: 400 },
  { name: 'Cotton V3-Alt', image: asset('Assets/Cotton/t17.jpeg'), price: 400 },
];

const hoodieItems = [
  { name: 'Hoodie V1', image: asset('Assets/Jersey/WhatsApp Image 2026-05-04 at 08.51.23.jpeg'), price: 650 },
];

const capItems = [{ name: 'Cap V1', image: asset('Assets/Cap/cap1.jpeg'), price: 250 }];

const socksItems = [{ name: 'Socks V1', image: asset('Assets/socks/socks.png'), price: 120 }];

const sweatpantsItems = [{ name: 'Sweat Pants - Coming Soon', image: asset('Assets/trackpants/pants.jpeg'), price: 0 }];

const signatureItems = [
  { name: 'Signature V1 Orange', image: asset('Assets/signature/t16.jpeg'), price: 650 },
  { name: 'Signature V1 Black', image: asset('Assets/signature/Signature V1 black.jpeg'), price: 650 },
  { name: 'Signature V1 Cream', image: asset('Assets/signature/Signature V1 cream.jpeg'), price: 650 },
  { name: 'Signature V1 White', image: asset('Assets/signature/Signature V1 white.jpeg'), price: 650 },
  { name: 'Signature V1 Red', image: asset('Assets/signature/Signature V1 red.jpeg'), price: 650 },
  { name: 'Signature V1 Grey', image: asset('Assets/signature/t2.jpeg'), price: 650 },
];

const roundneckItems = [
  { name: 'Round Neck', image: asset('Assets/neckless/round neck red.jpeg'), price: 500 },
  { name: 'Round Neck', image: asset('Assets/neckless/round necks cream.jpeg'), price: 500 },
];

function toggleMobileMenu() {
  const btn = document.querySelector('.hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  btn?.classList.toggle('active');
  menu?.classList.toggle('active');
}

function closeMobileMenu() {
  const btn = document.querySelector('.hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  btn?.classList.remove('active');
  menu?.classList.remove('active');
}

function checkScroll() {
  const elements = document.querySelectorAll('.fade-in-section');
  elements.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.75) {
      el.classList.add('visible');
    }
  });
}

function openCollection(modalId, gridId, items, sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']) {
  renderCollection(gridId, items, sizes);
  document.getElementById(modalId).style.display = 'block';
}

function closeCollection(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

function openAcidWashCollection() {
  openCollection('acidwash-modal', 'acidwash-grid', acidwashItems);
}

function closeAcidWashCollection() {
  closeCollection('acidwash-modal');
}

function openCottonCollection() {
  openCollection('cotton-modal', 'cotton-grid', cottonItems);
}

function closeCottonCollection() {
  closeCollection('cotton-modal');
}

function openHoodieCollection() {
  openCollection('hoodie-modal', 'hoodie-grid', hoodieItems);
}

function closeHoodieCollection() {
  closeCollection('hoodie-modal');
}

function openCapCollection() {
  openCollection('caps-modal', 'caps-grid', capItems, ['One Size']);
}

function closeCapCollection() {
  closeCollection('caps-modal');
}

function openSocksCollection() {
  openCollection('socks-modal', 'socks-grid', socksItems, ['One Size']);
}

function closeSocksCollection() {
  closeCollection('socks-modal');
}

function openSweatpantsCollection() {
  openCollection('sweatpants-modal', 'sweatpants-grid', sweatpantsItems, ['One Size']);
}

function closeSweatpantsCollection() {
  closeCollection('sweatpants-modal');
}

function openSignatureCollection() {
  openCollection('signature-modal', 'signature-grid', signatureItems);
}

function closeSignatureCollection() {
  closeCollection('signature-modal');
}

function openRoundneckCollection() {
  openCollection('roundneck-modal', 'roundneck-grid', roundneckItems);
}

function closeRoundneckCollection() {
  closeCollection('roundneck-modal');
}

function renderCollection(gridId, items, sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = '';
  items.forEach((item) => {
    const sizeOptions = sizes.map((size) => `<option value="${size}">${size}</option>`).join('');
    grid.innerHTML += `
      <div class="product-card" style="background:white;">
        <div class="product-img-wrapper"><img src="${item.image}"></div>
        <div style="padding: 0 20px; text-align: center;">
          <h3 class="heavy-title" style="font-size: 14px;">${item.name}</h3>
          <p class="mono" style="color:var(--red);">R${item.price}</p>
          <select id="size-select-${nextItemId}" class="size-select" style="width:100%; padding:10px; margin-bottom:10px; border:1px solid #ddd; font-family:'Roboto Mono', monospace; font-size:12px;">
            ${sizes.length === 1 ? '' : '<option value="">Select Size</option>'}
            ${sizeOptions}
          </select>
          <button class="add-to-cart-btn" onclick="addToCart('${item.name}', ${item.price}, this.previousElementSibling)">ADD TO CART</button>
        </div>
      </div>`;
    nextItemId += 1;
  });
}

function toggleCart() {
  document.getElementById('cart-sidebar').classList.toggle('active');
}

function addToCart(name, price, sizeSelect) {
  const size = sizeSelect.value;
  if (!size) {
    alert('Please select a size (XS-XXL)');
    return;
  }

  const itemId = nextItemId += 1;
  cart.push({ id: itemId, name, price, size });
  renderCart();
  updateCartCount();
  sizeSelect.value = '';

  if (!document.getElementById('cart-sidebar').classList.contains('active')) {
    toggleCart();
  }
}

function removeFromCart(itemId) {
  const itemIndex = cart.findIndex((item) => item.id === itemId);
  if (itemIndex >= 0) {
    cart.splice(itemIndex, 1);
  }
  renderCart();
  updateCartCount();
}

function updateCartCount() {
  document.getElementById('cart-count').innerText = `MY CART (${cart.length})`;
  const mobileCartEl = document.getElementById('cart-count-mobile');
  if (mobileCartEl) {
    mobileCartEl.innerText = `MY CART (${cart.length})`;
  }
}

function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

function renderCart() {
  const list = document.getElementById('cart-items-list');
  const totalEl = document.getElementById('cart-total');
  list.innerHTML = '';

  const total = calculateTotal();
  cart.forEach((item) => {
    list.innerHTML += `
      <div style="border:1px solid #eee; padding:15px; margin-bottom:10px; border-radius:4px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">
          <span class="mono">${item.name}</span>
          <span class="mono">R${item.price}</span>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px; color:#666;">
          <span>Size: ${item.size}</span>
          <button onclick="removeFromCart(${item.id})" style="background:var(--red); color:white; border:none; padding:5px 12px; cursor:pointer; font-family:'Roboto Mono', monospace; font-size:11px; border-radius:3px;">Remove</button>
        </div>
      </div>`;
  });

  totalEl.innerText = `TOTAL: R${total}`;
}

function processCheckout() {
  const name = document.getElementById('cust-name').value;
  const phone = document.getElementById('cust-phone').value;
  const address = document.getElementById('delivery-address').value;

  if (!name || !phone || !address || cart.length === 0) {
    alert('Please fill all details (name, phone, delivery address) and add items.');
    return;
  }

  const itemsList = cart.map((item) => `• ${item.name} (Size: ${item.size}) - R${item.price}`).join('\n');
  const total = calculateTotal();

  const orderMessage = `Customer Details:
Name: ${name}
Phone: ${phone}
Delivery Address: ${address}

Order Items:
${itemsList}

Total: R${total}

Thank you for your order!`;

  const emailSubject = 'QHAWEAR ONLINE ORDER';
  window.location.href = `mailto:qhaweer@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(orderMessage)}`;

  setTimeout(() => {
    const whatsappNumber = '27768296508';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;
    window.open(whatsappUrl, '_blank');
  }, 500);

  setTimeout(() => {
    cart.length = 0;
    renderCart();
    updateCartCount();
    alert('Order sent! Check your email and WhatsApp for confirmation.');
  }, 1000);
}

window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.openAcidWashCollection = openAcidWashCollection;
window.closeAcidWashCollection = closeAcidWashCollection;
window.openCottonCollection = openCottonCollection;
window.closeCottonCollection = closeCottonCollection;
window.openHoodieCollection = openHoodieCollection;
window.closeHoodieCollection = closeHoodieCollection;
window.openCapCollection = openCapCollection;
window.closeCapCollection = closeCapCollection;
window.openSocksCollection = openSocksCollection;
window.closeSocksCollection = closeSocksCollection;
window.openSweatpantsCollection = openSweatpantsCollection;
window.closeSweatpantsCollection = closeSweatpantsCollection;
window.openSignatureCollection = openSignatureCollection;
window.closeSignatureCollection = closeSignatureCollection;
window.openRoundneckCollection = openRoundneckCollection;
window.closeRoundneckCollection = closeRoundneckCollection;
window.toggleCart = toggleCart;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.processCheckout = processCheckout;

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

updateCartCount();