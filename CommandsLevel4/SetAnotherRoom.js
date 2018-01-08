const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const sayroom = new JSONdb('./database/sayroom/sayroom.json');
exports.run = function(client, message, args) {
  
  let newRoom = args.join(" ").replace(/[\<\>\@\#]/igm, "");
  let thisroom = client.channels.get(newRoom);  
if (!newRoom) return message.reply(`**[ :warning: ] You cannot Set an Empty Say Room!**`);    
      message.channel.send(`**[ :globe_with_meridians: ]** Guild **Say Room is Sucessfully Changed To** **[ \`${thisroom.name}\` ]**`)
      .then( setTimeout (() => {sayroom.set("<@" + message.guild.id + ">", thisroom.name)}, 500))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setroomsay', 'setsayroom', 'srs'],
  permLevel: 4
};

exports.help = {
  name: 'setroomsay',
  description: 'sets a new admin role name for server',
  aliases: ['setroomsay', 'setsayroom', 'srs'],  
  usage: '!setroomsay',
  permLevel: "Owner",       
};    