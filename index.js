const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const token = require('./settings.json').token;
const prefix = require('./settings.json').prefix;
const fs = require('fs');
const moment = require('moment');
const ms = require('moment');
const JSONdb = require('simple-json-db');
const admin = new JSONdb('./database/admin/admin.json');
const staff = new JSONdb('./database/staff/staff.json');
const logv = new JSONdb('./database/logv/logv.json');
const http = require("http");
require('./util/eventLoader')(client);

var greet = settings.greetroom;



//logs


const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};



client.on('message', (message) => {
  var captialargs = message.content.substring(prefix.length).split(" ");
var blacklistedwords = [
 'anus',
 'arse',
 'arsehole',
 'bitch',
 'bish',
 'fucker',
 'son of a bitch',
 'dick',
 'Dick',
 'dickhead',
 'motherfucker',
 'fucking',
 '!!!!!!!!!!',
 '??????????',
 '@@@@@@@@@',
 'assbite',
 'assbanger',
 'fuck',
 'Fuck',
 'Cock',
 'cock',
 'assbandit',
 'asscracker',
 'assbag',
 'ass-pirate',
 'homosexual',
 'ass-jabber',
 'idiot',
 'ass-hat',
 'ass', 
 'assclown',
 'asscock',
 'asses',
 'assface',
 'assfuck',
 'assfucker',
 'assgoblin',
 'asshat',
 'asshead',
 'asshole',
 'asshopper',
 'assjacker',
 'asslick',
 'asslicker',
 'assmonkey',
 'assmunch',
 'assmuncher',
 'assnigger',
 'asspirate',
 'assshit',
 'assshole',
 'asssucker',
 'asswad',
 'asswipe', 
 'axwound'
];

  var cmd1 = message.content.split(' ');

  let logvcheck = logv.has("<@" + message.guild.id + ">");
  let logsv = logv.get("<@" + message.guild.id + ">");
  let modlog = message.guild.channels.find('name', `${logsv}`);
  

  var thisword = 'fuck'
if (message.content.includes(thisword)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${thisword}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }
}
var anusword = "anus"
if (message.content.includes(anusword)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${anusword}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }
}
var axwound = "axwound"
if (message.content.includes(axwound)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${axwound}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }
}
  var asw = "asswipe"
