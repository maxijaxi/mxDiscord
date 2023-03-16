const chalk = require("chalk");

module.exports = {
  data: {
    name: `role-menu-time`,
  },
  async execute(interaction) {
    const utcPM0 = "969691665386328134";
    const utcP1 = "969692058925281300";
    const utcP2 = "969692205675589692";
    const utcP3 = "969703850548269136";
    const utcP4 = "999714855143616512";
    const utcP5 = "1066799590600343582";
    const utcP6 = "1066799595004383383";
    const utcP7 = "1066799597554516039";
    const utcP8 = "1066799600930934844";
    const utcP9 = "1066799610535874611";
    const utcP10 = "1066799866539421807";
    const utcP11 = "1066799868649144440";
    const utcPM12 = "1066799871014736132";
    const utcM11 = "1066800429268222012";
    const utcM10 = "1066800432241971340";
    const utcM9 = "1066800434758561833";
    const utcM8 = "969692783168327682";
    const utcM7 = "969692654755524653";
    const utcM6 = "969692578045915146";
    const utcM5 = "969692452921425971";
    const utcM4 = "1066800425954721822";
    const utcM3 = "1066800423228424222";
    const utcM2 = "1066800420397269002";
    const utcM1 = "1066800417377361980";

    const rolePool = [
      utcPM0,
      utcP1,
      utcP2,
      utcP3,
      utcP4,
      utcP5,
      utcP6,
      utcP7,
      utcP8,
      utcP9,
      utcP10,
      utcP11,
      utcPM12,
      utcM11,
      utcM10,
      utcM9,
      utcM8,
      utcM7,
      utcM6,
      utcM5,
      utcM4,
      utcM3,
      utcM2,
      utcM1,
    ];

    const member = interaction.member;
    let choice = interaction.values[0];

    // Console log interations
    const user = interaction.user.tag;
    const date = new Date();
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();
    console.log(
      chalk.gray(`[${dateString} ${timeString}]`),
      chalk.gray(
        `Interaction: "roleMenuTime" was used by "${user}" with the following value: "${choice}"`
      )
    );

    if (choice == `utcPM0`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcPM0);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcPM0);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcP1`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcP1);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcP1);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcP2`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcP2);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcP2);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcP3`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcP3);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcP3);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcP4`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcP4);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcP4);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcP5`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcP5);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcP5);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcP6`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcP6);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcP6);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcP7`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcP7);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcP7);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcP8`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcP8);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcP8);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcP9`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcP9);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcP9);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcP10`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcP10);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcP10);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcP11`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcP11);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcP11);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcPM12`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcPM12);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcPM12);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcM11`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcM11);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcM11);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcM10`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcM10);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcM10);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcM9`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcM9);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcM9);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcM8`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcM8);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcM8);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcM7`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcM7);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcM7);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcM6`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcM6);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcM6);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcM5`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcM5);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcM5);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcM4`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcM4);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcM4);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcM3`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcM3);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcM3);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcM2`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcM2);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcM2);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    } else if (choice == `utcM1`) {
      let userHasRoleFromPool = false;
      rolePool.forEach(async (roleId) => {
        if (member.roles.cache.some((role) => role.id == roleId)) {
          userHasRoleFromPool = true;
          member.roles.remove(roleId);
        }
      });
      if (userHasRoleFromPool) {
        member.roles.add(utcM1);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      } else {
        member.roles.add(utcM1);
        await interaction.reply({
          content: "The role was successfully added to you",
          ephemeral: true,
        });
      }
    }
  },
};
