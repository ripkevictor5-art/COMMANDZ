// Traduções centralizadas
const translations = {
  pt: {
    home: "🏠 Home",
    news: "📰 Novidades",
    vips: "⭐ VIPs",
    youtube: "🎥 YouTube",
    discord: "Entrar no Discord",

    // Home
    infoTitle: "Informações do Servidor",
    rulesTitle: "Regras do Servidor",
    rules: [
      "Sem uso de cheats ou exploits.",
      "Respeite todos os jogadores.",
      "Proibido matar em safe zone.",
      "Admins têm palavra final."
    ],

    // VIPs
    vip1Title: "⭐ VIP Bronze",
    vip1Desc: "Acesso a kits básicos e prioridade em filas do servidor.",
    vip2Title: "⭐⭐ VIP Prata",
    vip2Desc: "Benefícios do Bronze + itens exclusivos e maior limite de base.",
    vip3Title: "⭐⭐⭐ VIP Ouro",
    vip3Desc: "Todos os benefícios anteriores + skins especiais e suporte dedicado.",

    // Novidades
    news1Title: "1.29 Experimental Release",
    news1Desc: "Publicado por Adam Franců | 14 Ago 2025 - 09:30 EST",
    news2Title: "De Sobreviventes a Construtores",
    news2Desc: "Publicado por Merropa | 18 Jul 2025 - 06:15 EST"
  },

  en: {
    home: "🏠 Home",
    news: "📰 News",
    vips: "⭐ VIPs",
    youtube: "🎥 YouTube",
    discord: "Join Discord",

    infoTitle: "Server Information",
    rulesTitle: "Server Rules",
    rules: [
      "No cheats or exploits.",
      "Respect all players.",
      "No killing in safe zone.",
      "Admins have the final word."
    ],

    vip1Title: "⭐ VIP Bronze",
    vip1Desc: "Access to basic kits and queue priority.",
    vip2Title: "⭐⭐ VIP Silver",
    vip2Desc: "Bronze benefits + exclusive items and higher base limit.",
    vip3Title: "⭐⭐⭐ VIP Gold",
    vip3Desc: "All previous benefits + special skins and dedicated support.",

    news1Title: "1.29 Experimental Release",
    news1Desc: "Published by Adam Franců | Aug 14, 2025 - 09:30 EST",
    news2Title: "From Survivors to Builders",
    news2Desc: "Published by Merropa | Jul 18, 2025 - 06:15 EST"
  },

  es: {
    home: "🏠 Inicio",
    news: "📰 Noticias",
    vips: "⭐ VIPs",
    youtube: "🎥 YouTube",
    discord: "Unirse al Discord",

    infoTitle: "Información del Servidor",
    rulesTitle: "Reglas del Servidor",
    rules: [
      "Sin trampas ni exploits.",
      "Respeta a todos los jugadores.",
      "Prohibido matar en la zona segura.",
      "Los administradores tienen la última palabra."
    ],

    vip1Title: "⭐ VIP Bronce",
    vip1Desc: "Acceso a kits básicos y prioridad en colas.",
    vip2Title: "⭐⭐ VIP Plata",
    vip2Desc: "Beneficios del Bronce + objetos exclusivos y mayor límite de base.",
    vip3Title: "⭐⭐⭐ VIP Oro",
    vip3Desc: "Todos los beneficios anteriores + skins especiales y soporte dedicado.",

    news1Title: "Lanzamiento Experimental 1.29",
    news1Desc: "Publicado por Adam Franců | 14 Ago 2025 - 09:30 EST",
    news2Title: "De Sobrevivientes a Constructores",
    news2Desc: "Publicado por Merropa | 18 Jul 2025 - 06:15 EST"
  },

  ru: {
    home: "🏠 Главная",
    news: "📰 Новости",
    vips: "⭐ VIP",
    youtube: "🎥 YouTube",
    discord: "Войти в Discord",

    infoTitle: "Информация о сервере",
    rulesTitle: "Правила сервера",
    rules: [
      "Без читов и эксплойтов.",
      "Уважайте всех игроков.",
      "Запрещено убивать в безопасной зоне.",
      "Админы имеют последнее слово."
    ],

    vip1Title: "⭐ VIP Бронза",
    vip1Desc: "Доступ к базовым наборам и приоритет в очередях.",
    vip2Title: "⭐⭐ VIP Серебро",
    vip2Desc: "Преимущества Бронзы + эксклюзивные предметы и больше построек.",
    vip3Title: "⭐⭐⭐ VIP Золото",
    vip3Desc: "Все предыдущие преимущества + особые скины и поддержка.",

    news1Title: "Экспериментальный релиз 1.29",
    news1Desc: "Опубликовал Adam Franců | 14 Авг 2025 - 09:30 EST",
    news2Title: "От выживших к строителям",
    news2Desc: "Опубликовал Merropa | 18 Июл 2025 - 06:15 EST"
  }
};

// Função para trocar idioma
function changeLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Navbar
  document.querySelectorAll("nav a")[0].innerText = t.home;
  if (document.querySelectorAll("nav a")[1]) document.querySelectorAll("nav a")[1].innerText = t.news;
  if (document.querySelectorAll("nav a")[2]) document.querySelectorAll("nav a")[2].innerText = t.vips;
  if (document.querySelectorAll("nav a")[3]) document.querySelectorAll("nav a")[3].innerText = t.youtube;

  // Botão Discord (Home)
  if (document.querySelector(".btn")) {
    document.querySelector(".btn").innerText = t.discord;
  }

  // Página Home
  if (document.getElementById("info-title")) {
    document.getElementById("info-title").innerText = t.infoTitle;
  }
  if (document.getElementById("rules-title")) {
    document.getElementById("rules-title").innerText = t.rulesTitle;
  }
  if (document.getElementById("rules-list")) {
    const list = document.getElementById("rules-list");
    list.innerHTML = "";
    t.rules.forEach(rule => {
      const li = document.createElement("li");
      li.innerText = rule;
      list.appendChild(li);
    });
  }

  // Página VIPs
  if (document.getElementById("vip1-title")) document.getElementById("vip1-title").innerText = t.vip1Title;
  if (document.getElementById("vip1-desc")) document.getElementById("vip1-desc").innerText = t.vip1Desc;
  if (document.getElementById("vip2-title")) document.getElementById("vip2-title").innerText = t.vip2Title;
  if (document.getElementById("vip2-desc")) document.getElementById("vip2-desc").innerText = t.vip2Desc;
  if (document.getElementById("vip3-title")) document.getElementById("vip3-title").innerText = t.vip3Title;
  if (document.getElementById("vip3-desc")) document.getElementById("vip3-desc").innerText = t.vip3Desc;

  // Página Novidades
  if (document.getElementById("news1-title")) document.getElementById("news1-title").innerText = t.news1Title;
  if (document.getElementById("news1-desc")) document.getElementById("news1-desc").innerText = t.news1Desc;
  if (document.getElementById("news2-title")) document.getElementById("news2-title").innerText = t.news2Title;
  if (document.getElementById("news2-desc")) document.getElementById("news2-desc").innerText = t.news2Desc;
}
