module.exports = {
  data: {
    name: `test_button_1`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `https://maxijaxi.net/`,
    });
  },
};
