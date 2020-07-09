 const { Command } = require('discord.js-commando');

module.exports = class SlowmodeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'slowmode',
			group: 'admin',
			memberName: 'slowmode',
			description: 'Slowmodes a channel.',
		});
	}

	run(message) {
    var time = message.content.split(' ').slice(1).join(' ')
    if(!time) return message.reply('Please enter a time in seconds!')
    message.channel.setRateLimitPerUser(time)
    message.channel.send('Set the slowmode!')
  }
};