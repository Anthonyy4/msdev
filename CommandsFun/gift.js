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

    // Random items
    var gifts = [
        '100 GP',
        '200 GP',
        '300 GP',
        '400 GP',
        '500 GP',
        '600 GP',
        '700 GP',
        '1 Gills',
        '2 Gills',
        '5 Gills',
        'Rainbow Color'
    ];

    var interval = [
        ':rosette:',  
        ':zap:'
    ]

    var thegift = gifts[Math.floor(Math.random() * gifts.length)]

    var date = new Date();
    var m = date.getDate();
    var n = date.getHours() + ":" + date.getMinutes();


    if(m === 25) {
        //   Check if the user , used .gift command before
     var checkuser = userlog.has(`<@!${author.id}>`);
     if (checkuser) return message.reply(`**You already opened your Gift!! Wait until next year to Open another :gift:**`);


        message.channel.send(`**[ :santa::skin-tone-3: ]** ${author} **Ho Ho Ho!!! You Received a Gift from Santa!** *opening gift..*`)
        .then((message) => { setTimeout(() => { message.edit(` **[ ${interval[Math.floor(Math.random() * interval.length)]} ]**${author} **And your gift is** \`${thegift}\`  **!!! :tada: ** `) },2500 ) })
        .then(client.channels.get("388867085821935616").send(`**[\`+\`] User [\` ${message.author.id} \`] | \`${message.author.username}\` <@${message.author.id}> Opened a Gift!** at **${message.guild.name}** => \`${message.channel.name} ${message.channel.id}\` **|** <#${message.channel.id}> `))
        .then(client.channels.get("388867033204391936").send(`**[ :gift: ] \`${message.author.username}\` | \`${message.author.id}\` <@${message.author.id}> Won \`${thegift}\`** `))
        .then((message) => { setTimeout(() => { userlog.set(`<@!${author.id}>`, `You opened Your gift!`) },2600) })          
        .then((message) => { setTimeout(() => { winlog.set(`<@!${author.id}>`, `${thegift}` )},2600) })
    } else {
        return message.channel.send(`**[ :incoming_envelope: ]** ${author}, You will be able to Open your **:gift:[Gift]** at \`25th December!\``);
    }
    



}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gift'],
  permLevel: 0
};

exports.help = {
  name: 'gift',
  description: 'Gift something to someone',
  aliases: ['gift'],  
  permLevel: "Everyone",
  usage: '!gift'
};  