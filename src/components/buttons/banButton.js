module.exports = {
  data: {
    name: `ban`,
  },
  async execute(interaction, client) {
    const targetUser = interaction.options.get("target");
    const member = await interaction.guild.members
      .fetch(targetUser.id)
      .catch(console.error);
    try {
      await member.ban();
      interaction.reply({
        content: `${targetUser.username} has been kicked from the server.`,
        ephemeral: true,
      });
    } catch (error) {
      interaction.reply({
        content: `An error occurred while trying to kick ${targetUser.username}.`,
        ephemeral: true,
      });
      console.error(error);
    }
  },
};
