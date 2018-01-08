const Discord = require('discord.js');
const JSONdb = require('simple-json-db');
const sayroom = new JSONdb('./database/sayroom/sayroom.json');
exports.run = function(client, message, args, guild, member) {
  message.delete();
  let sayroomget = sayroom.get("<@" + message.guild.id + ">");
  let sayrooms = message.guild.channels.find('name', `${sayroomget}`);    
  if (!sayrooms) return;
  client.channels.get(sayrooms.id).send(args.join(" "));
    };
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['sayr'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'Say Room',
        description: 'Say smth from another room',
        permLevel: "Owner",     
        aliases: 'sayr',                    
        usage: '!sayr'
      };
