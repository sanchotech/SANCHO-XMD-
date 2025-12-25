const config = require('../config')
const axios = require('axios');
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const fs = require('fs');

var imgmsg = "*Give me a anime name !*"
var descgs = "It gives details of given anime name."
var cants = "I cant find this anime."

//====================================================================================
cmd({
    pattern: "garl",
    alias: ["imgloli"],
    react: '😎',
    desc: "Download anime loli images.",
    category: "anime",
    use: '.loli',
    filename: __filename
},
async(conn, mek, m,{from, reply}) => {
try{

let res = await axios.get('https://api.lolicon.app/setu/v2?num=1&r18=0&tag=lolicon')
let wm = `😎 Random Garl image

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ youngboyzw`
await conn.sendMessage(from, { image: { url: res.data.data[0].urls.original }, caption: wm}, { quoted: mek })

} catch (e) { reply(cants); console.log(e) }
})

//=====================================================================
cmd({
    pattern: "waifu",
    alias: ["imgwaifu"],
    react: '💫',
    desc: "Download anime waifu images.",
    category: "anime",
    use: '.waifu',
    filename: __filename
},
async(conn, mek, m,{from, reply}) => {
try{

let res = await axios.get('https://api.waifu.pics/sfw/waifu')
let wm = `🩵 Random Waifu image

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ youngboyzw`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })

} catch (e) { reply(cants); console.log(e) }
})

//================================================================
cmd({
    pattern: "neko",
    alias: ["imgneko"],
    react: '💫',
    desc: "Download anime neko images.",
    category: "anime",
    use: '.neko',
    filename: __filename
},
async(conn, mek, m,{from, reply}) => {
try{

let res = await axios.get('https://api.waifu.pics/sfw/neko')
let wm = `🩷 Random neko image

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ youngboyzw`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })

} catch (e) { reply(cants); console.log(e) }
})
  
//=====================================================================
cmd({
    pattern: "megumin",
    alias: ["imgmegumin"],
    react: '💕',
    desc: "Download anime megumin images.",
    category: "anime",
    use: '.megumin',
    filename: __filename
},
async(conn, mek, m,{from, reply}) => {
try{

let res = await axios.get('https://api.waifu.pics/sfw/megumin')
let wm = `❤️‍🔥 Random megumin image

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ${config.DESCRIPTION}`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })

} catch (e) { reply(cants); console.log(e) }
})

//================================================================
cmd({
    pattern: "maid",
    alias: ["imgmaid"],
    react: '💫',
    desc: "Download anime maid images.",
    category: "anime",
    use: '.maid',
    filename: __filename
},
async(conn, mek, m,{from, reply}) => {
try{

let res = await axios.get('https://api.waifu.im/search/?included_tags=maid')
let wm = `😎 Random maid image

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ${config.DESCRIPTION}`
await conn.sendMessage(from, { image: { url: res.data.images[0].url }, caption: wm}, { quoted: mek })

} catch (e) { reply(cants); console.log(e) }
})

//=====================================================================
cmd({
    pattern: "awoo",
    alias: ["imgawoo"],
    react: '😎',
    desc: "Download anime awoo images.",
    category: "anime",
    use: '.awoo',
    filename: __filename
},
async(conn, mek, m,{from, reply}) => {
try{

let res = await axios.get('https://api.waifu.pics/sfw/awoo')
let wm = `😎 Random awoo image

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ${config.DESCRIPTION}`
await conn.sendMessage(from, { image: { url: res.data.url }, caption: wm}, { quoted: mek })

} catch (e) { reply(cants); console.log(e) }
})

//================================================================
// Anime Girl Commands (fixed repeated captions)
cmd({
    pattern: "animegirl",
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "🧚🏻",
    filename: __filename
},
async (conn, mek, m,{ from, reply }) => {
try {

const response = await axios.get("https://api.waifu.pics/sfw/waifu");

await conn.sendMessage(from,
    { image: { url: response.data.url }, caption: "*ANIME GIRL IMAGE* 🥳\n\n© powered by YoungBoyz" },
    { quoted: mek }
);

} catch (e) {
reply(`Error Fetching Anime Girl image: ${e.message}`);
}});

