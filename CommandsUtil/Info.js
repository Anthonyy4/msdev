const Discord = require('discord.js');
const settings = require('../settings.json');
const ms = require('moment');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const msp = new JSONdb('./database/msp/msp.json');
exports.run = (client, message, args, guild) => {
    let devmodeon = devmode.has("<@" + message.guild.id + ">");    
    if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
    
    let user = message.mentions.users.first();  
    var today = new Date();
    let member = message.author;
    var ownmspauthor = msp.get("<@!" + message.author.id + ">");
    var ownmspauthorcheck = msp.has("<@!" + message.author.id + ">");
    if (!ownmspauthorcheck) ownmspauthor = "0"
        var embed = new Discord.RichEmbed()
    .setColor(671785)
    .setTimestamp()
    .setThumbnail(message.author.avatarURL)
    .setDescription(`**UserID:** \`<@${message.author.id}> ${message.author.username}\`  :gear: 
**Name:** <@${message.author.id}> ${potret[Math.floor(Math.random() * potret.length)]}
**Created At:** **[ \`${message.author.createdAt}\` ${message.author.createdAt.getFullYear()} Year ]**
**Joined Server At:** **[ \`${message.channel.guild.joinedAt}\` ]** **${message.channel.guild.joinedAt.getFullYear()}**
**User is a bot?** - **[ \`${message.author.bot}\` ]**
**Status** - **[ \`${message.author.presence.status}\` ]**
**Msp:** **[ \`${ownmspauthor}\` ]** | :credit_card: 
**MoneyBox:** **[ \`${money}\` ]** | ${monhey[Math.floor(Math.random() * monhey.length)]}   `)  

        if (!user) return message.reply(`**[Info]** :pencil: Of User **${message.author.username}**`, {embed});
            var ownmsp = msp.get("<@!" + user.id + ">");
        var ownmspcheck = msp.has("<@!" + user.id + ">"); 
        if (!ownmspcheck) ownmsp = "0"    
        
    var embed = new Discord.RichEmbed()
    .setColor(671785)
    .setTimestamp()
    .setThumbnail(user.avatarURL)
    .setDescription(`**UserID:** \`<@${user.id}> ${user.username}\`  :gear: 
**Name:** <@${user.id}> ${potret[Math.floor(Math.random() * potret.length)]}
**Created At:**  **[ \`${user.createdAt}\`${user.createdAt.getFullYear()} Year ]**
**Joined Server At:** **[ \`${message.channel.guild.joinedAt}\` ]** **${message.channel.guild.joinedAt.getFullYear()}**
**User is a bot?** - **[ \`${user.bot}\` ]**
**Status** - **[ \`${user.presence.status}\` ]**
**Msp:** **[ \`${ownmsp}\` ]** | :credit_card: 
**MoneyBox:** **[ \`${money}\` ]** | ${monhey[Math.floor(Math.random() * monhey.length)]}   `)   
if (user) return message.reply(`**[Info]** :pencil: Of User **${user.username}**`, {embed});    
    
    };

var coin = 1
var money = 0
var potret = [
    ':rice_scene:',
    ':tent:',
    ':camping:',    
    ':city_sunset:',
    ':city_dusk:',
    ':cityscape:',
    ':night_with_stars:'
];
var monhey = [
    ':dollar:',
    ':yen:',
    ':euro:',
    ':pound:',
    ':money_with_wings:'
];


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i'],
  permLevel: 0
};

exports.help = {
  name: 'info',
  aliases: ['i'],  
  description: 'Info of user',
  usage: '!i',
  permLevel: "Everyone"
};