const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args, guild, member) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    message.reply(`**If you Want to Check [ Shogi Easy ] Youtube Channel: [http://www.youtube.com/channel/UCshsJsEJdtPEnpsEtMuFuPQ]**`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['easy'],
  permLevel: 0
};

exports.help = {
  name: 'shogi',
  description: 'a',
  usage: 'a'
};