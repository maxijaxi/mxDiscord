const chalk = require("chalk");
const date = new Date();
const dateString = date.toLocaleDateString();
const timeString = date.toLocaleTimeString();

module.exports = {
  name: "disconnected",
  execute(client) {
    console.log(
      chalk.gray(`[${dateString} ${timeString}]`),
      chalk.yellow.italic.bold(`[Database Status]: Disconnected`)
    );
  },
};
