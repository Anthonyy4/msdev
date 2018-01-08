const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const mute = new JSONdb('./database/mute/mute.json');
const Discord = require('discord.js')
exports.run = function(client, message, args, guild) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  let newmute = args.join(" ").replace(/[\<\>\@\#]/igm, "");
    if (!newmute) return message.reply(`**[ :warning: ] You cannot Set an Empty Mute Role!**`);              
      message.channel.send(`**[ :globe_with_meridians: ]** Guild **New Mute Role is Sucessfully Changed To** **[ \`${newmute}\` ]**`)
      .then( setTimeout(() => {mute.set("<@" + message.guild.id + ">", newmute)}, 1000))
            
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setrolemute'],
  permLevel: 3
};

exports.help = {
  name: 'setmute',
  description: 'Set your Server an Mute Role',
  aliases: ['setrolemute'],  
  usage: '!settag',
  permLevel: "Admin"    
};    