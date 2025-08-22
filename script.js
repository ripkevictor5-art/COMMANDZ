function changeLanguage(lang) {
  const infoTitle = document.getElementById("info-title");
  const infoList = document.getElementById("info-list");
  const rulesTitle = document.getElementById("rules-title");
  const rulesList = document.getElementById("rules-list");

  if (!infoTitle || !infoList || !rulesTitle || !rulesList) return;

  if (lang === "pt") {
    infoTitle.innerText = "Informações do Servidor";
    infoList.innerHTML = `
      <li><strong>Nome:</strong> COMMAND Z</li>
      <li><strong>Servidor:</strong> Pirata/original</li>
      <li><strong>Mods:</strong> Trader, BaseBuildingPlus, Weapon Redux</li>
      <li><strong>Wipe:</strong> 3 meses (todo dia 1)</li>
    `;

    rulesTitle.innerText = "Regras do Servidor";
    rulesList.innerHTML = `
      <li>Sem uso de cheats ou exploits.</li>
      <li>Respeite todos os jogadores.</li>
      <li>Proibido matar em safe zone.</li>
      <li>Admins têm palavra final.</li>
    `;
  } else if (lang === "en") {
    infoTitle.innerText = "Server Information";
    infoList.innerHTML = `
      <li><strong>Name:</strong> COMMAND Z</li>
      <li><strong>Server:</strong> Cracked/original</li>
      <li><strong>Mods:</strong> Trader, BaseBuildingPlus, Weapon Redux</li>
      <li><strong>Wipe:</strong> Every 3 months (1st of the month)</li>
    `;

    rulesTitle.innerText = "Server Rules";
    rulesList.innerHTML = `
      <li>No use of cheats or exploits.</li>
      <li>Respect all players.</li>
      <li>No killing in safe zones.</li>
      <li>Admins have the final word.</li>
    `;
  } else if (lang === "es") {
    infoTitle.innerText = "Información del Servidor";
    infoList.innerHTML = `
      <li><strong>Nombre:</strong> COMMAND Z</li>
      <li><strong>Servidor:</strong> Pirata/original</li>
      <li><strong>Mods:</strong> Trader, BaseBuildingPlus, Weapon Redux</li>
      <li><strong>Wipe:</strong> Cada 3 meses (día 1)</li>
    `;

    rulesTitle.innerText = "Reglas del Servidor";
    rulesList.innerHTML = `
      <li>No usar trampas ni exploits.</li>
      <li>Respeta a todos los jugadores.</li>
      <li>Prohibido matar en zona segura.</li>
      <li>Los admins tienen la última palabra.</li>
    `;
  } else if (lang === "ru") {
    infoTitle.innerText = "Информация о сервере";
    infoList.innerHTML = `
      <li><strong>Имя:</strong> COMMAND Z</li>
      <li><strong>Сервер:</strong> Пиратка/оригинал</li>
      <li><strong>Моды:</strong> Trader, BaseBuildingPlus, Weapon Redux</li>
      <li><strong>Сброс:</strong> Каждые 3 месяца (1 числа)</li>
    `;

    rulesTitle.innerText = "Правила сервера";
    rulesList.innerHTML = `
      <li>Без использования читов и эксплойтов.</li>
      <li>Уважайте всех игроков.</li>
      <li>Запрещено убивать в безопасной зоне.</li>
      <li>Решение админов является окончательным.</li>
    `;
  }
}
