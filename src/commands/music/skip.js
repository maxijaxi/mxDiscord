const MusicPlayer = require("../tools/player.js");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("skip")
    .setDescription("Skip the currently playing song"),
  async execute(interaction, client) {
    const guildId = interaction.guild.id;
    const player = MusicPlayer.getPlayer(guildId);

    if (player.skip()) {
      await interaction.reply("Skipped the song.");
    } else {
      await interaction.reply("No song is currently playing.");
    }
  },
};
