const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args, guild, member) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    message.delete();
    message.reply(`**If you Want to Check [ Hermes ] Youtube Channel: [https://www.youtube.com/channel/UCW2KCW0TdDQ2vAD68CtJrMA** (make sure you sub <3)`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hermes'],
  permLevel: 0
};

exports.help = {
  name: 'hermes',
  description: 'hermes',
  usage: 'hermes'
};