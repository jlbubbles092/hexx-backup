const { CommandoClient, SQLiteProvider } = require('discord.js-commando');
const path = require('path');
const sqlite = require('sqlite');

const client = new CommandoClient({
  commandPrefix: 'h!',
  unknownCommandResponse: false,
  owner: ['678941697488584734', '613364629464285316', '684519096788058145', '719252298811047936'],
  disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['admin', 'Admin-Only Commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log(`Logged in to ${client.user.tag}!`);
    client.user.setActivity(`with Commando! Use ${client.commandPrefix}help to see a list of commands.`);
});

client.login(process.env.TOKEN);