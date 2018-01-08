const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args, guild, member) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    message.delete();
    message.reply(` **[ :fire: ]** **If you Want to Check creators Youtube Channel: [https://www.youtube.com/channel/UCOf9B4rSwvvY9GWJOt8uxwg]**`)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Fire'],
  permLevel: 0
};

exports.help = {
  name: 'fireYT',
  description: 'Creator Yt Channel',
  aliases: ['Fire'],  
  usage: '!Fire'
};