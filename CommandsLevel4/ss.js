exports.run = function(client, message, args, guild, member) {
  
  setTimeout(function() {
    message.delete();
  }, 6000);

    var cmd2 = args.join(' ');
    var cmd3 = message.content.split(' ')[3];
    let user = message.mentions.users.first();
    if (cmd2.length < 1) return message.reply(`**You must provide <text>/user to use this command example:** \`!slap @ella\``);
    message.reply(`***very very much slapps*** ***${cmd2}***`);
// selfie , notes , screenshot?maybe , botinfo
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ss'],
  permLevel: 4
};

exports.help = {
  name: 'ss',
  description: 'ss someone',
  usage: '!ss',
  permLevel: "Owner"  
};