const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
  EmbedBuilder,
} = require("discord.js");
const chalk = require("chalk");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("getProfile")
    .setType(ApplicationCommandType.User),

  async execute(interaction, client) {
    const targetUser = interaction.targetUser;
    const targetMember = interaction.targetMember;

    // Console log interation
    const user = interaction.user.tag;
    const date = new Date();
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();
    console.log(
      chalk.gray(`[${dateString} ${timeString}]`),
      chalk.gray(
        `App: "getProfile" was used by "${user} on "${targetUser.tag}"`
      )
    );

    const profile = new EmbedBuilder()
      .setColor(1051660)
      .setTitle(`Profile Information:\n*${targetUser.username}*`)
      .setAuthor({
        name: interaction.targetUser.tag,
        iconURL: interaction.targetUser.displayAvatarURL(),
      })
      .setThumbnail(targetUser.displayAvatarURL())
      .setDescription(`**ID:**\n${interaction.targetUser.id}`)
      .addFields(
        {
          name: "Discord join date",
          value: `<t:${parseInt(targetUser.createdAt / 1000)}:D>`,
          inline: true,
        },
        {
          name: "Server join date",
          value: `<t:${parseInt(targetMember.joinedAt / 1000)}:D>`,
          inline: true,
        }
      )
      .setTimestamp()
      .setFooter({ text: "This is work in progress!" });

    await interaction.reply({ embeds: [profile], ephemeral: true });
  },
};
