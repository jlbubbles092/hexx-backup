const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const discord = require('discord.js');

const client = new CommandoClient({
  commandPrefix: 'h!',
  unknownCommandResponse: false,
  owner: ['678941697488584734', '613364629464285316', '684519096788058145', '719252298811047936', '720353244307783863'],
  disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['admin', 'Admin-Only Commands'],
        ['misc', 'Important or Not-Important Stuff.'],
        ['fun', 'Fun Commands!']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log(`Logged in to ${client.user.tag}!`);
    client.user.setActivity(`https://discord.gg/3fmpAXQ`);
});

const db = require("quick.db") //using quick.db package

client.on("guildMemberAdd", (member) => { //usage of welcome event
  let chx = db.get(`welchannel_${member.guild.id}`); //defining var
  
  if(chx === null) { //check if var have value or not
    return;
  }

  let wembed = new discord.MessageEmbed() //define embed
  .setAuthor(member.user.username, member.user.avatarURL())
  .setColor("#ff2050")
  .setThumbnail(member.user.avatarURL())
  .setDescription(`We are very happy to have you in our server`);
  
  client.channels.cache.get(chx).send(wembed) //get channel and send embed
})



client.login(process.env.TOKEN);