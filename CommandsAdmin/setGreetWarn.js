const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const greetwarn = new JSONdb('./database/greetwarn/greetwarn.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  var cmd1 = message.content.split(' ')[1];
  
  if(!cmd1) message.channel.send(`**[ :warning: ]** ${message.author}, **Invalid Confirm** | You must do \`!setgreet on\` or \`!setgreet off\` `);

if (cmd1 === "off") {
  let greetwarns = args.join(" ");
  if (!greetwarns) return message.reply(`**[ :warning: | Confrim ] You must Confrim this Action! \`!setgreetno No\` **`);    
  return message.channel.send(`**[ :globe_with_meridians: ]** Guild **Greeting Joiners & Warn is Sucessfully Changed To** **[ \`${greetwarns}\` ]**`)
      .then( setTimeout(() => { greetwarn.delete("<@" + message.guild.id + ">", greetwarns)}, 1000))
}

if (cmd1 === "on") {
let greetwarns = args.join(" ");
  if (!greetwarns) return message.reply(`**[ :warning: | Confrim ] You must Confrim this Action! \`!setgreet Yes\` **`);    
   return message.channel.send(`**[ :globe_with_meridians: ]** Guild **Greeting Joiners & Warn is Sucessfully Changed To** **[ \`${greetwarns}\` ]**`)
      .then( setTimeout(() => { greetwarn.set("<@" + message.guild.id + ">", greetwarns)}, 1000))
};
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setgreet', 'setwarn'],
  permLevel: 3
};

exports.help = {
  name: 'set greet & warn off/on',
  description: 'Choose if you want that MsBot to send Greet & Warn Messages [ON]',
  aliases: ['setgreet yes', 'setwarn yes', 'setgreet'],  
  usage: '!setgreet',
  permLevel: "Admin"    
};    