const Discord = require("discord.js");
const db = require("quick.db");
const dens = require('../densconfig.json')
module.exports.run = async (bot, message, args, utils) => {
  if(!message.content.startsWith(dens.prefix))return;  

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`para_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`banka_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setFooter(dens.altYazi)
  .setDescription(`**${user}'s Bakiyeleri**\n\nCepteki bakiye: \`${bal}\` ${dens.paraBirimi}\n Bankadaki bakiye: \`${bank}\` ${dens.paraBirimi}`);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"bakiye",
  aliases: ["para","cüzdan"]
}