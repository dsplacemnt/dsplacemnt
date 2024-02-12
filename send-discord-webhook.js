const axios = require('axios');
const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

async function sendDeploymentMessage() {
  try {
    await axios.post(discordWebhookUrl, {
      content: 'Deployment successful! :tada:',
    });
  } catch (error) {
    console.error('Error sending deployment message to Discord:', error.message);
  }
}

sendDeploymentMessage();
