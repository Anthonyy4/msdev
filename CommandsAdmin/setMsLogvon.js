const fs = require('fs');
const settings = require('../settings.json');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const mslogv = new JSONdb('./database/mslogv/mslogv.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
let mslogvs = args.join(" ");
  if (!mslogvs) return message.reply(`**[ :warning: | Confrim ] You must Confrim this Action! \`!setlogvon On\` **`);    
    message.channel.send(`**[ :globe_with_meridians: ]** Guild **Warn/Kick/Ban Logv is Sucessfully Changed To** **[ \`${mslogvs}\` ]**`)
      .then( setTimeout(() => { mslogv.set("<@" + message.guild.id + ">", mslogvs)}, 1000))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setlogvon', 'Setlogvon', 'setmslogvon'],
  permLevel: 3
};

exports.help = {
  name: 'setlogvon',
  description: 'Choose if you Want MsBot to Send Embed About [Warn|Kick|Ban|Lockdown|Mute] | [ON]',
  aliases: ['setlogvon', 'Setlogvon', 'setmslogvon'],  
  usage: '!setlogvon',
  permLevel: "Admin"    
};    