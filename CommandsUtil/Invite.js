const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = (client, message, args) => {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    message.channel.send(` **[ \`🔮\` ] |** **Hello ${message.author.username}** :smile:
    
:link:  To **Invite** Me To Your Server Use This **Link**: 
**•** **[https://goo.gl/77TvXz]**

**•** **Also If you need** any Help about **[ ${client.user} ]**, You can join **Bot's Server** \`->\` **[ https://discord.gg/gBZPU3H ]!**

    
    `)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['inv'],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  aliases: ['inv'],  
  description: 'invite bot!',
  usage: '!inv',
  permLevel: "Everyone"
};