// Copy-paste logic reused for animegirl1–5
["animegirl1","animegirl2","animegirl3","animegirl4","animegirl5"].forEach(cmdName=>{
cmd({
    pattern: cmdName,
    desc: "Random Anime Girl",
    category: "fun",
    react: "🧚🏻",
    filename: __filename
},
async(conn, mek, m,{from,reply})=>{
try{
let r = await axios.get("https://api.waifu.pics/sfw/waifu")
await conn.sendMessage(from,{ image:{url:r.data.url}, caption:"ANIME GIRL IMAGE 👾\n\n© powered by youngboyzw"},{quoted:mek})
}catch(e){ reply("Error: "+e.message); }
})
})

//==========anime=====
cmd({
    pattern: "anime",
    desc: "anime the bot",
    category: "main",
    react: "⛱️",
    filename: __filename
},
async(conn, mek, m,{from, reply}) => {
try{

let dec = `> FROZEN-MD ANIME IMGS*`
let imgs = [
 "https://telegra.ph/file/b26f27aa5daaada031b90.jpg",
 "https://telegra.ph/file/51b44e4b086667361061b.jpg",
 "https://telegra.ph/file/7d165d73f914985542537.jpg",
 "https://telegra.ph/file/3d9732d2657d2d72dc102.jpg",
 "https://telegra.ph/file/8daf7e432a646f3ebe7eb.jpg",
 "https://telegra.ph/file/7514b18ea89da924e7496.jpg",
 "https://telegra.ph/file/ce9cb5acd2cec7693d76b.jpg"
]

for (let i of imgs) {
 await conn.sendMessage(from,{ image:{ url:i }, caption:dec },{ quoted:mek })
}

}catch(e){ console.log(e); reply(e) }
})

//================================================================
// Anime 1–5 (fixed captions)
function animeGroupCmd(name, urls){
cmd({
 pattern: name,
 desc: "Animal image.",
 react: "🧚‍♀️",
 category: "other",
 filename: __filename
},
async(conn, mek, m,{from, reply})=>{
 try{
   for (let u of urls){
     await conn.sendMessage(from,{ image:{url:u}, caption:"> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ youngboyzw" },{quoted:mek})
   }
 } catch(e){ console.log(e); reply(`${e}`) }
})
}

animeGroupCmd("anime1",[
 "https://i.waifu.pics/aD7t0Bc.jpg",
 "https://i.waifu.pics/PQO5wPN.jpg",
 "https://i.waifu.pics/5At1P4A.jpg",
 "https://i.waifu.pics/MjtH3Ha.jpg",
 "https://i.waifu.pics/QQW7VKy.jpg"
])

animeGroupCmd("anime2",[
 "https://i.waifu.pics/0r1Bn88.jpg",
 "https://i.waifu.pics/2Xdpuov.png",
 "https://i.waifu.pics/0hx-3AP.png",
 "https://i.waifu.pics/q054x0_.png",
 "https://i.waifu.pics/4lyqRvd.jpg"
])

animeGroupCmd("anime3",[
 "https://i.waifu.pics/gnpc_Lr.jpeg",
 "https://i.waifu.pics/P6X-ph6.jpg",
 "https://i.waifu.pics/~p5W9~k.png",
 "https://i.waifu.pics/7Apu5C9.jpg",
 "https://i.waifu.pics/OTRfON6.jpg"
])

animeGroupCmd("anime4",[
 "https://i.waifu.pics/aGgUm80.jpg",
 "https://i.waifu.pics/i~RQhRD.png",
 "https://i.waifu.pics/94LH-aU.jpg",
 "https://i.waifu.pics/V8hvqfK.jpg",
 "https://i.waifu.pics/lMiXE7j.png"
])

animeGroupCmd("anime5",[
 "https://i.waifu.pics/-ABlAvr.jpg",
 "https://i.waifu.pics/HNEg0-Q.png",
 "https://i.waifu.pics/3x~ovC6.jpg",
 "https://i.waifu.pics/brv-GJu.jpg",
 "https://i.waifu.pics/FWE8ggD.png"
])

//================================================================
// DOG
cmd({
    pattern: "dog",
    desc: "Fetch a random dog image.",
    category: "fun",
    react: "🐶",
    filename: __filename
},
async(conn, mek, m,{ from, reply }) => {
try {

let r = await axios.get("https://dog.ceo/api/breeds/image/random")

await conn.sendMessage(from,
 { image:{ url:r.data.message }, caption:"> © Powered By FROZEN-MD" },
 { quoted:mek }
)

} catch(e){
console.log(e)
reply(`Error fetching dog image: ${e.message}`)
}
})