module.exports = guild => {
    console.log(`I Joined ${guild.name} | ${guild.id} at ${new Date()} , Guild Info: 
    Region - ${guild.region}
    CreatedAt - ${guild.createdAt}
    Owner - ${guild.owner}
    MemberCount - ${guild.memberCount}
    Main room - ${guild.defaultChannel}
    Verification Level - ${guild.verificationLevel}`);

    guild.defaultChannel.send(`**[ \`✨\` | :sparkles: ]** **Hello** ${guild.owner} :smile: 

**About me: I am The MsBot | <@337708640079446017> , I've been created to help Discord , and I've been created by \`Fire\` and Ms Developers :two_hearts:** 

**What can I do?**
I can do many things, such as **Warn People**, **Mute People**, **Lockdown Server**, **Kick** ,**Ban..** etc.
You can try One of **Msp Values**, \`!msp\` for more type **[ \`!h msp\` ]**

If you want to see all of my **Commands** type **[ \`!help\` ]**
If you want to check the **Configurations and Custom Settings** about Your server type \`!set\` or \`!set2\`(for extended settings)

**Regards,
Ms Developers!**`);
};