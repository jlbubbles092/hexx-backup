const { Command } = require('discord.js-commando');

module.exports = class KickCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'purge',
			group: 'admin',
			memberName: 'purge',
			description: 'Purges many messages you want.',
      clientPermissions: ['MANAGE_MESSAGES'],
      userPermissions: ['MANAGE_MESSAGES'],
      args: [
        {
          key: 'purgeNumber',
          prompt: 'How many messages would you like to delete?',
          type: 'string'
        }
      ]
		});
	}

	run(message, { purgeNumber }) {
    
  }
};