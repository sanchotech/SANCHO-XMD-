const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 

// video

cmd({
    pattern: "play",
    alias: ["audio", "yta"],
    react: "🎵",
    desc: "Play & download YouTube audio",
    category: "downloader",
    use: ".play <song name/url>",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("🎵 Please provide a song name or YouTube URL.");

        // React loading
        await conn.sendMessage(from, { react: { text: '⏳', key: m.key } });

        // Search YouTube
        const yt = await ytsearch(q);
        if (!yt?.results?.length) {
            await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
            return reply("No results found.");
        }

        const song = yt.results[0];

        // Fetch audio
        const apiUrl = `https://apiskeith.vercel.app/download/audio?url=${encodeURIComponent(song.url)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data?.status || !data?.result) {
            await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
            return reply("Audio download failed.");
        }

        // Caption
        const caption = `
╭─〔 *🎶 SONG DOWNLOADER* 〕
├─▸ *🎧 Title:* ${song.title}
├─▸ *⏳ Duration:* ${song.timestamp}
├─▸ *👀 Views:* ${song.views}
├─▸ *👤 Author:* ${song.author.name}
╰─➤ *Made by Iconic Tech*
        `.trim();

        // Send thumbnail + info
        await conn.sendMessage(from, {
            image: { url: song.thumbnail },
            caption
        }, { quoted: mek });

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: data.result },
            mimetype: "audio/mp4",
            fileName: `${song.title}.mp3`
        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✅', key: m.key } });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: m.key } });
        reply("Error occurred while processing.");
    }
});



cmd({ 
    pattern: "video2", 
    alias: ["song2", "ytv2"], 
    react: "🎥", 
    desc: "Download Youtube song", 
    category: "main", 
    use: '.song < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        
        // Use working API from case
        let apiUrl = `https://apiskeith.vercel.app/download/video?url=${encodeURIComponent(yts.url)}`;
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (!data?.status || !data?.result) {
            return reply("Failed to fetch the video. Please try again later.");
        }
        
        let ytmsg = 
`*YT VIDEO DOWNLOADER*        
╭━━❐━⪼
┇๏ *Title* -  ${yts.title}
┇๏ *Duration* - ${yts.timestamp}
┇๏ *Views* -  ${yts.views}
┇๏ *Author* -  ${yts.author.name}
╰━━❑━⪼
*Made by Iconic Tech*`;

        // Send video details
        await conn.sendMessage(from, { image: { url: yts.thumbnail || '' }, caption: ytmsg }, { quoted: mek });
        
        // Send video file
        await conn.sendMessage(from, { 
            video: { url: data.result }, 
            mimetype: "video/mp4",
            caption: "*Made by Sancho Tech*"
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});