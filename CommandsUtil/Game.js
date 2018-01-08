const JSONdb = require('simple-json-db');
const gamename = new JSONdb('./database/gamename/gamename.json');
const game = new JSONdb('./database/game/game.json');
const devmode = new JSONdb('./database/devmode/devmode.json');
const Discord = require('discord.js')
exports.run = function(client, message, args, guild, member) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
let gameid = game.get("<@" + message.guild.id + ">");
let gamenameid = gamename.get("<@" + message.guild.id + ">");

let gamecheck = game.has("<@" + message.guild.id + ">");
let gamenamecheck = gamename.has("<@" + message.guild.id + ">");

if (!gamenamecheck) return message.reply(`**[ :warning: | Invalid GameName ]** **Server Doesn't have a Game!\n Type:** \`!setgamename starve.io\` **or** \`!setgamename dual-agar.online\``);
if (!gamecheck) return message.reply(`**[ :warning: | Invalid Game ]** **Make sure you Update the Game!\n Type:** \`!starve Eu1 Kill Everyone\` **or** \`!dual Eup0 Kill Everyone\``);

  const embed = new Discord.RichEmbed()
  .setTitle("Game Code")
  .setDescription(`\`\`\`${gameid}\`\`\``)
  message.channel.send(`**[ ${gamesss[Math.floor(Math.random() * gamesss.length)]} | Game ] | <@${message.author.id}>, Current ${gamenameid} Game is [ \`"${gameid}"\` - http://${gamenameid}/ ]**`, {embed});
};

var gamesss = [
  ':soccer:',
 ':basketball:',
  ':football:',
   ':baseball:',
    ':tennis:',
     ':volleyball:',
      ':rugby_football:',
       ':8ball:',
        ':golf:',
         ':snowboarder::skin-tone-3:',
          ':ski:',
           ':cricket:',
            ':swimmer::skin-tone-3:',
             ':lifter::skin-tone-3:',
              ':basketball_player::skin-tone-3:',
               ':fishing_pole_and_fish:',
                ':ping_pong:',
                 ':badminton:'
];
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['game', 'p', 'g'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'game',
        aliases: ['game', 'p', 'g'],        
        description: 'game',
        usage: '!game',
        permLevel: "Everyone"
      };
