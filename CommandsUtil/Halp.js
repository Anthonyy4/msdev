const Discord = require('discord.js');
const settings = require('../settings.json');
const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const admin = new JSONdb('./database/admin/admin.json');
exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setColor(0xB360B8)
  .setDescription(`<@337708640079446017> - **Full Commands** :bookmark: 

***${settings.prefix}help*** **-** Current Command & **e.g** **[ \`!help msp\` ]**
***${settings.prefix}msp*** **-** Check Msp, **[ !h msp ]** for More.
***${settings.prefix}check*** **-** Bot ping/Latency Api **(*\`!ping - milliseconds\`*)**
***${settings.prefix}date*** **-** Check the Current Date!
***${settings.prefix}calculator*** **-** Calculate Numbers | **(\`!calc-\`) (\`!calc+\`) (\`!calc*\`) (\`!calc/\`) <*\`values\`*>**
***${settings.prefix}proverbs*** **-** Check Old proverbs!
***${settings.prefix}clean*** **-** Remove messages **e.g** **[*\`!rem 10\`*]**
***${settings.prefix}game*** **-** Check the current Game on the Server!
***${settings.prefix}info*** **-** Check the info of Users**(*\`!i @user, <id>\`*)** Check Server Info**(*\`!sv\`*)** & Check Channel info**(*\`!ch #channel\`*)**
***${settings.prefix}reminder*** **-** Put a reminder**(*\`!remindme <time> <text>\`*)** **e.g** **[ \`!remindme 10s pick my friend from school\` ]**
***${settings.prefix}uptime*** **-** Check for how long Bot is Online/Up!
***${settings.prefix}access*** **-** Check your Access on a Server + *extended* **(*\`!accus @user\`*)**
***${settings.prefix}Warn / Mute / UnMute*** **-** - Warn/Mute someone for Breaking the Rules **(*\`!h warn\`*)**
***${settings.prefix}Ban / Unban*** **-** Serious Action for Breaking Rules!
***${settings.prefix}Lockdown / Ignore*** **-** Lockdown The Server**(*\`!ld <time>\`*)** & Ignore a Command or @user or Room** **e.g** (*\`!ignore !Msp\`*)**
***${settings.prefix}set*** **-** Guild Custom Configurations & Settings **[ \`!h set\` ]**
***${settings.prefix}set2*** **-** Extended Configurations & Settings **[ \`!h set2\` ]**

**MsBot Invite & Ms Developing Bots** :space_invader:
***${settings.prefix}invite*** **-** Invite me To your Server & Join my Server!
***${settings.prefix}mspy*** **-** Invite the Ms-Py(python) Bot **(<@371772133581520911>)**
***${settings.prefix}musicinv*** **-** Invite the Ms-Music Bot**(<@306060210332631041>)**
`)

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(`**[ :dividers: ] ${message.author.username}, Ms-Bot Full Commands & Help [ <@${message.author.id}> ]**`, {embed});
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`**[ :card_box: | Help ]** <@${message.author.id}>**,Command [ \`${command.help.name}\` ]**\n**Description:** ${command.help.description}!\n**Aliases: ${settings.prefix}${command.help.aliases.join(`, ${settings.prefix}`)}**\n**Access:**\n     \`${command.help.permLevel}\` :**Permission**`);
    } else {
      if (client.aliases.has(command)) {
        command = client.commands.get(client.aliases.get(command));
        message.channel.send(`**[ :card_box: | Help ]** <@${message.author.id}>**,Command [ \`${command.help.name}\` ]**\n**Description:** ${command.help.description}!\n**Aliases: ${settings.prefix}${command.help.aliases.join(`, ${settings.prefix}`)}**\n**Access:**\n     \`${command.help.permLevel}\` :**Permission**`);        
      }
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h',],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'This help',
  usage: '!h',
  permLevel: "Everyone"
};