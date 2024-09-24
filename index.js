console.clear();

const { Client, GatewayLayerIntent } = require("touchguild");
const config = require("./config/config.touchguild.json");
const chalk = require("chalk");
const client = new Client({
  token: config.token,
  intents: [GatewayLayerIntent.ALL],
});

client.on("ready", () => {
  console.log(
    `${chalk.green.bold("✓ Established a valid connection.")}\n Logged in as ${
      client.user.username
    }!`
  );
});
client.connect();
