let TelegramBot = require('node-telegram-bot-api');
// import TelegramBot from 'node-telegram-bot-api';
let config = require('config');
// import config from 'config';

const TOKEN = config.get('token');
const bot = new TelegramBot(TOKEN, {polling: true});

bot.on("message", msg => {
    const {chat: {id}} = msg;
    bot.sendMessage(id, 'pong');
});

bot.onText(/\/help (.+)/, (msg, [source, match]) =>{
    const {chat: {id}} = msg
    bot.sendMessage(id, match)
})



























// var TelegramBot = require('node-telegram-bot-api');

// var token = '705192262:AAEDi4tttQYyWybL1cjY6XCHc8AmwXt3raw';
// var bot = new TelegramBot(token, {polling: true});

// var notes = [];

// bot.onText(/\/напомни (.+) в (.+)/, function (msg, match) {
//   var userId = msg.from.id;
//   var text = match[1];
//   var time = match[2];

//   notes.push( { 'uid':userId, 'time':time, 'text':text } );

//   bot.sendMessage(userId, 'Отлично! Я обязательно напомню, если не сдохну :)');
// });

// setInterval(function(){
//     for (var i = 0; i < notes.length; i++){
//         var curDate = new Date().getHours() + ':' + new Date().getMinutes();
//             if ( notes[i]['time'] == curDate ) {
//                 bot.sendMessage(notes[i]['uid'], 'Напоминаю, что вы должны: '+ notes[i]['text'] + ' сейчас.');
//                 notes.splice(i,1);
//             }
//         }
// },1000);