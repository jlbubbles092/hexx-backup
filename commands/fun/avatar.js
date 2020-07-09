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
            examples: ['h!avatar @user'],
            args: [
              {
                key: 'keyAvatar',
                prompt: 'Who\'s avatar you want?',
                type: 'string'
              }
            ]
          
        });  
    }

    run(message, { keyAvatar }) {
    var member = keyAvatar
    let embed = new Discord.RichEmbed()
  .setImage(keyAvatar.avatarURL)
  .setColor('#275BF0')
    message.channel.send(embed)
}
  }