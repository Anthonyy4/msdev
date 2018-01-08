const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const gamename = new JSONdb('./database/gamename/gamename.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");    
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
let newGame = args.join(" ");
if (!newGame) return message.reply(`**[ :warning: | Empty ] You cannot Set an Empty Game!** \`!setgame starve.io\` or \`!setgame dual-agar.online\``);    
      message.channel.send(`**[ :globe_with_meridians: ]** Guild **New Game Name is Sucessfully Changed To** **[ \`${newGame}\` ]**`)
      .then( setTimeout(() => {gamename.set("<@" + message.guild.id + ">", newGame)}, 1000))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setgamename', 'setGamename'],
  permLevel: 3
};

exports.help = {
  name: 'setgamename',
  description: 'Set a Custom game for your Server!',
  aliases: ['setgamename', 'setGamename'],  
  usage: '!setgamename',
  permLevel: "Admin"    
};    