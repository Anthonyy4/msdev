const Discord = require('discord.js');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = (client, message, args, guild) => {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    const embed = new Discord.RichEmbed()
    .setColor(0x8D5AB2)
    .setDescription(` :scales:  **[ ${message.guild.name} ] server, Current Gills Shop values!**
    
**•** **Buy gills**, by typing \`.gill get\` or Win different **[ SG ] events**,when an Admin creates one!
    
**[ SG ] Gill** **Market**
**[**\`+1000gp\` \`/1Month\` **]** - Get Featured !SG Role
**[**\`+1500gp\` \`/2Months\` **]** - Rent Voice Channel
**[**\`+1500gp\` \`/4Months\`**]** - Get your own Custom Emote
**[**\`+2000gp\` \`/2Months\` **]** - Get RainBOW Color
**[**\`+3000gp\` \`/1Year\`**]** - Get Name Color Change
**[**\`99999gp\` \`/xtm\`**]** - iHax Gills Market(not available)

**Note: **You must Have the **[ iHax Bot ]** , on Your Server , To get **[ GP ]** , Daily every 24 hours, and this Command to Work Properly!
`)
    .setFooter(`-=[ ${message.guild.name} ] Gills Market=-`)
        message.reply(`**[ :shopping_cart: ]  Gills** Market`, {
        embed
        });


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gshop', 'gillshop'],
  permLevel: 0
};

exports.help = {
  name: 'gillshop',
  aliases: ['gshop', 'gillshop'],  
  description: 'Access: iHax Servers',
  usage: '!gshop',
  permLevel: "Everyone"
};