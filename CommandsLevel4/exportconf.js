exports.run = function(client, message, args, guild, member) {
  
    message.delete();
    message.reply(`
  \`\`\`css
  const Discord = require('discord.js');
  const settings = require('../settings.json');
  const fs = require('fs');
  const JSONdb = require('simple-json-db');
  const devmode = new JSONdb('./database/devmode/devmode.json');
  const newset = new JSONdb('./database/newset/newset.json');
  exports.run = function(client, message, args) {
    let devmodeon = devmode.has("<@" + message.guild.id + ">");  
    if (devmodeon) return message.reply(\`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**\`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
    
        
  }; 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
  };
  
  exports.help = {
    name: '',
    description: '',
    aliases: '',  
    usage: '',
    permLevel: "Everyone"            
  };
 \`\`\` `).then((message) => { setTimeout(() => { message.delete() }, 4000)});
  
  };
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['exc', 'exportconf'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'exportconfig',
    description: 'example of exportconfig ',
    usage: '!exc'
  };