const { ActivityType } = require("discord.js");

module.exports = (client) => {
  client.pickPresence = async () => {
    const options = [
      {
        type: ActivityType.Watching,
        text: "test1",
        status: "online",
      },
      {
        type: ActivityType.Listening,
        text: "test2",
        status: "idle",
      },
      {
        type: ActivityType.Playing,
        text: "test3",
        status: "dnd",
      },
    ];
    const option = Math.floor(Math.random() * options.length);

    client.user
      .setPresence({
        activities: [
          {
            name: options[option].text,
            type: options[option].type,
          },
        ],
        status: options[option].status,
      })
  };
};
