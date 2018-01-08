const Discord = require('discord.js');
const settings = require(`../settings.json`);
const JSONdb = require('simple-json-db');
const ms = require('moment');
const devmode = new JSONdb('./database/devmode/devmode.json');
const serverMSP = new JSONdb('./database/serverMSP/serverMSP.json');
exports.run = (client, message, args, guild) => {
    let devmodeon = devmode.has("<@" + message.guild.id + ">");    
    if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
    let servermsp = serverMSP.get("<@" + message.guild.id + ">");
    let servermspcheck = serverMSP.has("<@" + message.guild.id + ">");
    if (!servermspcheck) servermsp = "0"
    const embed = new Discord.RichEmbed()
        .setColor(671785)
        .setTimestamp()
        .setThumbnail(message.guild.iconURL)
        .setDescription(`**Server Name** : **[ ${message.guild.name} ]** 

**Server ID :** \`${message.guild.id}\`
**Server Region** \`${message.guild.region}\`
**Server CreatedAt :** \`[${message.guild.createdAt}]\`
**Server Msp** : [ \`${servermsp}\` ]
**Member Count :** \`[ ${message.guild.memberCount} ]\`
**Channels & Roles** Count: \`${message.guild.channels.size}\` **Channels** ,\`${message.guild.roles.size}\` **Roles**
**Creator : ** [ ${message.guild.owner} | \`${message.guild.ownerID}\` ]
**Main room** : [ ${message.guild.defaultChannel} ]
**Verification Level** : [ \`${message.guild.verificationLevel}\` ]
`)

    message.reply(`**[Info]** :pencil: Of Server **${message.guild.name}**`, {
        embed
    });
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sv'],
    permLevel: 0
};

exports.help = {
    name: 'infoserver',
    aliases: ['sv'],    
    description: 'Info of the server',
    usage: '!sv',
    permLevel: "Everyone"
};