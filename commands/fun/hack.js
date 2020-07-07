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
			      prompt: 'Who would you like to murder?',
			      type: 'string',
		    },
      ]
		});
	}

	run(message, { user }) {
    message.reply(`Killed ${user}!`)
    message.channel.send(`${user}, your dead forever.`, { files: ["https://media.giphy.com/media/PnhOSPReBR4F5NT5so/giphy.gif"] });
  }
};