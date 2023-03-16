const chalk = require("chalk");

module.exports = {
  data: {
    name: `role-menu-ships`,
  },
  async execute(interaction) {
    const roleMap = {
      lim: "966047395118977034",
      bb: "966047354006433804",
      dread: "966047188654358528",
      car: "966047011382104144",
      sc: "966047135827120188",
    };

    const member = interaction.member;
    let choice = interaction.values;
    let selectedRoles = [];
    let reply = "";

    // Console log interations
    const user = interaction.user.tag;
    const date = new Date();
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();
    console.log(
      chalk.gray(`[${dateString} ${timeString}]`),
      chalk.gray(
        `Interaction: "roleMenuShips" was used by "${user}" with the following value: "${choice}"`
      )
    );

    // Remove all roles that are not selected
    Object.keys(roleMap).forEach(async (key) => {
      if (!choice.includes(key) && member.roles.cache.has(roleMap[key])) {
        await member.roles.remove(roleMap[key]);
        reply += "`Your roles have been updated`";
      }
    });

    // Add all selected roles
    choice.forEach(async (value) => {
      if (!member.roles.cache.has(roleMap[value])) {
        await member.roles.add(roleMap[value]);
        selectedRoles.push(value);
      }
    });

    await interaction.reply({
      content: "Your roles have been updated",
      ephemeral: true,
    });
  },
};
