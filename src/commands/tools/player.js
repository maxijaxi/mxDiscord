const {
  createAudioPlayer,
  createAudioResource,
  joinVoiceChannel,
  AudioPlayerStatus,
  VoiceConnectionStatus,
} = require("@discordjs/voice");
const playDl = require("play-dl");
const ytsr = require("youtube-sr");

class MusicPlayer {
  constructor(guildId) {
    this.guildId = guildId;
    this.audioPlayer = createAudioPlayer();
    this.queue = [];
    this.currentSong = null;
    this.connection = null;

    this.audioPlayer.on("error", (error) => {
      console.error(`Error in audio player: ${error.message}`);
    });

    this.audioPlayer.on("stateChange", async (oldState, newState) => {
      if (newState.status === AudioPlayerStatus.Idle) {
        if (this.queue.length === 0) {
          this.currentSong = null;
          return;
        }

        const nextSong = this.queue.shift();
        await this.play(nextSong);
      }
    });
  }

  async joinChannel(channel) {
    this.connection = joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator,
    });

    this.connection.on("stateChange", (oldState, newState) => {
      if (newState.status === VoiceConnectionStatus.Disconnected) {
        this.leaveChannel();
      }
    });

    try {
      await this.connection.subscribe(this.audioPlayer);
    } catch (error) {
      console.error(`Error subscribing audio player to connection: ${error}`);
      this.connection.destroy();
    }
  }

  leaveChannel() {
    if (this.connection) {
      this.connection.destroy();
      this.connection = null;
    }

    this.audioPlayer.stop();
    this.queue = [];
    this.currentSong = null;
  }

  async play(song) {
    this.currentSong = song;
    const stream = await playDl.stream(song.url, {
      quality: 0,
      requestOptions: {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0",
        },
      },
    });

    const resource = createAudioResource(stream);
    this.audioPlayer.play(resource);
  }

  pause() {
    this.audioPlayer.pause();
  }

  resume() {
    this.audioPlayer.unpause();
  }

  skip() {
    this.audioPlayer.stop();
  }

  addToQueue(song) {
    this.queue.push(song);
  }

  removeFromQueue(index) {
    this.queue.splice(index, 1);
  }
}

module.exports = {
  MusicPlayer,
  AudioPlayerStatus,
};
