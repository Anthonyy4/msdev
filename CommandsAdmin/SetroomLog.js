const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const log = new JSONdb('./database/log/log.json');
const Discord = require('discord.js')
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    let newlog = args.join(" ").replace(/[\<\>\@\#]/igm, "");
    let thisroom = client.channels.get(newlog);
    if (!newlog) return message.reply(`**[ :warning: ] You cannot Set an Empty Log Room!**`); 
    if (!thisroom) return message.reply(`invalid`)       
      message.channel.send(`**[ :globe_with_meridians: ]** Guild **New Log Room is Sucessfully Changed To** **[ \`${thisroom.name}\` ]**`)
      .then( setTimeout(() => {log.set("<@" + message.guild.id + ">", thisroom.name)}, 1000));
         
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setlog', 'setroomlog'],
  permLevel: 3
};

exports.help = {
  name: 'setlog',
  description: 'Set Log Room for your Server [Users]',
  aliases: ['setlog', 'setroomlog'],  
  usage: '!log',
  permLevel: "Admin"    
};