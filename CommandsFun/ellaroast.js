const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args, guild, member) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    message.channel.send(` 
\`\`\`diff
-ELLLAAA ROAST -- 2017  << < < < << < < \`\`\`
I've got 2000 thousands fans, but you got 6 million what?
The only reason you got that because you bully on children :)
I wasn't gonna roast you but this joint was on my chest
How you own a lot of Chickens and some Donkeys but still can't make any food?

I was watching your old videos on agar.io, you were bad seriously!
How you make all of those videos but barely any skill?
You got a house up in the sweden, and you get big YouTube checks
How you play all day but you got no skill?

I know your subs gone watch this song like who's this boy to roast her
But by the time I finish roasting you they gone remember me
You get millions on ya vids so I guess you get a cookie
But if roasting had a rank, I'm a legend you a rookie !!!!

I see you be with your per sushi, ask it if it even likes you!!!
Tell me why you act so nice 
You always bully kids, now it's me what you gone do
And if you try to diss me back I promise you will get round 2

And just to keep it going man I think you kinda weird
Why you let a kid roast you like this?
Sike Nah, I'm just playing hope you don't take no offense
But if you feel some type of way don't waste your time in my comments

I know I'm bout just a kid but you are an elderly!!!
Stop eating all that sushi go get you some muscle 
Yeah my name Chu da boss and you know what I do :sunglasses:

\`\`\`md
# by CHU CHU CHUUUUUUU\`\`\`
`).then( (message) => { setTimeout(() => { message.delete(); }, 120000); });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ellaro'],
  permLevel: 0
};

exports.help = {
  name: '6',
  description: 'a',
  usage: 'a'
};