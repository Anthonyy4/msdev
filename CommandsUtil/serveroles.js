const Discord = require('discord.js');
const settings = require(`../settings.json`);
const JSONdb = require('simple-json-db');
const ms = require('moment');
const devmode = new JSONdb('./database/devmode/devmode.json');
const serverMSP = new JSONdb('./database/serverMSP/serverMSP.json');
exports.run = (client, message, args, guild) => {

    setTimeout(function() {
        message.delete();
    },6666);

    let devmodeon = devmode.has("<@" + message.guild.id + ">");    
    if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
    let servermsp = serverMSP.get("<@" + message.guild.id + ">");
    let servermspcheck = serverMSP.has("<@" + message.guild.id + ">");
    if (!servermspcheck) servermsp = "0"
    const embed = new Discord.RichEmbed()
    .setDescription(`**Roles** : \`\`\`fix
${message.guild.roles.map(role => role.name).join('\n')}\`\`\` `)

    message.reply(`**[Info]** :pencil: Of Server Roles**${message.guild.name}**`, {
        embed
    }).then((message) => { setTimeout(() => { message.delete(); },25000) })
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['svroles'],
    permLevel: 0
};

exports.help = {
    name: 'svroles',
    aliases: ['svroles'],    
    description: 'Info of the server',
    usage: '!sv',
    permLevel: "Everyone"
};