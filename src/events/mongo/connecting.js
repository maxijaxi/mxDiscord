const chalk = require("chalk");
const date = new Date();
const dateString = date.toLocaleDateString();
const timeString = date.toLocaleTimeString();

module.exports = {
  name: "connecting",
  execute(client) {
    console.log(
      chalk.gray(`[${dateString} ${timeString}]`),
      chalk.cyan.italic(`[Database Status]: Connecting...`)
    );
  },
};
