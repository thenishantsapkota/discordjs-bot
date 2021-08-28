const { SlashCommandBuilder } = require("@discordjs/builders")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { clientId, guildId, token } = require("./config.json")

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  new SlashCommandBuilder()
    .setName("leanbow")
    .setDescription("Replies with something sus!"),
  new SlashCommandBuilder()
    .setName("user")
    .setDescription("Returns info about a user")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("User to get info")
        .setRequired(false)
    ),
].map((command) => command.toJSON())

const rest = new REST({ version: "9" }).setToken(token)

;(async () => {
  try {
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands,
    })

    console.log("Successfully registered application commands.")
  } catch (error) {
    console.error(error)
  }
})()
