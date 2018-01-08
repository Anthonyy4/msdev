const Discord = require('discord.js');
const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');

// Developing Mode
const devmode = new JSONdb('./database/devmode/devmode.json');

// Log the user , who used .Gift
const userlog = new JSONdb('./datagift/userlog/userlog.json');
//The specialdate 25th
const specialdate = new JSONdb('./datagift/dates/specialdate');
// Who won and what he won , will be used in .Gifts
const winlog = new JSONdb('./datagift/winlog/winlog.json');
//Loging all items , including rare ones
const itemlog = new JSONdb('./datagift/itemlog/itemlog.json');

exports.run = function(client, message, args) {




    // Things we need
    var cmd = message.content.split(' ')[0];
    var cmd1 = message.content.split(' ')[1];
    var cmd2 = message.content.split(' ')[2];
    var cmd3 = message.content.split(' ')[3];
    var cmd11 = message.content.split(' ')[11];
    var user = message.mentions.users.first();
    var author = message.author;
    var input = message.content.toUpperCase();  


    var date = new Date();
    var m = date.getDate();
    var n = date.getHours() + ":" + date.getMinutes();
    
    var usergift = winlog.get(`<@!${author.id}>`);

    if(!usergift) {
        return message.channel.send(`${author} **You didn't open your Gift YET!** to open your gift, **Type** \`!gift\``);
    } else {
        
        const embed = new Discord.RichEmbed()
        .setColor(0xB360B8)
        .setDescription(`\`\`\`${usergift}\`\`\``)
            return message.channel.send(`**[ :gift: ]** ${author}, Your Opened **Gift** is \`${usergift}\``, {embed});
    }
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gifts'],
  permLevel: 0
};

exports.help = {
  name: 'gifts',
  description: 'Gift something to someone',
  aliases: ['gifts'],  
  permLevel: "Everyone",
  usage: '!gifts'
};  