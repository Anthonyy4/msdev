const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const staff = new JSONdb('./database/staff/staff.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
let newstaff = args.join(" ");
if (!newstaff) return message.reply(`**[ :warning: ] You cannot Set an Empty Staff Role!**`);    
      message.channel.send(`**[ :globe_with_meridians: ]** Guild **New staff Role is Sucessfully Changed To** **[ \`${newstaff}\` ]**`)
      .then( setTimeout(() => {staff.set("<@" + message.guild.id + ">", newstaff)}, 1000))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setrolestaff', 'setrole mod'],
  permLevel: 3
};

exports.help = {
  name: 'setstaff',
  description: 'Set your Server an Moderator Role *important*',
  aliases: ['setrolestaff', 'setrole mod'],  
  usage: '!setrolestaff',
  permLevel: "Admin"    
};    