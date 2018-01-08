const Discord = require('discord.js');
const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const newset = new JSONdb('./database/newset/newset.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
      
    var snow = [

`:cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow:
:snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake:`,
`:cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow:

:snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake:`,
`:cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow:


:snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake:`,

`:cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow:
:snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake:`,
`:cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow:

:snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake:`,
`:cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow:


:snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake:`,
`:cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow:
:snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake:`,
`:cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow:

:snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake:`,
`:cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow: :cloud_snow:


:snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake: :snowflake:`,


    ];

    message.channel.send(`**[ :cloud_snow: | :snowflake: ] Has Began!**`).then((message) => { setInterval(() => { message.edit(snow[Math.floor(Math.random() * snow.length)]) },1000) })

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['snow'],
  permLevel: 4
};

exports.help = {
  name: 'Snow',
  description: 'It Starts Snowning!',
  aliases: 'snow',  
  usage: '!snow',
  permLevel: "Detalied"            
};