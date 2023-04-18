require("dotenv").config();
const { token, databaseToken } = process.env;
const { connect, mongoose } = require("mongoose");
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs");
mongoose.set('strictQuery', true);

const client = new Client({ intents: 3276799 });
client.commands = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.modals = new Collection();
client.commandArray = [];
client.musicPlayers = new Map();

const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(token);
(async () => {
  connect(databaseToken).catch(console.error);
})();
