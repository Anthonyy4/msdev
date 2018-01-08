const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const global = new JSONdb('./database/global/global.json');
exports.run = function(client, message, args) {
  
  let globals = args.join(" ").replace(/[\<\>\@\#]/igm, "");
  let thisroom = client.channels.get(globals);  
if (!globals) return message.reply(`**[ :warning: ] You cannot Set an Empty Global Room!**`);    
      message.channel.send(`**[ :globe_with_meridians: ]** Guild **Global Room is Sucessfully Changed To** **[ \`${thisroom.name}\` ]**`)
      .then( setTimeout (() => {global.set("<@" + message.guild.id + ">", thisroom.name)}, 500))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setroomglobal', 'setglobal'],
  permLevel: 4
};

exports.help = {
  name: 'setglobal',
  description: 'sets a new admin role name for server',
  usage: '!sgreet'
};    