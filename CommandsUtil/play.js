const Discord = require('discord.js');
const JSONdb = require('simple-json-db');
const YTDL = require('ytdl-core');
exports.run = function(client, args, guild, member, message) {
    
    var servers = {};

    function play(connection, message) {
        var server = servers[message.guild.id];

        server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

        server.queue.shift();

        server.dispatcher.on("end", function() {
            if (server.queue[0]) play(connection, message);
            else connection.disconnect();
        });
    }
    
        if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        };
    
        var server = servers[message.guild.id];

        server.queue.push(args[1]);
    
        if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
            play(connection, message)
        });
    

    };
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['play'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'play',
        description: 'play',
        usage: 'play'
      };
