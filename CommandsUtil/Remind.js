const Discord = require('discord.js');
const settings = require('../settings.json');
const ms = require('ms');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args, guild, member) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  var me = message.content.split(' ')[1];
    var cmd = message.content.split(' ')[0];
    var cmd1 = message.content.split(' ')[1];
    var cmd2 = args.join(' ').slice(7);
    var cmd3 = message.content.split(' ')[3];
    let time = message.content.split(' ')[2];

    if (me === "me") {
      if (!cmd2) return message.channel.send(`**[ Invalid Reminder | :warning: ] ${message.author} You should provide text!**`)
      if (!time) return message.reply(`**[ Time Value Incorrect ]** **You must include Time Value!, Try Again!**`)
      message.channel.send(`[ \`🕒\` ]**Hello <@${message.author.id}>,** i will remind you **${cmd2}** in **[ \`${ms(ms(time), { long:true })}\` ]**`).then(() => {
        client.lockit = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
          }).then(message.channel.send(`**[ \`🕒\` Time's up ]** <@${message.author.id}>, i'm reminding you **${cmd2}** after  **[ \`${time}\` ]**!`)).catch(console.error);
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });     
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['remind'],
  permLevel: 0
};

exports.help = {
  name: 'reminder',
  aliases: ['remind me'],  
  description: 'Reminds you after the set time!',
  usage: '!remindme',
  permLevel: "Everyone"
};