const { Command } = require('discord.js-commando');

module.exports = class KickCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'servercount',
			group: 'misc',
			memberName: 'servercount',
			description: 'Server count of the bot.'
		});
	}

	run(message, args) { 
    const scount = this.client.guilds.size;
    message.channel.send(`i am is in ${scount} servers!`)
  }
};

//hey here https://discord.gg/3fmpAXQ