let handler = async m => m.reply(`
┏━━━━━━─────┈ ⳹
┃┏━─⟢⟨ 𝐉𝐀𝐃𝐖𝐀𝐋 𝐑𝐀𝐁𝐔 ⟩⟣
┃┃ ➯ 𝐏𝐄𝐍𝐉𝐀𝐒𝐊𝐄𝐒
┃┃ ➯ 𝐈𝐏𝐒
┃┃ ➯ 𝐁.𝐈𝐍𝐃𝐎𝐍𝐄𝐒𝐈𝐀
┃┃ ➯ 𝐁𝐓𝐀
┃❏━━━━━━─────────┈
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(jadwal rabu|jadwal hari rabu|rabu)$/i
handler.command = new RegExp

module.exports = handler