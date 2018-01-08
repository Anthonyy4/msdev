const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const Discord = require('discord.js');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
    if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});  
    setTimeout(function() {
      message.delete();
    }, 6000);
  
    let reason = args.join(' ');
    let user = message.mentions.users.first();
     if (!reason) return message.reply(`${question}`).catch(console.error);      
      const embed = new Discord.RichEmbed()
    .setColor(0x837238)
    .setDescription(`**User Playing Game :** \`${message.author.username}\``)
    .addField(`\`Question:\``, `**${reason}**`)
    .addField(`**Anwser:**`, `**${fortunes[Math.floor(Math.random() * fortunes.length)]}\**`)
    .setFooter(`_---8Ball Game---_`)
  
    message.channel.send({embed});
};

var question = '**You must Supply a __Question__ to the Game!**'
  
var fortunes = [   
        "It is certain",     
        "It is decidedly so No",      
        "Without a doubt",        
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ];

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['8b'],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Ask question',
  aliases: ['8b','play'],  
  usage: '!8b',
  permLevel: "Everyone"            
};