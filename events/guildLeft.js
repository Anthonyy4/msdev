module.exports = guild => {
    console.log(`I LEFT ${guild.name} | ${guild.id} at ${new Date()} , Guild Info: 
    Region - ${guild.region}
    CreatedAt - ${guild.createdAt}
    Owner - ${guild.owner}
    MemberCount - ${guild.memberCount}
    Main room - ${guild.defaultChannel}
    Verification Level - ${guild.verificationLevel}`)
};