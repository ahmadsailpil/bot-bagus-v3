const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let jarot = `
╭─❑ 「 *SOSIAL MEDIA* 」 ❑──
│ Follow sosial media
│ owner yuk biar saling
│ kenal...
╰❑
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya6)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: jarot,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '',
           hydratedButtons: [{
             urlButton: {
               displayText: 'Saweria📨',
               url: 'https://saweria.co/asepbotz'
             }

           },
               {
urlButton: {
               displayText: 'Group Bot Creator📸',
               url: 'https://chat.whatsapp.com/GMv2BxudUzfJhIAwtv8Tvh'
             }

           },
               {
             quickReplyButton: {
               displayText: 'STORE',
               id: '.store',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'BIODATA CREATOR',
               id: '.biodata',
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
handler.customPrefix = /^(sosialmedia|.sosialmedia)$/i
handler.command = new RegExp
handler.help = ['.sosialmedia']
module.exports = handler
