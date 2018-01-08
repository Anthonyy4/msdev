const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  setTimeout(function() {
    message.delete();
  }, 3000);

  let user = message.mentions.users.first();
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
   if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.reply('**[** :warning: **]** **I do not have the correct permissions** `[ MANAGE_MESSAGES ]`.').catch(console.error);
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages)).then(message.channel.send(` ${message.author}**,** **Deleted [ \`${messagecount}\` ] Messages ${thumbs[Math.floor(Math.random() * thumbs.length)]} **`).then( (message) => { setTimeout(() => { message.delete(); }, 3000); }) );
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rem'],
  permLevel: 2
};

exports.help = {
  name: 'clean',
  aliases: ['rem'],  
  description: 'msg X remove',
  usage: 'clean/rem <number>',
  permLevel: ["Admin" + " or " + "Staff"]               
};