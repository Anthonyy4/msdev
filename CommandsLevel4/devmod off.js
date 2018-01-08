const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const Discord = require('discord.js')
exports.run = function(client, message, args) {    

  let globallog = client.channels.find('name', `rlogging`); 
  var devoffcheck = devmode.has("<@" + message.guild.id + ">");
  if (!devoffcheck) return message.channel.send(`**[ :warning: ] ${message.author},This Option is already** \`OFF\``);   
  client.channels.get(globallog.id).send(`**[ :tickets: | Action Developer Mode ] Changed To [ \`OFF\` ] in** \`${message.guild.name}\` **, at** \`${new Date()}\`**${new Date().getHours() + ":" + new Date().getMinutes()}**`);        
    message.channel.send(`**[ :card_box: ]** <@${message.author.id}>, **Developer Mode Changed to** **[ \`OFF\` ]**`)
    .then( setTimeout (() => {devmode.delete("<@" + message.guild.id + ">")}, 1000))


};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['devmodeoff'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'devmode off',
    description: 'check your msp',
    usage: '!msp',
    permLevel: "Owner"                      
    
  };