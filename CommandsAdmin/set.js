const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const foreverything = new JSONdb('./database/foreverything/foreverything.json');
const devmode = new JSONdb('./database/devmode/devmode.json');
const Discord = require('discord.js')
const tag = new JSONdb('./database/tag/tag.json');
const rules = new JSONdb('./database/rules/rules.json');
const msp = new JSONdb('./database/msp/msp.json');
const msinum = new JSONdb('./database/msinum/msinum.json');
const messagejoin = new JSONdb('./database/messagejoin/messagejoin.json');
const newsrole = new JSONdb('./database/newsrole/newsrole.json');
const memverified = new JSONdb('./database/memverified/memverified.json');
const log = new JSONdb('./database/log/log.json');
const logv = new JSONdb('./database/logv/logv.json');
const jail = new JSONdb('./database/jail/jail.json');
const ignore = new JSONdb('./database/ignore/ignore.json');
const eventsroom = new JSONdb('./database/eventsroom/eventsroom.json');
const autojoin = new JSONdb('./database/autojoin/autojoin.json');
const staff = new JSONdb('./database/staff/staff.json');
const admin = new JSONdb('./database/admin/admin.json');
const warn = new JSONdb('./database/warn/warn.json');
const tagprivate = new JSONdb('./database/tagprivate/tagprivate.json');
const greeting = new JSONdb('./database/greeting/greeting.json');
const priv = new JSONdb('./database/priv/priv.json');
const news = new JSONdb('./database/news/news.json');
const mute = new JSONdb('./database/mute/mute.json');
const serverMSP = new JSONdb('./database/serverMSP/serverMSP.json');
const greetwarn = new JSONdb('./database/greetwarn/greetwarn.json');
const mslog = new JSONdb('./database/mslog/mslog.json');
const mslogv = new JSONdb('./database/mslogv/mslogv.json');
const gamename = new JSONdb('./database/gamename/gamename.json');
const game = new JSONdb('./database/game/game.json');
exports.run = function(client, message, args, guild, member) {  
  // let adminperm = admin.get("<@!" + message.author.id + ">");
  // if (!adminperm) return message.reply(`You dont have the correct perm`);

  
  let tagid = tag.get("<@" + message.guild.id + ">");
  var tagcheck = tag.has("<@" + message.guild.id + ">"); 
  if (!tagcheck) tagid = "Not Set"  

  let rulesid = rules.get("<@" + message.guild.id + ">");
  var rulescheck = rules.has("<@" + message.guild.id + ">"); 
  if (!rulescheck) rulesid = "Not Set"  

  let mspid = msp.get("<@" + message.guild.id + ">");
  var mspcheck = msp.has("<@" + message.guild.id + ">"); 
  if (!mspcheck) mspid = "0"  
  
  let msinumid = msinum.get("<@" + message.guild.id + ">");
  var msinumcheck = msinum.has("<@" + message.guild.id + ">"); 
  if (!msinumcheck) msinumid = "No"  
  
  let newsroleid = newsrole.get("<@" + message.guild.id + ">");
  var newsrolecheck = newsrole.has("<@" + message.guild.id + ">"); 
  if (!newsrolecheck) newsroleid = "Not Set"  
  
  let memverifiedid = memverified.get("<@" + message.guild.id + ">");
  var verifiedcheck = memverified.has("<@" + message.guild.id + ">"); 
  if (!verifiedcheck) memverifiedid = "Not Set"  
  
  let logid = log.get("<@" + message.guild.id + ">");
  var logcheck = log.has("<@" + message.guild.id + ">"); 
  if (!logcheck) logid = "Not Set"  
  
  let logvid = logv.get("<@" + message.guild.id + ">");
  var logvcheck = logv.has("<@" + message.guild.id + ">"); 
  if (!logvcheck) logvid = "Not Set"  
  
  let jailid = jail.get("<@" + message.guild.id + ">");
  var jailcheck = jail.has("<@" + message.guild.id + ">"); 
  if (!jailcheck) jailid = "Not Set"  
  
  let ignoreid = ignore.get("<@" + message.guild.id + ">");
  var ignorecheck = ignore.has("<@" + message.guild.id + ">"); 
  if (!ignorecheck) ignoreid = "Not Set"  
  
  let eventsid = eventsroom.get("<@" + message.guild.id + ">");
  var eventscheck = eventsroom.has("<@" + message.guild.id + ">"); 
  if (!eventscheck) eventsid = "Not Set"  
  
  let devmodeid = devmode.get("<@" + message.guild.id + ">");
  var devmodecheck = devmode.has("<@" + message.guild.id + ">"); 
  if (devmodecheck) devmodeid = "**[ :ticket: ]** Developer Mode **[ \`ON\` ]**"
  if (!devmodecheck) devmodeid = "**[ :tickets: ]** Developer Mode **[ \`OFF\` ]**"

    let devmodeidd = devmode.get("<@" + message.guild.id + ">");
    var devmodecheck = devmode.has("<@" + message.guild.id + ">"); 
    if (!devmodecheck) devmodeidd = "OFF" 
  
    
    let greetwarns = greetwarn.get("<@" + message.guild.id + ">");
    var greetwarncheck = greetwarn.has("<@" + message.guild.id + ">"); 
    if (greetwarncheck) greetwarns = "**[ :bell: ]** Greet Joiners & Warned **[ \`Yes\` ]**"
    if (!greetwarncheck) greetwarns = "**[ :no_bell: ]** Greet Joiners & Warned **[ \`No\` ]**"
  

  let staffid = staff.get("<@" + message.guild.id + ">");
  var staffcheck = staff.has("<@" + message.guild.id + ">"); 
  if (!staffcheck) staffid = "Not Set"  
  
  let adminid = admin.get("<@" + message.guild.id + ">");
  var admincheck = admin.has("<@" + message.guild.id + ">"); 
  if (!admincheck) adminid = "Not Set"  
  
  let warnid = warn.get("<@" + message.guild.id + ">");
  var warncheck = warn.has("<@" + message.guild.id + ">"); 
  if (!warncheck) warnid = "Not Set"  
  
  let muteid = mute.get("<@" + message.guild.id + ">");
  var mutecheck = mute.has("<@" + message.guild.id + ">"); 
  if (!mutecheck) muteid = "Not Set"    

  let autojoinid = autojoin.get("<@" + message.guild.id + ">");
  var autojoincheck = autojoin.has("<@" + message.guild.id + ">"); 
  if (!autojoincheck) autojoinid = "Not Set"  
  
  let privatetagid = tagprivate.get("<@" + message.guild.id + ">");
  var privatetagcheck = tagprivate.has("<@" + message.guild.id + ">"); 
  if (!privatetagcheck) privatetagid = "Not Set"  
  
  let greetingid = greeting.get("<@" + message.guild.id + ">");
  var greetcheck = greeting.has("<@" + message.guild.id + ">"); 
  if (!greetcheck) greetingid = "Not Set"  
  
  let newsid = news.get("<@" + message.guild.id + ">");
  var newscheck = news.has("<@" + message.guild.id + ">"); 
  if (!newscheck) newsid = "Not Set"  
  
  let privid = priv.get("<@" + message.guild.id + ">");
  var privcheck = priv.has("<@" + message.guild.id + ">"); 
  if (!privcheck) privid = "Not Set"  

  let messagejoinid = messagejoin.get("<@" + message.guild.id + ">");
  let messagejoincheck = messagejoin.has("<@" + message.guild.id + ">");
  if (!messagejoincheck) messagejoinid = "Not Set"
    
  let servermspid = serverMSP.get("<@" + message.guild.id + ">");
  let servermspcheck = serverMSP.has("<@" + message.guild.id + ">");
  if (!servermspcheck) servermspid = "0"

  let mslogid = mslog.get("<@" + message.guild.id + ">");
  let mslogcheck = mslog.has("<@" + message.guild.id + ">");
  if (!mslogcheck) mslogid = "OFF"

  let mslogvid = mslogv.get("<@" + message.guild.id + ">");
  let mslogvcheck = mslogv.has("<@" + message.guild.id + ">");
  if (!mslogvcheck) mslogvid = "OFF"

    let gamenameid = gamename.get("<@" + message.guild.id + ">");
    let gamenameidcheck = gamename.has("<@" + message.guild.id + ">");
    if (!gamenameidcheck) gamenameid = "Not Set"
    
      let gameid = game.get("<@" + message.guild.id + ">");
      let gameidcheck = game.has("<@" + message.guild.id + ">");
      if (!gameidcheck) gameid = "Not Set"
  

    const embed = new Discord.RichEmbed()
    .setColor(0xB360B8)
    .setThumbnail(message.guild.iconURL)
    .setDescription(`:one: | Main Settings\n
**[ :sparkles: | Msinum & Capital ] | ${message.guild.name}**
**[ \`${message.guild.name}\` ]** Has Access **Msinum?** **[ \`${msinumid}\` ]**
**[ \`${message.guild.name}\` ]** Has Access **Core?** **[ \`${msinumid}\` ]**

**[ <@337708640079446017> | Core ]** **MsBot Core** **[** **https://goo.gl/EcuYHn** **]**
**[ <:moneybag:353935934368120835> ]** Server Msp **[ \`${servermspid}\` ]**
${devmodeid}

**[ Greetings & GameTag ]**
${greetwarns}
Game | Game Name **[ \`${gameid}\` | \`${gamenameid}\` ]**
Tag | Tag Private **[ \`${tagid}\` | \`${privatetagid}\` ]**

**[ ON | OFF ]**
User Log **[ \`${mslogid}\` ]**
Warn/Kick/Ban Log **[ \`${mslogvid}\` ]**

**[ :globe_with_meridians: | Global ]**
**Client** Prefix **[ \`!\` ]**
**Client** Creator **[ \`<@196099091871170560> Fire\` | <@196099091871170560> ]**
**Server** Rules **[** ${rulesid} **]**
For more Extended Settings & Configurations type \`!set2\`
`)

    message.channel.send(`**[ :gear: | :wrench: ] Guild Custom Configurations & Settings | [ ${message.guild.name} ]**`, {embed});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['set'],
  permLevel: 3
};

exports.help = {
  name: 'set',
  description: 'Custom Settings & Configurations for a Server!',
  aliases: ['set'],  
  usage: '!set',
  permLevel: "Admin"    
};    