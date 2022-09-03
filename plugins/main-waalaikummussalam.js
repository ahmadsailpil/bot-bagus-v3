let handler = async (m, {conn}) => {
let anu = '\nوَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n\n_waalaikumussalam wr.wb._\n\n 𝙉𝘼𝙃 𝙂𝙄𝙏𝙐 𝙆𝙀𝙆.𝙊𝙆𝙀 👍'
m.reply(anu)  
}
handler.customPrefix = /^ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم$/i // ketik bot (tanpa prefix)
handler.command = new RegExp
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler
