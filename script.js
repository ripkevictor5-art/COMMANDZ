// Dicionário de traduções
const translations = {
  pt: {
    home: "🏠 Home",
    news: "📰 Novidades",
    shop: "🛒 Loja Z",
    youtube: "🎥 YouTube",
    discord: "💬 Discord",
    joinDiscord: "Entrar no Discord",
    serverInfo: "Informações do Servidor",
    rules: "Regras do Servidor",
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
    shop: "🛒 Z Shop",
    youtube: "🎥 YouTube",
    discord: "💬 Discord",
    joinDiscord: "Join Discord",
    serverInfo: "Server Information",
    rules: "Server Rules",
    newsTitle: "📰 News",
    newsDesc: "New wipe applied, bug fixes and loot balancing.",
    shopTitle: "🛒 Z Shop — Products and VIPs",
    vipStarterTitle: "⭐ VIP Starter",
    vipStarterDesc: "Access to basic kits and queue priority.",
    vipSilverTitle: "⭐⭐ VIP Silver",
    vipSilverDesc: "Starter benefits + exclusive items and higher base limit.",
    vipGoldTitle: "⭐⭐⭐ VIP Gold",
    vipGoldDesc: "All previous benefits + special skins and dedicated support.",
    vipTitaniumTitle: "⭐⭐⭐⭐ VIP Titanium",
    vipTitaniumDesc: "All previous benefits + maximum privileges, rare kits and exclusive service.",
    carsTitle: "🚗 Cars",
    carsDesc: "Exclusive vehicles available in the Z Shop.",
    clothesTitle: "👕 Clothes",
    clothesDesc: "Rare outfits and unique skins to customize your character.",
    weaponsTitle: "🔫 Weapons",
    weaponsDesc: "Rare and customized weapons available only for VIP members."
  },
  es: {
    home: "🏠 Inicio",
    news: "📰 Noticias",
    shop: "🛒 Tienda Z",
    youtube: "🎥 YouTube",
    discord: "💬 Discord",
    joinDiscord: "Unirse a Discord",
    serverInfo: "Información del Servidor",
    rules: "Reglas del Servidor",
    newsTitle: "📰 Noticias",
    newsDesc: "Nuevo wipe aplicado, corrección de errores y balanceo de loot.",
    shopTitle: "🛒 Tienda Z — Productos y VIPs",
    vipStarterTitle: "⭐ VIP Starter",
    vipStarterDesc: "Acceso a kits básicos y prioridad en las colas.",
    vipSilverTitle: "⭐⭐ VIP Silver",
    vipSilverDesc: "Beneficios del Starter + artículos exclusivos y mayor límite de base.",
    vipGoldTitle: "⭐⭐⭐ VIP Gold",
    vipGoldDesc: "Todos los beneficios anteriores + skins especiales y soporte dedicado.",
    vipTitaniumTitle: "⭐⭐⭐⭐ VIP Titanium",
    vipTitaniumDesc: "Todos los beneficios anteriores + privilegios máximos, kits raros y servicio exclusivo.",
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
    serverInfo: "Informations du Serveur",
    rules: "Règles du Serveur",
    newsTitle: "📰 Actualités",
    newsDesc: "Nouveau wipe appliqué, corrections de bugs et équilibrage du loot.",
    shopTitle: "🛒 Boutique Z — Produits et VIPs",
    vipStarterTitle: "⭐ VIP Starter",
    vipStarterDesc: "Accès aux kits de base et priorité dans les files.",
    vipSilverTitle: "⭐⭐ VIP Silver",
    vipSilverDesc: "Avantages du Starter + objets exclusifs et limite de base augmentée.",
    vipGoldTitle: "⭐⭐⭐ VIP Gold",
    vipGoldDesc: "Tous les avantages précédents + skins spéciales et support dédié.",
    vipTitaniumTitle: "⭐⭐⭐⭐ VIP Titanium",
    vipTitaniumDesc: "Tous les avantages précédents + privilèges maximum, kits rares et service exclusif.",
    carsTitle: "🚗 Voitures",
    carsDesc: "Véhicules exclusifs disponibles dans la Boutique Z.",
    clothesTitle: "👕 Vêtements",
    clothesDesc: "Vêtements rares et skins uniques pour personnaliser votre personnage.",
    weaponsTitle: "🔫 Armes",
    weaponsDesc: "Armes rares et personnalisées disponibles uniquement pour les membres VIP."
  },
  de: {
    home: "🏠 Startseite",
    news: "📰 Neuigkeiten",
    shop: "🛒 Z Shop",
    youtube: "🎥 YouTube",
    discord: "💬 Discord",
    joinDiscord: "Discord beitreten",
    serverInfo: "Serverinformationen",
    rules: "Serverregeln",
    newsTitle: "📰 Neuigkeiten",
    newsDesc: "Neuer Wipe durchgeführt, Bugfixes und Loot-Balancing.",
    shopTitle: "🛒 Z Shop — Produkte und VIPs",
    vipStarterTitle: "⭐ VIP Starter",
    vipStarterDesc: "Zugang zu Basiskits und Warteschlangen-Priorität.",
    vipSilverTitle: "⭐⭐ VIP Silver",
    vipSilverDesc: "Starter-Vorteile + exklusive Items und höheres Basislimit.",
    vipGoldTitle: "⭐⭐⭐ VIP Gold",
    vipGoldDesc: "Alle vorherigen Vorteile + spezielle Skins und dedizierter Support.",
    vipTitaniumTitle: "⭐⭐⭐⭐ VIP Titanium",
    vipTitaniumDesc: "Alle vorherigen Vorteile + maximale Privilegien, seltene Kits und exklusiver Service.",
    carsTitle: "🚗 Autos",
    carsDesc: "Exklusive Fahrzeuge im Z Shop erhältlich.",
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
    joinDiscord: "Entra su Discord",
    serverInfo: "Informazioni del Server",
    rules: "Regole del Server",
    newsTitle: "📰 Novità",
    newsDesc: "Nuovo wipe applicato, correzione bug e bilanciamento loot.",
    shopTitle: "🛒 Negozio Z — Prodotti e VIPs",
    vipStarterTitle: "⭐ VIP Starter",
    vipStarterDesc: "Accesso ai kit di base e priorità in coda.",
    vipSilverTitle: "⭐⭐ VIP Silver",
    vipSilverDesc: "Vantaggi Starter + oggetti esclusivi e limite base maggiore.",
    vipGoldTitle: "⭐⭐⭐ VIP Gold",
    vipGoldDesc: "Tutti i benefici precedenti + skin speciali e supporto dedicato.",
    vipTitaniumTitle: "⭐⭐⭐⭐ VIP Titanium",
    vipTitaniumDesc: "Tutti i benefici precedenti + privilegi massimi, kit rari e servizio esclusivo.",
    carsTitle: "🚗 Auto",
    carsDesc: "Veicoli esclusivi disponibili nel Negozio Z.",
    clothesTitle: "👕 Vestiti",
    clothesDesc: "Vestiti rari e skin uniche per personalizzare il tuo personaggio.",
    weaponsTitle: "🔫 Armi",
    weaponsDesc: "Armi rare e personalizzate disponibili solo per i membri VIP."
  },
  ru: {
    home: "🏠 Домой",
    news: "📰 Новости",
    shop: "🛒 Магазин Z",
    youtube: "🎥 YouTube",
    discord: "💬 Discord",
    joinDiscord: "Войти в Discord",
    serverInfo: "Информация о сервере",
    rules: "Правила сервера",
    newsTitle: "📰 Новости",
    newsDesc: "Новый вайп применён, исправлены ошибки и сбалансирован лут.",
    shopTitle: "🛒 Магазин Z — Товары и VIP",
    vipStarterTitle: "⭐ VIP Старт",
    vipStarterDesc: "Доступ к базовым наборам и приоритет в очередях.",
    vipSilverTitle: "⭐⭐ VIP Серебро",
    vipSilverDesc: "Преимущества Старта + эксклюзивные предметы и больший лимит базы.",
    vipGoldTitle: "⭐⭐⭐ VIP Золото",
    vipGoldDesc: "Все предыдущие преимущества + специальные скины и выделенная поддержка.",
    vipTitaniumTitle: "⭐⭐⭐⭐ VIP Титан",
    vipTitaniumDesc: "Все предыдущие преимущества + максимальные привилегии, редкие наборы и эксклюзивное обслуживание.",
    carsTitle: "🚗 Машины",
    carsDesc: "Эксклюзивные автомобили доступны в Магазине Z.",
    clothesTitle: "👕 Одежда",
    clothesDesc: "Редкая одежда и уникальные скины для персонализации персонажа.",
    weaponsTitle: "🔫 Оружие",
    weaponsDesc: "Редкое и кастомное оружие доступно только для VIP-участников."
  }
};

