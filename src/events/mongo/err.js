const chalk = require("chalk");
const date = new Date();
const dateString = date.toLocaleDateString();
const timeString = date.toLocaleTimeString();

module.exports = {
  name: "err",
  execute(err) {
    chalk.gray(`[${dateString} ${timeString}]`),
      chalk.red.italic(
        `An error occured with the database connection:\n${err}`
      );
  },
};
