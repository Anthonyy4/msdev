const Discord = require('discord.js');
const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const points = new JSONdb('./database/points/points.json');
exports.run = function(client, message, args) {
  
    var cmd = message.content.split(' ')[0];
    var cmd1 = message.content.split(' ')[1];
    var cmd2 = message.content.split(' ')[2];
    var cmd3 = message.content.split(' ')[3];
    var user = message.mentions.users.first();
    var randoms = [   
        'dogs',
        'cats',
        'cows',
        'chicken'

     ]

     var ran = randoms[Math.floor(Math.random() * randoms.length)]
   
     var getpoints = points.get("<@!" + user.id + ">");
     if (cmd === "!points") {
         return message.channel.send(`Your points are **${getpoints}**`);
     }

     message.channel.send(`Guess the Word to get **Points**
     Words can be : \`cats, cows, chicken, dogs\``).then(message.channel.send(`The **Guessing** Word is: \`${ran.slice(2)}\` `))
     
if(cmd.includes(ran)) {
    message.channel.send(`You won **50 Points**`).then((message) => { setTimeout(() => { points.set(`<@!${user.id}>`, 50) }, 2500) })
 }



}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['word','dogs','cats','cows','chicken','points'],
  permLevel: 0
};

exports.help = {
  name: 'points',
  description: 'gives you points',
  aliases: 'points',  
  usage: '!points',
  permLevel: "Everyone"            
};
