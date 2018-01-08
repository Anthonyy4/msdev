const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const admin = new JSONdb('./database/admin/admin.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
let newadmin = args.join(" ");
  if (!newadmin) return message.reply(`**[ :warning: ] You cannot Set an Empty Admin Role!**`);    
    message.channel.send(`**[ :globe_with_meridians: ]** Guild **New Admin Role is Sucessfully Changed To** **[ \`${newadmin}\` ]**`)
      .then( setTimeout(() => {admin.set("<@" + message.guild.id + ">", newadmin)}, 1000))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setroleadmin', 'setadmin'],
  permLevel: 3
};

exports.help = {
  name: 'setroleadmin',
  description: 'Set your Server an Admin Role *important*',
  aliases: ['setroleadmin', 'setadmin'],  
  usage: '!sgreet',
  permLevel: "Admin"    
};    