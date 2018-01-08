const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const tagprivate = new JSONdb('./database/tagprivate/tagprivate.json');
const Discord = require('discord.js')
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
let newPrivateTag = args.join(" ");
if (!newPrivateTag) return message.reply(`**[ :warning: ] You cannot Set an Empty Private Tag!**`);   
      settings.privatetag = newPrivateTag;
      message.channel.send(`**[ :globe_with_meridians: ]** Guild **New Private Tag is Sucessfully Changed To** **[ \`${newPrivateTag}\` ]**`)
      .then( setTimeout(() => {tagprivate.set("<@" + message.guild.id + ">", newPrivateTag)}, 1000))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setprivatetag', 'settagprivate', 'stp'],
  permLevel: 3
};

exports.help = {
  name: 'setprivatetag',
  description: 'Set a Private Tag for Your Server',
  aliases: ['setprivatetag', 'settagprivate', 'stp'],  
  usage: '!setprivatetag',
  permLevel: "Admin"    
};    