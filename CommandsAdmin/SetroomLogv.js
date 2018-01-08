const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const logv = new JSONdb('./database/logv/logv.json');
const Discord = require('discord.js')
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  let newlogv = args.join(" ").replace(/[\<\>\@\#]/igm, "");
  let thisroom = client.channels.get(newlogv);  

  if (!newlogv) return message.reply(`**[ :warning: ] You cannot Set an Empty Logv Room!**`);    
      message.channel.send(`**[ :globe_with_meridians: ]** Guild **New Logv Room is Sucessfully Changed To** **[ \`${thisroom.name}\` ]**`)
      .then( setTimeout(() => {logv.set("<@" + message.guild.id + ">", thisroom.name)}, 1000))
            
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setlogv', 'setroomlogv'],
  permLevel: 3
};

exports.help = {
  name: 'setlogv',
  description: 'Set Logv Room for your Server [Mute/Ban/Kick..]',
  aliases: ['setlogv', 'setroomlogv'],  
  usage: '!logv',
  permLevel: "Admin"    
};    