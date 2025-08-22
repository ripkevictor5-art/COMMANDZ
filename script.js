// 🌐 Traduções para todas as línguas
const translations = {
  pt: {
    home: "🏠 Home",
    news: "📰 Novidades",
    shop: "🛒 Loja Z",
    youtube: "🎥 YouTube",
    discord: "💬 Discord",
    joinDiscord: "Entrar no Discord",
    serverInfo: "Informações do Servidor",
    serverInfoDesc: "Servidor com wipe semanal, eventos diários e muito mais.",
    rules: "Regras do Servidor",
    rulesDesc: "Respeite os outros jogadores, sem cheats ou exploits.",
    newsTitle: "📰 Novidades",
    newsDesc: "Novo wipe aplicado, correções de bugs e balanceamento de loot.",
    shopTitle: "🛒 Loja Z — Produtos e VIPs",
    vipStarterTitle: "⭐ VIP Starter",
    vipStarterDesc: "Acesso a kits básicos e prioridade em filas do servidor.",
    vipSilverTitle: "⭐⭐ VIP Silver",
    vipSilverDesc: "Benefícios do Starter + itens exclusivos e maior limite de base.",
    vipGoldTitle: "⭐⭐⭐ VIP Gold",
    vipGoldDesc: "Todos os benefícios anteriores + skins especiais e suporte dedicado.",
    vipTitaniumTitle: "⭐⭐⭐⭐ VIP Titanium",
    vipTitaniumDesc: "Todos os benefícios anteriores + privilégios máximos, kits raros e atendimento exclusivo.",
    carsTitle: "🚗 Carros",
    carsDesc: "Veículos exclusivos disponíveis na Loja Z.",
    clothesTitle: "👕 Roupas",
    clothesDesc: "Roupas raras e skins únicas para personalizar seu personagem.",
    weaponsTitle: "🔫 Armas",
    weaponsDesc: "Armas raras e customizadas disponíveis apenas para membros VIP."
  },
  en: {
    home: "🏠 Home",
    news: "📰 News",
    shop: "🛒 Store Z",
    youtube: "🎥 YouTube",
    discord: "💬 Discord",
    joinDiscord: "Join Discord",
    serverInfo: "Server Info",
    serverInfoDesc: "Server with weekly wipe, daily events and much more.",
    rules: "Server Rules",
    rulesDesc: "Respect other players, no cheats or exploits.",
    newsTitle: "📰 News",
    newsDesc: "New wipe applied, bug fixes and loot balance.",
    shopTitle: "🛒 Store Z — Products and VIPs",
    vipStarterTitle: "⭐ VIP Starter",
    vipStarterDesc: "Access to basic kits and queue priority.",
    vipSilverTitle: "⭐⭐ VIP Silver",
    vipSilverDesc: "Starter benefits + exclusive items and higher base limit.",
    vipGoldTitle: "⭐⭐⭐ VIP Gold",
    vipGoldDesc: "All previous benefits + special skins and dedicated support.",
    vipTitaniumTitle: "⭐⭐⭐⭐ VIP Titanium",
    vipTitaniumDesc: "All previous benefits + maximum privileges, rare kits and exclusive service.",
    carsTitle: "🚗 Cars",
    carsDesc: "Exclusive vehicles available in Store Z.",
    clothesTitle: "👕 Clothes",
    clothesDesc: "Rare clothes and unique skins to customize your character.",
    weaponsTitle: "🔫 Weapons",
    weaponsDesc: "Rare and custom weapons available only for VIP members."
  },
  es: {
    home: "🏠 Inicio",
    news: "📰 Noticias",
    shop: "🛒 Tienda Z",
    youtube: "🎥 YouTube",
    discord: "💬 Discord",
    joinDiscord: "Entrar en Discord",
    serverInfo: "Información del Servidor",
    serverInfoDesc: "Servidor con wipe semanal, eventos diarios y mucho más.",
    rules: "Reglas del Servidor",
    rulesDesc: "Respeta a los demás jugadores, sin trampas ni exploits.",
    newsTitle: "📰 Noticias",
    newsDesc: "Nuevo wipe aplicado, corrección de errores y balance de loot.",
    shopTitle: "🛒 Tienda Z — Productos y VIPs",
    vipStarterTitle: "⭐ VIP Starter",
    vipStarterDesc: "Acceso a kits básicos y prioridad en colas.",
    vipSilverTitle: "⭐⭐ VIP Silver",
    vipSilverDesc: "Beneficios del Starter + objetos exclusivos y mayor límite de base.",
    vipGoldTitle: "⭐⭐⭐ VIP Gold",
    vipGoldDesc: "Todos los beneficios anteriores + skins especiales y soporte dedicado.",
    vipTitaniumTitle: "⭐⭐⭐⭐ VIP Titanium",
    vipTitaniumDesc: "Todos los beneficios anteriores + privilegios máximos, kits raros y atención exclusiva.",
    carsTitle: "🚗 Coches",
    carsDesc: "Vehículos exclusivos disponibles en la Tienda Z.",
    clothesTitle: "👕 Ropa",
    clothesDesc: "Ropa rara y skins únicas para personalizar tu personaje.",
    weaponsTitle: "🔫 Armas",
    weaponsDesc: "Armas raras y personalizadas disponibles solo para miembros VIP."
  },
  fr: {
    home: "🏠 Accueil",
    news: "📰 Actualités",
    shop: "🛒 Boutique Z",
    youtube: "🎥 YouTube",
    discord: "💬 Discord",
    joinDiscord: "Rejoindre Discord",
    serverInfo: "Infos Serveur",
    serverInfoDesc: "Serveur avec wipe hebdomadaire, événements quotidiens et plus encore.",
    rules: "Règles du Serveur",
    rulesDesc: "Respectez les autres joueurs, pas de triche ni d'exploits.",
    newsTitle: "📰 Actualités",
    newsDesc: "Nouveau wipe appliqué, corrections de bugs et équilibrage du loot.",
    shopTitle: "🛒 Boutique Z — Produits et VIPs",
    vipStarterTitle: "⭐ VIP Starter",
    vipStarterDesc: "Accès aux kits de base et priorité dans la file d'attente.",
    vipSilverTitle: "⭐⭐ VIP Argent",
    vipSilverDesc: "Avantages Starter + objets exclusifs et plus grande limite de base.",
    vipGoldTitle: "⭐⭐⭐ VIP Or",
    vipGoldDesc: "Tous les avantages précédents + skins spéciaux et support dédié.",
    vipTitaniumTitle: "⭐⭐⭐⭐ VIP Titane",
    vipTitaniumDesc: "Tous les avantages précédents + privilèges maximum, kits rares et service exclusif.",
    carsTitle: "🚗 Voitures",
    carsDesc: "Véhicules exclusifs disponibles dans la Boutique Z.",
    clothesTitle: "👕 Vêtements",
    clothesDesc: "Vêtements rares et skins uniques pour personnaliser votre personnage.",
    weaponsTitle: "🔫 Armes",
    weaponsDesc: "Armes rares et personnalisées disponibles uniquement pour les VIP."
  },
  de: {
    home: "🏠 Startseite",
    news: "📰 Neuigkeiten",
    shop: "🛒 Shop Z",
    youtube: "🎥 YouTube",
    discord: "💬 Discord",
    joinDiscord: "Discord beitreten",
    serverInfo: "Server-Informationen",
    serverInfoDesc: "Server mit wöchentlichem Wipe, täglichen Events und mehr.",
    rules: "Server-Regeln",
    rulesDesc: "Respektiere andere Spieler, keine Cheats oder Exploits.",
    newsTitle: "📰 Neuigkeiten",
    newsDesc: "Neuer Wipe durchgeführt, Bugfixes und Loot-Balance.",
    shopTitle: "🛒 Shop Z — Produkte und VIPs",
    vipStarterTitle: "⭐ VIP Starter",
    vipStarterDesc: "Zugang zu Basiskits und Warteschlangenpriorität.",
    vipSilverTitle: "⭐⭐ VIP Silber",
    vipSilverDesc: "Starter-Vorteile + exklusive Items und höheres Basenlimit.",
    vipGoldTitle: "⭐⭐⭐ VIP Gold",
    vipGoldDesc: "Alle vorherigen Vorteile + spezielle Skins und dedizierter Support.",
    vipTitaniumTitle: "⭐⭐⭐⭐ VIP Titan",
    vipTitaniumDesc: "Alle vorherigen Vorteile + maximale Privilegien, seltene Kits und exklusiver Service.",
    carsTitle: "🚗 Autos",
    carsDesc: "Exklusive Fahrzeuge im Shop Z erhältlich.",
    clothesTitle: "👕 Kleidung",
    clothesDesc: "Seltene Kleidung und einzigartige Skins zur Personalisierung deines Charakters.",
    weaponsTitle: "🔫 Waffen",
    weaponsDesc: "Seltene und angepasste Waffen, nur für VIP-Mitglieder verfügbar."
  },
  it: {
    home: "🏠 Home",
    news: "📰 Novità",
    shop: "🛒 Negozio Z",
    youtube: "🎥 YouTube",
    discord: "💬 Discord",
    joinDiscord: "Entra in Discord",
    serverInfo: "Info Server",
    serverInfoDesc: "Server con wipe settimanale, eventi giornalieri e molto altro.",
    rules: "Regole del Server",
    rulesDesc: "Rispetta gli altri giocatori, niente cheat o exploit.",
    newsTitle: "📰 Novità",
    newsDesc: "Nuovo wipe applicato, correzioni di bug e bilanciamento loot.",
    shopTitle: "🛒 Negozio Z — Prodotti e VIP",
    vipStarterTitle: "⭐ VIP Starter",
    vipStarterDesc: "Accesso a kit base e priorità in coda.",
    vipSilverTitle: "⭐⭐ VIP Argento",
    vipSilverDesc: "Vantaggi Starter + oggetti esclusivi e limite base più alto.",
    vipGoldTitle: "⭐⭐⭐ VIP Oro",
    vipGoldDesc: "Tutti i vantaggi precedenti + skin speciali e supporto dedicato.",
    vipTitaniumTitle: "⭐⭐⭐⭐ VIP Titanio",
    vipTitaniumDesc: "Tutti i vantaggi precedenti + privilegi massimi, kit rari e servizio esclusivo.",
    carsTitle: "🚗 Auto",
    carsDesc: "Veicoli esclusivi disponibili nel Negozio Z.",
    clothesTitle: "👕 Vestiti",
    clothesDesc: "Vestiti rari e skin uniche per personalizzare il tuo personaggio.",
    weaponsTitle: "🔫 Armi",
    weaponsDesc: "Armi rare e personalizzate disponibili solo per membri VIP."
  },
  ru: {
    home: "🏠 Главная",
    news: "📰 Новости",
    shop: "🛒 Магазин Z",
    youtube: "🎥 YouTube",
    discord: "💬 Discord",
    joinDiscord: "Войти в Discord",
    serverInfo: "Информация о сервере",
    serverInfoDesc: "Сервер с еженедельным вайпом, ежедневными событиями и многим другим.",
    rules: "Правила сервера",
    rulesDesc: "Уважайте других игроков, без читов и эксплойтов.",
    newsTitle: "📰 Новости",
    newsDesc: "Новый вайп применен, исправления ошибок и баланс лута.",
    shopTitle: "🛒 Магазин Z — Продукты и VIP",
    vipStarterTitle: "⭐ VIP Стартовый",
    vipStarterDesc: "Доступ к базовым наборам и приоритет в очереди.",
    vipSilverTitle: "⭐⭐ VIP Серебро",
    vipSilverDesc: "Преимущества Стартового + эксклюзивные предметы и больший лимит базы.",
    vipGoldTitle: "⭐⭐⭐ VIP Золото",
    vipGoldDesc: "Все предыдущие преимущества + специальные скины и поддержка.",
    vipTitaniumTitle: "⭐⭐⭐⭐ VIP Титан",
    vipTitaniumDesc: "Все предыдущие преимущества + максимальные привилегии, редкие наборы и эксклюзивное обслуживание.",
    carsTitle: "🚗 Машины",
    carsDesc: "Эксклюзивные автомобили доступны в Магазине Z.",
    clothesTitle: "👕 Одежда",
    clothesDesc: "Редкая одежда и уникальные скины для персонализации персонажа.",
    weaponsTitle: "🔫 Оружие",
    weaponsDesc: "Редкое и уникальное оружие доступно только для VIP."
  }
};

