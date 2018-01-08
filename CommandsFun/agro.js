const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args, guild, member) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    message.channel.send(` 
\`\`\`diff
-AGG ROAST -- 2017  << < < < << < < \`\`\`
Call yourself gods but you're just some losers. Talkin all this smack when you cant put on a show. Say we shouldn't kill your girls but we got girls too. And then there is TaNgrA saying he is all this but deep down he only envies us because he ain't us. Call me a mouse but I'm better than you. Say not to hide but what are you hiding? An 11 yr old kid? Yea I thought so:

\`\`\`md
# by CHU CHU CHUUUUUUU\`\`\`
`).then( (message) => { setTimeout(() => { message.delete(); }, 120000); });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['agro'],
  permLevel: 0
};

exports.help = {
  name: 'agro',
  description: 'a',
  usage: 'a'
};