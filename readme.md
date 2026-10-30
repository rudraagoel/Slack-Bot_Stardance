# RADBot

Hello Reader,

I'm Rudra Goel..

I've built this Slack bot as a part of Hack Club Stardance, from the "Make your first Slack bot!" mission!

RADBot is basically a small Slack bot that lets you use custom slash commands to get greetings, random facts, cat facts and jokes!

It uses a couple of external APIs to fetch all the random stuff, and also uses Slack's Socket Mode, so there's no need to host a public HTTP endpoint or anything like that.

## The commands are as follows:

### `/radbot-greet`

Greets you politely! Also measures the latency of the bot, so you can see how long it takes to respond.

### `/radbot-funfact`

Get a random fact about science, literature, philosophy, and other cool topics.

Uses the API Ninjas Facts API to fetch the facts.

### `/radbot-catfact`

Get a random fact about cats!

Uses Cat Fact Ninja for this one.

### `/radbot-joke`

Get a random joke!

Fetches a setup and a punchline from the Official Joke API.

### `/radbot-help`

Shows all the available commands and what they do.

Pretty useful if you forget something!

---

## Running it locally

If you wanna run the bot yourself, you'll need a few things first:

- Node.js and npm
- A Slack workspace
- A Slack app with Socket Mode enabled
- A Slack Bot Token
- A Slack App-Level Token
- A Slack Signing Secret
- An API Ninjas API Key

### Installation

First, clone the repository:

```bash
git clone <repository-url>
```

Then go into the project directory:

```bash
cd Slack-Bot_Stardance
```

Install the dependencies:

```bash
npm install
```

Now you'll need to create a `.env` file in the root directory.

Add your credentials to it:

```env
SLACK_BOT_TOKEN=xoxb-your-token
SLACK_APP_TOKEN=xapp-your-token
SLACK_SIGNING_SECRET=your-signing-secret
API_NINJAS_KEY=your-api-key
```

Make sure you replace these with your actual credentials..

### Setting up Slack

You'll also need to configure your Slack app before running the bot.

1. Go to the [Slack API Dashboard](https://api.slack.com/apps).
2. Create a new Slack app.
3. Enable Socket Mode.
4. Generate an App-Level Token with the required permissions.
5. Configure the bot token scopes.
6. Install the app into your Slack workspace.
7. Create and register all the slash commands mentioned above.

And that's pretty much it for the Slack setup!

### Running the bot

Once everything is configured, just run:

```bash
node index.js
```

If everything works, the terminal should show that the bot has started successfully.

You can now go to your Slack workspace and try out the commands!

---

## Troubleshooting

A few things that might go wrong:

- **Node.js issues:** Make sure Node.js is installed and working properly.
- **Dependencies:** Try running `npm install` again.
- **Bot not connecting:** Check if Socket Mode is enabled and your App-Level Token is correct.
- **Commands not working:** Make sure you've registered all the slash commands in your Slack app.
- **Authentication errors:** Double check your `.env` file and make sure all the credentials are correct.
- **Facts and jokes not loading:** Check your API keys and internet connection.

If you're still having issues, well, you can check the repository or open an issue!

---
P.S: I'm now submitting this project to Hack Club Pixl instead of Stardance / Live YSWS, mainly because of the better rates and honestly, a much better community.
This was a pretty fun little project to build, and a nice way to experiment with Slack bots, commands, APIs, and JavaScript!

It's also one of the projects I'm building during my Hack Club journey.

Thanks for checking out my project!
