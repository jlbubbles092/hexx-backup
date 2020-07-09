const Discord = require("discord.js");
const request = require("node-fetch");
const { Command } = require('discord.js/commando')

module.exports = class CaptchaCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'captcha',
            group: 'misc',
            memberName: 'captcha',
            description: 'Does captcha.',
        });    
    }

async run(bot, message, args, tools) {
  const avatarURL = message.author.displayAvatarURL
  const username = message.author.username;
  request(`https://nekobot.xyz/api/imagegen?type=captcha&url=${avatarURL}&username=${username}`)
    .then(i => i.json())
    .then(async body => {
      const embed = new Discord.RichEmbed()
        .setAuthor("Bot - Captcha", bot.user.avatarURL)
        .setImage(body.message)
        .setColor("2f3136")
        .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL, `Made by <@720353244307783863>.`)
        .setTimestamp();
      return await message.channel.send(embed);
      });
    };
}; 