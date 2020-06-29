const { MessageEmbed } = require("discord.js") 
module.exports.run = async (client, message, args,settings) => {
    if(!message.guild.me.hasPermission('MANAGE_EMOJIS')) return message.channel.send(`${client.config.emojis.FALSE}Je n'ai pas la permission de gérer les emojis.`);
    if(!message.member.hasPermission('MANAGE_EMOJIS'))return message.channel.send(`${client.config.emojis.FALSE}Vous devez avoir la permission de gérer les emojis pour utiliser cette commande !`)
    if(!args[0]){
      const embed = new MessageEmbed()
      .setTitle('Commande emoji')
      .setDescription('La commande `emoji` permet de gérer les emojis du serveur graces aux sous commandes suivantes :')
      .addFields(
          { name: '\u200b', value: `${client.config.emojis.FLECHE}\`emoji liste\` permet voir les emojis du serveur.`, inline: false },
          { name: '\u200b', value: `${client.config.emojis.FLECHE}\`emoji create\` permet de crée un emoji.`, inline: false },
          { name: '\u200b', value: `${client.config.emojis.FLECHE}\`emoji update\` permet de mettre a jour le nom d\`un emoji.`, inline: false },
          { name: '\u200b', value: `${client.config.emojis.FLECHE}\`emoji delete\` permet de supprimer un emoji.`, inline: false }
      )
      .setTimestamp()
      .setFooter('BOT ID : 689210215488684044')
      return message.channel.send(embed)
    }
    if(args[0].toLowerCase() === 'liste'){
      const emojiList = message.guild.emojis.cache.map(e=>e.toString()).join(" ");
      const embed = new MessageEmbed()
       .setTitle('Liste des emojis du serveur')
       .setDescription(emojiList)
       .setTimestamp()
       .setFooter('BOT ID : 689210215488684044')
      message.channel.send(embed)
    //--------------------------------------EMOJIS-CREATE------------------------------------------------------
    }
    if(args[0].toLowerCase() === 'create'){
            const emojiCreateDescription = new MessageEmbed()
            .setTitle(`Sous commande : ${settings.prefix}emoji create`)
            .setColor(client.config.color.EMBEDCOLOR)
            .setDescription(`**Module :** Manangement\n**Description :** Permet de crée un emoji sur le serveur\n**Usage :** [nom] (URL/Attachement)\n**Exemples :** \n ${settings.prefix}emoji create Spiritus https://cdn.discordapp.com/emojis/713121641701572698.png`)
            .setFooter('BOT ID : 689210215488684044')
            .setTimestamp()
            if(!args[1])return message.channel.send(emojiCreateDescription)
            if(args[1].includes('-')||args[1].includes('/')||args[1].includes('/')||args[1].includes('+')||args[1].includes('*')||args[1].includes('(')||args[1].includes(')')||args[1].includes('[')||args[1].includes(']')||args[1].includes('{')||args[1].includes('}')||args[1].includes('#')||args[1].includes('~')||args[1].includes('@')||args[1].includes('&')||args[1].includes('^')||args[1].includes('$')||args[1].includes('€')||args[1].includes('°')||args[1].includes('%')||args[1].includes('£')||args[1].includes(',')||args[1].includes('<')||args[1].includes('>')) return message.channel.send(`${client.config.emojis.FALSE}Le nom de l'emoji n'est pas valide`);
            let nom_emoji = args[1]
            let emoji = '';
            if(message.attachments.first()){
              emoji = message.attachments.first().url
            }else{
              emoji = args[2]
            }
            if(!message.attachments.first() && !args[2]) return message.channel.send(`${client.config.emojis.FALSE}Une erreur s'est produite.Verifiez que vous utiliser correctement la commande.`);
            if(!message.attachments.first() && !args[2].includes('http'||'https'&&'.png'||'.gif'||'.jpg'||'jpeg'))return message.channel.send(`${client.config.emojis.FALSE}Le lien n'est pas valide.Merci de spécifier le lien d'une image`);
            if(nom_emoji.length < 2) return message.channel.send(`${client.config.emojis.FALSE}Le nom de l'emoji doit contenir au moins 2 caractères`);
            const embed = new MessageEmbed()
            embed.setTitle('Emoji create')
            embed.setThumbnail(emoji)
            embed.setColor(client.config.color.VERT)
            embed.addFields({ name: 'Nom :', value: `${nom_emoji}`, inline: true })
            embed.setTimestamp()
            embed.setFooter('BOT ID : 689210215488684044', `${message.guild.iconURL()}`);
            //-------------------------------------CREATION EMOJI -----------------------------------------
            try{            
              await  message.guild.emojis.create(emoji, nom_emoji)
              .then(message.channel.send(embed))
              .catch(console.error);
        
            }catch(err){
              message.channel.send(`${client.config.emojis.FALSE}Une erreur s'est produite merci de ressayer`);
              client.channels.cache.get('725251200660013136').send(`Une erreur sur la commande \`emoji-create\` s'est produite sur le serveur : ${message.guild.name}.\n\`ERREUR :\`\n\`\`\`xl\n${err}\`\`\``);
            }
    //--------------------------------------EMOJIS-UPDATE------------------------------------------------------
    }
    if(args[0].toLowerCase() === 'update'){
      const emojiUpdateDescription = new MessageEmbed()
            .setTitle(`Sous commande : ${settings.prefix}emoji update`)
            .setColor(client.config.color.VERT)
            .setDescription(`**Module :** Manangement\n**Description :** Permet de modifier le nom d'un emoji sur le serveur\n**Usage :** [nom] (Nouveau nom)\n**Exemples :** \n ${settings.prefix}emoji update BOT Spiritus`)
            .setFooter('BOT ID : 689210215488684044')
            .setTimestamp()
            if(!args[1])return message.channel.send(emojiUpdateDescription)
            if(!args[2]) return message.channel.send(`${client.config.emojis.FALSE}Veuillez donner un nom au nouvel emoji`);
            if(args[2].includes('-')||args[2].includes('/')||args[2].includes('/')||args[2].includes('+')||args[2].includes('*')||args[2].includes('(')||args[2].includes(')')||args[2].includes('[')||args[2].includes(']')||args[2].includes('{')||args[2].includes('}')||args[2].includes('#')||args[2].includes('~')||args[2].includes('@')||args[2].includes('&')||args[2].includes('^')||args[2].includes('$')||args[2].includes('€')||args[2].includes('°')||args[2].includes('%')||args[2].includes('£')||args[2].includes(',')||args[2].includes('<')||args[2].includes('>')) return message.channel.send(`${client.config.emojis.FALSE}Le nom de l'emoji n'est pas valide`);
            let emo = client.emojis.cache.find(emoji => emoji.name === args[1]);
            if(emo){
               let emoticon = client.emojis.cache.find(emoji => emoji.name === args[1]);
               let newNameEmot = args[2];
               if(newNameEmot.length < 2) return message.channel.send(`${client.config.emojis.FALSE}Le nom de l'emoji doit contenir au moins 2 caractères`);
               const embed = new MessageEmbed()
               .setTitle('Emoji update')
               .setThumbnail(emo.url)
               .setColor(client.config.color.VERT)
               .addFields({ name: 'Ancien nom :', value: `${args[1]}`, inline: true },
               { name: 'Nouveau nom', value: `${newNameEmot}`, inline: true })
               .setTimestamp()
               .setFooter('BOT ID : 689210215488684044', `${message.guild.iconURL()}`);
               try{
                   await emoticon.edit({ name: newNameEmot})
                   await message.channel.send(embed)
               }catch(err){
                   message.channel.send(`${client.config.emojis.FALSE}Une erreur s'est produite merci de ressayer`)
                   client.channels.cache.get('725251200660013136').send(`Une erreur sur la commande \`emoji-update\` s'est produite sur le serveur : ${message.guild.name}.\n\`ERREUR :\`\n\`\`\`xl\n${err}\`\`\``)
               }
       
             }else if(args[1].includes('>','<')){
               let newNameEmot = args.slice(2).join("_")
               if(newNameEmot.length < 2) return message.channel.send(`${client.config.emojis.FALSE}Le nom de l'emoji doit contenir au moins 2 caractères`);
               let emoo = args[1]
               let emojiString = emoo.replace(/<.*:/, '').slice(0, -1);
               const embed = new MessageEmbed()
               .setTitle('Emoji update')
               .setThumbnail(message.guild.emojis.cache.get(emojiString).url)
               .setColor(client.config.color.VERT)
               .addFields(
               { name: 'Emoji :', value: `${args[1]}`, inline: true },
               { name: 'Nouveau nom', value: `${newNameEmot}`, inline: true })
               .setTimestamp()
               .setFooter('BOT ID : 689210215488684044', `${message.guild.iconURL()}`);
               try{
                   message.guild.emojis.cache.get(emojiString).edit({ name: newNameEmot });
                   message.channel.send(embed);
               }catch(err){
                   message.channel.send(`${client.config.emojis.FALSE}Une erreur s'est produite merci de ressayer`)
                   client.channels.cache.get('725251200660013136').send(`Une erreur sur la commande \`emoji-update\` s'est produite sur le serveur : ${message.guild.name}.\n\`ERREUR :\`\n\`\`\`xl\n${err}\`\`\``);
                   return;
               }
               
             }else{
               return message.channel.send(`${client.config.emojis.FALSE}Une erreur s\'est produite... Verifiez que l\'emoji est correctement orthographier.`);
             }

    //-------------------------------------------EMOJIS-DELETE----------------------------------------------------
    }
    if(args[0].toLowerCase() === 'delete'){
      const emojiDeleteDescription = new MessageEmbed()
          .setTitle(`Sous commande : ${settings.prefix}emoji delete`)
          .setColor(client.config.color.EMBEDCOLOR)
          .setDescription(`**Module :** Manangement\n**Description :** Permet de supprimer un emoji sur le serveur\n**Usage :** [nom]\n**Exemples :** \n ${settings.prefix}emoji delete Spiritus`)
          .setFooter('BOT ID : 689210215488684044')
          .setTimestamp()
          if(!args[1])return message.channel.send(emojiDeleteDescription)
        let emo = client.emojis.cache.find(emoji => emoji.name === args[1])
        if(emo){
            //emoji-nom
            const embed = new MessageEmbed()
            .setTitle('Emoji delete')
            .setThumbnail(emo.url)
            .setColor(client.config.color.VERT)
            .addFields(
            { name: 'Nom :', value: `${args[1]}`, inline: true },
            )
            .setTimestamp()
            .setFooter('BOT ID : 689210215488684044', `${message.guild.iconURL()}`);
            try{
                message.channel.send(embed)
                emo.delete()

            }catch(err){
                //message.channel.send(`${client.config.emojis.FALSE}Une erreur s'est produite merci de réessayer`);
                client.channels.cache.get('725251200660013136').send(`Une erreur sur la commande \`emoji-delete\` s'est produite sur le serveur : ${message.guild.name}.\n\`ERREUR :\`\n\`\`\`xl\n${err}\`\`\``);
                return;
            };
            
            }else if(args[1].includes('>','<')){
                //emoji-taper
                let emoo = args[1]
                let emojiString = emoo.replace(/<.*:/, '').slice(0, -1);
                console.log(emojiString)
                const embed = new MessageEmbed()
                .setTitle('Emoji delete')
                .setThumbnail(message.guild.emojis.cache.get(emojiString).url)
                .setColor(client.config.color.VERT)
                .addFields(
                { name: 'Emoji :', value: `${message.guild.emojis.cache.get(emojiString)}`, inline: true })
                .setTimestamp()
                .setFooter('BOT ID : 689210215488684044', `${message.guild.iconURL()}`);
                try{
                    message.channel.send(embed)
                    message.guild.emojis.cache.get(emojiString).delete()

                }catch(err){
                    //message.channel.send(`${client.config.emojis.FALSE}Une erreur s'est produite merci de réessayer`);
                    client.channels.cache.get('725251200660013136').send(`Une erreur sur la commande \`emoji-delete\` s'est produite sur le serveur : ${message.guild.name}.\n\`ERREUR :\`\n\`\`\`xl\n${err}\`\`\``);
                    return;
                };
            
        }else{
            message.channel.send(`${client.config.emojis.FALSE}Je n\'ai pas trouver cet emoji... Essayez vérifiez son orthographe et qu'il est bien sur le serveur`)
        }
    }//Commande 1 (delete)
}
module.exports.help = {
    
    name : 'emojis',
    aliases : ['emojis','emoji','emots'],
    category : 'manangement',
    description : 'Permet de gérer les emojis du serveur.',
    cooldown : 5,
    usage : '<action> <args>',
    exemple :["emoji create lien Spiritus "],
    permissions : false,
    isUserAdmin: false,
    args : false,
    sousCommdandes : ["emojis liste","emojis create","emojis update","emoji delete"]

}
