/**Programmer: Devinnivis YeQiu
 *"Donasi_1": "https://saweria.co/devinnivis",
  "Donasi_2": "https://bagibagi.co/yeqiu_devinnivis",
  "Tiktok": "@yqiu29",
*/
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const { EditPhotoHandler } = require('./feature/edit_foto');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message_create', async msg => {

    const text = msg.body.toLowerCase() || '';

    //check status
    
    if (text === 'hai') {
        msg.reply('Saya BOT WA buatan Dennis, Ada yang bisa saya bantu?');
    }

    if (text === 'terima kasih') {
        msg.reply('Sama-sama');
    }

    // #edit_bg/bg_color
    if (text.includes("#edit_bg/")) {
        await EditPhotoHandler(text, msg);
    }

});

client.initialize();