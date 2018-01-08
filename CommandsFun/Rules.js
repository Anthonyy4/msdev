const settings = require('../settings.json');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const rules = new JSONdb('./database/rules/rules.json');
exports.run = (client, message, args) => {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  let ruless = rules.get("<@" + message.guild.id + ">");
  if (!ruless) return message.reply(`**[ :eagle: ]** **Respect is Everything!!** :two_hearts:`);
    message.reply(`${ruless}`)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rules'],
  permLevel: 0
};

exports.help = {
  name: 'rules',
  aliases: ['rules'],  
  description: 'check rules',
  usage: '!rules',
  permLevel: "Everyone"            
};