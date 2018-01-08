const Discord = require('discord.js');
const settings = require('../settings.json');
const ms = require('ms');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const logv = new JSONdb('./database/logv/logv.json');
const greeting = new JSONdb('./database/greeting/greeting.json');
const jail = new JSONdb('./database/jail/jail.json');
const warn = new JSONdb('./database/warn/warn.json');
const autojoin = new JSONdb('./database/autojoin/autojoin.json');
const memverified = new JSONdb('./database/memverified/memverified.json');
const greetwarn = new JSONdb('./database/greetwarn/greetwarn.json');
const mslogv = new JSONdb('./database/mslogv/mslogv.json');
exports.run = (client, message, args, guild) => {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");   
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});  
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('**[ :warning: ]** **I do not have the correct permissions** `[ MANAGE_ROLES_OR_PERMISSIONS ]`.').catch(console.error);
  
  setTimeout(function() {
    message.delete();
  }, 6000);

  
  var reason = message.content.split(' ')[2];
  var time = message.content.split(' ')[3];
  
  let warns = warn.get("<@" + message.guild.id + ">");
  let logsv = logv.get("<@" + message.guild.id + ">");
  let greetings = greeting.get("<@" + message.guild.id + ">");
  let jails = jail.get("<@" + message.guild.id + ">");
  let autorole = autojoin.get("<@" + message.guild.id + ">");
  let memverifieds = memverified.get("<@" + message.guild.id + ">");
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', `${logsv}`);
  let warnlog =  message.guild.channels.find('name', `${jails}`);
  let warnover =  message.guild.channels.find('name', `${greetings}`);
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', `${warns}`);
  let memberRole = client.guilds.get(message.guild.id).roles.find('name', `${autorole}`);
  let certiRole = client.guilds.get(message.guild.id).roles.find('name', `${memverifieds}`);
  
  
  
   if (!logsv) return message.reply('**[ :warning: ]** `I` **cannot find a** __**logv**__ **channel**').catch(console.error);
   if (!jails) return message.reply('**[ :warning: ]** `I` **cannot find a** __**Jail**__ **channel**')
  if (!muteRole) return message.reply('I **cannot** find a `[ Warn ]` role').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('You must **mention someone** to `[ Warn ]` them.').catch(console.error);  
   if (!reason) return message.reply('You must **supply a reason** for the **[ `Warn` ]**.').catch(console.error);
  if (!time) return message.reply('You must **put a time value** for the **[ `Warn` ]**.').catch(console.error);
  if (!certiRole) return message.reply('I **cannot** find a **[ `Verified` ]** role').catch(console.error);
  if (!memberRole) return message.reply('I **cannot** find a **[ `Auto Join` ]** role').catch(console.error);

 
       const embed = new Discord.RichEmbed()
    .setColor(0x837238)
    .setTimestamp()
    .setDescription(`**[ \`🚧\` ]** **Action:** Warn\n**Target:** **${user.username}** \`${user.id}\` | <@${user.id}>\n**Moderator:** **${message.author.tag}** \`${message.author.id}\` **|** <@${message.author.id}>\n**Reason:** **[ \`${reason}\` ]**\n**Time:** **[ \`${time}\` ]**`);


    let mslogon = mslogv.has("<@" + message.guild.id + ">");
    if (!mslogon) return message.channel.send(`**[ \`🚧\` | Warn ]** <@${message.author.id}>, \`<@${user.id}> ${user.username}\` **|** ${user} Has been **Warned** for **[ \`${time}\` ]** for reason **[ \`${reason}\` ]**`).then(message.guild.member(user).removeRole(memberRole)).then(message.guild.member(user).removeRole(certiRole)).then(message.guild.member(user).addRole(muteRole)).then(() => {
      client.lockit = setTimeout(() => {
        message.channel.overwritePermissions(message.guild.id, {
        }).then(message.guild.member(user).removeRole(muteRole)).then(message.guild.member(user).addRole(memberRole));
      }, ms(time));

    }).catch(error => {
      console.log(error);
    });    
    let greetwarns = greetwarn.has("<@" + message.guild.id + ">");    
    
    if (message.guild.member(user).roles.has(muteRole.id)) {
      message.guild.member(user).addRole(muteRole).then(() => {
        client.channels.get(modlog.id).send({embed}).catch(console.error);
      });
     }; 


     if (greetwarn) return message.channel.send(`**[ \`🚧\` | Warn ]** <@${message.author.id}>, \`<@${user.id}> ${user.username}\` **|** ${user} Has been **Warned** for **[ \`${time}\` ]** for reason **[ \`${reason}\` ]**`).then(client.channels.get(modlog.id).send({embed})).then(message.guild.member(user).removeRole(memberRole)).then(message.guild.member(user).removeRole(certiRole)).then(message.guild.member(user).addRole(muteRole)).then(() => {
              client.lockit = setTimeout(() => {
                message.channel.overwritePermissions(message.guild.id, {
                }).then(message.guild.member(user).removeRole(muteRole)).then(message.guild.member(user).addRole(memberRole));
              }, ms(time));
      
            }).catch(error => {
              console.log(error);
            });     

     if (!greetwarns) return;     
    client.channels.get(warnlog.id).send(`:construction:  ${user},Welcome to Jail room, To know more about why you are here write:**[ \`.Topic\` ]** **or** **[ \`.rules\` ]**
      **Warning Reason** **:** **[ \`${reason}\` ]**
      **Time left** **:** **[ \`${ms(ms(time), { long:true })}\` ]**`).then(client.channels.get(modlog.id).send({embed})).then(message.guild.member(user).removeRole(memberRole)).then(message.guild.member(user).removeRole(certiRole)).then(message.guild.member(user).addRole(muteRole)).then(() => {
              client.lockit = setTimeout(() => {
                message.channel.overwritePermissions(message.guild.id, {
                }).then(client.channels.get(warnover.id).send(`**[ \`🕒\` Warn Ended ]** Hello ${user} Your **Warn Time is Finished! - Next time don't do an Action like 
      [ \`${reason}\` ] or Anything Against Regulations of Server**(Check \`!rules\`) **(:**! `)).then(message.guild.member(user).removeRole(muteRole)).then(message.guild.member(user).addRole(memberRole));
              }, ms(time));
      
            }).catch(error => {
              console.log(error);
            });     

        
            }; 

//    if (message.guild.member(user).roles.has(muteRole.id)) {
//     message.guild.member(user).removeRole(muteRole).then(() => {
//       client.channels.get(warnlog.id).send(`${user},Welcome to Jail room. To know more about why you are here write : \`[ .Topic ]\` **or** \`[ .rules ]\`
// **Warning Reason** **:** **${reason}**
// **Time you Got Warned** **:** ${new Date}`).catch(console.error);
//     });
//    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['jail'],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  aliases: ['jail'],  
  description: 'Puts a role called Warn-ed',
  usage: 'un/warn [mention] [reason]',
  permLevel: ["Admin" + " or " + "Staff"]               
};