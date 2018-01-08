const Discord = require('discord.js');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args, guild, member) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var d = new Date();

    message.reply(`**Current Date :cyclone: ${days[d.getDay()]} ${monthNames[d.getMonth()]} ${d.getDate()} ${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} (\`${d.getHours()}:${d.getMinutes()}\` \`GMT${d.getTimezoneOffset()}\`)**`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['date'],
  permLevel: 0
};

exports.help = {
  name: 'date',
  description: 'adate',
  aliases: ['date'],  
  usage: 'datea',
  permLevel: "Everyone"            
};