const {
  SlashCommandBuilder,
  StringSelectMenuBuilder,
  ActionRowBuilder,
  StringSelectMenuOptionBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
} = require("discord.js");
const specificGuildId = "966042661540749353";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("admin-role-menu")
    .setDescription("Returns a role menu")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("timezones")
        .setDescription("Role menu for 'timezones'")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("ships").setDescription("Role menu for 'ships'")
    )
    /*.addSubcommand((subcommand) =>
      subcommand.setName("other").setDescription("Role menu for other-stuff")
    )*/
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDMPermission(false),

  async execute(interaction, client) {
    if (interaction.guild.id !== specificGuildId) {
      return interaction.reply({
        content: "Sorry, this command is only available in specific guild",
        ephemeral: true,
      });
    }
    /* role menu: timezones */

    const embedRoleMenuTime = new EmbedBuilder()
      .setColor(8359053)
      .setTitle("Roles: Timezones")
      .setDescription(
        `Please select your UTC timezone in the menu below!\n*(UTC=GMT)*`
      )
      .setFooter({ text: "This is work in progress!" });

    const roleMenuTime = new StringSelectMenuBuilder()
      .setCustomId(`role-menu-time`)
      .setMinValues(1)
      .setMaxValues(1)
      .setOptions(
        new StringSelectMenuOptionBuilder({
          label: `UTC +/- 0:00`,
          value: `utcPM0`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC + 1:00`,
          value: `utcP1`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC + 2:00`,
          value: `utcP2`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC + 3:00`,
          value: `utcP3`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC + 4:00`,
          value: `utcP4`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC + 5:00`,
          value: `utcP5`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC + 6:00`,
          value: `utcP6`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC + 7:00`,
          value: `utcP7`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC + 8:00`,
          value: `utcP8`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC + 9:00`,
          value: `utcP9`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC + 10:00`,
          value: `utcP10`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC + 11:00`,
          value: `utcP11`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC +/- 12:00`,
          value: `utcPM12`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC - 11:00`,
          value: `utcM11`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC - 10:00`,
          value: `utcM10`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC - 9:00`,
          value: `utcM9`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC - 8:00`,
          value: `utcM8`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC - 7:00`,
          value: `utcM7`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC - 6:00`,
          value: `utcM6`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC - 5:00`,
          value: `utcM5`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC - 4:00`,
          value: `utcM4`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC - 3:00`,
          value: `utcM3`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC - 2:00`,
          value: `utcM2`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `UTC - 01:00`,
          value: `utcM1`,
        })
      );

    /* role menu: ships */

    const embedRoleMenuShips = new EmbedBuilder()
      .setColor(3426654)
      .setTitle("Roles: Ships")
      .setDescription(`Please select the ship classes you got access to!`)
      .setFooter({ text: "This is work in progress!" });

    const roleMenuShips = new StringSelectMenuBuilder()
      .setCustomId(`role-menu-ships`)
      .setMinValues(0)
      .setMaxValues(5)
      .setOptions(
        new StringSelectMenuOptionBuilder({
          label: `Limiteds`,
          value: `lim`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `Battleship`,
          value: `bb`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `Dreadnought`,
          value: `dread`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `Carrier`,
          value: `car`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `Super Capital`,
          value: `sc`,
        })
      );
    /* role menu: other */ /* may come with bugs and all 
    TODO: - get roles, put them in roleMenuOther.js and not forget the fucking Id

    const embedRoleMenuOther = new EmbedBuilder()
      .setColor(3426654)
      .setTitle("Roles: Other")
      .setDescription(``)
      .setFooter({ text: "This is work in progress!" });

    const roleMenuOther = new StringSelectMenuBuilder()
      .setCustomId(`role-menu-other`)
      .setMinValues(0)
      .setMaxValues(5)
      .setOptions(
        new StringSelectMenuOptionBuilder({
          label: ``,
          value: ``,
        }),
        new StringSelectMenuOptionBuilder({
          label: ``,
          value: ``,
        }),
        new StringSelectMenuOptionBuilder({
          label: ``,
          value: ``,
        })
      ); */

    if (interaction.options.getSubcommand() === "timezones") {
      interaction.reply({
        components: [new ActionRowBuilder().addComponents(roleMenuTime)],
        embeds: [embedRoleMenuTime],
      });
    } else if (interaction.options.getSubcommand() === "ships") {
      interaction.reply({
        components: [new ActionRowBuilder().addComponents(roleMenuShips)],
        embeds: [embedRoleMenuShips],
      });
    } /*else if (interaction.options.getSubcommand() === "other") {
      interaction.reply({
        components: [new ActionRowBuilder().addComponents(roleMenuOther)],
        embeds: [embedRoleMenuOther],
      });
    } */
  },
};
