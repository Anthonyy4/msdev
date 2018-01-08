const Discord = require('discord.js');
const settings = require('../settings.json');
const ms = require('ms');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const logv = new JSONdb('./database/logv/logv.json');
const mslogv = new JSONdb('./database/mslogv/mslogv.json');
exports.run = (client, message, args, guild) => {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
  setTimeout(function() {
    message.delete();
  }, 6000);


  if (!message.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) return message.reply('**[ :warning: ]** **I do not have the correct permissions** `[ MANAGE_CHANNELS ]`.').catch(console.error);
  let logsv = logv.get("<@" + message.guild.id + ">");        
  let modlog =  message.guild.channels.find('name', `${logsv}`);
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply(' :warning: You must set a __**duration**__ for the lockdown in either `[ Hours ]`, `[ minutes ]` **or*   * `[ seconds ]`');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send(' :triangular_flag_on_post: **Lockdown Lifted.**');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`**[ \`🚧\` | Lockdown ]** **Channel locked** down for **[ \`${ms(ms(time), { long:true })}\` ]**`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send(' :triangular_flag_on_post: **Lockdown lifted.**')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
  const embed = new Discord.RichEmbed()
    .setColor(0x082B2D)
    .setTimestamp()
    .setDescription(`**Action:** **Lockdown**\n**Moderator:** **${message.author.tag}** \`${message.author.id}\` | <@${message.author.id}>\n**Time:** **[ \`${time}\` ]**\n**Channel:** **[ ${message.channel} ]**`);

  let mslogvs = mslogv.has("<@" + message.guild.id + ">");
  if (!mslogvs) return;

  return client.channels.get(modlog.id).send({embed})
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ld'],
  permLevel: 3
};

exports.help = {
  name: 'lockdown',
  aliases: ['ld'],  
  description: 'This will lock a channel down for the set duration be it in hours, minutes or seconds',
  usage: 'lockdown <duration>',
  permLevel: ["Admin" + " or " + "Staff"]               
};