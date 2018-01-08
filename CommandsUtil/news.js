const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const newsrole = new JSONdb('./database/newsrole/newsrole.json');
exports.run = function(client, message, args, guild, member) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  let newss = newsrole.get("<@" + message.guild.id + ">");
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('**[ :warning: ]** **I do not have the correct permissions** `[ MANAGE_ROLES_OR_PERMISSIONS ]`.').catch(console.error);    
    let newsRole = client.guilds.get(message.guild.id).roles.find('name', `${newss}`);    
    if (!newss) return message.reply(`**[ :warning: ]** **I cannot find a [ \`News\` ] Role!**`);
    let user = message.author;    
    if (message.guild.member(user).roles.has(newsRole.id)) {
       return message.reply(`**[ :x: ]** **You** already have the role **[ @${newss} ]**`);
    };        

    if (!newsRole) return message.channel.send('I **cannot** find a `[ Newss ]` role');    
    message.reply(`**[ :newspaper: ]** You **succesfully got The [ \`@Newss\` ]** Role!`).then(message.guild.member(user).addRole(newsRole)).then( (message) => { setTimeout(() => { message.delete(); }, 12000); });

    
    };
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['updateme', 'news'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'newss',
        aliases: ['updateme', 'news'],        
        description: 'give a newss role!',
        usage: '!news',
        permLevel: "Everyone"
      };
