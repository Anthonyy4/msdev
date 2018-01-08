const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  message.delete();
let newPrefix = args.join(" ")[0];
if (!newPrefix) return message.reply(`**[ :warning: ] You cannot Set a Empty Prefix!**`);
      settings.prefix = newPrefix;
      message.channel.send(`**[ :globe_with_meridians: ]** Client **Prefix Sucessfully Changed To** **[ \`${newPrefix}\` ]**`).then(setTimeout(() => {      (fs.writeFile("./settings.json", JSON.stringify(settings), (err) => console.error));
    })).then( (message) => { setTimeout(() => { message.delete(); }, 8000); });
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sp'],
  permLevel: 4
};

exports.help = {
  name: 'setprefix',
  description: 'Access: Creator',
  usage: '!sp'
};    