const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

client.on('message', message => {
    if (message.content.startsWith(`${prefix}wigi`)) {
    }
})

client.login(token);