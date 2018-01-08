const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const logv = new JSONdb('./database/logv/logv.json');
const Discord = require('discord.js');
const mslogv = new JSONdb('./database/mslogv/mslogv.json');
exports.run = (client, message, args, member, guild) => {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  let logsv = logv.get("<@" + message.guild.id + ">");  
  let reason = args.slice(1).join(' ');
  let unbanReason = reason;
  let unbanAuth = message.author;
  let user = args[0];
  let modlog =  message.guild.channels.find('name', `${logsv}`);
  if (!modlog) return message.reply('**[ :warning: ]** `I` cannot find a __**ms-log**__ channel');
  if (reason.length < 1) return message.reply('You must **supply a reason** for the `[ Unban ]`.');
  if (!user) return message.reply('You must **supply a User Resolvable**, such as a `[ User Id ]`.').catch(console.error);
  message.guild.unban(user);
  message.channel.send(`\ :white_check_mark: \`[ <@${user}> ]\` **Was Unbanned From** \`[ ${message.guild.name} ]\``).then( (message) => { setTimeout(() => { message.delete(); }, 6000); });

  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Unban\n**Target:** <@${user}> \`${user}\` \n**Moderator:** ${unbanAuth.tag}\n**Reason:** ${unbanReason}`);
   
  let mslogvs = mslogv.has("<@" + message.guild.id + ">");
  if (!mslogvs) return;
  client.channels.get(modlog.id).send({embed});
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['unban'],
  permLevel: 3
};

exports.help = {
  name: 'unban',
  description: 'Remove the Ban from Someone!',
  aliases: ['unban'],  
  usage: 'unban [id] [reason]',
  permLevel: "Admin"    
};