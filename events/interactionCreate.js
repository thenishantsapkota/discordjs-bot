module.exports = {
  name: "interactionCreate",
  execute(interaction) {
    console.log(
      `${interaction.user.tag} in ${interaction.channel.name} executed the command ${interaction.commandName}.`
    )
  },
}
