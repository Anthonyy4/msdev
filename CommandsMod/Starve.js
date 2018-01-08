const Discord = require('discord.js');
const settings = require('../settings.json');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const eventsroom = new JSONdb('./database/eventsroom/eventsroom.json');
const tag = new JSONdb('./database/tag/tag.json');
const tagprivate = new JSONdb('./database/tagprivate/tagprivate.json');
const gamename = new JSONdb('./database/gamename/gamename.json');
const game = new JSONdb('./database/game/game.json');
exports.run = function(client, message, args, guild, member) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  setTimeout(function() {
    message.delete();
  }, 6000);


  let tagid = tag.get("<@" + message.guild.id + ">")
  let privatetagid = tagprivate.get("<@" + message.guild.id + ">")
  
  let tagcheck = tag.has("<@" + message.guild.id + ">");
  if (!tagcheck) tagid = "MS'"
    let tagprivatecheck = tagprivate.has("<@" + message.guild.id + ">");
  if (!tagprivatecheck) privatetagid = "x0000"
    let gamenameid = gamename.has("<@" + message.guild.id + ">");
  if (!gamenameid) return message.reply(`**[ :warning: | Invalid Game ]** **You must set a Game first** \`!setgamename Starve.io\``);
  let eventsrooms = eventsroom.get("<@" + message.guild.id + ">");  
    let server = args.join(' ')[8];
    var cmd = message.content.split(' ')[0];
    var cmd1 = message.content.split(' ')[1];
    var cmd2 = message.content.split(' ')[2];
    var cmd3 = message.content.split(' ')[3];
    let events = message.guild.channels.find('name', `${eventsrooms}`);
    if (!events) return message.reply(`**[ :warning: ]** \`I\` **Cannot find an events channel!**`)      
    if (!cmd1) return message.reply(`You should define **the Server** that you want to be **played**!`);
    if (!cmd2) return message.reply(`There should be At least **2 Words Subject**\n example: **!game Eu1 __Kill__ __Everyone__ **`)      
    const embed = new Discord.RichEmbed()
    .setColor(0x235335)
    .setTimestamp()
    .setDescription(`Game: **Starve.io**\n\nServer: **${cmd1}**\n\nSubject: **${cmd2} ${cmd3}**\n\nTag: **${tagid}**\n\nEditor: **${message.author.username}#${message.author.discriminator}**`)

        client.channels.get(events.id).send(`**[ Starve.io ]** Join New Server! **[\`"${cmd1}"\` - http://starve.io/ ]** **[ ${cmd1} - Roubaix ]**`, {
        embed
        }).then(message.channel.send(`**[ :satellite: | Starve.io ]** **<@${message.author.id}>** ${thumbs[Math.floor(Math.random() * thumbs.length)]} **Server Updated!** **[**\`${cmd1}\` **http://starve.io/** **]** **[EU-Roubaix]**`)).then(setTimeout(() => { game.set("<@" + message.guild.id + ">", `${cmd1}`) },3000));

};
var thumbs = [
    ':thumbsup::skin-tone-4:',
    ':ok_hand::skin-tone-4:',
    ':ok_hand::skin-tone-2:',
    ':thumbsup::skin-tone-2:',
    ':thumbsup::skin-tone-2:',
    ':ok_hand::skin-tone-2:',
    ':thumbsup::skin-tone-5:',
    ':ok_hand::skin-tone-5: '
  ];
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ge'],
  permLevel: 2
};

exports.help = {
  name: 'starve',
  aliases: ['ge'],  
  description: 'create Starve.io Game',
  usage: '!game <server> <Subject>  ',
  permLevel: ["Admin" + " or " + "Staff"]               
};