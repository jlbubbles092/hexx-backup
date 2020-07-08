const { Command } = require('discord.js-commando');

module.exports = class NukeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'minesweeper',
			group: 'fun',
			memberName: 'minesweeper',
			description: 'Plays minesweeper.',
		});
	}

	run(message) {
const Minesweeper = require('discord.js-minesweeper');
    
    const minesweeper = new Minesweeper({
      returnType: 'emoji'
    });
    var mines = minesweeper.start()
    message.channel.send(mines)
  }
};