const ms = require('ms');
const Discord = require("discord.js")
const MessageEmbed = require("discord.js")

exports.run = async (client, message, args) => {


  
  const embed = new Discord.MessageEmbed()
  .setAuthor(client.user.username + '', client.user.displayAvatarURL())
  .setColor("BLUE")
  .addField("Link:", `[click here](https://discord.com/api/oauth2/authorize?client_id=746761649528242297&permissions=8&scope=bot)`)
    message.channel.send(embed)

};
