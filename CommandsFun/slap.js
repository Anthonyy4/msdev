const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args, guild, member) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  setTimeout(function() {
    message.delete();
  }, 6000);
  

    var cmd2 = args.join(' ');
    var cmd3 = message.content.split(' ')[3];
    let user = message.mentions.users.first();
    if (cmd2.length < 1) return message.reply(`**You must provide <text>/user to use this command example:** \`!slap @ella\``);
    message.reply(`**You ${slap[Math.floor(Math.random() * slap.length)]}** ***${cmd2}***`);

};


var slap = [
    `failed to slap`,
    `have successfully *slapped*`,
    `failed to slap`,
    `have successfully *slapped*`,
    `failed to slap`,
    `have successfully *slapped*`,
    `failed to slap`,
    `have successfully *slapped*`,
    `failed to slap`,
    `have successfully *slapped*`
];


exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['slap'],
  permLevel: 0
};

exports.help = {
  name: 'slap',
  description: 'slap someone',
  aliases: ['slap'],  
  usage: '!slap',
  permLevel: "Everyone"            
};