// ======== Troca de idioma ========
function setLanguage(lang) {
  if (!translations[lang]) return false;

  const t = translations[lang];
  const links = document.querySelectorAll("nav a");

  if (links.length >= 5) {
    links[0].innerText = t.home;
    links[1].innerText = t.news;
    links[2].innerText = t.shop;
    links[3].innerText = t.youtube;
    links[4].innerText = t.discord;
  }

  if (document.querySelector(".btn")) document.querySelector(".btn").innerText = t.joinDiscord;

  if (document.getElementById("server-info")) {
    document.getElementById("server-info").innerText = t.serverInfo;
    document.getElementById("server-info-desc").innerText = t.serverInfoDesc;
  }
  if (document.getElementById("server-rules")) {
    document.getElementById("server-rules").innerText = t.rules;
    document.getElementById("server-rules-desc").innerText = t.rulesDesc;
  }

  if (document.getElementById("news-title")) document.getElementById("news-title").innerText = t.newsTitle;
  if (document.getElementById("news-desc")) document.getElementById("news-desc").innerText = t.newsDesc;

  if (document.getElementById("lojaz-title")) document.getElementById("lojaz-title").innerText = t.shopTitle;

  if (document.getElementById("vip-starter-title")) {
    document.getElementById("vip-starter-title").innerText = t.vipStarterTitle;
    document.getElementById("vip-starter-desc").innerText = t.vipStarterDesc;
  }
  if (document.getElementById("vip-silver-title")) {
    document.getElementById("vip-silver-title").innerText = t.vipSilverTitle;
    document.getElementById("vip-silver-desc").innerText = t.vipSilverDesc;
  }
  if (document.getElementById("vip-gold-title")) {
    document.getElementById("vip-gold-title").innerText = t.vipGoldTitle;
    document.getElementById("vip-gold-desc").innerText = t.vipGoldDesc;
  }
  if (document.getElementById("vip-titanium-title")) {
    document.getElementById("vip-titanium-title").innerText = t.vipTitaniumTitle;
    document.getElementById("vip-titanium-desc").innerText = t.vipTitaniumDesc;
  }

  if (document.getElementById("cars-title")) {
    document.getElementById("cars-title").innerText = t.carsTitle;
    document.getElementById("cars-desc").innerText = t.carsDesc;
  }
  if (document.getElementById("clothes-title")) {
    document.getElementById("clothes-title").innerText = t.clothesTitle;
    document.getElementById("clothes-desc").innerText = t.clothesDesc;
  }
  if (document.getElementById("weapons-title")) {
    document.getElementById("weapons-title").innerText = t.weaponsTitle;
    document.getElementById("weapons-desc").innerText = t.weaponsDesc;
  }

  return false;
}

// ======== Abas Loja Z ========
function openTab(evt, tabName) {
  const tabcontent = document.querySelectorAll(".tabcontent");
  const tablinks = document.querySelectorAll(".tablink");

  tabcontent.forEach(el => el.style.display = "none");
  tablinks.forEach(el => el.classList.remove("active"));

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// ======== Inicialização ========
document.addEventListener("DOMContentLoaded", () => {
  let userLang = navigator.language.substring(0, 2);
  if (!translations[userLang]) userLang = "en";
  setLanguage(userLang);

  document.querySelectorAll("#lang-menu a").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      setLanguage(el.dataset.lang);
    });
  });
});
