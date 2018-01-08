var AWS_ACCESS_KEY_ID="4444"
var AWS_SECRET_ACCESS_KEY="123"
var AWS_REGION="eu-east-1"
const dynamoose = require('dynamoose');
const Discord = require('discord.js');
const settings = require('../settings.json');
const fs = require('fs');
exports.run = function(client, message, args) {

    var cmd = message.content.split(' ')[0]
    var cmd1 = message.content.split(' ')[1]
    var cmd2 = message.content.split(' ')[2]
    var cmd3 = message.content.split(' ')[3]
    var cmd4 = message.content.split(' ')[4]


var config = {}
if (cmd1 === 'set') {
    var server = config[message.guild.id]
    let newGreet = cmd2.replace(/[\<\>\@\#]/igm, "");
    let thisroom = client.channels.get(newGreet);
    var room = thisroom.name
    queue = []
    test = {
        id: 123,
        name: `${message.guild.name}`
    }

    queue.push(room)

    return message.channel.send(`set!` + room);
};

if (cmd1 === 'r') {
    return message.channel.send(`**Greet Room:** \`${queue}\` ${test.name} ${test.id}`);
    
}

message.channel.send(`n.`);
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'cds',
  description: '',
  aliases: '',  
  usage: '',
  permLevel: "Everyone"            
};
