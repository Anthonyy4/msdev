const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const tag = new JSONdb('./database/tag/tag.json');
const Discord = require('discord.js')
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    let newTag = args.join(" ");
      if (!newTag) return message.reply(`**[ :warning: ] You cannot Set an Empty Tag!**`);          
      message.channel.send(`**[ :globe_with_meridians: ]** Guild **New Tag is Sucessfully Changed To** **[ \`${newTag}\` ]**`)
      .then( setTimeout(() => {tag.set("<@" + message.guild.id + ">", newTag)}, 1000))
            
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['settag'],
  permLevel: 3
};

exports.help = {
  name: 'settag',
  description: 'Set a Tag for your Game on your Server',
  aliases: ['settag'],  
  usage: '!settag',
  permLevel: "Admin"    
};    