// Função para mudar idioma
function setLanguage(lang) {
  if (!translations[lang]) return false;

  // Navbar
  document.querySelectorAll("nav a")[0].innerText = translations[lang].home;
  document.querySelectorAll("nav a")[1].innerText = translations[lang].news;
  document.querySelectorAll("nav a")[2].innerText = translations[lang].shop;
  document.querySelectorAll("nav a")[3].innerText = translations[lang].youtube;
  document.querySelectorAll("nav a")[4].innerText = translations[lang].discord;

  // Botão Discord
  if (document.querySelector(".btn")) {
    document.querySelector(".btn").innerText = translations[lang].joinDiscord;
  }

  // Cards Index
  if (document.querySelectorAll(".card h2")[0]) {
    document.querySelectorAll(".card h2")[0].innerText = translations[lang].serverInfo;
  }
  if (document.querySelectorAll(".card h2")[1]) {
    document.querySelectorAll(".card h2")[1].innerText = translations[lang].rules;
  }

  // Novidades
  if (document.getElementById("news-title")) {
    document.getElementById("news-title").innerText = translations[lang].newsTitle;
  }
  if (document.getElementById("news-desc")) {
    document.getElementById("news-desc").innerText = translations[lang].newsDesc;
  }

  // Loja Z
  if (document.getElementById("lojaz-title")) {
    document.getElementById("lojaz-title").innerText = translations[lang].shopTitle;
  }
  if (document.getElementById("vip-starter-title")) {
    document.getElementById("vip-starter-title").innerText = translations[lang].vipStarterTitle;
    document.getElementById("vip-starter-desc").innerText = translations[lang].vipStarterDesc;
  }
  if (document.getElementById("vip-silver-title")) {
    document.getElementById("vip-silver-title").innerText = translations[lang].vipSilverTitle;
    document.getElementById("vip-silver-desc").innerText = translations[lang].vipSilverDesc;
  }
  if (document.getElementById("vip-gold-title")) {
    document.getElementById("vip-gold-title").innerText = translations[lang].vipGoldTitle;
    document.getElementById("vip-gold-desc").innerText = translations[lang].vipGoldDesc;
  }
  if (document.getElementById("vip-titanium-title")) {
    document.getElementById("vip-titanium-title").innerText = translations[lang].vipTitaniumTitle;
    document.getElementById("vip-titanium-desc").innerText = translations[lang].vipTitaniumDesc;
  }
  if (document.getElementById("cars-title")) {
    document.getElementById("cars-title").innerText =
