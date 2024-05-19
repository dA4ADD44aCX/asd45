const Discord = require("discord.js-selfbot-v13");
const { Client } = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});
const express = require('express')
const app = express();
const port = 8000;

const largeImages = [
    'https://media.discordapp.net/attachments/1241016552313065563/1241029617230418010/7d07a255678962d30d8717dcf5dbd266.gif?ex=664ab0a5&is=66495f25&hm=13ebbb75322028a6bdc18b10025eb9fd7572bff14d33cda4ef187e31d1214b1c&='
    // Add more large image URLs as needed
];

const stateTexts = [
    "+:୨彼氏を愛してる୧:﹤"
    // Add more state texts as needed
];

const nameTexts = [
    "+:୨彼氏を愛してる୧:﹤"
    // Add more state texts as needed
];

let currentStateIndex = 0; // Index to track the current state text

let currentLargeImageIndex = 0;

let currentnameTextsIndex = 0;

app.get('/', (req, res) => res.send('ทำงานเรียบร้อยแล้ว'))
app.listen(port, () =>
    console.log(`Your app is listening at http://localhost:${port}`)
);

client.on("ready", async () => {
    var startedAt = Date.now();
    console.log(`${client.user.username} เม็ดม่วงทำงานเรียบร้อยแล้ว !`);

    setInterval(() => {
        const currentTime = getCurrentTime();
        const currentDate = getCurrentDate();

        const r = new Discord.RichPresence()
            .setApplicationId('1121867777867788309')
            .setType('STREAMING')
            .setURL('https://www.youtube.com/watch?v=IhJZs4GwKYo')
            .setState(stateTexts[currentStateIndex])
            .setName(nameTexts[currentnameTextsIndex])
            .setDetails(`·͙⁺˚•̩̩͙✩•̩̩͙˚⁺‧͙⁺˚•̩̩͙✩•̩̩͙˚⁺‧͙`)
            .setStartTimestamp(startedAt)
            .setAssetsLargeText(`┆ ʚ📅 ${currentDate} ♡ ⌚${currentTime}ɞ ┆`)
            .setAssetsLargeImage(largeImages[currentLargeImageIndex])
            .setAssetsSmallText('A$t๏r 🖤')
            .addButton('Fav Song', ' https://www.youtube.com/watch?v=Ud1NGiI3qvU');


        client.user.setActivity(r);

        currentLargeImageIndex = (currentLargeImageIndex + 1) % largeImages.length;
        currentStateIndex = (currentStateIndex + 1) % stateTexts.length;
        currentnameTextsIndex = (currentnameTextsIndex + 1) % nameTexts.length;
    }, 2500); // Change large image and state text every 1 second
});

function getCurrentDate() {
    const a = new Date(Date.now());
    const c = { timeZone: "Asia/Bangkok", day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = a.toLocaleDateString("en-US", c);
    const [month, day, year] = formattedDate.split('/');
    return `${day}/${month}/${year}`;
}

function getCurrentTime() {
    const a = new Date(Date.now());
    const c = { timeZone: "Asia/Bangkok", hour: "numeric", minute: "numeric", hour12: false };
    return a.toLocaleTimeString("th-TH", c);
}

client.login(process.env.token);
