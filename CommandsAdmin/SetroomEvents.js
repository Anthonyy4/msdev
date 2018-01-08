const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const eventsroom = new JSONdb('./database/eventsroom/eventsroom.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    let newEvents = args.join(" ").replace(/[<>@#]/igm, "");
    let thisroom = client.channels.get(newEvents);
if (!newEvents) return message.reply(`**[ :warning: ]`);    
      message.channel.send(`**[ :globe_with_meridians: ]**  **New Room is Sucessfully Changed To** **[ \`${thisroom.name}\` ]**`)
      .then( setTimeout(() => {eventsroom.set("<@" + message.guild.id + ">", thisroom.name)}, 500))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setroomevents', 'setroomevent'],
  permLevel: 3
};

exports.help = {
  name: 'setroomevents',
  description: 'Set Game/Events Room for your Server',
  aliases: ['setroomevents', 'setroomevent'],  
  usage: 'setroomevents',
  permLevel: "Admin"    
};  