let handler = async m => m.reply(`
𝐑𝐈𝐁𝐔𝐓 𝘼𝘿𝘼𝙇𝘼𝙃 𝙎𝙀𝙊𝙍𝘼𝙉𝙂 𝘼𝙉𝘼𝙆 𝘿𝘼𝙍𝙄 𝘽𝘼𝙋𝘼𝙆 𝐀𝐇𝐌𝐀𝐃𝐈.𝙎𝙀𝙆𝙄𝘼𝙉 𝘿𝘼𝙍𝙄 𝘼𝙎𝙀𝙋𝘽𝙊𝙏𝙕
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(dataribut|ribut|siapakah ribut)$/i
handler.command = new RegExp

module.exports = handler