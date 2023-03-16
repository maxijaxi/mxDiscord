const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("admin-manage-member")
    .setDescription("Returns a embed with user infomation and actions")
    .addUserOption((option) =>
      option.setName("target").setDescription("Target member").setRequired(true)
    )
    .setDefaultMemberPermissions(
      PermissionFlagsBits.Administrator | PermissionFlagsBits.BanMembers | PermissionFlagsBits.KickMembers
    ),
  async execute(interaction, client) {
    const targetUser = interaction.options.getUser("target");
    const member = await interaction.guild.members
      .fetch(targetUser.id)
      .catch(console.error);
    if (targetUser.id == "747089999949988001") {
      return interaction.reply({
        content: "Access denied!",
        ephemeral: true,
      });
    } else if (targetUser.id == "261541661937500171") {
      return interaction.reply({
        content: "Access denied!",
        ephemeral: true,
      });
    }
    const manage = new EmbedBuilder()
      .setColor(1051660)
      .setTitle(`Manage:\n*${targetUser.username}*`)
      .setAuthor({
        name: targetUser.tag,
        iconURL: targetUser.displayAvatarURL(),
      })
      .setThumbnail(member.displayAvatarURL())
      .setDescription(`**ID:**\n${member.id}`)
      .addFields(
        {
          name: "Discord join date",
          value: `<t:${parseInt(targetUser.createdAt / 1000)}:D>`,
          inline: true,
        },
        {
          name: "Server join date",
          value: `<t:${parseInt(member.joinedAt / 1000)}:D>`,
          inline: true,
        }
      )
      .setTimestamp()
      .setFooter({ text: "This is work in progress!" });
    const actions = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("Reports")
        .setLabel("reports")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("timeout")
        .setLabel("Timeout member")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("kick")
        .setLabel("Kick member")
        .setStyle(ButtonStyle.Danger),
      new ButtonBuilder()
        .setCustomId("ban")
        .setLabel("Ban member")
        .setStyle(ButtonStyle.Danger)
    );

    interaction.reply({
      embeds: [manage],
      components: [actions],
      ephemeral: true,
    });
  },
};
