let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let saweria = global.saweria
let owner = global.owner
let anu = `Hallo mypren 👋
━━━〔 ıll *Sewa Bot* llı 〕━━ꕥ
━━━━━━━━━━━━━━━━━━━━
━━━〔 ıll *HARGA* llı 〕━━ꕥ
⬡ *1 BULAN:* *15.000*
⬡ *2 BULAN:* *25.000*
⬡ *1 BULAN 2/3 GRUP:* *20.000*
⬡ *lebih dari 3 tambah +5.000*
┗━━━━━━━━━━━━━━━ꕥ
┏━━━〔 ıll *PAYMENT* llı 〕━━ꕥ
⬡ *DANA:* ${dana}
⬡ *SAWERIA:* ${saweria}
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━〔 ıll *RULES* llı 〕━ꕥ
⬡ [❗] *Dana yang sudah masuk tidak bisa di kembalikan*
┗━━━━━━━━━━ꕥ
Jika anda berminat hubungi nomor di bawah!!

⟩» *jangan lupa donasi kak* «⟨
Terimakasih yang sudah mendonasikan untuk bot

Contact person Sewa Bot:
wa.me/${6283160327945} (Owner)

*Follow Instagram ku juga kak😼*`
  conn.send3ButtonImg(m.chat, fla + teks, anu, instagram, 'Pilihan Store', '.pilihanstore', 'Owner', '.owner', 'Menu', '.menu', m) 
}
handler.help = ['sewaasep']
handler.tags = ['info']
handler.command = /^(sewa|sewaasep|sewa|sewabot)$/i

module.exports = handler
