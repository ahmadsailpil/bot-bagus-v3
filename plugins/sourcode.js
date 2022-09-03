/*============== Jangan di ganti! ==============*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
*––––––『 𝙈𝘼𝙃 𝙎𝙀𝙒𝘼 𝘽𝘼𝙉𝙂 ?』––––––*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya3)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '𝙎𝙀𝙒𝘼 𝘽𝘼𝙉𝙂 𝙈𝙐𝙍𝘼𝙃 𝘼𝙅𝘼',
           hydratedButtons: [{
             urlButton: {
               displayText: '🌍 𝙂𝙍𝙊𝙐𝙋 𝘽𝙊𝙏 🌍',
               url: 'https://chat.whatsapp.com/GMv2BxudUzfJhIAwtv8Tvh'
             }

           },
                {
               urlButton: {
               displayText: '🌍 𝙂𝙍𝙊𝙐𝙋 𝘽𝙊𝙏 🌍',
               url: 'https://chat.whatsapp.com/GMv2BxudUzfJhIAwtv8Tvh'
             }

           },
               {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Donasi',
               id: '.donasi',
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

handler.tags = ['main', 'info']
handler.customPrefix = /^(sc|script|sourcecode|.sc|.script|.sourcecode)$/i
handler.command = new RegExp
handler.help = ['.sewa']
module.exports = handler
