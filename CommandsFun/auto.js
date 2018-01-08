const Discord = require('discord.js');
const settings = require('../settings.json');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const ms = require('moment');
exports.run = function(client, message, args, guild, member) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    if (!client.lockit) client.lockit = [];    
    let time = (30 + "s")
    let validUnlocks = ['release', 'unlock'];    
    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
          SEND_MESSAGES: null
        }).then(() => {
          message.channel.send(' :triangular_flag_on_post: **Lifted.**');
          clearTimeout(client.lockit[message.channel.id]);
          delete client.lockit[message.channel.id];
        }).catch(error => {
          console.log(error);
        });
      } else {
        message.channel.overwritePermissions(message.guild.id, {
          SEND_MESSAGES: false
        }).then(() => {
          message.channel.send(`**Count Down** Started for \`[ ${ms(ms(time), { long:true })} ]\``).then(() => {
    
            client.lockit[message.channel.id] = setTimeout(() => {
              message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: null
              }).then(message.channel.send(' :triangular_flag_on_post: **Play mode Started.**')).catch(console.error);
              delete client.lockit[message.channel.id];
            }, ms(time));
    
          }).catch(error => {
            console.log(error);
          });
        });
      }
    
    };
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['auto'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'Auto timer',
        description: 'Set a timer `<value>`',
        usage: '!auto',
        aliases: ['auto'],
        permLevel: 'Detalied'
      };