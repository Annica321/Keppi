const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('Ready for dedth!');
});

bot.on('message', msg => { 

  var command = msg.content.toLowerCase()
  var answer = ["yes kero!", "no kero!", "maybe kero!", "I can't say kero!", "I don't know kero!", "I'm too hungry to reply kero!", "I'm too thirsty to reply kero!"];

      if (command.includes( ['keppi i love you'] )){
        msg.react('💚');
        }

        if (command.includes( ['hey keppi'] )){
          msg.reply('Kero!');
          }
  
  if (command.includes( ['good night keppi'] )){
          msg.reply('Good night kero!');
          }

  else if ( command.startsWith(['keppi'])  && command.endsWith(['?']) ){
      msg.reply(answer[Math.floor(Math.random()*answer.length)]);
      }
  });
      bot.login(process.env.BOT_TOKEN);
