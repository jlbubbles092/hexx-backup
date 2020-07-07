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
    message.edit(`Stealing credit card.`)
    message.edit(`Buying dresses and peanuts.`)
    message.edit(`Hacking wifi password.`)
    message.edit(`Buying $1,000,000 stuff and done! You can now put more commands.`)
  }
};