const ms = require('ms');
const Discord = require("discord.js")
const MessageEmbed = require("discord.js")

exports.run = async (client, message, args) => {


  
  const embed = new Discord.MessageEmbed()
  .setAuthor(client.user.username + '', client.user.displayAvatarURL())
  .addField("Command List:", `
\`\`\`
- create (create giveaway)
- gend (end the give away)
- groll (re roll the giveaway)
- help
- invite\`\`\``)
    message.channel.send(embed)

};
