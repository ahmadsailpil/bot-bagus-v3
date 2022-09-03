let handler = async m => m.reply(`
┏━━━━━━─────┈ ⳹
┃┏━─⟢⟨ 𝐉𝐀𝐃𝐖𝐀𝐋 𝐒𝐄𝐋𝐀𝐒𝐀 ⟩⟣
┃┃ ➯ 𝐁.𝐈𝐍𝐆𝐆𝐑𝐈𝐒
┃┃ ➯ 𝐏𝐋𝐇 / 𝐁𝐊
┃┃ ➯ 𝐏𝐑𝐀𝐊𝐀𝐑𝐘𝐀
┃┃ ➯ 𝐈𝐏𝐒
┃┃ ➯ 𝐌𝐀𝐓𝐄𝐌𝐀𝐓𝐈𝐊𝐀
┃❏━━━━━━─────────┈
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(jadwal selasa|jadwal hari selasa|selasa)$/i
handler.command = new RegExp

module.exports = handler