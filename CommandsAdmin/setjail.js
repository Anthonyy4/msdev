const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const greeting = new JSONdb('./database/greeting/greeting.json');
const jail = new JSONdb('./database/jail/jail.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  var cmd1 = message.content.split(' ')[1];  

  let newJail = args.join(" ").replace(/[\<\>\@\#]/igm, "");
  let thisroom = client.channels.get(newJail);  
if (!newJail) return message.reply(`**[ :warning: ] You cannot Set an Empty Jail Room!**`);    
      message.channel.send(`**[ :globe_with_meridians: ]** Guild **New Jail Room is Sucessfully Changed To** **[ \`${thisroom.name}\` ]**`)
      .then( setTimeout(() => {jail.set("<@" + message.guild.id + ">", thisroom.name)}, 500));
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setjail', 'setroomjail'],
  permLevel: 3
};

exports.help = {
  name: 'setjail',
  description: 'Set a Jail/Warn Room for your Server',
  aliases: ['setjail', 'setroomjail'],  
  usage: '!sgreet',
  permLevel: "Admin"    
};    