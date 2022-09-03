const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let owner = 6283160327945
let wa = '0'
let handler = async (m) => {
let jarot = `
*Hai kak @${m.sender.split('@')[0]} 👋*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya5)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: jarot,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '📮Note : HALO KAK SAYA 𝘼𝙎𝙀𝙋 𝘽𝙊𝙏𝙕, JIKA KAMU MENGGUNAKAN WA LAMA ATAU WA MOD, DAN BUTTON TIDAK KELIATAN, LANGSUNG AJA KETIK .buy dl',
           hydratedButtons: [{
             quickReplyButton: {
               displayText: '💎𝘽𝙐𝙔 𝘿𝙄𝘼𝙈𝙊𝙉𝘿 𝙇𝙊𝘾𝙆💎',
               id: '.payment'
             }

           },
               {
             quickReplyButton: {
               displayText: '💎𝙎𝙀𝙇𝙇 𝘿𝙄𝘼𝙈𝙊𝙉𝘿 𝙇𝙊𝘾𝙆💎',
               id: '.pilihanstore',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.customPrefix = /^(buy dl|sell dl|buy diamond lock|buy dl cheap|buy diamondlock|ohlx|ohlxstore|ohlx store|sell diamond lock|sell dl|sell dl cheap|sell diamond lock|need midman|need mm|buy jasa mm|\?)$/i
handler.command = new RegExp

module.exports = handler
