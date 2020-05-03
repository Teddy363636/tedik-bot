const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Musíš mít roli 18+ a být v kanále 🔞NSFW🔞.")
    superagent.get('https://nekos.life/api/v2/img/Random_hentai_gif')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Hentai")
      .setImage(response.body.url)
      .setColor(`#000000`)
      .setFooter(`Tags: gif`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
  message.delete();
    })

}