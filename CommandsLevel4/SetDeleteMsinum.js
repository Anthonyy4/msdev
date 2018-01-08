const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const msinum = new JSONdb('./database/msinum/msinum.json');
exports.run = function(client, message, args) {
    message.delete();
    let msinumcheck = msinum.has("<@" + message.guild.id + ">");
    if (!msinumcheck) return message.reply(`**[ Access Denied :information_source: ] This Server is Already Deleted!** :sparkles:`).then( (message) => { setTimeout(() => { message.delete(); }, 5000) } )
    let newMsinum = args.join(" ");
if (!newMsinum) return message.reply(`**[ :warning: | Confirm ]**`);    
      message.channel.send(`**[ :globe_with_meridians: | :o2: ]** **Msinum Access Deleted!!** \`->\` **[ Access:Denied ]** `)
      .then( setTimeout (() => {msinum.delete("<@" + message.guild.id + ">", newMsinum)}, 1000))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setDeleteMsinum', 'setdeletemsinum'],
  permLevel: 4
};

exports.help = {
  name: 'setdeleteMsinum',
  description: 'xtopsecret',
  usage: 'xsecret'
};  