module.exports.run = async (client, message, args,settings) => {
if(!message.member.hasPermission('MANAGE_GUILD'))return message.channel.send(`${client.config.emojis.error}Vous devez avoir la permission de gérer le serveur pour utiliser cette commande.`)
    const channel = await client.resolveChannel(message.guild, args[0])
    if(channel){
        client.updateGuild(message.guild, {modLogs : channel.id} )
        message.channel.send(`${client.config.emojis.success}Le salon de logs est maintanant <#${channel.id}> .`)
    }else{
        message.channel.send(`${client.config.emojis.error}Je n'ai pas trouvé ce salon.`)
    }
    
}
module.exports.help = {  
    name : 'setmodlogs',
    aliases : ['setmodlogs'],
    category : 'bot',
    description : 'Choisis un channel de logs pour les commandes de modération.',
    cooldown : 5,
    usage : '<action> <value>',
    exemple :['serveur name Spiritus'],
    permissions : false,
    isUserAdmin: false,
    args : false,
    sousCommdandes : ['serveur icon','serveur name','serveur region','serveur moderation','serveur invite-create','serveur webhook-create']
}
