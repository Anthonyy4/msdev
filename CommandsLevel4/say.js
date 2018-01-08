const settings = require("../settings.json");
exports.run = (client, message, args) => {
  
    message.delete();
    message.channel.send(args.join(" "));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say'],
  permLevel: 4
};

exports.help = {
  name: 'say',
  aliases: ['say'],        
  description: 'Say something with Bot',
  usage: '!say',
  permLevel: "Owner"                  
};