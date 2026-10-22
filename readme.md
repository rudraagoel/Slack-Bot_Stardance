# RADBot — Hack Club Stardance

A fun Slack bot built with JavaScript that brings greetings, interesting facts, cat facts, and jokes to your Slack workspace.

## Description

Hello, reader!

I'm **Rudra Goel**, and I built RADBot as part of **Hack Club Stardance**, completing the *"Make your first Slack bot!"* mission.

RADBot is a simple Slack bot that responds to custom slash commands. It connects to external APIs to fetch random facts and jokes, while also providing a greeting command and a help menu.

The project was a fun way to explore **JavaScript, Slack app development, slash commands, APIs, and asynchronous programming**.

### Features

- **Greetings and latency:** Get a friendly greeting along with a latency measurement.
- **Random fun facts:** Discover facts fetched from the API Ninjas Facts API.
- **Cat facts:** Learn something new about cats using Cat Fact Ninja.
- **Random jokes:** Get jokes from the Official Joke API.
- **Built-in help:** View the available commands directly in Slack.
- **Socket Mode:** Connect the bot to Slack without needing a publicly accessible HTTP request endpoint for Slack events.

### Available Commands

| Command | Description |
|---|---|
| `/radbot-greet` | Receive a polite greeting and a latency measurement. |
| `/radbot-funfact` | Get a random fact about interesting topics. |
| `/radbot-catfact` | Get a random fact about cats. |
| `/radbot-joke` | Get a random joke with a setup and punchline. |
| `/radbot-help` | Display all available commands and their descriptions. |

### Screenshots

Check out the project screenshot!

![RADBot Slack Bot project screenshot](https://user-cdn.hackclub-assets.com/01a0b5d0-c022-7cb1-9940-27420b2d14ec/journal-1789756751566.png)

## Getting Started

### Dependencies

You'll need the following to run RADBot locally:

- [Node.js](https://nodejs.org/) with npm.
- A Slack workspace where you can install and test Slack apps.
- A Slack app configured with Socket Mode enabled.
- A Slack bot token, app-level token, and signing secret.
- An API Ninjas API key for the fun-fact command.
- Internet access to reach Slack and the external APIs.

### Installing

**1. Clone the repository**

```bash
git clone https://github.com/rudraagoel/Slack-Bot_Stardance.git
```

**2. Navigate to the project directory**

```bash
cd Slack-Bot_Stardance
```

**3. Install the dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env` file in the root directory of the project and add your credentials:

```env
SLACK_SIGNING_SECRET=your_signing_secret
SLACK_BOT_USER_OAUTH_TOKEN=your_bot_token
SLACK_APP_TOKEN=your_app_level_token
API_NINJAS_FACT_API_KEY=your_api_ninjas_key
```

Replace the placeholder values with your actual credentials. Never commit your `.env` file or publish your tokens and API keys.

**5. Configure your Slack app**

In the [Slack API dashboard](https://api.slack.com/apps):

- Create or select your Slack app.
- Enable Socket Mode and configure an app-level token with the required permissions.
- Add the slash commands listed in the table above, using the exact command names.
- Ensure the bot has the necessary permissions and is installed in your workspace.

## Executing Program

Once installation and configuration are complete, start the bot.

**1. Run the application**

From the root directory, execute:

```bash
node index.js
```

**2. Verify that the bot starts**

The terminal should display:

```text
bot is running!
```

**3. Test the commands**

Open your Slack workspace and run any of the registered commands:

```text
/radbot-greet
/radbot-funfact
/radbot-catfact
/radbot-joke
/radbot-help
```

The bot will acknowledge commands and respond with the corresponding greeting, fact, joke, or help information.

## Help

If something doesn't work as expected, try these troubleshooting steps.

- **The bot won't start:** Check that Node.js is installed and that you've run `npm install`.
- **Authentication errors:** Verify that all required environment variables are present and contain valid credentials.
- **The bot doesn't connect to Slack:** Confirm that Socket Mode is enabled and your app-level token is valid.
- **Slash commands don't work:** Check that all five commands are registered correctly in your Slack app.
- **Fun facts aren't loading:** Verify your API Ninjas API key and check whether the API is available.
- **Cat facts or jokes aren't loading:** Check your internet connection and the availability of the external APIs.
- **The `.env` file isn't working:** Ensure it's located in the project root and that the variable names match those used in `index.js`.

For additional help, check the [repository on GitHub](https://github.com/rudraagoel/Slack-Bot_Stardance).

## License

The project's `package.json` declares the **ISC License**. A separate license file was not listed in the repository when I inspected it. Add a `LICENSE` file containing the ISC License text to make the licensing information explicit.

---

## Built with ❤️ by Rudra Goel

Created as part of **Hack Club Stardance**.

I'm still exploring and learning through Hack Club, and this project was a great opportunity to experiment with Slack bots, APIs, and JavaScript.

I love the idea of a community where people are just **building stuff**, sharing it, getting excited about other people's projects, and collecting currencies and prizes along the way.

Thanks for checking out RADBot!
