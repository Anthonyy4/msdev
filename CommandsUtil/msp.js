  const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const msp = new JSONdb('./database/msp/msp.json');
const Discord = require('discord.js')
const ignore = new JSONdb('./database/ignore/ignore.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  

let ignored = ignore.has("<@" + message.guild.id + ">");
let ignoring = ignore.get("<@" + message.guild.id + ">");
if (ignored) return message.reply(`**[ Access Denied :information_source: ]** **-** **[ \`${ignoring}\` ] Is Globally Ignored From [ \`${message.guild.name}\` ]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});

var cmd = message.content.split(' ')[0];
var cmd1 = message.content.split(' ')[1];
var cmd2 = message.content.split(' ')[2];
var cmd3 = message.content.split(' ')[3];
var user = message.mentions.users.first();
var ownmsp = msp.get("<@!" + message.author.id + ">");
var othermsp = msp.get(cmd1);

var pmp0 = message.content.split(' ')[0];
var pmp1 = message.content.split(' ')[1];
var pmp2 = message.content.split(' ')[2];
var pmp3 = message.content.split(' ')[3];
var pmp4 = message.content.split(' ')[4];


if (pmp1 === "send") {
  if (!pmp2) return message.reply(`**[ :warning: | Invalid Amount ]** You must **Specify a Numeric Value** of Msp that You want to Give or Send! **[ :credit_card: ]**`)
  if (pmp2 === pmp3) return message.reply(`**[ :warning: | Invalid User ]** You must use \`@user\` or \`id\`, **to send MSP** to them! **[ :credit_card: ]**`);
  if(pmp2 === "0") {
    return message.reply(`**[ :warning: | Invalid Value ]** **You cannot send [ \`0\` ] MSP!!** :credit_card:`);
  };
  if (pmp2.charAt(0) === "-") {
    return message.reply(`**[ :warning: | Invalid Amount ]** You cannot send that kind of Value **[ \`Msp.${pmp2}\` :credit_card: ]**`);
  }
  var pmp4 = message.content.split(' ')[3];
  var user = message.mentions.users.first();
  var pmp3 = user
  // if (!user) return message.reply(`You must Mention a **User** to send MSP!`);
  var userid = args[2]
  if (!user) return message.reply(`**[ :warning: | Invalid User ]** You must use \`@user\` or \`id\`, **to send MSP** to them! **[ :credit_card: ]**`)
  var ownmsp = msp.get("<@!" + message.author.id + ">");
  var othermsp = msp.get(pmp2);
  var author = message.author;
  if (pmp2 > ownmsp) return message.reply(`**[ :warning: | :credit_card: ] Your __Msp__ Capital is Low,** this Transfer cannot be Done **[ \`Msp.${pmp2}\` ]**`);
  if (pmp3 === author) {
    return message.reply(`**[ :warning: | Invalid User ]** You cannot Send or Give **MSP to YourSelf!** :credit_card: `);
  };

   if(pmp2) return message.channel.send(`**[ :outbox_tray: ] MSP Transaction from <@${message.author.id}> <[ \`${pmp2}\` ]> to ${user} [ :inbox_tray: ]**`)
    .then( setTimeout(() => { msp.set(`<@!${message.author.id}>`, Math.floor(msp.get("<@!" + message.author.id + ">") - parseInt(pmp2)));}, 1000))
    .then( setTimeout(() => { msp.set(`<@!${user.id}>`, Math.floor(msp.get("<@!" + user.id + ">") + parseInt(pmp2)));}, 1000));

    if (!pmp4) return message.reply(`**[ :warning: | Unauthorized Access ]**`);

if (userid) return message.channel.send(`**[ :outbox_tray: ] MSP Transaction from <@${message.author.id}> <[ \`${pmp2}\` ]> to <@${userid}> [ :inbox_tray: ]**`)
  .then( setTimeout(() => { msp.set(`<@!${message.author.id}>`, Math.floor(msp.get("<@!" + message.author.id + ">") - parseInt(pmp2)));}, 1000))
  .then( setTimeout(() => { msp.set(`<@!${userid}>`, Math.floor(msp.get("<@!" + userid + ">") + parseInt(pmp2)));}, 1000));

} else {

if (!ownmsp) return message.reply(`**You should agree with bot terms by typing ** **->** \`!mspsync\` `);
if (!user) return message.channel.send(`<@${message.author.id}>, **Your Mspbox is [ \`${ownmsp}\` ] Msp** :credit_card:`);
  
  var userbox = msp.get("<@!" + user.id  + ">");
  var userboxmspcheck = msp.has("<@!" + user.id + ">"); 
  if (!userboxmspcheck) userbox = "0"  
if (user) return message.channel.send(`${user}**'s Mspbox is [ \`${userbox}\` ] Msp** :credit_card:`);

const embed = new Discord.RichEmbed()
    .setColor(0x235335)
    .setTimestamp()
    .setDescription(`<@${message.author.id}>, **Your Msp Box is ${ownmsp} Msp!** :credit_card:`)
    .setFooter(`Ms - MSP`)
        
      return  message.channel.send({embed});
}
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['msp'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'msp',
    aliases: ['msp'],    
    description: 'check your msp',
    usage: '!msp',
    permLevel: "Everyone"
  };