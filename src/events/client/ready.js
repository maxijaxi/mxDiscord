const chalk = require("chalk");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    setInterval(client.pickPresence, 10 * 1000);
    const date = new Date();
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();
    console.log(
      chalk.gray(`[${dateString} ${timeString}]`),
      chalk.green.bold(`${client.user.tag} is logged in and online.\n`)
    );
  },
};
