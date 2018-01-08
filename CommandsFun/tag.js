const settings = require('../settings.json');
const Discord = require('discord.js');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const tag = new JSONdb('./database/tag/tag.json');
const tagprivate = new JSONdb('./database/tagprivate/tagprivate.json');
exports.run = function(client, message, args, guild, member) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
      let tagid = tag.get("<@" + message.guild.id + ">")
      let privatetagid = tagprivate.get("<@" + message.guild.id + ">")
        const embed = new Discord.RichEmbed()
        .setColor(0xB360B8)
        .setDescription(`**Your Name Can Be:**
**[\`${tagid}${message.author.username}\`]**`)
        message.reply(`**[ :shell:  ]** Your Public Tag is: **${tagid}** & Private: **[ \`${privatetagid} \`]**`, {embed})
    };
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['tag'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'tag',
        aliases: ['tag'],        
        description: 'tag',
        usage: 'tag',
        permLevel: "Everyone"          
      };
