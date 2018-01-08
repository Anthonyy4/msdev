const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const newsrole = new JSONdb('./database/newsrole/newsrole.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
let newsRole = args.join(" ");
  if (!newsRole) return message.reply(`**[ :warning: ] You cannot Set an Empty Verified Role!**`);    
    message.channel.send(`**[ :globe_with_meridians: ]** Guild **New Update is Sucessfully Changed To** **[ \`${newsRole}\` ]**`)
      .then( setTimeout(() => {newsrole.set("<@" + message.guild.id + ">", newsRole)}, 1000))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setupdate', 'setroleupdate'],
  permLevel: 3
};

exports.help = {
  name: 'setroleupdate',
  description: 'Set your Server an News/Update Role',
  aliases: ['setupdate', 'setroleupdate'],  
  usage: '!sgreet',
  permLevel: "Admin"    
};    