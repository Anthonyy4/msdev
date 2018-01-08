      const settings = require('../settings.json');
    const JSONdb = require('simple-json-db');
    const greeting = new JSONdb('./database/greeting/greeting.json');    
    const devmode = new JSONdb('./database/devmode/devmode.json');    
    const messagejoin = new JSONdb('./database/messagejoin/messagejoin.json');    
    const foreverything = new JSONdb('./database/foreverything/foreverything.json');    
    const greetwarn = new JSONdb('./database/greetwarn/greetwarn.json');      
    const autojoin = new JSONdb('./database/autojoin/autojoin.json');
    
    module.exports = (member, client, message, user, guild) => {

    var guild = member.guild;    
    let devmodeon = devmode.has("<@" + guild.id + ">");  
    if (devmodeon) return;  
    let greetwarns = greetwarn.has("<@" + guild.id + ">");
    if (!greetwarns) return;
    let greetings = greeting.get("<@" + guild.id + ">");
    let greetuser = guild.channels.find('name', `${greetings}`);
    if (!greetuser) return;

    var greet = (`${member.user}`)
    var user = greet
    var string = "%user%"
    var string = user 
    
    let messagejoins = messagejoin.get("<@" + guild.id + ">")
    if (!messagejoins) messagejoins = `**Hello & Welcome in** **,**  **To** **[ ${guild.name} ]** :two_hearts: **,I'm the Ms bot** i will help you around! start by typing **!help**`
    let messagejoinget = foreverything.has("<@" + guild.id + ">");
      return guild.channels.get(greetuser.id).send(greet + "**,** " + messagejoins);
};
//**Hello & Welcome in** ${member.user}**,**  **To** **[ ${guild.name} ]** :two_hearts: **,I'm the Ms bot** i will help you around! start by typing **!help**