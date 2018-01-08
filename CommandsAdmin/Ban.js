// Importing all requriments needed for Ban Command.
const Discord = require('discord.js');
const settings = require('../settings.json');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const logv = new JSONdb('./database/logv/logv.json');
const mslogv = new JSONdb('./database/mslogv/mslogv.json');

// Exporting Client , Message and Args.
exports.run = (client, message, args) => {

  // Developer Mode System.
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});  
 
  // If Bot doesn't have the Permission to Ban Someone.
  if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.reply('**[ :warning: ]** **I do not have the correct permissions** `[ BAN_MEMBERS ]`.').catch(console.error);
  
  // Exporting Log room for ban
  let logvs = logv.get("<@" + message.guild.id + ">");      
  
  // Reason provided for the ban.
  let reason = args.slice(1).join(' ');
  
  // The User mention
  let user = message.mentions.users.first();
  
  // Log room for banning logs.
  let modlog =  message.guild.channels.find('name', `${logvs}`);
  
  // If there is not at Modlog room in the Server!
  if (!modlog) return message.reply('**[ :warning: ]** `I` **Cannot find a** __**logv**__ **channel**');
  
  // If you didn't Mention the user, that you wanted to ban.
  if (message.mentions.users.size < 1) return message.reply('**You must** **[ `Mention` ]** **someone to ban them.**').catch(console.error);  
  
  // If you didn't provide a Reason for the Ban.
  if (reason.length < 1) return message.reply('**You must supply a** **[ `Reason` ]** **for the ban.**');

  // Check if the user is Bannable.
  if (!message.guild.member(user).bannable) return message.reply('**[ :warning: ]** I **cannot ban** that `[ member ]`');
  message.guild.ban(user, 2);

  // Sending a successfully message , that the user is Banned!
  message.channel.send(`**[ :anger: | Ban ]** <@${message.author.id}> **Initiated** on \`${user.id} ${user.tag}\` | **${user.username}** for ${reason}`).then( (message) => { setTimeout(() => { message.delete(); }, 8000); });

  // Embed
  const embed = new Discord.RichEmbed()
    .setColor(0xA20F0F)
    .setTimestamp()
    .setDescription(`**Action:** Ban\n**Target:** ${user.tag} \`${user.id}\`\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
  
    let mslogvs = mslogv.has("<@" + message.guild.id + ">");
    if (!mslogvs) return;


    // Sending embed
    return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ban'],
  permLevel: 3
};

exports.help = {
  name: 'ban',
  description: 'Ban a User who Breaks the Regulations of Server',
  aliases: ['ban'],  
  usage: 'ban [mention] [reason]',
  permLevel: "Admin"
  
};