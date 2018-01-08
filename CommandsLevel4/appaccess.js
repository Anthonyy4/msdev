const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const appaccess = new JSONdb('./database/appaccess/appaccess.json');
exports.run = function(client, message, args) {
  
    setTimeout(function() {
        message.delete();
      },200);


  let newAccess = message.content.split(" ")[2]
  let user = message.mentions.users.first();
  if (!user) return message.reply(`**[ :warning: | Invalid user ] Looks That Something went wrong eh..!**`);
if (!newAccess) return message.reply(`**[ :warning: ] You cannot Give Empty Access**`);    
      message.channel.send(`**[ :white_check_mark: ]** **Successfully ${user} Got Access** **[ \`${newAccess}\` ]**`)
      .then( setTimeout (() => {appaccess.set("<@!" + user.id + ">", newAccess)}, 1000))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['giveaccess', 'setaccess', 'saccess'],
  permLevel: 4
};

exports.help = {
  name: 'appaccess',
  description: 'Gives Access to the user to apply for staff!(Msinum Guilds Only)',
  aliases: ['giveaccess', 'setaccess', 'saccess'],  
  usage: '!giveaccess @user',
  permLevel: "Owner"      
};    