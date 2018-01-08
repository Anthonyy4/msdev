const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = (client, message, args) => {
    var msgvalue = ''
      + (":hourglass_flowing_sand:`I` Have Been **Up/Online** For : " + (Math.round(client.uptime / (1000 * 60 * 60))) + " **Hours**, " + (Math.round(client.uptime / (1000 * 60)) % 60) + " **Minutes**, and " + (Math.round(client.uptime / 1000) % 60) + " **seconds**");
      + '';
      message.reply(msgvalue).catch(console.log);
};

var hours = [
    ':hourglass:',
    ':hourglass_flowing_sand:'
];  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['up'],
  permLevel: 3
};

exports.help = {
  name: 'uptime',
  description: 'Check Bot\'s Uptime',
  aliases: ['up'],  
  usage: '!up',
  permLevel: "Admin"  
};