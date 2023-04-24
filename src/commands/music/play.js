const { MusicPlayer, AudioPlayerStatus } = require("../tools/player.js");
const { SlashCommandBuilder } = require("discord.js");
const YouTube = require("youtube-sr").default;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Play a song")
    .addStringOption((option) =>
      option.setName("query").setDescription("Song name").setRequired(true)
    ),
  async execute(interaction) {
    const query = interaction.options.getString("query");
    const guildId = interaction.guildId;
    const channel = interaction.member.voice.channel;

    // Get the client instance from the interaction
    const client = interaction.client;

    // Check if there is an existing instance of MusicPlayer for the guild
    let player;
    if (client.musicPlayers.has(guildId)) {
      player = client.musicPlayers.get(guildId);
    } else {
      player = new MusicPlayer(guildId);
      client.musicPlayers.set(guildId, player);
    }
    try {
      const searchResults = await YouTube.search(query, { limit: 1 });
      const video = searchResults[0];
      const song = {
        title: video.title,
        url: video.url,
      };
      if (!player.connection) {
        await player.joinChannel(channel);
      }
      player.addToQueue(song);
      if (player.audioPlayer.state.status === AudioPlayerStatus.Idle) {
        await player.play(song);
        await interaction.reply(`Now playing: ${song.title}`);
      } else {
        await interaction.reply(`Added to queue: ${song.title}`);
      }
    } catch (error) {
      console.error(error);
      await interaction.reply("Error playing song");
    }
  },
};
