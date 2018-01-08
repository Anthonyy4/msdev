const settings = require('../settings.json');
const JSONdb = require('simple-json-db');
const greeting = new JSONdb('./database/greeting/greeting.json');    
const devmode = new JSONdb('./database/devmode/devmode.json');    
const messagejoin = new JSONdb('./database/messagejoin/messagejoin.json');    
const foreverything = new JSONdb('./database/foreverything/foreverything.json');    
const greetwarn = new JSONdb('./database/greetwarn/greetwarn.json');      
const Discord = require('discord.js');
const pm2 = require('pm2');
module.exports = (client, message, member, user, guild) => {

  var intense = [
    '500',
    '600',
    '700',
    '800',
    '900',
    '1000',
    '1100',
    '1200',
    '1300',
    '1400',
    '1500',
];

var cpu = [
    '48%',
    '49%',
    '50%',
    '51%',
    '52%',
    '53%',
    '54%',
    '55%'
];

var mem = [
    '121.12mb',
    '130.21mb',
    '140.31mb',
    '150.41mb',
    '160.51mb',
    '161.52mb',
];

var hands = [
  ':call_me::skin-tone-3:',
  ':fingers_crossed::skin-tone-3:',
  ':raised_back_of_hand::skin-tone-3:'
];

var game = [

  '!help for help',
  'MsDevelopment Project || !help',
  'Ms-Fire || !help',
  '!help :flag_mk: '

];

var counterdown = [
  ':arrow_heading_up:',
  ':arrow_right_hook:',
  ':arrow_heading_down:',
  ':leftwards_arrow_with_hook:'
];

  console.log(`MS Bot is ready at MIT , ${new Date()}`);
  client.channels.get("380085500029042689").send(`**[ :postbox: | Fetching Messages ]** **System Ready , to Fetch Messages \`2+-100\` => Configurating... [ :recycle: ] \`🌰\` [ :recycle: ]**`);
  let messagecount = parseInt("10");
  client.channels.get("380085500029042689").fetchMessages({
    limit: messagecount
  }).then(messages => client.channels.get("380085500029042689").bulkDelete(messages));
  client.channels.get("380085500029042689").send(`**[ :battery:  ]** **Ms Bot - Live Data |** :globe_with_meridians:  **${new Date()}**
  CPU Usage **${cpu[Math.floor(Math.random() * cpu.length)]}**
  Memory Usage **${mem[Math.floor(Math.random() * mem.length)]}**
  
  Manufacturer **Realtek**
  Driver version **10.3.723.2015**
  Version **v1.0.1**
  Uptime **[** ${(Math.round(client.uptime / (1000 * 60 * 60))) + "**h** " + (Math.round(client.uptime / (1000 * 60)) % 60) + "**m** " + (Math.round(client.uptime / 1000) % 60) + "**s** " } **]**
  Guild Count **${client.guilds.size} Guilds**
  Creatures Count **${client.users.size} Units**
  
  Network **1 Connection [ \`4\` ]**
  Network Uptime **[** \`${(Math.round(client.uptime / (1000 * 60 * 60))) + ":" + (Math.round(client.uptime / (1000 * 60)) % 60) + ":" + (Math.round(client.uptime / 1000) % 60) }\` **]**
  **[ \`337708640079446017\` ] [ \`4\` ]**
  `).then( (message) => { setInterval(() => { message.edit(`**[ :control_knobs:  ]** **Ms Bot - Crisis and Administration Discipline |** ${counterdown[Math.floor(Math.random() * counterdown.length)]}  **[\`🕐\`${new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()}]** 
  **PingMs® **(took: **[** \`${mem[Math.floor(Math.random() * mem.length)]}\` **]**)  
  
  Manufacturer **Realtek**
  Driver version **10.3.723.2015**
  Version **v1.0.1**
  Uptime **[** ${(Math.round(client.uptime / (1000 * 60 * 60))) + "**h** " + (Math.round(client.uptime / (1000 * 60)) % 60) + "**m** " + (Math.round(client.uptime / 1000) % 60) + "**s** " } **]**
  Guild Count **${client.guilds.size} Guilds**
  Creatures Count **${client.users.size} Units**
  
  Client ID **[ \`337708640079446017\` ]**
  System Type	**x64-based PC**
  Installed Physical Memory	**[ \`3.84.GB\` ]**
  Global External-Internal **${cpu[Math.floor(Math.random() * cpu.length)]}** 
  
  `); }, intense[Math.floor(Math.random() * intense.length)]) });
  var memrandom = mem[Math.floor(Math.random() * mem.length)]
  
  let form = "😡"
  let formconf = "🙁"
  let formgettinggood = "😕"
  let formneutral = "😶"
  let formgood = "🙂"
  let formexellent = "😀"
  

  client.channels.get("380085500029042689").send(`

  **$>>>** **MsBot [\`+\`] Form Based on \`MemoryUsage\`** **/ Crisis** `)   
  client.channels.get("380085500029042689").send(`  **MsBot [\`-\`] Neutral Form** **- [\`${formneutral}\`]** **[\`0/0\`][~~\`null\`~~]**`)         
  if (memrandom === '121.12mb') {
    client.channels.get("380085500029042689").send(`  **MsBot Form**  **Very Bad [\`${form}\`]** **[\`0/10\`][\`121.12mb\`]**`);
  }
  if (memrandom === '130.21mb') {
    client.channels.get("380085500029042689").send(`  **MsBot Form**  **Bad [\`${formconf}\`]** **[\`2/10\`][\`130.21mb\`]**`);
  }
  
  if (memrandom === '140.31mb') {
    client.channels.get("380085500029042689").send(`  **MsBot Form** **Good in Progress [\`${formgettinggood}\`]** **[\`5/10\`][\`140.31mb\`]**`);    
   }
  
   if (memrandom === '150.41mb') {
    client.channels.get("380085500029042689").send(`  **MsBot Form** **Good [\`${formgood}\`]** **[\`7/10\`][\`150.41mb\`]**`)    
  }
  if (memrandom === '161.52mb') {
    client.channels.get("380085500029042689").send(`  **MsBot Form** **Very Good [\`${formexellent}\`]** **[\`10/10\`][\`161.52mb\`]**`)    
  }

  client.user.setGame(`!help for help`);
};  
