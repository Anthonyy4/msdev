const Discord = require('discord.js');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const logv = new JSONdb('./database/logv/logv.json');
const greeting = new JSONdb('./database/greeting/greeting.json');
const jail = new JSONdb('./database/jail/jail.json');
const mute = new JSONdb('./database/mute/mute.json');
const autojoin = new JSONdb('./database/autojoin/autojoin.json');
const memverified = new JSONdb('./database/memverified/memverified.json');
const mslogv = new JSONdb('./database/mslogv/mslogv.json');
exports.run = (client, message, args) => {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  setTimeout(function() {
    message.delete();
  }, 6000);


    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('**[ :warning: ]** **I do not have the correct permissions** `[ MANAGE_ROLES_OR_PERMISSIONS ]`.').catch(console.error);

    let mutes = mute.get("<@" + message.guild.id + ">");
    let logsv = logv.get("<@" + message.guild.id + ">");
  
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let autorole = autojoin.get("<@" + message.guild.id + ">");
  let memverifieds = memverified.get("<@" + message.guild.id + ">");
  let modlog =  message.guild.channels.find('name', `${logsv}`);
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', `${mutes}`);
  let memberRole = client.guilds.get(message.guild.id).roles.find('name', `${autorole}`);
  let certiRole = client.guilds.get(message.guild.id).roles.find('name', `${memverifieds}`);
  
  if (!modlog) return message.reply('**[ :warning: ]** `I` **cannot find a** __**logv**__ **channel**').catch(console.error); 
  if (!muteRole) return message.reply('I **cannot** find a **[ `mute` ]** role').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must **mention someone** to **[ `Un/mute` ]** them.').catch(console.error);  
  if (reason.length < 1) return message.reply('You must **supply a reason** for the **[ `Un/mute` ]**.').catch(console.error);
  if (!certiRole) return message.reply('I **cannot** find a **[ `Auto Join `]** role').catch(console.error);
  if (!memberRole) return message.reply('I **cannot** find a **[` Verified Role `]** role').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x5C5767)
    .setTimestamp()
    .setDescription(`**[ \`🚧\` ]** **Action:** UnMute\n**Target:** **${user.username}** \`${user.id}\` | <@${user.id}>\n**Moderator:** **${message.author.tag}** \`${message.author.id}\` **|** <@${message.author.id}>\n**Reason:** **[ \`${reason}\` ]**`);
    
    let mslogon = mslogv.has("<@" + message.guild.id + ">");
    if (!mslogon) return message.channel.send(`**[ :unlock:  | Action UnMute ]** <@${message.author.id}>, \`${user.id} ${user.username}\` | ${user} has been **UnMuted** for **[ \`${reason}\` ]**`).then(message.guild.member(user).removeRole(muteRole));      

    if (mslogon) return message.channel.send(`**[ :unlock:  | Action UnMute ]** <@${message.author.id}>, \`${user.id} ${user.username}\` | ${user} has been **UnMuted** for **[ \`${reason}\` ]**`).then(client.channels.get(modlog.id).send({embed})).then(message.guild.member(user).removeRole(muteRole));
    

  if (message.guild.member(user).roles.has(muteRole.id)) {  
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed})  
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['unmute'],
  permLevel: 2
};

exports.help = {
  name: 'unmute',
  aliases: ['unmute'],  
  description: 'mutes or unmutes a mentioned user',
  usage: 'un/mute [mention] [reason]',
  permLevel: ["Admin" + " or " + "Staff"]               
};