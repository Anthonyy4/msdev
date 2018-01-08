const Discord = require('discord.js');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    message.delete();
    let reason = args.join(' ');
    message.reply(`
:game_die: **8ball game Started!**
**How to play 8ball?** :robot: 
Type: \`!8ball <question>\`
**How to exit 8ball game?**
Type: \`[!exit]\` or \`[!x]\``).then( (message) => { setTimeout(() => { message.edit({embed}); }, 8000); });

const embed = new Discord.RichEmbed()
    .setColor(0x837238)
    .addField(`**Question:**`, `\`Pending...\``)
    .addField(`**Anwser:**`, `\`Pending...\``)
    .setFooter(`_---8Ball Game---_`)

  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['8bh'],
  permLevel: 0
};

exports.help = {
  name: '3',
  description: 'a',
  usage: 'a'
};