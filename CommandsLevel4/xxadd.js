const JSONdb = require('simple-json-db');
const serverMSP = new JSONdb('./database/serverMSP/serverMSP.json');
const Discord = require('discord.js')
const msinum = new JSONdb('./database/msinum/msinum.json');
exports.run = function(client, message, args, guild) {   
  setTimeout(function() {
    message.delete();
  }, 1000);
        let msplog = client.channels.find('name', `msp-log`)     
      
        var cmd = message.content.split(' ')[0];
        var cmd1 = message.content.split(' ')[1];
        var cmd2 = message.content.split(' ')[2];
        var cmd3 = message.content.split(' ')[3];
        var user = message.mentions.users.first();
        var msinumcheck = msinum.has("<@" + message.guild.id + ">");
        if (!msinumcheck) return message.reply(`**[ :warning: | Msinum OFF ] This Server is Not __Msinum__ , This Action is Forbidden!**`).then((message) => { setTimeout(() => { message.delete(); }, 8000) });
        
          
        const embed = new Discord.RichEmbed()
      .setColor(0xB360B8)
      .setTimestamp()
      .setDescription(`**Value:** :gem: \`${cmd1}\`
**From Msp Core [ MsBot Development ]**
**To:** **[ MSINUM Server | ]** \`${message.guild.name}\` \`${message.guild.id}\`
**At:** \`<#${message.guild.id}>\` **${message.guild.name}**
**On:** \`${new Date}\`
      
:pushpin: **Core Transaction [ Added Server MSP ]** 
      
      `)
      client.channels.get(msplog.id).send(`**[ :credit_card: ] MSP Transaction Add To a Msinum Server - [\`${cmd1}\`]**`,{embed})
      .then( setTimeout(() => {  serverMSP.set(`<@${message.guild.id}>`, Math.floor(parseInt(cmd1) + serverMSP.get("<@" + message.guild.id + ">")));}, 1000))
              
      };
      exports.conf = {
          enabled: true,
          guildOnly: false,
          aliases: ['xxadd', 'xxaddserver', 'xxaddserver', 'xxmspserveradd'],
          permLevel: 4
        };
        
        exports.help = {
          name: 'MsinumAddMSP',
          description: 'Access: Creator',
          usage: '!xadd'
        };