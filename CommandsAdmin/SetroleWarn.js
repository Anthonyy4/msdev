const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const warn = new JSONdb('./database/warn/warn.json');
const Discord = require('discord.js')
exports.run = function(client, message, args, guild) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  let newwarn = args.join(" ").replace(/[\<\>\@\#]/igm, "");
    if (!newwarn) return message.reply(`**[ :warning: ] You cannot Set an Empty Warn Role!**`);              
      message.channel.send(`**[ :globe_with_meridians: ]** Guild **New Warn Role is Sucessfully Changed To** **[ \`${newwarn}\` ]**`)
      .then( setTimeout(() => {warn.set("<@" + message.guild.id + ">", newwarn)}, 1000))
            
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setrolewarn'],
  permLevel: 3
};

exports.help = {
  name: 'setrolewarn',
  description: 'Set your Server an Warning Role',
  aliases: ['setrolewarn'],  
  usage: '!settag',
  permLevel: "Admin"    
};    