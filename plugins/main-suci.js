let handler = async m => m.reply(`
𝙄𝙏𝙐 𝙆𝘼𝙉 𝘼𝙉𝘼𝙆 𝙈𝙐𝘿𝘼𝙃 𝘿𝘼𝙉 𝘽𝘼𝙋𝘼𝙆𝙉𝙔𝘼 𝙋𝙄𝙋𝙄𝙏 𝙐𝙋𝙎 🤭
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(datasuci|suci|siapakah suci|siapakah bibah|bibah|habibah)$/i
handler.command = new RegExp

module.exports = handler