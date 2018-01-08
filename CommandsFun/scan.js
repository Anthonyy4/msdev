const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args, guild, member) {
    let devmodeon = devmode.has("<@" + message.guild.id + ">");    
    if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
    
    var cmd2 = args.join(' ');
    var cmd3 = message.content.split(' ')[3];
    let user = message.mentions.users.first();
    if (cmd2.length < 1) return message.reply(`**You must provide <text>/user to use this command example:** \`!slap @ella\``);
    message.channel.send(`**[ :mag: ]** ***Scanning..*** ***${cmd2}*** `).then( (message) => { setTimeout(() => { message.edit(`**[ :mag_right: ]** ***${cmd2}*** ***${scan[Math.floor(Math.random() * scan.length)]}***`); }, 1000); });

    var scan = [
        'is Guilty',
        'is Guilty for Attacking Jad',
        'is Clean , you are a good person',
        'is Guilty For playing starve',
        'is Clean',
        `is Guilty for attacking another ${cmd2}`,
        'is Guilty for Drinking too much Blood!',
        'is Clean , You will become a police officer in the future!',
        'is Guilty Beacuse you robbed me last night!',
        'is Guilty for being a good person!',
        'is Clean , A cow is always clean!',
        'is Guilty For playing starve',
        'is Guilty for eating too much potatoes!',
        'is Clean , Just like me ;)',
        'is Guilty for gambling!',
        `is Guilty for hating ${cmd2}`,
        'is Clean , huh! is he/she?',
        `is Guilty beacuse it's ${new Date()}`,
        'is Guilty for being a couch!',
        'is Unclean for eating a spoon!',
        'is very Unclean Beacuse he ate me.',
        'is Guilty for helping ENEMY! TRAITOR! Kill HIM!',
        'is Guilty beacuse he is a troller! Just like me :c',
        'is Guilty for taking the trash out! Who doesn\'t Like the trash these days..',
        'is Clean for eating the my apple..',
        'is Guilty to be honest , I dont know why he is Guilty. :/'
    ];


    };
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['scan'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'scan',
        aliases: ['scan'],        
        description: 'scan smone',
        usage: '!scan',
        permLevel: "Everyone"                  
      };
