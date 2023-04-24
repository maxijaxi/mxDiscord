const MusicPlayer = require("../tools/player.js");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("stop")
    .setDescription("Stop the currently playing song and clear the queue"),
  async execute(interaction, client) {
    const guildId = interaction.guild.id;
    const player = MusicPlayer.getPlayer(guildId);

    if (player.stop()) {
      await interaction.reply("Stopped the song and cleared the queue.");
    } else {
      await interaction.reply("No song is currently playing.");
    }
  },
};
