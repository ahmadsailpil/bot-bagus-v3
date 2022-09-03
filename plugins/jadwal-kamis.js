let handler = async m => m.reply(`
┏━━━━━━─────┈ ⳹
┃┏━─⟢⟨ 𝐉𝐀𝐃𝐖𝐀𝐋 𝐊𝐀𝐌𝐈𝐒 ⟩⟣
┃┃ ➯ 𝐁. 𝐈𝐍𝐆𝐆𝐑𝐈𝐒
┃┃ ➯ 𝐈𝐏𝐀
┃┃ ➯ 𝐌𝐀𝐓𝐄𝐌𝐀𝐓𝐈𝐊𝐀
┃┃ ➯ 𝐏𝐀𝐈
┃❏━━━━━━─────────┈
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(jadwal kamis|jadwal hari kamis|kamis)$/i
handler.command = new RegExp

module.exports = handler