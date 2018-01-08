const Discord = require('discord.js');
const settings = require('../settings.json');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const logv = new JSONdb('./database/logv/logv.json');
const greeting = new JSONdb('./database/greeting/greeting.json');
const jail = new JSONdb('./database/jail/jail.json');
const mslogv = new JSONdb('./database/mslogv/mslogv.json');
exports.run = (client, message, args) => {
  setTimeout(function() {
    message.delete();
  }, 6000);

  
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});  
  if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return message.reply('**[ :warning: ]** **I do not have the correct permissions** `[ KICK_MEMBERS ]`.').catch(console.error);
  let logsv = logv.get("<@" + message.guild.id + ">");    
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog =  message.guild.channels.find('name', `${logsv}`);
  if (!modlog) return message.reply('**[ :warning: ]** `I` **cannot find a** __**logv**__ **channel**');
  if (message.mentions.users.size < 1) return message.reply('**You** **must** **[ `mention` ]** **someone to kick them.**').catch(console.error);  
  if (reason.length < 1) return message.reply('**You must supply a** **[ `reason` ]** **for the kick.**');

  if (!message.guild.member(user).kickable) return message.reply('**[ :warning: ]** **I cannot kick that** **[ `member` ]**');
  message.guild.member(user).kick();

  message.channel.send(`**[ :name_badge: | Kick ]** <@${message.author.id}> **Initiated** on \`${user.id} ${user.tag}\` | **${user.username}** for ${reason}`).then( (message) => { setTimeout(() => { message.delete(); }, 8000); });
  

  const embed = new Discord.RichEmbed()
    .setColor(0x10256A)
    .setTimestamp()
    .setDescription(`**[ \`🚧\` ]** **Action:** Kick\n**Target:** **${user.username}** \`${user.id}\` | <@${user.id}>\n**Moderator:** **${message.author.tag}** \`${message.author.id}\` **|** <@${message.author.id}>\n**Reason:** **[ \`${reason}\` ]**`);
    
    let mslogvs = mslogv.has("<@" + message.guild.id + ">");
    if (!mslogvs) return;
    return client.channels.get(modlog.id).send({embed});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kick'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'Kicks the mentioned user.',
  aliases: ['kick'],  
  usage: 'kick [mention] [reason]',
  permLevel: ["Admin" + " or " + "Staff"]               
};