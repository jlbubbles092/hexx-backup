const { Command } = require('discord.js-commando');
const GphApiClient = require("giphy-js-sdk-core");
var giphy = GphApiClient + giphyToken;
var giphyToken = process.env.GIPHYTOKEN;

module.exports = class RandomGifCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'rgif',
			group: 'fun',
			memberName: 'rgif',
			description: 'Takes a random gif from Giphy.',
		});
	}

	run(message) {
g    iphy.search('gifs', {"q": "punch, anime"})
        .then((response) => {
                    var totalResponses = response.data.length;
                    var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
                    var responseFinal = response.data[responseIndex]

        message.channel.send({
          files: [responseFinal.images.fixed_height.url]
        })
    });
  }
}