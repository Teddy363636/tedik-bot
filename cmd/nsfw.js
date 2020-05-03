const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Musíš mít roli 18+ a být v kanále 🔞NSFW🔞.")
    var help = new Discord.RichEmbed()
    .setAuthor('Help :')
    .setDescription('Předpona : . (tečka)\n \n Seznam příkazů :')
    .addField('Help/info :', '`help`, `stats`, `donate`\n')
    .addField('NSFW  :underage: :', '`4k`, `ass`, `pussy`, `gif`, `blow`, `boobs`, `cowgirl`, `cream`, `doggy`, `front`, `hentai`\n')
    message.channel.send(help);
 message.delete();
}