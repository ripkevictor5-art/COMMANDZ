// Traduções centralizadas
const translations = {
  pt: {
    home: "🏠 Home",
    news: "📰 Novidades",
    lojaz: "🛒 Lojaz",
    youtube: "🎥 YouTube",
    discord: "Entrar no Discord",
    tabCars: "Carros",
    tabWeapons: "Armas",
    tabClothes: "Roupas",
    tabVips: "VIPs",
    carTitle: "🚗 TyphoonK Cargo",
    carDesc: "Um veículo que combina robustez e versatilidade, contando uma blindagem de alto nível e capacidade para até 13 sobreviventes, contando com 1000 slots de armazenamento. Este se torna o veículo perfeito para todo tipo de missão.",
    infoTitle: "Informações do Servidor",
    rulesTitle: "Regras do Servidor",
    rules: [
      "Sem uso de cheats ou exploits.",
      "Respeite todos os jogadores.",
      "Proibido matar em safe zone.",
      "Admins têm palavra final."
    ],
    vip1Title: "⭐ VIP Starter",
    vip1Desc: "Acesso a kits básicos e prioridade em filas do servidor.",
    vip2Title: "⭐⭐ VIP Silver",
    vip2Desc: "Benefícios do Starter + itens exclusivos e maior limite de base.",
    vip3Title: "⭐⭐⭐ VIP Gold",
    vip3Desc: "Todos os benefícios anteriores + skins especiais e suporte dedicado.",
    vip4Title: "⭐⭐⭐⭐ VIP Titanium",
    vip4Desc: "Todos os benefícios anteriores + privilégios máximos, kits raros e atendimento exclusivo.",
  },
  en: {
    home: "🏠 Home",
    news: "📰 News",
    lojaz: "🛒 Store",
    youtube: "🎥 YouTube",
    discord: "Join Discord",
    tabCars: "Cars",
    tabWeapons: "Weapons",
    tabClothes: "Clothes",
    tabVips: "VIPs",
    carTitle: "🚗 TyphoonK Cargo",
    carDesc: "A vehicle that combines robustness and versatility, featuring high-level armor and capacity for up to 13 survivors, with 1000 storage slots. It becomes the perfect vehicle for every kind of mission.",
    infoTitle: "Server Information",
    rulesTitle: "Server Rules",
    rules: [
      "No use of cheats or exploits.",
      "Respect all players.",
      "No killing in safe zones.",
      "Admins have the final word."
    ],
    vip1Title: "⭐ VIP Starter",
    vip1Desc: "Access to basic kits and queue priority.",
    vip2Title: "⭐⭐ VIP Silver",
    vip2Desc: "Starter benefits + exclusive items and higher base limit.",
    vip3Title: "⭐⭐⭐ VIP Gold",
    vip3Desc: "All previous benefits + special skins and dedicated support.",
    vip4Title: "⭐⭐⭐⭐ VIP Titanium",
    vip4Desc: "All previous benefits + maximum privileges, rare kits and exclusive service.",
  },
  es: {
    home: "🏠 Inicio",
    news: "📰 Noticias",
    lojaz: "🛒 Tienda",
    youtube: "🎥 YouTube",
    discord: "Unirse al Discord",
    tabCars: "Autos",
    tabWeapons: "Armas",
    tabClothes: "Ropa",
    tabVips: "VIPs",
    carTitle: "🚗 TyphoonK Cargo",
    carDesc: "Un vehículo que combina robustez y versatilidad, con un blindaje de alto nivel y capacidad para hasta 13 sobrevivientes, con 1000 espacios de almacenamiento. Se convierte en el vehículo perfecto para todo tipo de misión.",
    infoTitle: "Información del Servidor",
    rulesTitle: "Reglas del Servidor",
    rules: [
      "Prohibido el uso de trampas o exploits.",
      "Respeta a todos los jugadores.",
      "Prohibido matar en zonas seguras.",
      "Los administradores tienen la última palabra."
    ],
    vip1Title: "⭐ VIP Starter",
    vip1Desc: "Acceso a kits básicos y prioridad en colas.",
    vip2Title: "⭐⭐ VIP Plata",
    vip2Desc: "Beneficios de Starter + objetos exclusivos y mayor límite de base.",
    vip3Title: "⭐⭐⭐ VIP Oro",
    vip3Desc: "Todos los beneficios anteriores + skins especiales y soporte dedicado.",
    vip4Title: "⭐⭐⭐⭐ VIP Titanio",
    vip4Desc: "Todos los beneficios anteriores + privilegios máximos, kits raros y atención exclusiva.",
  },
  ru: {
    home: "🏠 Главная",
    news: "📰 Новости",
    lojaz: "🛒 Магазин",
    youtube: "🎥 YouTube",
    discord: "Войти в Discord",
    tabCars: "Машины",
    tabWeapons: "Оружие",
    tabClothes: "Одежда",
    tabVips: "VIP",
    carTitle: "🚗 TyphoonK Cargo",
    carDesc: "Транспорт, сочетающий надежность и универсальность, с высоким уровнем брони и вместимостью до 13 выживших, а также 1000 слотами для хранения. Это идеальный транспорт для любых миссий.",
    infoTitle: "Информация о сервере",
    rulesTitle: "Правила сервера",
    rules: [
      "Запрещено использование читов и эксплойтов.",
      "Уважайте всех игроков.",
      "Запрещено убивать в безопасных зонах.",
      "Слово админов является окончательным."
    ],
    vip1Title: "⭐ VIP Starter",
    vip1Desc: "Доступ к базовым наборам и приоритет в очередях.",
    vip2Title: "⭐⭐ VIP Серебро",
    vip2Desc: "Преимущества Starter + эксклюзивные предметы и больше построек.",
    vip3Title: "⭐⭐⭐ VIP Золото",
    vip3Desc: "Все предыдущие преимущества + особые скины и поддержка.",
    vip4Title: "⭐⭐⭐⭐ VIP Титан",
    vip4Desc: "Все преимущества + максимальные привилегии, редкие наборы и эксклюзивное обслуживание.",
  }
};

