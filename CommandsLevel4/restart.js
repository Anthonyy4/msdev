const JSONdb = require('simple-json-db');
exports.run = function(client, message, args, guild) {
  message.delete();  
    let globallog = client.channels.find('name', `rlogging`);    
    if (!globallog) return;
    client.channels.get(globallog.id).send(`**[ :arrows_counterclockwise: | Action Restart ] at** \`${new Date()}\``);        
    message.channel.send(`**[ :construction:  ]** **Restarting...** :arrows_counterclockwise:`).then( (message) => { setTimeout(() => { message.edit(`**Restarted successfully** **[ :recycle:  ]**`); }, 500); }).then(setTimeout(() => { process.exit(); }, 2000)).then( (message) => { setTimeout(() => { message.delete(); }, 120000); });    
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 4
};

exports.help = {
  name: 'restart',
  aliases: ['r'],  
  description: 'Restarts the Bot!',
  permLevel: "Owner",  
  usage: '!r'
};