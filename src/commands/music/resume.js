const MusicPlayer = require("../tools/player.js");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("resume")
    .setDescription("Resume the currently paused song"),
  async execute(interaction, client) {
    const guildId = interaction.guild.id;
    const player = MusicPlayer.getPlayer(guildId);

    if (player.resume()) {
      await interaction.reply("Resumed the song.");
    } else {
      await interaction.reply("No song is currently paused.");
    }
  },
};
