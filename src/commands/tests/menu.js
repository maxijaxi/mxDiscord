const {
  SlashCommandBuilder,
  StringSelectMenuBuilder,
  ActionRowBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("Returns a select menu!"),
  async execute(interaction, client) {
    const menu = new StringSelectMenuBuilder()
      .setCustomId(`sub-menu`)
      .setMinValues(1)
      .setMaxValues(1)
      .setOptions(
        new StringSelectMenuOptionBuilder({
          label: `Option #1`,
          value: `Option #1 has been selected!`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `Option #2`,
          value: `Option #2 has been selected!`,
        })
      );

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
    });
  },
};
