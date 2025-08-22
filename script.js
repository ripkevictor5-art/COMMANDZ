// =========================
// Traduções (Navbar, Hero, VIPs, Novidades)
// =========================
const translations = {
  pt: {
    // Navbar
    home: "Início",
    vips: "VIPs",
    news: "Novidades",
    contact: "Contato",

    // Hero
    heroTitle: "Bem-vindo ao nosso servidor!",
    discordBtn: "Entrar no Discord",

    // VIPs
    starter: {
      title: "⭐ STARTER",
      desc: "Pacote inicial com recursos básicos para começar sua jornada."
    },
    silver: {
      title: "⭐⭐ SILVER",
      desc: "Inclui benefícios do STARTER + vantagens adicionais e maior limite de base."
    },
    gold: {
      title: "⭐⭐⭐ GOLD",
      desc: "Todos os benefícios anteriores + skins exclusivas e suporte avançado."
    },
    titanium: {
      title: "🌌 TITANIUM",
      desc: "O pacote mais completo, com acesso a todos os recursos, benefícios e exclusividades máximas."
    },

    // Novidades
    news1: {
      title: "🚀 Nova atualização",
      desc: "Novo sistema de eventos semanais chegou para deixar o jogo ainda mais dinâmico."
    },
    news2: {
      title: "🛡️ Novos itens",
      desc: "Adicionamos armas lendárias e equipamentos raros disponíveis em caixas especiais."
    },
    news3: {
      title: "⚙️ Melhorias e correções",
      desc: "Otimizamos a performance do servidor e corrigimos bugs relatados pela comunidade."
    }
  },

  en: {
    home: "Home",
    vips: "VIPs",
    news: "News",
    contact: "Contact",

    heroTitle: "Welcome to our server!",
    discordBtn: "Join Discord",

    starter: {
      title: "⭐ STARTER",
      desc: "Starter pack with basic resources to begin your journey."
    },
    silver: {
      title: "⭐⭐ SILVER",
      desc: "Includes STARTER benefits + extra perks and a larger base limit."
    },
    gold: {
      title: "⭐⭐⭐ GOLD",
      desc: "All previous benefits + exclusive skins and advanced support."
    },
    titanium: {
      title: "🌌 TITANIUM",
      desc: "The ultimate package with access to all resources, perks, and maximum exclusivity."
    },

    news1: {
      title: "🚀 New update",
      desc: "A new weekly event system has arrived to make the game even more dynamic."
    },
    news2: {
      title: "🛡️ New items",
      desc: "We added legendary weapons and rare equipment available in special crates."
    },
    news3: {
      title: "⚙️ Improvements and fixes",
      desc: "We optimized server performance and fixed bugs reported by the community."
    }
  },

  es: {
    home: "Inicio",
    vips: "VIPs",
    news: "Novedades",
    contact: "Contacto",

    heroTitle: "¡Bienvenido a nuestro servidor!",
    discordBtn: "Entrar al Discord",

    starter: {
      title: "⭐ STARTER",
      desc: "Paquete inicial con recursos básicos para comenzar tu aventura."
    },
    silver: {
      title: "⭐⭐ SILVER",
      desc: "Incluye beneficios de STARTER + ventajas adicionales y mayor límite de base."
    },
    gold: {
      title: "⭐⭐⭐ GOLD",
      desc: "Todos los beneficios anteriores + skins exclusivas y soporte avanzado."
    },
    titanium: {
      title: "🌌 TITANIUM",
      desc: "El paquete más completo, con acceso a todos los recursos, beneficios y máxima exclusividad."
    },

    news1: {
      title: "🚀 Nueva actualización",
      desc: "Un nuevo sistema de eventos semanales llegó para hacer el juego aún más dinámico."
    },
    news2: {
      title: "🛡️ Nuevos ítems",
      desc: "Agregamos armas legendarias y equipos raros disponibles en cajas especiales."
    },
    news3: {
      title: "⚙️ Mejoras y correcciones",
      desc: "Optimizamos el rendimiento del servidor y corregimos errores reportados por la comunidad."
    }
  },

  ru: {
    home: "Главная",
    vips: "VIPы",
    news: "Новости",
    contact: "Контакты",

    heroTitle: "Добро пожаловать на наш сервер!",
    discordBtn: "Войти в Discord",

    starter: {
      title: "⭐ STARTER",
      desc: "Начальный пакет с базовыми ресурсами для старта."
    },
    silver: {
      title: "⭐⭐ SILVER",
      desc: "Включает преимущества STARTER + дополнительные бонусы и больший лимит базы."
    },
    gold: {
      title: "⭐⭐⭐ GOLD",
      desc: "Все предыдущие преимущества + эксклюзивные скины и расширенная поддержка."
    },
    titanium: {
      title: "🌌 TITANIUM",
      desc: "Самый полный пакет с доступом ко всем ресурсам, бонусам и максимальной эксклюзивностью."
    },

    news1: {
      title: "🚀 Новое обновление",
      desc: "Новая система еженедельных событий делает игру еще более динамичной."
    },
    news2: {
      title: "🛡️ Новые предметы",
      desc: "Добавлены легендарное оружие и редкое снаряжение в специальных ящиках."
    },
    news3: {
      title: "⚙️ Улучшения и исправления",
      desc: "Мы оптимизировали производительность сервера и исправили ошибки, сообщенные сообществом."
    }
  }
};

