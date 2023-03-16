module.exports = {
  data: {
    name: `kick`,
  },
  async execute(interaction, client) {
    const targetUser = interaction.options.getUser;
    const member = await interaction.guild.members
      .fetch(targetUser.id)
      .catch(console.error);
    if (!member) return interaction.reply("Could not find that member.");

    try {
      await member.kick("Kicked by admin");
      interaction.reply("User was kicked successfully.");
    } catch (error) {
      interaction.reply("An error occured while trying to kick the member.");
      console.error(error);
    }
  },
};
