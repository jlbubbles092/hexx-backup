const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");
const { Command } = require('discord.js-commando');

module.exports = class MemeCommand extends Command {
  constructor(client) {
		super(client, {
    name: "meme",
    group: "fun",
    memberName: "meme",
    description: "Sends an epic meme",
});
  }
    async run(client, message, args) {

        const subReddits = ["dankmeme", "meme", "me_irl"];
        // Grab a random property from the array
        let random = subReddits[Math.floor(Math.random() * subReddits.length)];


        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("#ff2050")
            .setDescription("Here is a meme for you!")
    }

}//it works?
