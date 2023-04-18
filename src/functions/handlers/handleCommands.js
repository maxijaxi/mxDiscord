const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const chalk = require("chalk");
const fs = require("fs");

const date = new Date();
const dateString = date.toLocaleDateString();
const timeString = date.toLocaleTimeString();

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync(`./src/commands`);
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith(".js"));

      const { commands, commandArray } = client;
      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        if (!command.data || !command.data.name) {
          console.error(
            chalk.red(
              `Error in command file: '${file}' in folder '${folder}'. Command data or name is missing.`
            )
          );
          continue;
        }
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
        console.log(
          chalk.gray(`[${dateString} ${timeString}]`),
          chalk.white(
            `Command: ${command.data.name} has been passed through the handler`
          )
        );
      }
    }

    const clientId = "747089999949988001";
    const guildIds = ["428540670312054785", "966042661540749353"];
    const rest = new REST({ version: "9" }).setToken(process.env.token);
    try {
      console.log(
        chalk.gray(`[${dateString} ${timeString}]`),
        chalk.white(`Started refreshing application (/) commands`)
      );

      guildIds.forEach((id) => {
        rest.put(Routes.applicationGuildCommands(clientId, id), {
          body: client.commandArray,
        });
      });

      console.log(
        chalk.gray(`[${dateString} ${timeString}]`),
        chalk.white(`Successfully reloaded application (/) commands`)
      );
    } catch (error) {
      console.error(error);
    }
  };
};
