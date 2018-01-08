const JSONdb = require('simple-json-db');
const msp = new JSONdb('./database/msp/msp.json');
const Discord = require('discord.js')
exports.run = function(client, message, args) { 

  let msplog = client.channels.find('name', `msp-log`)     
  
  var cmd = message.content.split(' ')[0];
  var cmd1 = message.content.split(' ')[1];
  var cmd2 = message.content.split(' ')[2];
  if (!cmd1) return message.reply(`**[ :warning: | Invalid Amount ]** You must **Specify a Numeric Value** of Msp that You want to Give or Send! **[ :credit_card: ]**`)
  if(cmd1 === "0") {
    return message.reply(`**[ :warning: | Invalid Value ]** **You cannot send [ \`0\` ] MSP!!** :credit_card:`);
  };
  if (cmd1.charAt(0) === "-") {
    return message.reply(`**[ :warning: | Invalid Amount ]** You cannot send that kind of Value **[ \`Msp.${cmd1}\` :credit_card: ]**`);
  }
  var cmd3 = message.content.split(' ')[3];
  var user = message.mentions.users.first();
  var cmd2 = user
  // if (!user) return message.reply(`You must Mention a **User** to send MSP!`);
  var userid = args[1]
  if (!user) return message.reply(`**[ :warning: | Invalid User ]** You must use \`@user\` or \`id\`, **to send MSP** to them! **[ :credit_card: ]**`)
  var ownmsp = msp.get("<@!" + message.author.id + ">");
  var othermsp = msp.get(cmd1);
  var author = message.author;
  if (cmd1 > ownmsp) return message.reply(`**[ :warning: | :credit_card: ] Your __Msp__ Capital is Low,** this Transfer cannot be Done **[ \`Msp.${cmd1}\` ]**`);
  if (cmd2 === author) {
    return message.reply(`**[ :warning: | Invalid User ]** You cannot Send or Give **MSP to YourSelf!** :credit_card: `);
  };

   if(cmd2) return message.channel.send(`**[ :outbox_tray: ] MSP Transaction from <@${message.author.id}> <[ \`${cmd1}\` ]> to ${user} [ :inbox_tray: ]**`)
    .then( setTimeout(() => { msp.set(`<@!${message.author.id}>`, Math.floor(msp.get("<@!" + message.author.id + ">") - parseInt(cmd1)));}, 1000))
    .then( setTimeout(() => { msp.set(`<@!${user.id}>`, Math.floor(msp.get("<@!" + user.id + ">") + parseInt(cmd1)));}, 1000));

    if (!cmd3) return message.reply(`**[ :warning: | Unauthorized Access ]**`);

if (cmd3) return message.channel.send(`**[ :outbox_tray: ] MSP Transaction from <@${message.author.id}> <[ \`${cmd1}\` ]> to <@${userid}> [ :inbox_tray: ]**`)
  .then( setTimeout(() => { msp.set(`<@!${message.author.id}>`, Math.floor(msp.get("<@!" + message.author.id + ">") - parseInt(cmd1)));}, 1000))
  .then( setTimeout(() => { msp.set(`<@!${userid}>`, Math.floor(msp.get("<@!" + userid + ">") + parseInt(cmd1)));}, 1000));




  };
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['msp'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'msp send',
        aliases: ['mspsend'],        
        description: 'xremove',
        usage: '!xremove',
        permLevel: "Everyone"
      };
