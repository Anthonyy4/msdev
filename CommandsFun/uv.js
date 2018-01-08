const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args, guild, member) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    message.delete();
    message.reply(`**[** :milky_way: **]** If you Want to Check **[ Universe by iHax ⧫ ]** Social Media:
**Discord Server - [ https://discord.gg/nTndhAE ]**    
**Support iHax - [http://ihax.org/support]**
**iHax Bot** **-** :white_circle: **[http://bot.ihax.org/get]** 
**Youtube Channel: [https://youtube.com/channel/UCWADmip_YtSWFc0rUBLvWgA/about]**
**Twitch - [https://twitch.tv/isUniverse]**
`).then((message) => {setTimeout(() => {message.delete(); }, 8000)})
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['uv', 'universe', 'ihax', 'iHax'],
  permLevel: 0
};

exports.help = {
  name: 'universe',
  description: 'check ihax\'s yt channel',
  usage: '!uv'
};