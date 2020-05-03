const Discord = require("discord.js");
module.exports.run = (client, message, args) => {

    var superagent = require('superagent');

    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Musíš mít roli 18+ a být v kanále 🔞NSFW🔞.")

    var lo = new Discord.RichEmbed()
                .setTimestamp()

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: '4k'}).end((err, response) => {

            var embed_nsfw = new Discord.RichEmbed()
                .setTimestamp()
                .setImage(response.body.message)
            
            m.edit(embed_nsfw);
        });
    });
}
