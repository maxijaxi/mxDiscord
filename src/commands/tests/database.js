const guildProfiler = require("../../schemas/guildProfiles");
const { SlashCommandBuilder } = require("discord.js");
const { mongoose } = require("mongoose");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("database")
    .setDescription("Returns info from a databsae"),
  async execute(interaction, client) {
    let guildProfile = await guildProfiler.findOne({ guildId: interaction.guild.id });
    if (!guildProfile) {
      guildProfile = await new guildProfiler({
        _id: mongoose.Types.ObjectId(),
        guildId: interaction.guild.id,
        guildName: interaction.guild.name,
        guildIcon: interaction.guild.iconURL()
          ? interaction.guild.iconURL()
          : "none",
      });

      await guildProfile.save().catch(console.error);
      await interaction.reply({
        content: `Server Name: ${guildProfile.guildName}`,
      });
      console.log(guildProfile);
    } else {
      await interaction.reply({
        content: `Server ID: ${guildProfile.guildId}`,
      });
      console.log(guildProfile)
    }
  },
};
