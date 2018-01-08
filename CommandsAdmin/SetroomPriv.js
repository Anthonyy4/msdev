const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const priv = new JSONdb('./database/priv/priv.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    let newPriv = args.join(" ").replace(/[<>@#]/igm, "");
    let thisroom = client.channels.get(newPriv);
if (!newPriv) return message.reply(`**[ :warning: ] You cannot send an Empty Private Room**`);    
      message.channel.send(`**[ :globe_with_meridians: ]**  **New Private Room is Sucessfully Changed To** **[ \`${thisroom.name}\` ]**`)
      .then( setTimeout(() => {priv.set("<@" + message.guild.id + ">", thisroom.name)}, 1000))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setroompriv', 'setroomprivate'],
  permLevel: 3
};

exports.help = {
  name: 'setpriv',
  description: 'Set a Private Room for Your Server',
  aliases: ['setroompriv', 'setroomprivate'],  
  usage: 'setr',
  permLevel: "Admin"    
};  