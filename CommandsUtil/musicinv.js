const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = (client, message, args) => {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
    message.author.send(`Hello **${message.author.username}** :smile:
    
    :link:  To **Invite** The **Current Music Bot of MS Developers** Follow this**Link**: 
    \`\`\`fix
    https://goo.gl/mjLGXS\`\`\``)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['musicinv'],
  permLevel: 0
};

exports.help = {
  name: 'musicinv',
  aliases: ['musicinv'],  
  description: 'invite music bot',
  usage: '!musicinv',
  permLevel: "Everyone"
};