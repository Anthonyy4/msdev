const JSONdb = require('simple-json-db');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args) {
  let devmodeon = devmode.has("<@" + message.guild.id + ">");  
  if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});
  
    message.reply(`[ **Proverb** ] ${proverbs[Math.floor(Math.random() * proverbs.length)]}`);
};

var proverbs = [
    'A bad penny always turns up.',
    'A barking dog never bites.',
    'A bird in the hand is worth two in the bush.',
    'A cat may look at a king.',
    'A chain is only as strong as its weakest link.',
    'A change is as good as a rest.',
    'A dog is a man\'s best friend.',
    'A drowning man will clutch at a straw.',
    'A fish always rots from the head down.',
    'A fool and his money are soon parted.',
    'A friend in need is a friend indeed.',
    'A golden key can open any door.',
    'A good beginning makes a good ending.',
    'A good man is hard to find.',
    'A house divided against itself cannot stand.',
    'A person is known by the company he keeps.',
    'A house is not a home.',
    'A journey of a thousand miles begins with a single step.',
    'A leopard cannot change its spots.',
    'A little knowledge is a dangerous thing.',
    'A little learning is a dangerous thing.',
    'A little of what you fancy does you good.',
    'A man is known by his friends.',
    'A man who is his own lawyer has a fool for his client.',
    'A miss is as good as a mile.',
    'A new broom sweeps clean.',
    'A nod\'s as good as a wink to a blind horse.',
    'A penny saved is a penny earned.',
    'A picture paints a thousand words.',
    'A place for everything and everything in its place.',
    'A poor workman always blames his tools.',
    'A person is known by the company he keeps.',
    'A problem shared is a problem halved.',
    'A prophet is not recognized in his own land.',
    'A rising tide lifts all boats.',
    'A rolling stone gathers no moss.',
    'A soft answer turneth away wrath.',
    'A stitch in time saves nine.',
    'A swarm in May is worth a load of hay; a swarm in June is worth a silver spoon; but a swarm in July is not worth a fly.',
    'A thing of beauty is a joy forever.',
    'A trouble shared is a trouble halved.',
    'A volunteer is worth twenty pressed men.',
    'A watched pot never boils.',
    'A woman is only a woman, but a good cigar is a smoke.',
    'A woman\'s place is in the home.',
    'A woman\'s work is never done.',
    'A word to the wise is enough.'
    ];

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p','P'],
  permLevel: 0
};

exports.help = {
  name: 'proverbs',
  aliases: ['p','P'],  
  description: 'Intresting proverbs',
  usage: '!p',
  permLevel: "Everyone"            
};