const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
    .setAuthor('Help :')
    .setDescription('Předpona : . (tečka)\n \n Seznam příkazů :')
    .addField('Help/info :', '`help`, `stats`, `donate`\n')
    .addField('Fun :', '`cow`, `kill`, `meme <typ>`, `pepe`, `cow`,  `qustion <otazka>`, `randommeme`, `rate <@někdo>`, `weather <lokalita>`, `nsfw` \n')
    message.channel.send(help)
message.delete();
}