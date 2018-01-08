const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
const notebase = new JSONdb('./database/notes/notes.json');
const Discord = require('discord.js')
exports.run = function(client, message, args) {    
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  

var cmd = message.content.split(' ')[0];
var cmd1 = message.content.split(' ')[1];
var cmd2 = message.content.split(' ')[2];
var cmd3 = message.content.split(' ')[3];
var args = args.join(" ");
var author = message.author;
var user = message.mentions.users.first();

var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var d = new Date();


if(cmd1 === "note") {
    return message.channel.send(`**[ :black_medium_small_square: | Action Delete ] ${author} Successfully Deleted Note!**`).then((message) => { setTimeout(() => {notebase.delete("<@" + author.id + ">") },1000) });    
}

if(cmd === "!notes") {

var noteget = notebase.get("<@" + author.id + ">");
var notecheck = notebase.has("<@" + author.id + ">");

if (!notecheck) {
    return message.channel.send(`**[ :warning: ] ${author} You didn't Save a Note Yet!** To save a Note type \`!note\``)
} else {
    if (notecheck) return message.channel.send(`**[ :notepad_spiral: ] ${author} Your saved Note is:**
**[\`+\`]** ${noteget} 

**- To delete your Note type \`!delete note\` or \`!del note\`**`);
    }
}

var thisargs = args
if (!thisargs) return message.channel.send(`**[ :warning: | Invalid String ]** ${author} **You cannot Save an empty Note.**`);
message.channel.send(`**[ :notepad_spiral: ] ${author} You added a Note:**
**[\`+\`]** **[ \`${thisargs}\` ]** at **${days[d.getDay()]} ${monthNames[d.getMonth()]} ${d.getDate()} ${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}**

-To check your notes, Just type \`!notes\``)
.then((message) => { setTimeout(() => {notebase.set("<@" + author.id + ">", `**[ \`${thisargs}\` ]** added at **${days[d.getDay()]} ${monthNames[d.getMonth()]} ${d.getDate()} ${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}**`) },1000) });

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Note','note','notes','del','delete'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'note',
    aliases: ['note'],    
    description: 'note',
    usage: '!note & !notes',
    permLevel: "Everyone"
  };