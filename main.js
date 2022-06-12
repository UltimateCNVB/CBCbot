const Discord = require("discord.js");
require("dotenv").config()
const TOKEN = "OTg1NTkwMzU3MDcwODYwMzI4.GqfXii.K_yDPz4as_mTW2G-7EFvOe_wvTQD8mnf4n6Yno";

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hello CBC"){
        message.reply("Hello Bitches!")
    }
})





client.login(process.env.TOKEN);