const Discord = require('discord.js');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args, guild, member) {
    let devmodeon = devmode.has("<@" + message.guild.id + ">");    
    if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
    
    message.delete();
    let argss = args.join(" ");
    const embed = new Discord.RichEmbed()
    .setColor(0x235335)
    .setDescription(`${argss}`);

    message.channel.send({embed});
    
};
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['embtext'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'embedtext',
        description: 'embedtext',
        aliases: ['embtext'],        
        usage: '!embtext',
        permLevel: "Everyone"                  
      };
