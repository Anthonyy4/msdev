const Discord = require('discord.js');
const settings = require('../settings.json');
const token = require('../settings.json').token;
exports.run = (client, message, args, guild) => {
  
    message.channel.send(`**[ :arrows_counterclockwise:  ]** **Reconnecting..**`).then( (message) => { setTimeout(() => { message.edit(`**[ :arrows_clockwise: ]** **Reconnecting...**`); }, 200); }).then(setTimeout(() => { client.destroy().then(() => client.login(settings.token)); }, 2000));
  };
  exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['reconnect','rc'],
  permLevel: 4
};

exports.help = {
  name: 'destroy',
  description: 'Access: Creator',
  usage: '!rc'
};
//.then(setTimeout(() => { client.destroy().then(() => client.login(settings.token)); }, 2000))
//.then( (message) => { setTimeout(() => { message.edit(`**[ :arrow_right_hook:   ]** **Reconnecting...**`); }, 500); });