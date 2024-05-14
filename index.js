const Discord = require("discord.js-selfbot-v13");
const { Client } = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});
const express = require('express')
const app = express();
const port = 8000;

const largeImages = [
    'https://media.discordapp.net/attachments/1239870999508553828/1239872549203214387/b12728982cdaee66b383b25943ec330e.gif?ex=664480cb&is=66432f4b&hm=b02a77d1392fbbf002cec3b875bca5a26cda95a0bc6fdf21cdd1d13e33861a4a&='
    // Add more large image URLs as needed
];

const stateTexts = [
    "'•.¸♡รักแมว ♡¸.•'"
    // Add more state texts as needed
];

const nameTexts = [
    "'•.¸♡รักแมว ♡¸.•'"
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
            .setURL('https://www.youtube.com/watch?v=1TsVjvEkc4s')
            .setState(stateTexts[currentStateIndex])
            .setName(nameTexts[currentnameTextsIndex])
            .setDetails(`·͙⁺˚•̩̩͙✩•̩̩͙˚⁺‧͙⁺˚•̩̩͙✩•̩̩͙˚⁺‧͙⁺˚•̩̩͙✩•̩̩͙˚⁺‧͙`)
            .setStartTimestamp(startedAt)
            .setAssetsLargeText(`┆ ʚ📅 ${currentDate} ♡ ⌚${currentTime}ɞ ┆`)
            .setAssetsLargeImage(largeImages[currentLargeImageIndex])
            .setAssetsSmallText('A$t๏r 🖤')
            .addButton('เข้าดิส', 'https://discord.gg/charlisy');


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
