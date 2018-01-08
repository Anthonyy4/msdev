const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const ignore = new JSONdb('./database/ignore/ignore.json');
exports.run = function(client, message, args, guild) {
  
let newIgnore = args.join(" ");
if (!newIgnore) return message.reply(`**[ :warning: ] You must Provide the Command that You want to be __Un__Ignored!**`);
      message.reply(`**[ :construction:  ]** **-** **[ \`${newIgnore}\` ] Command is Globally __Un__ignored in [ \`${message.guild.name}\` ]**`)
      .then( setTimeout (() => {ignore.delete("<@" + message.guild.id + ">", newIgnore)}, 1000))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['unignore'],
  permLevel: 4
};

exports.help = {
  name: 'unignore',
  description: 'sets a new admin role name for server',
  usage: '!ignore'
};    