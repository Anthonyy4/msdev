const Discord = require('discord.js');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client , message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    message.delete();
    message.reply(`
:game_die: **8ball game has been closed!**
**To play a new game type [!play]** :space_invader:  
`).then( (message) => { setTimeout(() => { message.edit({embed}); }, 8000); });

const embed = new Discord.RichEmbed()
    .setColor(0x837238)
    .addField(`**Question:**`, `\`Closed\``)
    .addField(`**Anwser:**`, `\`Closed\``)
    .setFooter(`_---8Ball Game---_`)


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['x','exit'],
  permLevel: 0
};

exports.help = {
  name: '2',
  description: 'a',
  usage: 'a'
};