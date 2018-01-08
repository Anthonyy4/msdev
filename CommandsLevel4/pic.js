  const settings = require('../settings.json');
  const fs = require('fs');
  const JSONdb = require('simple-json-db');
  const devmode = new JSONdb('./database/devmode/devmode.json');
  const newset = new JSONdb('./database/newset/newset.json');
  exports.run = function(client, message, args) {
    let devmodeon = devmode.has("<@" + message.guild.id + ">");  
    if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
    
    mesage.channel.send(pic);
        
  }; 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pic'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'picture',
    description: 'picture shows',
    aliases: 'pic',  
    usage: '!picture',
    permLevel: "Everyone"            
  };