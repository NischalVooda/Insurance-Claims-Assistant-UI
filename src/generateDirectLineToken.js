const fetch = require("node-fetch"); // Generates a new Direct Line token given the secret.

module.exports = async function generateDirectLineToken(botId, botTenantId) {
  const response = await fetch(
    `https://e8ec3df0341fed8c8b27fca741fb7d.1b.environment.api.powerplatform.com/powervirtualagents/botsbyschema/cra66_insuranceClaimsAssistant/directline/token?api-version=2022-03-01-preview&botId=${botId}&tenantId=${botTenantId}`,
    { method: "GET" }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { token } = await response.json();
  return token;
};
