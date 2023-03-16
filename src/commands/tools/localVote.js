const {
  SlashCommandBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ActionRowBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("local-vote")
    .setDescription("Sends a embed with menu for a local vote.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDMPermission(false),
  async execute(interaction, client) {
    const voteEmbed = new EmbedBuilder()
      .setColor(1051660)
      .setTitle(`[enter title]`)
      .setDescription(`[enter text]`)
      .setTimestamp()
      .setFooter({ text: "This is work in progress!" });

    interaction.reply({ embeds: [voteEmbed] });
  },
};
