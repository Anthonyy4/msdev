const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = (client, message) => {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  setTimeout(function() {
    message.delete();
  }, 6000);

  message.channel.send('Ping?')
    .then(msg => {
      msg.edit(`**Ping!** (took: \`[ ${msg.createdTimestamp - message.createdTimestamp}ms ]\` ) ${hands[Math.floor(Math.random() * hands.length)]} `);
    });
};

var hands = [
  ':call_me::skin-tone-3:',
  ':fingers_crossed::skin-tone-3:',
  ':raised_back_of_hand::skin-tone-3:'
];
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ping'],
  permLevel: 0
};

exports.help = {
  name: 'check',
  description: 'Ping',
  aliases: ['ping'],  
  usage: '!ping',
  permLevel: "Everyone"            
};
