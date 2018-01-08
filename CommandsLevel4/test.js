const Discord = require('discord.js');
var timeout = require('easy-timeout').Timeout;
var interval = require('easy-timeout').Interval;
exports.run = function(client, message, args, guild, member) {

  var args = args.join();

  interval(`args`)
  .then(function() {
    message.channel.send(`test 10s`);
  })

};
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['test'],
        permLevel: 4
      };
      
      exports.help = {
        name: 'test',
        description: 'test',
        usage: 'test',
        permLevel: "Owner"        
      };