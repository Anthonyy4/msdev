const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const mslog = new JSONdb('./database/mslog/mslog.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
let mslogs = args.join(" ");
  if (!mslogs) return message.reply(`**[ :warning: | Confrim ] You must Confrim this Action! \`!setlogoff Yes\` **`);    
    message.channel.send(`**[ :globe_with_meridians: ]** Guild **User Log is Sucessfully Changed To** **[ \`OFF\` ]**`)
      .then( setTimeout(() => { mslog.delete("<@" + message.guild.id + ">", mslogs)}, 1000))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setlogoff', 'Setlogoff', 'setmslogoff'],
  permLevel: 3
};

exports.help = {
  name: 'setlogoff',
  description: 'Choose if you Want MsBot to Log Users [Join|Leave] | [OFF]',
  aliases: ['setlogoff', 'Setlogoff', 'setmslogoff'],  
  usage: '!setlogoff',
  permLevel: "Admin"    
};    