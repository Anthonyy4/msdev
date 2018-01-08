exports.run = function(client, message, args, guild, member) {
    
    message.delete();
    setInterval(fast, 500);
    var argsr = args.join(" ");
    function fast() {
        message.channel.send(`${argsr}`).then(setTimeout(() => { process.exit(); }, 4000));
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['int'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'setint',
    description: 'setint',
    usage: 'setint'
  };