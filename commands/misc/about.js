const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class AboutCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'about',
            group: 'misc',
            memberName: 'about',
            description: 'Sends information about this bot.',
        });    
    }

    run(message) {
      const embedMessage = Discord.MessageEmbed()
    }
};