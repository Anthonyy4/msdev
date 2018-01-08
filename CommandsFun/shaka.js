const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args, guild, member) {
  // let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  // if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    message.reply(`**[** :sparkles: **]** If you Want to Check **[  Shaka's ⧫ ]** Social Media:
    **Discord Server - [ https://discord.gg/NTXH7CG ]**    
    **Youtube Channel: [http://www.youtube.com/c/SHAKAOfficial]**
    **Support iHax - [http://ihax.org/support]**    
    `).then((message) => { setTimeout(() => { message.delete(); }, 8000)});    
    };
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['shaka', 'shakadj'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'shaka',
        description: 'shaka yt',
        usage: 'shaka'
      };
