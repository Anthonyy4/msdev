const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const appaccess = new JSONdb('./database/appaccess/appaccess.json');
exports.run = function(client, message, args) {
  
    setTimeout(function() {
        message.delete();
      },200);
    
  let newAccess = message.content.split(" ")[2];
  let user = message.mentions.users.first();
  if (!user) return message.reply(`**[ :warning: | Invalid user ] Looks That Something went wrong eh..!**`);
if (!newAccess) return message.reply(`**[ :warning: | Confirm ] Confirmation Needed for this Action!**`);    
      message.channel.send(`**[ :white_check_mark: ]** **Successfully ${user} Deleted Access** **[ \`${newAccess}\` ]**`)
      .then( setTimeout (() => {appaccess.delete("<@!" + user.id + ">", newAccess)}, 500))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['deleteaccess', 'deleteaccess', 'delaccess'],
  permLevel: 4
};

exports.help = {
  name: 'deleteaccess',
  description: 'sets a new admin role name for server',
  usage: '!setroomsay'
};    