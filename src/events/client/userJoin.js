const chalk = require("chalk");

module.exports = {
  name: "userJoin",
  execute(client, member) {
    member.send("Hello World!");
  },
};
