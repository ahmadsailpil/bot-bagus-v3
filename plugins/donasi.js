const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let handler = async (m, { conn, usedPrefix: _p }) => {
const anjg = `
*-------「 DONATE 」 -------*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍

Thanks!`
const upt = `BOT Active During ${uptime}`
 let url = `https://telegra.ph/file/1c55295c6bf604ed7d33d.jpg`
let res = await fetch(url)
let buffer = await res.buffer()
let message = await prepareWAMessageMedia({ image: buffer }, { upload: conn.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anjg.trim(),
                            hydratedFooterText:upt,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '𝘿𝙊𝙉𝘼𝙎𝙄 𝙎𝘼𝙒𝙀𝙍𝙄𝘼',
                                    url: 'https://saweria.co/asepbotz'
                                }
                            }, {
                                urlButton: {
                                    displayText: '𝙂𝙍𝙊𝙐𝙋 𝘽𝙊𝙏𝙕',
                                    url: 'https://chat.whatsapp.com/GMv2BxudUzfJhIAwtv8Tvh'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: '/owner'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Back To Menu',
                                    id: '/menu'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                conn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}