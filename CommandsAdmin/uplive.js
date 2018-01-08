const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = (client, message, args) => {
    message.delete();
      message.reply(`**[ :chart_with_upwards_trend:  ]** **Live UpTime :** **[** \`${(Math.round(client.uptime / (1000 * 60 * 60))) + ":" + (Math.round(client.uptime / (1000 * 60)) % 60) + ":" + (Math.round(client.uptime / 1000) % 60)}\` **]**`).then( (message) => { setInterval(() => { message.edit(`**[ :chart_with_upwards_trend:  ]** **Live UpTime :** **[** \`${(Math.round(client.uptime / (1000 * 60 * 60))) + ":" + (Math.round(client.uptime / (1000 * 60)) % 60) + ":" + (Math.round(client.uptime / 1000) % 60)}\` **]**`) }, 1000 )});
};

var hours = [
    ':hourglass:',
    ':hourglass_flowing_sand:'
];

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['upl'],
  permLevel: 3
};

exports.help = {
  name: 'uptimelive',
  description: 'Check Live Uptime for Bot',
  aliases: ['upl'],  
  usage: '!up',
  permLevel: "Admin"    
};