// Traduções para os textos
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
  }
};

// Função para trocar os textos da página de acordo com idioma
function setLanguage(lang) {
  const tr = translations[lang];
  if (!tr) return;

  // Atualizar texto na página
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

  // Atualizar botão ativo da lista de idiomas
  document.querySelectorAll('.language-selector button').forEach(btn => {
    btn.classList.remove('active');
    btn.removeAttribute('aria-current');
  });
  const activeBtn = document.querySelector(`.language-selector button[data-lang="${lang}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
    activeBtn.setAttribute('aria-current', 'true');
  }
}

// Adiciona evento de clique nos botões de idioma
document.querySelectorAll('.language-selector button').forEach(button => {
  button.addEventListener('click', () => {
    const selectedLang = button.getAttribute('data-lang');
    setLanguage(selectedLang);
  });
});

// Detecta idioma do navegador e seta automaticamente (fallback para português)
const userLang = navigator.language || navigator.userLanguage;
if (userLang.startsWith('en')) {
  setLanguage('en');
} else if (userLang.startsWith('es')) {
  setLanguage('es');
} else {
  setLanguage('pt');
}
