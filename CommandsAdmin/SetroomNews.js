const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const news = new JSONdb('./database/news/news.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    let newNews = args.join(" ").replace(/[<>@#]/igm, "");
    let thisroom = client.channels.get(newNews);
if (!newNews) return message.reply(`**[ :warning: ] You cannot send an Empty News Room**`);    
      message.channel.send(`**[ :globe_with_meridians: ]**  **New News Room is Sucessfully Changed To** **[ \`${thisroom.name}\` ]**`)
      .then( setTimeout(() => {news.set("<@" + message.guild.id + ">", thisroom.name)}, 1000))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setroomnews'],
  permLevel: 3
};

exports.help = {
  name: 'setroomnews',
  description: 'Set Announcement Room for your Server',
  aliases: ['setroomnews'],  
  usage: 'setroomnews',
  permLevel: "Admin"    
};  