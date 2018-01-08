const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = (client, message, args) => {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
    message.author.send(`Hello **${message.author.username}** :smile:
    
    :link:  To **Invite** The **Ms-Py(python) Bot of MS Developers** Follow this**Link**: 
    **[https://goo.gl/92xhsB]**`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['python','pythonbot'],
  permLevel: 0
};

exports.help = {
  name: 'mspy',
  aliases: ['python','pythonbot'],  
  description: 'invite music bot',
  usage: '!python',
  permLevel: "Everyone"
};