const Discord = require('discord.js');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = (client, message, args, guild) => {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    const embed = new Discord.RichEmbed()
    .setColor(671785)
    .setDescription(`**Channel Name:** - \`${message.channel.name}\`
**Channel ID:** - \`${message.channel.id}\`
**Channel Server:** - \`${message.channel.guild}\`
**Channel CreatedAt:** - \`${message.channel.createdAt}\`
**Is Channel deletable:** - \`${message.channel.deletable}\`
**Channel Position:** - \`${message.channel.position}\`
**Channel Type:** - \`${message.channel.type}\`
    `)
    .setFooter(`-=${message.guild.name}=-`)

    message.reply(`**[Info]** :pencil: Of Channel **[ ${message.channel.name} ]**`, {
        embed
        });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ch', 'channel'],
  permLevel: 0
};

exports.help = {
  name: 'channel',
  aliases: ['ch', 'channel'],  
  description: 'Channel info',
  usage: '!ch',
  permLevel: "Everyone"
};
