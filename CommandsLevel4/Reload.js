exports.run = (client, message, args) => {
  
  message.delete();
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.send(`:warning: \`I\` **Cannot Find The Command : ** \`[ ${args[0]} ]\` `);
  } else {
    message.channel.send(`**Command Reloading : ** \`[ ${command} ]\` :arrows_counterclockwise: `)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`**Successfully Reloaded Command : ** \`[ ${command} ]\` :recycle:  `);
          })
          .catch(e => {
            m.edit(`**Command Reload failed : ** \`[ ${command}\n\`\`\`${e.stack}\`\`\` ]\``);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rd'],
  permLevel: 4
};

exports.help = {
  name: 'reload',
  description: 'Access: Creator',
  usage: '!rd',
  permLevel: "Owner"  
};