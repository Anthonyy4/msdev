const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  message.delete();
  var argresult = args.join(' ');
   if(!argresult) argresult = 'online';
        client.user.setStatus(argresult).then(message.channel.send(`**[ :globe_with_meridians: ]** Client **.setStatus Sucessfully Changed To** **[ \`${argresult}\` ]**`));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['st'],
  permLevel: 4
};

exports.help = {
  name: 'setstatus',
  description: 'Changes Bot\'s Status',
  usage: '!st'
};
