const Discord = require('discord.js');
const ytdl = require('ytdl-core');
exports.run = function(client, message, args, guild, member) {

  const channel = message.member.voiceChannel;
  
      channel.join()
      .then(connection => console.log('Connected!'))
      .catch(console.error);

};
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['join'],
        permLevel: 4
      };
      
      exports.help = {
        name: 'join',
        description: 'join',
        usage: 'join'
      };