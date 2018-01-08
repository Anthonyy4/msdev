const settings = require('../settings.json')
exports.run = function(client, message, args, user) {
    
    message.delete();
    var online = "online"
    setStatus(online) 
        message.author.setPresence("online");
    
  
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ownst'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'ownersetstatus',
    description: 'Changes Bot\'s Status',
    usage: '!st'
  };
  