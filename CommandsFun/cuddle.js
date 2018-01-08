const Discord = require('discord.js');
const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const newset = new JSONdb('./database/newset/newset.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});

  setTimeout(function() {
    message.delete();
  }, 6000);
  
    
  var cmd2 = args.join(' ');
    if (cmd2.length < 1) return message.reply(`**You must provide <text>/user to use this command example:** \`!slap @ella\``);
  message.channel.send(`${message.author} ***cuddles ${cmd2}***`)
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cuddle'],
  permLevel: 0
};

exports.help = {
  name: 'cuddle',
  description: 'Cuddle Someone!',
  aliases: ['cuddle'],  
  usage: '!cuddle @someone',
  permLevel: "Everyone"            
};
