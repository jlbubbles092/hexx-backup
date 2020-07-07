const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'nuke',
			group: 'fun',
			memberName: 'nuke',
			description: 'Nukes people!',
      args: [
          {
			      key: 'user',
			      prompt: 'Who would you like to nuke?',
			      type: 'string',
		    },
      ]
		});
	}

	run(message, { user }) {
    message.reply(`Nuked ${user}!`)
    message.channel.send(`${user}, you have been nuked by ${message.author}.,`)
  }
};