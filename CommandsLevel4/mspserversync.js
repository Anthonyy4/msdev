const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const serverMSP = new JSONdb('./database/serverMSP/serverMSP.json');
const Discord = require('discord.js')
exports.run = function(client, message, args) {    
  message.delete();

var cmd = message.content.split(' ')[0];
var cmd1 = message.content.split(' ')[1];
var cmd2 = message.content.split(' ')[2];
var cmd3 = message.content.split(' ')[3];
var msinumcheck = msinum.has("<@" + message.guild.id + ">");
if (!msinumcheck) return message.reply(`**[ :warning: | Msinum OFF ] This Server is Not __Msinum__ , This Action is Forbidden!**`).then((message) => { setTimeout(() => { message.delete(); }, 8000) });


message.reply(`:sparkles:`).then(setTimeout(() => { serverMSP.set(`<@${message.guild.id}>`, 0) }, 1000));
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mspserversync', 'syncmsp', 'syncmspserver'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'mspserversync',
    description: 'mspsync',
    usage: '!mspsync'
  };