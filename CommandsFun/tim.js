const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args, guild, member) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    message.reply(`**If you Want to Check [ Storm Gaming ] Youtube Channel: [https://www.youtube.com/channel/UCPn4Q6yjlqMP3pOlUlU9sUw]**`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tim', 'Storm', 'sg', 'SG', 'stormgaming', 'storm gaming', 'Tim'],
  permLevel: 0
};

exports.help = {
  name: 'tim',
  description: 'check tim\'s yt channe;',
  usage: '!tim'
};