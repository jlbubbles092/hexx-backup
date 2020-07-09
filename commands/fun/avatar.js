const { Command } = require('discord.js-commando')
const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = class AvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            aliases: ['avatar', 'avatars'],
            group: 'fun',
            memberName: 'avatar',
            description: 'Avatar of a person.',
            examples: ['avatar'],
        });  
    }

    run(message, args) {
    var member = message.mentions.members.first();
    let embed = new Discord.RichEmbed()
  .setImage(message.member.avatarURL)
  .setColor('#275BF0')
    message.channel.send(embed)
}
  }