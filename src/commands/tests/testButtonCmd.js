const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test_button_slash_command")
    .setDescription("Button for testing!"),
  async execute(interaction, client) {
    const buttonTest = new ButtonBuilder()
      .setCustomId(`test_button_1`)
      .setLabel(`Test Me!`)
      .setStyle(ButtonStyle.Primary);

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(buttonTest)],
    });
  },
};
