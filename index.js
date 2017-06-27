const discord = require('discord.js');
const bot = new discord.Client();
var fs = require('fs');

bot.on('message', (message) => {
    console.log('YAY');
    if(message.content == '!Paoo')
    {
        message.channel.sendMessage('Wow ' + message.author.username);
    }
    if(message.content == '!TA input')
    {
        message.channel.sendMessage(message.author.username + " your TA data has been saved.");
        fs.writeFile('text.txt', 'yui!',  function(err) {
        if (err) 
        {
        return console.error(err);
        }});
    }
    if(message.content == '!TA grab')
    {
        fs.readFile('text.txt', function (err, data) {
        if (err) {
        return console.error(err);
        }
        message.channel.sendMessage("TA Track " + data.toString());
        });
    }
    
});
bot.login('MzI4ODM4OTYxMzUzMDY0NDQ4.DDJuxg.RJW-e28ozf9D9EvMMgLFitQIKy4');
