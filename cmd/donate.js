const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let bicon = bot.user.displayAvatarURL;
let donateEmb = new Discord.RichEmbed()
.setColor("#00ff00")
.setTitle("Donate")
.setDescription("Donate for the bot trough this links!")
.addField("PayPal Donate", "[PayPal](https://paypal.me/teddik69?locale.x=cs_CZ)")
.setFooter("Donation links for the bot!")
.setThumbnail(bicon)

message.channel.send(donateEmb)

message.delete();

}

module.exports.help = {
  name: "donate"
}