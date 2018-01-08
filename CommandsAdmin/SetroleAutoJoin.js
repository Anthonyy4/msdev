const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const autojoin = new JSONdb('./database/autojoin/autojoin.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    let autojoins = args.join(" ").replace(/[<>@#]/igm, "");
if (!autojoins) return message.reply(`**[ :warning: ] You cannot set an Empty Warn Role!**`);    
      message.channel.send(`**[ :globe_with_meridians: ]**  **New Auto-join role is Sucessfully Changed To** **[ \`${autojoins}\` ]**`)
      .then( setTimeout(() => {autojoin.set("<@" + message.guild.id + ">", autojoins)}, 1100  ))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setroleauto', 'setroleautojoin'],
  permLevel: "Admin"
};

exports.help = {
  name: 'setroleauto',
  description: 'Set your Server an Auto Join Role *important*',
  aliases: ['setroleauto', 'setroleautojoin'],  
  usage: 'setroleauto',
  permLevel: "Admin"    
};  