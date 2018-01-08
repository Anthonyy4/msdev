const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = (client, message, args, guild) => {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  let cmd1 = message.content.split(" ")[1];

  
  if (!cmd1) return message.reply(`**[ :warning: | Invalid Command ] You must Provide Details of What you are Looking!** \`!count members/rooms/roles/all\` `).then((message) => { setTimeout(() => { message.delete(); },15000) })
  if (cmd1 === "members") {
    return message.reply(` **[ :bar_chart: ]** **There are** \`${message.guild.memberCount}\` **members in** [ \`${message.guild.name}\` ]\` **server!** `)
  };
  if (cmd1 === "rooms") {
    message.delete();
    return message.reply(` **[ :bar_chart: ]** **There are** \`${message.guild.channels.size}\` **Rooms in** [ \`${message.guild.name}\` ] **server!** `).then((message) => { setTimeout(() => { message.delete(); },15000) })
  };
  if (cmd1 === "roles") {
    message.delete();
    return message.reply(` **[ :bar_chart: ]** **There are** \`${message.guild.roles.size}\` **Roles in** [ \`${message.guild.name}\` ] **server!** `).then((message) => { setTimeout(() => { message.delete(); },15000) })
  };
  if (cmd1 === "all") {
    message.delete();
    return message.reply(`**${message.guild.name} Statics!**
**[ :bar_chart: ] There are \`${message.guild.memberCount}\` members in [ \`${message.guild.name}\` ] server! 
[ :bar_chart: ] There are \`${message.guild.roles.size}\` Roles in [ \`${message.guild.name}\` ] server! 
[ :bar_chart: ] There are \`${message.guild.channels.size}\` Rooms in [ \`${message.guild.name}\` ] server!**`).then((message) => { setTimeout(() => { message.delete(); },15000) })
};
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['c'],
  permLevel: 0
};

exports.help = {
  name: 'count',
  aliases: ['c'],  
  description: 'Member Count',
  usage: '!c',
  permLevel: "Everyone"
};