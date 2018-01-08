const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const memverified = new JSONdb('./database/memverified/memverified.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
let newVerified = args.join(" ");
  if (!newVerified) return message.reply(`**[ :warning: ] You cannot Set an Empty Verified Role!**`);    
    message.channel.send(`**[ :globe_with_meridians: ]** Guild **New Verified Role is Sucessfully Changed To** **[ \`${newVerified}\` ]**`)
      .then( setTimeout(() => {memverified.set("<@" + message.guild.id + ">", newVerified)}, 1000))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setroleverified', 'setverified', 'Setroleverified',],
  permLevel: 3
};

exports.help = {
  name: 'setroleverified',
  description: 'Set your Server an Verified Role *important*',
  aliases: ['setroleverified', 'setverified', 'Setroleverified',],  
  usage: '!setroleverified',
  permLevel: "Admin"    
};    