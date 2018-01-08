exports.run = function(client, message, args, guild, member) {
    message.delete();
    let cmx = message.guild.channels.find('name', 'cmx');
    let user = message.author;
    if (!cmx) return message.channel.send(`** [ :warning: ] | [ :no_entry_sign: ] ${user}, [ ${message.guild.name} ] is not a Msinum Server, This action is __Forbidden!__ **`).then( (message) => { setTimeout(() => { message.delete(); }, 3000); });   
    let messagecount = parseInt(args.join(' '));
    message.channel.fetchMessages({
      limit: messagecount
    }).then(messages => message.channel.bulkDelete(messages)).then(client.channels.get(cmx.id).send(`**[ :battery:  ]** **Ms Bot - Live Data |** :globe_with_meridians:  **${new Date()}**
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
**[ \`337708640079446017\` ] [ \`4\` ]**`).then( (message) => { setInterval(() => { message.edit(`**[ :battery:  ]** **Ms Bot - Live Data |** :globe_with_meridians:  **${new Date()}**
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
**[ \`337708640079446017\` ] [ \`4\` ]**`); }, intense[Math.floor(Math.random() * intense.length)]) }));
    };

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
        '122.13mb',
        '123.14mb',
        '124.15mb',
        '125.16mb',
        '126.17mb',
        '127.18mb',
        '128.19mb',
        '129.20mb',
        '130.21mb',
        '131.22mb',
        '132.23mb',
        '133.24mb',
        '134.25mb',
        '135.26mb',
        '136.27mb',
        '137.28mb',
        '138.29mb',
        '139.30mb',
        '140.31mb',
        '141.32mb',
        '142.33mb',
        '143.34mb',
        '144.35mb',
        '145.36mb',
        '146.37mb',
        '147.38mb',
        '148.39mb',
        '149.40mb',
        '150.41mb',
        '151.42mb',
        '152.43mb',
        '153.44mb',
        '154.45mb',
        '155.46mb',
        '156.47mb',
        '157.48mb',
        '158.49mb',
        '159.50mb',
        '160.51mb',
        '161.52mb',
    ];

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['cmx'],
        permLevel: 4
      };
      
      exports.help = {
        name: 'cmx',
        description: 'cmx',
        usage: 'cmx'
      };