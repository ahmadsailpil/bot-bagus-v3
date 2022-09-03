let handler = async m => m.reply(`
┏━━━━━━─────┈ ⳹
┃┏━─⟢⟨ 𝐉𝐀𝐃𝐖𝐀𝐋 𝐒𝐄𝐍𝐈𝐍 ⟩⟣
┃┃ ➯ 𝐏𝐊𝐍
┃┃ ➯ 𝐁.𝐈𝐍𝐃𝐎𝐍𝐄𝐒𝐈𝐀
┃┃ ➯ 𝐈𝐏𝐀
┃┃ ➯
┃❏━━━━━━─────────┈
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(jadwal senin|jadwal hari senin|senin)$/i
handler.command = new RegExp

module.exports = handler