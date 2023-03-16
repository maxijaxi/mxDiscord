const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("pong!"),
  async execute(interaction, client) {
    let time = Date.now() - interaction.createdTimestamp;
    if (time < 0) time = -1;
    const ping = new EmbedBuilder()
      .setColor(1051660)
      .setTitle("Pong!")
      .setAuthor({
        name: interaction.user.tag,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setDescription(
        `**Initial-Response: ${client.ws.ping}ms\nPing: ${time}ms**`
      )
      .setTimestamp()
      .setFooter({ text: "This is work in progress!" });

    interaction.reply({ embeds: [ping], ephemeral: true });
  },
};
