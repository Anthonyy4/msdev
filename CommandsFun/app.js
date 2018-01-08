const Discord = require('discord.js');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const appaccess = new JSONdb('./database/appaccess/appaccess.json');
const fs = require('fs');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    setTimeout(function() {
        message.delete();
      },5000);
  let hasaccess = appaccess.has("<@!" + message.author.id + ">")
  if (!hasaccess) return message.reply(`**[ :warning: | Unauthorized Access ]** **You do not have Access** to Open this File!\n If you want to get **Access and Apply for Staff**, **You need to ask <@196099091871170560> !**`).then((message) => { setTimeout(() => { message.delete(); },10000) })
  
    var filePath = './appaccess/appaccess.json'
    fs.exists(filePath, function(exists){
       if(exists){ // results true
          fs.readFile(filePath, "utf8", function(err, data){
             if(err){
              message.reply(err)
             }              
             client.channels.get("347043314312282113").send(`**[ :reminder_ribbon: ]** **Trepsing Msping - Staff at [ ${message.channel} , User : \`${message.author.id}\` | \`${message.author.username}\` <@${message.author.id}> ]**`)
             client.channels.get("347043314312282113").send(`**${data}**`).then((message) => { setTimeout(() => { message.delete(); },10000) })
          })
       }
    });
  message.reply(`**Here You can Apply for the staff Team of Storm Gaming Server , by the following the current link:** **[https://goo.gl/Dxd83a]**`).then((message) => { setTimeout(() => { message.delete(); },6000) })
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['app'],
  permLevel: 0
};

exports.help = {
  name: 'application',
  description: 'Access: Private',
  aliases: ['app'],  
  usage: '!app',
  permLevel: "Everyone"            
};