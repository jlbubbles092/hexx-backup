const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class WarnCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'warn',
			group: 'admin',
			memberName: 'warn',
			description: 'Warns people.',
      userPermissions: ['MANAGE_MESSAGES'],
		});
	}

	run(message, args) {
let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.');
  if (reason.length < 1) return message.reply('You must have a reason for the warning.');

  let dmsEmbed = new Discord.RichEmbed()
  .setTitle("Warn")
  .setColor("#00ff00")
  .setDescription(`You have been warned on \`${message.guild.name}\``)
  .addField("Warned by", message.author.tag)
  .addField("Reason", reason);

  user.send(dmsEmbed);

  message.delete();
  
  message.channel.send(`${user.tag} has been warned by ${message.author}.`)

  }
}
