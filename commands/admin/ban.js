const { Command } = require('discord.js-commando');

module.exports = class KickCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ban',
			group: 'admin',
			memberName: 'ban',
			description: 'Bans a member/bot. Note: Bot role needs to be higher than the member/bot.',
		});
	}

	run(message) {
const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}!`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member.');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
};
// take tutorials. use setup guides, you'll get the hang of it. 