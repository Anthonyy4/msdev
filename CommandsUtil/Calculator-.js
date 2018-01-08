const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = (client, message, args) => {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  let argss = args.join(" ");
  if (!argss) return message.reply(`**[ :warning: | Invalid ] No Logical Numbers!**`);  
  let numArray = args.map(n=> parseInt(n));
        let total = numArray.reduce( (p, c) => p-c);
        message.channel.send(`**Solution : [ \`${total}\` ]**`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['calc-'],
  permLevel: 0
};

exports.help = {
  name: 'calcualtor-',
  aliases: ['calc-'],  
  description: 'calc- x x',
  usage: '!calc-`',
  permLevel: "Everyone"
};