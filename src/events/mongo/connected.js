const chalk = require("chalk");
const date = new Date();
const dateString = date.toLocaleDateString();
const timeString = date.toLocaleTimeString();

module.exports = {
  name: "connected",
  execute(client) {
    console.log(
      chalk.gray(`[${dateString} ${timeString}]`),
      chalk.green.italic.bold(`[Database Status]: Connected`)
    );
  },
};
