const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class InviteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'misc',
            memberName: 'invite',
            description: 'Sends invite link in embed form.',
        });    
    }

    run(msg, args) {
        const embed = new RichEmbed()
            .setDescription(`My support server is https://discord.gg/3fmpAXQ ,\nWhenever you need help, join that server and use Hexx Modmail or the support channel.`)
            .setAuthor(msg.author.username, msg.author.displayAvatarURL)
            .setColor(0x00AE86)
            .setTimestamp();
        return msg.embed(embed);
    }
};