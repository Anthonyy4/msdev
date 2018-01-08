const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    message.channel.send(`${args}`, {code:'asciidoc'})
}; 
    exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ascii'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'asciidoc',
    description: 'Access: Private',
    aliases: ['ascii'],    
    usage: '!acii',
    permLevel: "Everyone"              
  };