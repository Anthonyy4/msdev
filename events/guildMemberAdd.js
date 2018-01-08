const settings = require('../settings.json');
const JSONdb = require('simple-json-db');
const log = new JSONdb('./database/log/log.json');
const devmode = new JSONdb('./database/devmode/devmode.json');
const Discord = require('discord.js');
const mslog = new JSONdb('./database/mslog/mslog.json');
module.exports = (member, client, message) => {
  let guild = member.guild;  
  let devmodeon = devmode.has("<@" + guild.id + ">");  
  if (devmodeon) return;
  let mslogon = mslog.has("<@" + guild.id + ">");
  if (!mslogon) return;
  let logs = log.get("<@" + guild.id + ">");
  let loguser = guild.channels.find('name', `${logs}`);
  if (!loguser) return;
 return guild.channels.get(loguser.id).send(`:negative_squared_cross_mark: \`[${member.user.id}]\` **User :** ${member.user}, **${member.user.username}** **Joined** **[** \`${guild.name}\` **]**`);
};