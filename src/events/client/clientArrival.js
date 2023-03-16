const { EmbedBuilder, PermissionFlagsBits } = require("discord.js");
const guildProfiler = require("../../schemas/guildProfiles");
const mongoose = require("mongoose");
const chalk = require("chalk");

const date = new Date();
const dateString = date.toLocaleDateString();
const timeString = date.toLocaleTimeString();

module.exports = {
  name: "ready",
  async execute(client) {
    client.on("guildCreate", async (guild) => {
      console.log(
        chalk.gray(`[${dateString} ${timeString}]`),
        chalk.white(`Client: arriving in a new server: "${guild.name}"`)
      );

      let guildProfile = await guildProfiler.findOne({
        guildId: guild.id,
      });

      console.log(
        chalk.gray(`[${dateString} ${timeString}]`),
        chalk.cyan(`Client:`),
        chalk.cyan.italic(`fetching guild-data...`)
      );

      if (!guildProfile) {
        guildProfile = await new guildProfiler({
          _id: mongoose.Types.ObjectId(),
          guildId: guild.id,
          guildName: guild.name,
          guildIcon: guild.iconURL() ? guild.iconURL() : "null",
          guildBanner: guild.bannerURL() ? guild.bannerURL() : "null",
          guildSplash: guild.splash,
          guildRegion: guild.preferredLocale,
          guildCreatorId: guild.ownerId,
          guildMemberCount: guild.memberCount,
          guildCreationTimestamp: guild.createdTimestamp,
          guildTimestamp: date,
        });

        console.log(chalk.gray(`[${dateString} ${timeString}]`), chalk.white());
        /*
        await guildProfile.save().catch(console.error);
        await interaction.reply({
          content: `Server Name: ${guildProfile.guildName}`,
        });
        console.log(guildProfile);
      } else {
        await interaction.reply({
          content: `Server ID: ${guildProfile.guildId}`,
        });
        console.log(guildProfile);
      }*/
      }

      const arrival = new EmbedBuilder()
        .setColor(1051660)
        .setTitle(`Hello! I am ${client.user.username}`)
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(
          `Thank you for using our exclusive bot! Please take a moment to read through them and get to know our bot better. Your feedback and support is greatly appreciated!\n\n`
        )
        .addFields(
          {
            name: "About me",
            value: `I am an exclusive bot designed to enhance the server experience with high-quality services and user-friendly interface. \n\nNote that some features may not work optimally due to custom configurations and limitations.`,
            inline: true,
          },
          {
            name: "Server profile",
            value: `if this was the error kill mee`,
            inline: true,
          },
          {
            name: "Contact",
            value: `For support or any questions, feel free to join our [root server](https://discord.gg/CyWMAfmYXT) or visit our [website](https://maxijaxi.net). \nWe'll be happy to help!`,
            inline: false,
          }
        )
        .setFooter({ text: "swas" })
        .setTimestamp();

      const welcomeChannel = guild.channels.cache.find(
        (channel) => channel.name === "general" || channel.name === "welcome"
      );

      let defaultChannel = guild.channels.cache.find(
        (channel) =>
          channel.type == "text" &&
          channel
            .permissionsFor(guild.members.me)
            .has(PermissionFlagsBits.SendMessages)
      );

      if (welcomeChannel) {
        welcomeChannel.send({ embeds: [arrival] });
      } else if (defaultChannel) {
        defaultChannel.send({ embeds: [arrival] });
      } else {
        console.log(
          chalk.gray(`[${dateString} ${timeString}]`),
          chalk.white(`Client: unable to find usable channels`)
        );
      }
    });
  },
};
