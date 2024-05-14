const Discord = require("discord.js-selfbot-v13");
const { Client } = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});
const express = require('express')
const app = express();
const port = 8000;

const largeImages = [
    'https://media.discordapp.net/attachments/1205101702190202930/1205143441659666442/test1.gif?ex=65d74c4a&is=65c4d74a&hm=65492e493cebbadabd525f14b0be867e177db3ae406dfb9fb02be23e491e3afc&=',
    'https://media.discordapp.net/attachments/1205101702190202930/1205143441244291083/test2.gif?ex=65d74c4a&is=65c4d74a&hm=afd467f5323aca043b096163d4bda87bd96d1321ac115c76f495f0bbfbecf04d&=',
    'https://media.discordapp.net/attachments/1205101702190202930/1205143440753426452/test3.webp?ex=65d74c4a&is=65c4d74a&hm=d0fbff8924daf440d9d1f06d5d4e9b13bd16ba4501dc1f2eeb63bc25837e52eb&=&format=webp',
    'https://media.discordapp.net/attachments/1205101702190202930/1205144925549629440/test4.gif?ex=65d74dac&is=65c4d8ac&hm=b7d65edd326c36ee26119736889fffdfce48380b74921e4cf8ceb513ad121a6c&='
    // Add more large image URLs as needed
];

const stateTexts = [
    '「 KatV4 Raid tool! 」',
    '「 Besser als AMW 」',
    '「 Lang lebe die kat armee 」'
    // Add more state texts as needed
];

const nameTexts = [
  '꒦꒷ KatV4 Raid tool! ',
  '꒦꒷ Besser als AMW ',
  '꒦꒷ Lang lebe die kat armee '
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
          .setURL('https://youtu.be/sVaQQRx6-es?si=WddbMqrjlhmF6kF8')
          .setState(stateTexts[currentStateIndex])
          .setName(nameTexts[currentnameTextsIndex])
          .setDetails(` ﹝ ⌚ ${currentTime} | 🌌 ${client.user.username} ﹞ `)
          .setStartTimestamp(startedAt)
          .setAssetsLargeText(`﹝ 📅 ${currentDate}  | 🛸 0 m/s ﹞`)
          .setAssetsLargeImage(largeImages[currentLargeImageIndex])
          .setAssetsSmallText('🦊')
          .addButton('About Us ', 'https://discord.com/invite/xhqcSC5K4Y')
          .addButton('Our Clan', 'https://discord.gg/w00d')

      client.user.setActivity(r);

      currentLargeImageIndex = (currentLargeImageIndex + 1) % largeImages.length;
      currentStateIndex = (currentStateIndex + 1) % stateTexts.length;
      currentnameTextsIndex = (currentnameTextsIndex + 1) % nameTexts.length;
  }, 3000); // Change large image and state text every 1 second
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
