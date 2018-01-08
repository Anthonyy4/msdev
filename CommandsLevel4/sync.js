const JSONdb = require('simple-json-db');
const msp = new JSONdb('./database/msinum/msinum.json');
const Discord = require('discord.js')
exports.run = function(client, message, args, guild) {   
  message.delete(); 
  

var cmd = message.content.split(' ')[0];
var cmd1 = message.content.split(' ')[1];
var cmd2 = message.content.split(' ')[2];
var cmd3 = message.content.split(' ')[3];
var user = message.mentions.users.first();
var ownmsp = msp.get("<@!" + message.author.id + ">");
var othermsp = msp.get(cmd1);

        message.channel.send(`**[ :arrow_forward: ]** **Syncing..**`).then((message) => { setTimeout(() => { message.edit(`**[ :satellite_orbital: ]** **Successfully Synced** `) }, 2000) }).then(setTimeout(() => { msp.set("<@" + message.guild.id + ">", 'No') },5000));     
        
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sync'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'sync',
    description: 'Access: Creator',
    usage: '!sync'
  };