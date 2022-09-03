let fs = require('fs')
let handler = async (m, { conn }) => {
let url = `https://telegra.ph/file/1c55295c6bf604ed7d33d.jpg`
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `*-------「 𝐀𝐋𝐋 𝐏𝐀𝐘𝐌𝐄𝐍𝐓  𝐕𝐈𝐀 𝐐𝐑𝐈𝐒 」 -------*

𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐒𝐂𝐀𝐍 𝐐𝐑𝐈𝐒 𝐃𝐈 𝐀𝐓𝐀𝐒 ⬆️
𝐒𝐄𝐓𝐄𝐋𝐀𝐇 𝐀𝐍𝐃𝐀 𝐌𝐄𝐋𝐀𝐊𝐔𝐊𝐀𝐍 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍
𝐓𝐄𝐊𝐀𝐍 𝐓𝐎𝐌𝐁𝐎𝐋 𝐒𝐔𝐊𝐒𝐄𝐒 𝐃𝐈 𝐁𝐀𝐖𝐀𝐇 𝐈𝐍𝐈 
                                               👇
`
  conn.send2ButtonImg(m.chat, fla + teks, anu,wm, '𝙎𝙐𝙆𝙎𝙀𝙎', '.owner2', 'SosialMedia Creator', '.sosialmedia', m) 
}
handler.help = ['payment']
handler.tags = ['info']
handler.command = /^(payment)$/i

module.exports = handler
