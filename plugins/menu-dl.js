let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Creator'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `*––––––『 JUAL/BELI DIAMOND LOCK 』––––––*
`
  conn.send2ButtonImg(m.chat, fla + teks, anu,wm, '💎𝘽𝙐𝙔 𝘿𝙄𝘼𝙈𝙊𝙉𝘿 𝙇𝙊𝘾𝙆💎', '.payment', '💎𝙎𝙀𝙇𝙇 𝘿𝙄𝘼𝙈𝙊𝙉𝘿 𝙇𝙊𝘾𝙆💎', '.pilihanstore', m) 
}
handler.customPrefix = /^(buy dl|sell dl|buy diamond lock|buy dl cheap|buy diamondlock|ohlx|ohlxstore|ohlx store|sell diamond lock|sell dl|sell dl cheap|sell diamond lock|need midman|need mm|buy jasa mm|\?)$/i
handler.command = new RegExp

module.exports = handler
