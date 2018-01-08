const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const Discord = require('discord.js')
exports.run = function(client, message, args) {      

  let on = ("On")
  let globallog = client.channels.find('name', `rlogging`);
  var devoncheck = devmode.has("<@" + message.guild.id + ">");
  if (devoncheck) return message.channel.send(`**[ :warning: ] ${message.author},This Option is Already** \`ON\``)  
  client.channels.get(globallog.id).send(`**[ :ticket: | Action Developer Mode ] Changed To [ \`ON\` ] in** \`${message.guild.name}\` **, at** \`${new Date()}\`**${new Date().getHours() + ":" + new Date().getMinutes()}**`);        
  message.channel.send(`**[ :ballot_box: ]** <@${message.author.id}>, **Developer Mode Changed to** **[ \`ON\` ]**`)
    .then( setTimeout (() => {devmode.set("<@" + message.guild.id + ">", on)}, 1000))
    

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['devmodeon'],
    permLevel: 4
  };
  
  exports.help = {
    name: 'devmode on',
    description: 'check your msp',
    usage: '!msp',
    permLevel: "Owner"                      
  };