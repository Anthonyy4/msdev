exports.run = function(client, message, args, guild, member) {    
    message.delete();
message.reply(`
\`\`\`css
const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const newset = new JSONdb('./database/newset/newset.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(\`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**\`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    let newGreet = args.join(" ").replace(/[\<\>\@\#]/igm, "");
    let thisroom = client.channels.get(newGreet);
if (!newGreet) return message.reply(\`**[ :warning: ]\`);    
      message.channel.send(\`**[ :globe_with_meridians: ]**  **New Room is Sucessfully Changed To** **[ \`$ { }\` ]**\`)
      .then( setTimeout (() => {greeting.set("<@" + message.guild.id + ">", thisroom.name)}, 500))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['app'],
  permLevel: 0
};

exports.help = {
  name: '',
  description: '',
  aliases: '',  
  usage: '',
  permLevel: "Everyone"            
};
\`\`\` `).then((message) => { setTimeout(() => { message.delete() }, 4000)});

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['excset', 'exportconfset'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'exportconfigset',
    description: 'example of exportconfig ',
    usage: '!excset'
  };