// =========================
// Função única para trocar idioma
// =========================
function changeLanguage(lang) {
  if (!translations[lang]) return;

  // --- Navbar ---
  if (document.getElementById("nav-home")) document.getElementById("nav-home").textContent = translations[lang].home;
  if (document.getElementById("nav-vips")) document.getElementById("nav-vips").textContent = translations[lang].vips;
  if (document.getElementById("nav-news")) document.getElementById("nav-news").textContent = translations[lang].news;
  if (document.getElementById("nav-contact")) document.getElementById("nav-contact").textContent = translations[lang].contact;

  // --- Hero ---
  if (document.getElementById("hero-title")) document.getElementById("hero-title").textContent = translations[lang].heroTitle;
  if (document.getElementById("discord-btn")) document.getElementById("discord-btn").textContent = translations[lang].discordBtn;

  // --- VIPs ---
  if (document.getElementById("vip-starter-title")) document.getElementById("vip-starter-title").textContent = translations[lang].starter.title;
  if (document.getElementById("vip-starter-desc")) document.getElementById("vip-starter-desc").textContent = translations[lang].starter.desc;

  if (document.getElementById("vip-silver-title")) document.getElementById("vip-silver-title").textContent = translations[lang].silver.title;
  if (document.getElementById("vip-silver-desc")) document.getElementById("vip-silver-desc").textContent = translations[lang].silver.desc;

  if (document.getElementById("vip-gold-title")) document.getElementById("vip-gold-title").textContent = translations[lang].gold.title;
  if (document.getElementById("vip-gold-desc")) document.getElementById("vip-gold-desc").textContent = translations[lang].gold.desc;

  if (document.getElementById("vip-titanium-title")) document.getElementById("vip-titanium-title").textContent = translations[lang].titanium.title;
  if (document.getElementById("vip-titanium-desc")) document.getElementById("vip-titanium-desc").textContent = translations[lang].titanium.desc;

  // --- Novidades ---
  if (document.getElementById("news-1-title")) document.getElementById("news-1-title").textContent = translations[lang].news1.title;
  if (document.getElementById("news-1-desc")) document.getElementById("news-1-desc").textContent = translations[lang].news1.desc;

  if (document.getElementById("news-2-title")) document.getElementById("news-2-title").textContent = translations[lang].news2.title;
  if (document.getElementById("news-2-desc")) document.getElementById("news-2-desc").textContent = translations[lang].news2.desc;

  if (document.getElementById("news-3-title")) document.getElementById("news-3-title").textContent = translations[lang].news3.title;
  if (document.getElementById("news-3-desc")) document.getElementById("news-3-desc").textContent = translations[lang].news3.desc;
}
