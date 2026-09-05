// Imports
require("dotenv").config();

const { App } = require('@slack/bolt');
const axios = require("axios");


// init app
const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_USER_OAUTH_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});
// Send a simple greeting message in slack channel. 
app.command("/radbot-greet", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Hello user, I'm here to greet you politely. Pong!\n This is your latency\n  Latency: ${latency}ms` });
});

// GetRandomFact via api-ninjas api. It can be about science, literature, philosophy, and other cool topics. 
async function getRandomFact() {

  const response = await fetch(
    `https://api.api-ninjas.com/v1/facts`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": process.env.API_NINJAS_FACT_API_KEY,
        "Accept": "application/json"
      }
    }
  );

 
  const data = await response.text()
  const parsedData = JSON.parse(data);

  return parsedData;
}


// Fun fact generated via api-ninjas api. It can be about science, literature, philosophy, and other cool topics. 
app.command("/radbot-funfact", async ({ command, ack, respond }) => {
   await ack();

  try {
    const facts = await getRandomFact();
    console.log("Fun fact:", facts);

    const fact = facts[0].fact;
    console.log("Parsed fact:", fact);

    await respond({
      text: `Hello user, I'm here to give you a fun fact:\n\n🧠 ${fact}`
    });
  } catch (error) {
    console.error("Fun fact error:", error);

    await respond({
      text: "Sorry, I couldn't fetch a fun fact right now."
    });
  }
});

// Get a random fact about cats by sending a request through axios library.
app.command("/radbot-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

// get a random joke by sending a request to a free api using axios. 
app.command("/radbot-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text:
`${response.data.setup}

${response.data.punchline}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});

// show all available commmands
app.command("/radbot-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/radbot-greet - Greets you politely, and tells latency. 
/radbot-funfact - Get a random fact about science, literature, philosophy, and other cool topics. 
/radbot-catfact - Get a random fact about cats.
/radbot-joke - Get a random joke!
/radbot-help - show all commands`
  });
});

// log app started
(async () => {
  await app.start();
  console.log("bot is running!");
  
})();