const { Schema, model } = require("mongoose");
const guildSchema = new Schema({
  _id: Schema.Types.ObjectId,
  guildId: String,
  guildName: String,
  guildIcon: { type: String, require: false },
  guildBanner: { type: String, require: false },
  guildSplash: { type: String, require: false },
  guildRegion: String,
  guildCreatorId: String,
  guildMemberCount: String,
  guildCreationTimestamp: Date,
  guildTimestamp: Date,
});

module.exports = model("guildProfiler", guildSchema, "guildProfiles");
