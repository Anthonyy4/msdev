exports.run = function(client, message, args, guild, member) {
    message.delete();
    message.channel.send(`:muscle::skin-tone-1:`).then((message) => { setInterval(() => { message.edit(color[Math.floor(Math.random() * color.length)]) },1)});
            };
            var color = [
                ':muscle::skin-tone-1:',
                ':muscle::skin-tone-2:',
                ':muscle::skin-tone-3:',
                ':muscle::skin-tone-4:',
                ':muscle::skin-tone-5:'
            ];
            exports.conf = {
                enabled: true,
                guildOnly: false,
                aliases: ['-muscle'],
                permLevel: 4
              };
              
              exports.help = {
                name: '-colorful',
                description: 'hey',
                usage: 'muscle'
              };
        