const settings = require('../settings.json')
const JSONdb = require('simple-json-db');
const admin = new JSONdb('./database/admin/admin.json');
const staff = new JSONdb('./database/staff/staff.json');
const memverified = new JSONdb('./database/memverified/memverified.json');
const devmode = new JSONdb('./database/devmode/devmode.json');
exports.run = function(client, message, args, guild, member) {
    let devmodeon = devmode.has("<@" + message.guild.id + ">");    
    if (devmodeon) return message.reply(`**[ Access Denied :information_source: ]** **-** **I'm Currently In Developing Mode!]**`).then((message) => { setTimeout(() => { message.delete(); }, 7000)});

    let admins = admin.get("<@" + message.guild.id + ">");
    let staffs = staff.get("<@" + message.guild.id + ">");
    let verified = memverified.get("<@" + message.guild.id + ">");    
    let staffRole = client.guilds.get(message.guild.id).roles.find('name', `${staffs}`);    
    let adminRole = client.guilds.get(message.guild.id).roles.find('name', `${admins}`);    
    let verifiedRole = client.guilds.get(message.guild.id).roles.find('name', `${verified}`); 
    let user = message.author;
    var cmd1 = message.content.split(' ')[1];
    var usermention = message.mentions.users.first();
    
    if(message.author.id === "310538530545729537") {
        return message.channel.send(`**[ :beginner: ]** ${user} You **Member Verified** Access on **${message.guild.name}** **| [\`👤\`] Globally an Ms Mouse!**`);        

    }

    if(usermention) {
        if(message.guild.member(usermention).hasPermission('ADMINISTRATOR')) {
            if(usermention.id === settings.ownerid) {
                return message.channel.send(`**[ :key2: ]** ${usermention} Has **Server Administrator** Access on **${message.guild.name}** **| [\`👤\`] Globally an Ms Developer!**`)            
            }
        } else {
            if(message.guild.member(usermention).roles.has(adminRole.id)) { 
                if(usermention.id === settings.ownerid) {
                return message.channel.send(`**[ :crossed_swords: ]** ${usermention} Has **Administrator** Access on **${message.guild.name}** **| [\`👤\`] Globally an Ms Developer!**`);            
            }
        } else {
            if(message.guild.member(usermention).roles.has(staffRole.id)) {     
                if(usermention.id === settings.ownerid) {
                    return message.channel.send(`**[ :shield: ]** ${usermention} Has **Staff/Moderator** Access on **${message.guild.name}** **| [\`👤\`] Globally an Ms Developer!**`);                
            }       
        } else {
            if(message.guild.member(usermention).roles.has(verifiedRole.id)) {
        if(usermention.id === settings.ownerid) {
            return message.channel.send(`**[ :beginner: ]** ${usermention} Has **Member Verified** Access on **${message.guild.name}** **| [\`👤\`] Globally an Ms Developer!**`);        
            }            
        } else {
            return message.reply(`**[ :x: ]** **This user Does not Have any Special Access!** **| [\`👤\`] Globally an Ms Developer!**`);                     
                }   
            }
        }
    }       
    
    
        if(message.guild.member(usermention).hasPermission('ADMINISTRATOR')) {
            if(usermention.id === settings.devid) {
                return message.channel.send(`**[ :key2: ]** ${usermention} Has **Server Administrator** Access on **${message.guild.name}** **| [\`👤\`] Globally an Ms Developer!**`)            
            }
        } else {
            if(message.guild.member(usermention).roles.has(adminRole.id)) { 
                if(usermention.id === settings.devid) {
                return message.channel.send(`**[ :crossed_swords: ]** ${usermention} Has **Administrator** Access on **${message.guild.name}** **| [\`👤\`] Globally an Ms Developer!**`);            
            }
        } else {
            if(message.guild.member(usermention).roles.has(staffRole.id)) {     
                if(usermention.id === settings.devid) {
                    return message.channel.send(`**[ :shield: ]** ${usermention} Has **Staff/Moderator** Access on **${message.guild.name}** **| [\`👤\`] Globally an Ms Developer!**`);                
            }       
        } else {
            if(message.guild.member(usermention).roles.has(verifiedRole.id)) {
        if(usermention.id === settings.devid) {
            return message.channel.send(`**[ :beginner: ]** ${usermention} Has **Member Verified** Access on **${message.guild.name}** **| [\`👤\`] Globally an Ms Developer!**`);        
            }            
        } else {
            return message.reply(`**[ :x: ]** **This user Does not Have any Special Access!** **| [\`👤\`] Globally an Ms Developer!**`);                     
                }   
            }
        }
    }       
    
        
        if (message.guild.member(usermention).hasPermission('ADMINISTRATOR')) {
            return message.channel.send(`**[ :key2: ]** ${usermention} Has **Server Administrator** Access on **${message.guild.name}**`)
        } else {
        
        if (message.guild.member(usermention).roles.has(adminRole.id)) {
            return message.channel.send(`**[ :crossed_swords: ]** ${usermention} Has **Administrator** Access on **${message.guild.name}**`);       
        } else {
            if (message.guild.member(usermention).roles.has(staffRole.id)) {
                return message.channel.send(`**[ :shield: ]** ${usermention} Has **Staff/Moderator** Access on **${message.guild.name}**`);     
            } else {
                if (message.guild.member(usermention).roles.has(verifiedRole.id)) {
                    return message.channel.send(`**[ :beginner: ]** ${usermention} Has **Member Verified** Access on **${message.guild.name}**`);                
                };
            };      
        };
        message.reply(`**[ :x: ]** **This User Does not Have any Special Access!**`);
    };
    
    } else {
        if(message.guild.member(user).hasPermission('ADMINISTRATOR')) {
            if(message.author.id === settings.ownerid) {
                return message.channel.send(`**[ :key2: ]** ${user} You have **Server Administrator** Access on **${message.guild.name}** **| [\`👤\`] Globally an Ms Developer!**`)            
            }
        } else {
            if(message.guild.member(user).roles.has(adminRole.id)) { 
                if(message.author.id === settings.ownerid) {
                return message.channel.send(`**[ :crossed_swords: ]** ${user} You have **Administrator** Access on **${message.guild.name}** **| [\`👤\`] Globally an Ms Developer!**`);            
            }
        } else {
            if(message.guild.member(user).roles.has(staffRole.id)) {     
                if(message.author.id === settings.ownerid) {
                    return message.channel.send(`**[ :shield: ]** ${user} You have **Staff/Moderator** Access on **${message.guild.name}** **| [\`👤\`] Globally an Ms Developer!**`);                
            }       
        } else {
            if(message.guild.member(user).roles.has(verifiedRole.id)) {
        if(message.author.id === settings.ownerid) {
            return message.channel.send(`**[ :beginner: ]** ${user} You have **Member Verified** Access on **${message.guild.name}** **| [\`👤\`] Globally an Ms Developer!**`);        
            }            
        } else {
            return message.reply(`**[ :x: ]** **You Do not Have any Special Access!** **| [\`👤\`] Globally an Ms Developer!**`);                     
                }   
            }
        }
    }       
    
    
        if(message.guild.member(user).hasPermission('ADMINISTRATOR')) {
            if(message.author.id === settings.devid) {
                return message.channel.send(`**[ :key2: ]** ${user} You have **Server Administrator** Access on **${message.guild.name}** **| [\`👤\`] Globally an Ms Developer!**`)            
            }
        } else {
            if(message.guild.member(user).roles.has(adminRole.id)) { 
                if(message.author.id === settings.devid) {
                return message.channel.send(`**[ :crossed_swords: ]** ${user} You have **Administrator** Access on **${message.guild.name}** **| [\`👤\`] Globally an Ms Developer!**`);            
            }
        } else {
            if(message.guild.member(user).roles.has(staffRole.id)) {     
                if(message.author.id === settings.devid) {
                    return message.channel.send(`**[ :shield: ]** ${user} You have **Staff/Moderator** Access on **${message.guild.name}** **| [\`👤\`] Globally an Ms Developer!**`);                
            }       
        } else {
            if(message.guild.member(user).roles.has(verifiedRole.id)) {
        if(message.author.id === settings.devid) {
            return message.channel.send(`**[ :beginner: ]** ${user} You have **Member Verified** Access on **${message.guild.name}** **| [\`👤\`] Globally an Ms Developer!**`);        
            }            
        } else {
            return message.reply(`**[ :x: ]** **You Do not Have any Special Access!** **| [\`👤\`] Globally an Ms Developer!**`);                     
                }   
            }
        }
    }       
            
        
                if(message.guild.member(user).hasPermission('ADMINISTRATOR')) {                    
                    return message.channel.send(`**[ :key2: ]** ${user} You have **Server Administrator** Access on **${message.guild.name}** `)
        } else {
                    if(message.guild.member(user).roles.has(adminRole.id)) {
                          return message.channel.send(`**[ :crossed_swords: ]** ${user} You have **Administrator** Access on **${message.guild.name}**`);
            } else {
                        if(message.guild.member(user).roles.has(staffRole.id)) {
                              return message.channel.send(`**[ :shield: ]** ${user} You have **Staff/Moderator** Access on **${message.guild.name}**`);
             } else {
                        if(message.guild.member(user).roles.has(verifiedRole.id)) {
                              return message.channel.send(`**[ :beginner: ]** ${user} You have **Member Verified** Access on **${message.guild.name}**`);
             } else {
                return message.reply(`**[ :x: ]** **You Do not Have any Special Access!**`);             
                }   
            } 
        }
    } 
    
    }


    

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['access'],
    permLevel: 0
};
      
exports.help = {
     name: 'access',
     aliases: ['access'],     
    description: 'check access',
    usage: '!access',
    permLevel: "Everyone"
};
