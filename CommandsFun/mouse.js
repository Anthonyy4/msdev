const Discord = require('discord.js');
const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const newset = new JSONdb('./database/newset/newset.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    setTimeout(() => {
        message.delete();
    }, 6000);

    message.channel.send(`**Setting a trap.. for :mouse2:**`).then((message) => { setTimeout(() => { message.edit(`:mouse: **...has been exterminated with :cheese:**`) },5000) })

}; 
exports.conf = {    
    enabled: true,
    guildOnly: false,
    aliases: ['mouse', 'Mouse', 'mice'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'Mouse',
    description: 'Exterminate a Mouse with Cheese',
    aliases: ['mouse', 'Mouse', 'mice'],  
    usage: '!mouse',
    permLevel: "Everyone"    
  };    