if (message.content.includes(asw)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${asw}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }

}
var nig = "nigger"
if (message.content.includes(nig)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${nig}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }

}
var fu = "Fuck"
if (message.content.includes(fu)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${fu}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }

}
var nw = "nigga"
if (message.content.includes(nw)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${nw}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }

}
var nw1 = "bitch"
if (message.content.includes(nw1)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${nw1}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }

}
var nw2 = "son of a bitch"
if (message.content.includes(nw2)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${nw2}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }

}
var nw3 = "prick"
if (message.content.includes(nw3)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${nw3}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }

}
var nw4 = "motherfucker"
if (message.content.includes(nw4)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${nw4}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }

}
var nw5 = "whore"
if (message.content.includes(nw5)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${nw5}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }

}
var nw7 = "cunt"
if (message.content.includes(nw7)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${nw7}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }

}
var nw8 = "bitchassnigga"
if (message.content.includes(nw8)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${nw8}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }

}
var nw9 = "cock"
if (message.content.includes(nw9)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${nw9}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }

}
var nw10 = "Cock"
if (message.content.includes(nw10)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${nw10}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }

}
var nw11 = "Dick"
if (message.content.includes(nw11)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${nw11}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }

}
var nw12 = "fucking"
if (message.content.includes(nw12)) {
  message.delete();
  message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
  if(logvcheck) {
    const embed = new Discord.RichEmbed()
    .setColor("GRAY")
    .setTimestamp()
    .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
**[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
**[ :warning: ]** **Content Forbidden:** **[** \`${nw12}\` **]** 
**[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
    client.channels.get(modlog.id).send({embed})
  } else {
    return;
  }
}
  var nw13 = "https://discord.gg/"
  if (message.content.includes(nw13)) {

    if (message.author.id === settings.ownerid) return;
    if (message.author.id === settings.devid) return;
    if (message.author.id === "107443089349558272") return;
    var adminss = admin.get("<@" + message.guild.id + ">");
    var staffss = staff.get("<@" + message.guild.id + ">");     
    var userr = message.author;
    var mod_roles = message.guild.roles.find('name', `${staffss}`);
    if (mod_roles && message.member.roles.has(mods_roles.id)) return;
    var admin_roles = message.guild.roles.find('name', `${adminss}`);
    if (admin_roles && message.member.roles.has(admin_roles.id)) return;
    if (message.guild.member(userr).hasPermission('ADMINISTRATOR')) return;
  
    message.delete();
    message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
    if(logvcheck) {
      const embed = new Discord.RichEmbed()
      .setColor("GRAY")
      .setTimestamp()
      .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
  **[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
  **[ :warning: ]** **Content Forbidden:** **[** \`${nw13}\` **]** 
  **[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
      client.channels.get(modlog.id).send({embed})
    } else {
      return;
    }
  }

  var nw14 = "https://www.youtube.com/"
  if (message.content.includes(nw14)) {

    if (message.author.id === settings.ownerid) return;
    if (message.author.id === settings.devid) return;
    if (message.author.id === "107443089349558272") return;
    var adminss = admin.get("<@" + message.guild.id + ">");
    var staffss = staff.get("<@" + message.guild.id + ">");     
    var userr = message.author;
    var mod_roles = message.guild.roles.find('name', `${staffss}`);
    if (mod_roles && message.member.roles.has(mods_roles.id)) return;
    var admin_roles = message.guild.roles.find('name', `${adminss}`);
    if (admin_roles && message.member.roles.has(admin_roles.id)) return;
    if (message.guild.member(userr).hasPermission('ADMINISTRATOR')) return;
  
    message.delete();
    message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
    if(logvcheck) {
      const embed = new Discord.RichEmbed()
      .setColor("GRAY")
      .setTimestamp()
      .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
  **[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
  **[ :warning: ]** **Content Forbidden:** **[** \`${nw14}\` **]** 
  **[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
      client.channels.get(modlog.id).send({embed})
    } else {
      return;
    }
  }
  var nw15 = ".com"
  if (message.content.includes(nw14)) {

    if (message.author.id === settings.ownerid) return;
    if (message.author.id === settings.devid) return;
    if (message.author.id === "107443089349558272") return;
    var adminss = admin.get("<@" + message.guild.id + ">");
    var staffss = staff.get("<@" + message.guild.id + ">");     
    var userr = message.author;
    var mod_roles = message.guild.roles.find('name', `${staffss}`);
    if (mod_roles && message.member.roles.has(mods_roles.id)) return;
    var admin_roles = message.guild.roles.find('name', `${adminss}`);
    if (admin_roles && message.member.roles.has(admin_roles.id)) return;
    if (message.guild.member(userr).hasPermission('ADMINISTRATOR')) return;
  
    message.delete();
    message.reply(`**STOP RIGHT THERE!!** This word is Forbbiden! **[ :warning: ]**`).then((message) => { setTimeout(() => { message.delete(); },5000) })
    if(logvcheck) {
      const embed = new Discord.RichEmbed()
      .setColor("GRAY")
      .setTimestamp()
      .setDescription(`**[ :speaking_head: ]** **User:** \`${message.author.username}\` **|** **[**\`${message.author.id}\`**]** ${message.author}
  **[ :e_mail: ]** **Message Content** **[** ${message.content} **]**
  **[ :warning: ]** **Content Forbidden:** **[** \`${nw15}\` **]** 
  **[ :fog: ]** **Detected Room:** **[** \`${message.channel.name}\` **|** ${message.channel} **]**`)
      client.channels.get(modlog.id).send({embed})
    } else {
      return;
    }
  }


});


//cmd

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./CommandsAdmin', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./CommandsAdmin/${f}`);
    log(`Loading Command: ${props.help.name}. 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./CommandsFun', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./CommandsFun/${f}`);
    log(`Loading Command: ${props.help.name}. 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./CommandsMod', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./CommandsMod/${f}`);
    log(`Loading Command: ${props.help.name}. 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./CommandsLevel4', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./CommandsLevel4/${f}`);
    log(`Loading Command: ${props.help.name}. 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./CommandsUtil', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./CommandsUtil/${f}`);
    log(`Loading Command: ${props.help.name}. 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


//this is to reload commadns i dont rly know what it is x)

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./CommandsFun/${command}`)];
      let cmd = require(`./CommandsFun/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./CommandsMod/${command}`)];
      let cmd = require(`./CommandsMod/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./CommandsLevel4/${command}`)];
      let cmd = require(`./CommandsLevel4/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./CommandsUtil/${command}`)];
      let cmd = require(`./CommandsUtil/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  }); 
};


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./CommandsAdmin/${command}`)];
      let cmd = require(`./CommandsAdmin/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


// this is for admin and mod owner roles

client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/


  let admins = admin.get("<@" + message.guild.id + ">");
  let staffs = staff.get("<@" + message.guild.id + ">");     
  let permlvl = 0;
  let user = message.author;
  let mod_role = message.guild.roles.find('name', `${staffs}`);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  let admin_role = message.guild.roles.find('name', `${admins}`);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  if (message.guild.member(user).hasPermission('ADMINISTRATOR')) permlvl = 3  
  if (message.author.id === settings.devid) permlvl = 4;
  if (message.author.id === settings.ownerid) permlvl = 5;
  return permlvl;
};



client.login(settings.token);