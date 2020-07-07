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
    message.edit(`Stealing credit card.`)
    setTimeout(5000)
    message.edit(`Buying dresses and peanuts.`)
    setTimeout(5000)
    message.edit(`Hacking wifi password.`)
    setTimeout(5000)
    message.edit(`Buying $1,000,000 stuff and done! You can now put more commands.`)
  }
};