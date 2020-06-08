const { MessageEmbed } = require("discord.js");
const {TRUE, FALSE} = require('./../../configstyle')
module.exports.run = async (client, message, args) => {
    if(!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(`${FALSE}Je n'ai pas la permission pour renomer un utilisateur.`);

    let utilisateur = message.mentions.members.first();
    let newName = args.slice(1).join(" ");
    if(newName.length > 12) return message.channel.send(`${FALSE}Vous ne pouvez pas choisir un pseudo qui fais plus de 12 caractères.`)
    if(newName.length < 2) return message.channel.send(`${FALSE}Vous ne pouvez pas choisir un pseudo qui fais moins de 2 caractères.`)
    
    utilisateur.setNickname(newName)
    .then(message.channel.send(`${TRUE}J'ai bien changer le nom de l'utilisateur ${utilisateur} par ${newName}.`))
    //.catch(message.channel.send(`${FALSE}Une erreur s'est produite merci de réessayer.`))

};

module.exports.help = {
  name: "rename",
  aliases: ['rename','rname'],
  category : 'moderation',
  description: "Change le pseudo d'un utilisateur",
  cooldown: 10,
  usage: '<@user> <new_name>',
  exemple :["rename @Smaug Dragon"],
  isUserAdmin: false,
  permissions: true,
  args: true
};