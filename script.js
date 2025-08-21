const translations = {
  pt: {
    title: "COMMAND Z",
    subtitle: "Junte-se a nós no Discord!",
    discordBtn: "Entrar no Discord",
    infoTitle: "Informações do Servidor",
    nameLabel: "Nome:",
    serverLabel: "Servidor:",
    serverName: "COMMAND Z",
    serverType: "Pirata/original",
    modsLabel: "Mods:",
    modsList: "Trader, BaseBuildingPlus, Weapon Redux",
    wipeLabel: "Wipe:",
    wipeInfo: "3 meses (todo dia 1)",
    rulesTitle: "Regras do Servidor",
    rulesList: [
      "Sem uso de cheats ou exploits.",
      "Respeite todos os jogadores.",
      "Proibido matar em safe zone.",
      "Admins têm palavra final."
    ],
    footerText: "© 2025 COMMAND Z. Todos os direitos reservados."
  },
  en: {
    title: "COMMAND Z",
    subtitle: "Join us on Discord!",
    discordBtn: "Join Discord",
    infoTitle: "Server Information",
    nameLabel: "Name:",
    serverLabel: "Server:",
    serverName: "COMMAND Z",
    serverType: "Pirate/original",
    modsLabel: "Mods:",
    modsList: "Trader, BaseBuildingPlus, Weapon Redux",
    wipeLabel: "Wipe:",
    wipeInfo: "3 months (every day 1)",
    rulesTitle: "Server Rules",
    rulesList: [
      "No cheats or exploits allowed.",
      "Respect all players.",
      "Killing in safe zones is forbidden.",
      "Admins have the final word."
    ],
    footerText: "© 2025 COMMAND Z. All rights reserved."
  },
  es: {
    title: "COMMAND Z",
    subtitle: "¡Únete a nosotros en Discord!",
    discordBtn: "Entrar en Discord",
    infoTitle: "Información del Servidor",
    nameLabel: "Nombre:",
    serverLabel: "Servidor:",
    serverName: "COMMAND Z",
    serverType: "Pirata/original",
    modsLabel: "Mods:",
    modsList: "Trader, BaseBuildingPlus, Weapon Redux",
    wipeLabel: "Wipe:",
    wipeInfo: "3 meses (todo día 1)",
    rulesTitle: "Reglas del Servidor",
    rulesList: [
      "Sin uso de cheats o exploits.",
      "Respeta a todos los jugadores.",
      "Prohibido matar en zonas seguras.",
      "Los admins tienen la última palabra."
    ],
    footerText: "© 2025 COMMAND Z. Todos los derechos reservados."
  },
  ru: {
    title: "COMMAND Z",
    subtitle: "Присоединяйтесь к нам в Discord!",
    discordBtn: "Войти в Discord",
    infoTitle: "Информация о сервере",
    nameLabel: "Имя:",
    serverLabel: "Сервер:",
    serverName: "COMMAND Z",
    serverType: "Пиратский/Оригинальный",
    modsLabel: "Моды:",
    modsList: "Trader, BaseBuildingPlus, Weapon Redux",
    wipeLabel: "Вайп:",
    wipeInfo: "Каждые 3 месяца (1-го числа)",
    rulesTitle: "Правила сервера",
    rulesList: [
      "Запрещены читы и баги.",
      "Уважайте всех игроков.",
      "Запрещено убивать в безопасных зонах.",
      "Решение админов — окончательное."
    ],
    footerText: "© 2025 COMMAND Z. Все права защищены."
  }
};

function setLanguage(lang) {
  const tr = translations[lang];
  if (!tr) return;

  document.getElementById('title').textContent = tr.title;
  document.getElementById('subtitle').textContent = tr.subtitle;
  document.getElementById('discordBtn').textContent = tr.discordBtn;
  document.getElementById('infoTitle').textContent = tr.infoTitle;
  document.getElementById('nameLabel').textContent = tr.nameLabel;
  document.getElementById('serverLabel').textContent = tr.serverLabel;
  document.getElementById('serverName').textContent = tr.serverName;
  document.getElementById('serverType').textContent = tr.serverType;
  document.getElementById('modsLabel').textContent = tr.modsLabel;
  document.getElementById('modsList').textContent = tr.modsList;
  document.getElementById('wipeLabel').textContent = tr.wipeLabel;
  document.getElementById('wipeInfo').textContent = tr.wipeInfo;
  document.getElementById('rulesTitle').textContent = tr.rulesTitle;

  const rulesList = document.getElementById('rulesList');
  rulesList.innerHTML = '';
  tr.rulesList.forEach(rule => {
    const li = document.createElement('li');
    li.textContent = rule;
    rulesList.appendChild(li);
  });

  document.getElementById('footerText').textContent = tr.footerText;

  // Atualiza o localStorage
  localStorage.setItem('lang', lang);
}

// Eventos de clique
document.querySelectorAll('.language-selector button').forEach(button => {
  button.addEvent
// Mostrar/ocultar seletor de idioma
const toggleBtn = document.getElementById('languageToggle');
const langMenu = document.querySelector('.language-selector');

toggleBtn.addEventListener('click', () => {
  langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
});

// Fechar menu se clicar fora
document.addEventListener('click', (e) => {
  if (!toggleBtn.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.style.display = 'none';
  }
});
