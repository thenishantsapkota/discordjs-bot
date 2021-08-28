const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    const pingEmbed = new MessageEmbed()
      .setColor("#00FF00")
      .setAuthor("Ping")
      .setDescription(`Websocket Latency \`${interaction.client.ws.ping}ms\``)
      .setFooter(`Requested by ${interaction.user.tag}`)
    await interaction.reply({ embeds: [pingEmbed], ephemeral: true })
  },
}
