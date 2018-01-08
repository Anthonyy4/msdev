const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const msp = new JSONdb('./database/msp/msp.json');
const Discord = require('discord.js')
exports.run = function(client, message, args) {    
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  

var cmd = message.content.split(' ')[0];
var cmd1 = message.content.split(' ')[1];
var cmd2 = message.content.split(' ')[2];
var cmd3 = message.content.split(' ')[3];
var ownmsp = msp.get("<@!" + message.author.id + ">");
var othermsp = msp.get(cmd1);

message.reply(` **[ :gem:  ]** **You Agreed** with ${client.user}' Terms for Using \`!msp\` command! , You can now use \`!msp\` to check your current **Amount of !msp** 

**Important Note: If You use \`!mspsync\` again , Your MSP will be reseted , and you will not be able to get them Back!**`).then(setTimeout(() => { msp.set(`<@!${message.author.id}>`, 50) }, 1000));
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mspsync'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'mspsync',
    aliases: ['mspsync'],    
    description: 'mspsync',
    usage: '!mspsync',
    permLevel: "Everyone"
  };