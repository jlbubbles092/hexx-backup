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
    setTimeout(function() {
    message.edit(`Stealing credit card.`)
    }, 5000 );
    setTimeout(function() {
    message.edit(`Buying dresses and peanuts.`)
    }, 5000 );
    setTimeout(function() {
    message.edit(`Hacking wifi password.`)
    }, 5000 );
    setTimeout(function() {
    message.edit(`Buying $1,000,000 stuff and done! You can now put more commands.`)
    }, 5000 );
  }
};