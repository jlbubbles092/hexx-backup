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
        
    }
};