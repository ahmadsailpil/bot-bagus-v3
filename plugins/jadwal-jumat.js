let handler = async m => m.reply(`
┏━━━━━━─────┈ ⳹
┃┏━─⟢⟨ 𝐉𝐀𝐃𝐖𝐀𝐋 𝐉𝐔𝐌𝐀𝐓 ⟩⟣
┃┃ ➯ 𝐒𝐄𝐍𝐈 𝐁𝐔𝐃𝐀𝐘𝐀
┃┃ ➯ 
┃┃ ➯ 
┃┃ ➯
┃❏━━━━━━─────────┈
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(jadwal jumat|jadwal hari jumat|jumat)$/i
handler.command = new RegExp

module.exports = handler