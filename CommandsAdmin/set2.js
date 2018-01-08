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
  if (!msinumcheck) msinumid = "Not Set"  
  
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
  if (!devmodecheck) devmodeid = "Off"  
  
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
  
  message.channel.send(`**[ :gear: | :wrench: ]** **Server Configurations & Settings**  **| [ ${message.guild.name} ]** 
\`\`\`md
# MS , bot 
= = = = = = Custom = = = = = = \`\`\`

:bookmark: | **Server Configurations**

** [ Custom Roles ]** | :passport_control:
Role Auto Join: **[ @${autojoinid} ]**
Role Admin: **[ @${adminid} ]**
Role Staff: **[ @${staffid} ]**
Role Verified: **[ @${memverifiedid} ]**
Role Warn: **[ @${warnid} ]**
Role Mute: **[ @${muteid} ]**
Role Update: **[ @${newsroleid} ]**

**[ Custom Rooms ]** | :satellite: 
Room Greeting: **[ ${greetingid} ]**
Room News: **[ #${newsid} ]** 
Room Private: **[ #${privid} ]**
Room Events/Game: **[ #${eventsid} ]**
Room Jail: **[ #${jailid} ]**
Room Log: **[ #${logid} ]**
Room Logv: **[ #${logvid} ]**

**[ Custom Messages ]** | :speech_left: 
Message Join: **[** ${messagejoinid} **]**
Message Leave: **[** **Not Set** **]**
Warning Message - **[** **[ :construction: | Warn ]** <user>,Welcome to Jail room, To know more about why you are here write:**[ \`!Topic\` ]** **or** **[ \`!rules\` ]** ** ]**

**[ Ignoring ]** | :construction: 
Ignored Rooms: **[ Not Set ]**
Ignored Users: **[ Not Set ]**
Ignored Globall Commands: **[ ${ignoreid} ]**
Ignored Commands By Room: **[ Not Set ]**

\`\`\`md
# = = = = [MS Bot] | v1.11 = = = = 
      ${message.guild.name}\`\`\` 
`).then(setTimeout(() => { foreverything.set("<@" + message.guild.ownerID + ">", "<@" + message.guild.id + ">") }, 1000));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['set2'],
  permLevel: 3
};

exports.help = {
  name: 'set2',
  description: 'Custom Settings & Configurations for a Server! [ Extended ]',
  aliases: ['set2'],  
  usage: '!set2',
  permLevel: "Admin"    
};    