const fs = require('fs');
const Discord = require('discord.js');
const TOKEN = require('./bot-token.json').value;
const fireCommand = require('./commands.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('I be working, my liege!');
  client.user.setActivity('Try >MDN help');
});

client.on('message', message => {
  const parseCommand = message.content.match(/^>MDN (.*)/);
  if (!parseCommand) {
    return;
  }
  const query = parseCommand[1];
  fireCommand(query)
    .then(response => {
      message.channel.send(response);
    });
});

client.login(TOKEN);