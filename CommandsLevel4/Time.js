const Discord = require('discord.js');
const settings = require('../settings.json');
const ms = require('ms');
const JSONdb = require('simple-json-db');
const global = new JSONdb('./database/global/global.json');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args, guild, member) {
  // let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  // if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    message.delete();
    var cmd = message.content.split(' ')[0];
    var cmd1 = message.content.split(' ')[1];
    var cmd2 = args.join(' ').slice(3);
    var cmd3 = message.content.split(' ')[3];
    let time = message.content.split(' ')[1];
      if (!time) return message.reply(`**[ Time Value Incorrect ]** **You must include Time Value!, Try Again!**`)
      message.channel.send(`**[ \`🕒\` ]** **Time Set for** **[ \`${ms(ms(time), { long:true })}\` ]**`).then(() => {
        client.lockit = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
          }).then(message.channel.send(`**[ \`🕒\` Time's up ]**`)).catch(console.error);
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });     
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['event', 'time'],
  permLevel: 4
};

exports.help = {
  name: 'time',
  description: 'Reminder of Time!',
  usage: '!time'
};