const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
  commandPrefix: 'h!',
  owner: ['', '', '', ''],
  disableEveryone: true
});