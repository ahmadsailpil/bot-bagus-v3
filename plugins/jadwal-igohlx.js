let handler = async m => m.reply(`
┏━━━━━━─────┈ ⳹
┃┏━─⟢⟨ 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 𝐎𝐇𝐋𝐗 𝐒𝐓𝐎𝐑𝐄 ⟩⟣
┃┃ ➯ https://instagram.com/ohlx_store
┃❏━━━━━━─────────┈
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(igohlx)$/i
handler.command = new RegExp

module.exports = handler