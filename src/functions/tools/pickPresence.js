const { ActivityType } = require("discord.js");

module.exports = (client) => {
  client.pickPresence = async () => {
    // options | devmode_options
    const mode = "devmode_options";
    const options = [
      {
        type: ActivityType.Listening,
        text: "commands",
        status: "online",
      },
      {
        type: ActivityType.Listening,
        text: "commands",
        status: "online",
      },
      {
        type: ActivityType.Listening,
        text: "commands",
        status: "online",
      },
    ];
    const devmode_options = [
      {
        type: ActivityType.Watching,
        text: "Maintenance!",
        status: "dnd",
      },
      {
        type: ActivityType.Playing,
        text: "back soon!",
        status: "dnd",
      },
    ];
    const presenceOptions = mode === "options" ? options : devmode_options;
    const option = Math.floor(Math.random() * presenceOptions.length);

    client.user.setPresence({
      activities: [
        {
          name: presenceOptions[option].text,
          type: presenceOptions[option].type,
        },
      ],
      status: presenceOptions[option].status,
    });
  };
};
