const JSONdb = require('simple-json-db');
const msp = new JSONdb('./database/msp/msp.json');
const Discord = require('discord.js')
exports.run = function(client, message, args) { 
  
  setTimeout(function() {
    message.delete();
  }, 2500);

  let msplog = client.channels.find('name', `msp-log`)     
  
  var cmd = message.content.split(' ')[0];
  var cmd1 = message.content.split(' ')[1];
  var cmd2 = message.content.split(' ')[2];
  var cmd3 = message.content.split(' ')[3];
  var user = message.mentions.users.first();
  if (!user) return message.reply(`You must Mention a **User** to send MSP!`);  
  var ownmsp = msp.get(user.id);
  var othermsp = msp.get(cmd1);
  
  
    const embed = new Discord.RichEmbed()
      .setColor(0xB360B8)
      .setTimestamp(Date)
      .setDescription(`**Value:** :gem: \`${cmd1}\`
**From Msp Core [ MsBot Development ]**
**To:** \`<@${user.id}> ${user.username}#${user.discriminator}\` <@${user.id}>
**At:** \`<@${message.guild.id}>\` **${message.guild.name}**
**On:** \`${new Date}\`

:pushpin: **Core Transaction [ Deleted MSP ]** 

      `);
      message.channel.send(`**[ :credit_card: ] MSP Transaction Removed from ${user} - [\`${cmd1}\`]**`).then(client.channels.get(msplog.id).send(`**[ :credit_card: ] MSP Transaction Remove - [\`${cmd1}\`]**`, {embed}))
      .then( setTimeout(() => { msp.set(`<@!${user.id}>`, Math.floor(msp.get("<@!" + user.id + ">") - parseInt(cmd1)));}, 3000));

  };
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['xremove', 'xrem'],
        permLevel: 4
      };
      
      exports.help = {
        name: 'mspremove',
        description: 'xremove',
        usage: '!xremove'
      };
