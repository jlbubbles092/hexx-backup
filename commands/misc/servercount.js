const { Command } = require('discord.js-commando');
const RichEmbed = require('discord.js');

module.exports = class ServerCountCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'servercount',
            group: 'misc',
            memberName: 'servercount',
            description: 'Shows the server count in embed form.',
        });    
    }

    run(msg, args) {
        const scount = this.client.guilds.cache.size;
        const embed = new RichEmbed.MessageEmbed()
            .setDescription(`I am in ${scount} servers!`)
            .setAuthor(msg.author.username, msg.author.displayAvatarURL)
            .setColor(0x00AE86)
            .setTimestamp();
        return msg.embed(embed);
    }
};