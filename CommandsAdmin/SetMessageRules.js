const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const rules = new JSONdb('./database/rules/rules.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
let newRules = args.join(" ");
      if (!newRules) rules.set("<@" + message.guild.id + ">", "**[ :eagle: ]** **Respect is Everything!!** :two_hearts:");          
      message.channel.send(`**[ :gear: ]** <@${message.author.id}>, :white_check_mark:  Guild **Rules Updated: ** [ ${newRules} ]`)            
      .then( setTimeout(() => {rules.set("<@" + message.guild.id + ">", newRules)}, 1000))      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setmsgrules', 'setmessagerules'],
  permLevel: 3
};

exports.help = {
  name: 'setrules',
  description: 'Set the Important Rules for your Server',
  aliases: ['setmsgrules', 'setmessagerules'],  
  usage: 'msgrules',
  permLevel: "Admin"    
};    