// Função principal de troca de idioma
function changeLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);
  const t = translations[lang];
  if (!t) return;

  // Navbar
  const navLinks = document.querySelectorAll("nav a");
  if (navLinks[0]) navLinks[0].innerText = t.home;
  if (navLinks[1]) navLinks[1].innerText = t.news;
  if (navLinks[2]) navLinks[2].innerText = t.lojaz;
  if (navLinks[3]) navLinks[3].innerText = t.youtube;

  // Botão Discord
  const btn = document.querySelector(".btn");
  if (btn) btn.innerText = t.discord;

  // Página Home
  const infoTitle = document.getElementById("info-title");
  if (infoTitle) infoTitle.innerText = t.infoTitle;
  const rulesTitle = document.getElementById("rules-title");
  if (rulesTitle) rulesTitle.innerText = t.rulesTitle;
  const rulesList = document.getElementById("rules-list");
  if (rulesList && Array.isArray(t.rules)) {
    rulesList.innerHTML = "";
    t.rules.forEach(rule => {
      const li = document.createElement("li");
      li.innerText = rule;
      rulesList.appendChild(li);
    });
  }

  // Carros
  const carTitle = document.getElementById("car-title");
  if (carTitle && t.carTitle) carTitle.innerText = t.carTitle;
  const carDesc = document.getElementById("car-desc");
  if (carDesc && t.carDesc) carDesc.innerText = t.carDesc;

  // Abas
  const tabMap = {
    carros: { emoji: "🚗", key: "tabCars" },
    armas: { emoji: "🔫", key: "tabWeapons" },
    roupas: { emoji: "👕", key: "tabClothes" },
    vips: { emoji: "⭐", key: "tabVips" }
  };
  Object.entries(tabMap).forEach(([tab, { emoji, key }]) => {
    const btn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
    if (btn && t[key]) btn.innerHTML = `${emoji} ${t[key]}`;
  });

  // VIPs
  const mapIds = [
    ["vip-starter-title", "vip1Title"],
    ["vip-starter-desc", "vip1Desc"],
    ["vip-silver-title", "vip2Title"],
    ["vip-silver-desc", "vip2Desc"],
    ["vip-gold-title", "vip3Title"],
    ["vip-gold-desc", "vip3Desc"],
    ["vip-titanium-title", "vip4Title"],
    ["vip-titanium-desc", "vip4Desc"],
  ];
  mapIds.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && t[key]) el.innerText = t[key];
  });
}

// Auto detecção do idioma
window.onload = function () {
  let userLang = (navigator.language || navigator.userLanguage || "pt").substring(0, 2);
  if (!["pt", "en", "es", "ru"].includes(userLang)) userLang = "pt";
  changeLanguage(userLang);
};

// ========================
//   Lightbox Navegação
// ========================
let currentGallery = [];
let currentIndex = 0;

document.querySelectorAll(".card-gallery img").forEach(img => {
  img.addEventListener("click", () => {
    currentGallery = Array.from(img.parentElement.querySelectorAll("img"));
    currentIndex = currentGallery.indexOf(img);
    openLightbox();
  });
});

function openLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = currentGallery[currentIndex].src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  openLightbox();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentGallery.length;
  openLightbox();
}

document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
document.getElementById("lightbox-prev").addEventListener("click", prevImage);
document.getElementById("lightbox-next").addEventListener("click", nextImage);

// Fechar clicando no fundo
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") closeLightbox();
});
