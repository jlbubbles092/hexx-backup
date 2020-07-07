const { Command } = require('discord.js-commando');

module.exports = class HackCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'hack',
			group: 'fun',
			memberName: 'hack',
			description: 'Hacks people!',
      args: [
          {
			      key: 'user',
			      prompt: 'Who would you like to hack?',
			      type: 'string',
		    },
      ]
		});
	}

	run(message, { user }) {
    message.channel.send(`Starting to hack ${user}.`)
    setTimeout(5000)
  }
};