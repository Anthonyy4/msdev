const settings = require('../settings.json');
const fs = require('fs');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const greeting = new JSONdb('./database/greeting/greeting.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    let newGreet = args.join(" ").replace(/[\<\>\@\#]/igm, "");
    let thisroom = client.channels.get(newGreet);
if (!newGreet) return message.reply(`**[ :warning: ] You cannot Set an Empty Greeting Room!**`);    
      message.channel.send(`**[ :globe_with_meridians: ]** Guild **New Greeting Room is Sucessfully Changed To** **[ \`${thisroom.name}\` ]**`)
      .then( setTimeout(() => {greeting.set("<@" + message.guild.id + ">", thisroom.name)}, 1000))
      
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['setroomgreet', 'setroomgreeting'],
  permLevel: 3
};

exports.help = {
  name: 'setgreeting',
  description: 'Set Greeting Room for your Server',
  aliases: ['setroomgreet', 'setroomgreeting'],  
  usage: '!sgreet',
  permLevel: "Admin"    
};    