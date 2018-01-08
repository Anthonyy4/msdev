    const JSONdb = require('simple-json-db');
    const devmode = new JSONdb('./database/devmode/devmode.json');
    const messagejoin = new JSONdb('./database/messagejoin/messagejoin.json');
    const foreverything = new JSONdb('./database/foreverything/foreverything.json');    
    exports.run = function(client, message, args) {
      let devmodeon = devmode.has("<@" + message.guild.id + ">");  
      if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
      let messagejoinget = foreverything.get("<@" + message.guild.ownerID + ">");
    let newJoin = args.join(" ");
          if (!newJoin) messagejoin.set("<@" + message.guild.id + ">", "**Hello & Welcome in** :two_hearts: **,I'm the Ms bot** i will help you around! start by typing **!help**");          
          message.channel.send(`**[ :gear: ]** <@${message.author.id}>, :white_check_mark:  Guild **Message Join Updated: ** [ ${newJoin} ]`)            
          .then( setTimeout(() => {messagejoin.set("<@" + message.guild.id + ">", newJoin)}, 1000))      
    
    };
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['setmsgjoin', 'setmessagejoin', 'smj'],
        permLevel: 3
      };
      
      exports.help = {
        name: 'setmessagejoin',
        description: 'Set a Custom greet Message for Your Server',
        aliases: ['setmsgjoin', 'setmessagejoin', 'smj'],        
        usage: '!setmsgjoin',
        permLevel: "Admin"          
      };