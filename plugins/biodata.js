const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let jarot = `
•·––––––––––––––––––––––––––·•
❑ *Nama* : 𝐑𝐈𝐃𝐇𝐎 𝐆𝐀𝐍𝐙
❑ *Umur* : 14 Tahun
❑ *Kelas* : xxxxxx
❑ *Ulang Tahun* : 17 Desember 2007
❑ *Alamat* : AS, AS, Pelabuhan
•·––––––––––––––––––––––––––·•
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya7)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: jarot,
                imageMessage: message.imageMessage, 
           hydratedFooterText: 'salam kenal bang👋',
           hydratedButtons: [{
             urlButton: {
               displayText: '𝙂𝙧𝙤𝙪𝙥 𝘽𝙤𝙩 🐈',
               url: 'https://chat.whatsapp.com/GMv2BxudUzfJhIAwtv8Tvh'
             }

           },
               {
             quickReplyButton: {
               displayText: '𝙎𝙚𝙬𝙖 𝘽𝙤𝙩 🏧',
               id: '.sewa',
             }
             
           },
               {
             quickReplyButton: {
               displayText: '𝙈𝙚𝙣𝙪 ⛽',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: '𝘿𝙤𝙣𝙖𝙨𝙞 𝘽𝙖𝙣𝙝 📮',
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
handler.customPrefix = /^(biodata|.biodata)$/i
handler.command = new RegExp
handler.help = ['.biodata']
module.exports = handler
