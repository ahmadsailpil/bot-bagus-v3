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
*-------「 𝐀𝐋𝐋 𝐏𝐀𝐘𝐌𝐄𝐍𝐓  𝐕𝐈𝐀 𝐐𝐑𝐈𝐒 」 -------*

𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐒𝐂𝐀𝐍 𝐐𝐑𝐈𝐒 𝐃𝐈 𝐀𝐓𝐀𝐒 ⬆️
𝐒𝐄𝐓𝐄𝐋𝐀𝐇 𝐀𝐍𝐃𝐀 𝐌𝐄𝐋𝐀𝐊𝐔𝐊𝐀𝐍 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍
𝐓𝐄𝐊𝐀𝐍 𝐓𝐎𝐌𝐁𝐎𝐋 𝐒𝐔𝐊𝐒𝐄𝐒 𝐃𝐈 𝐁𝐀𝐖𝐀𝐇 𝐈𝐍𝐈 
                                               👇

!`
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
                                    displayText: '𝐒𝐔𝐊𝐒𝐄𝐒',
                                    url: 'http://wa.me/6283160327945?text=𝐒𝐔𝐊𝐒𝐄𝐒'
                                }
                            }, {
                                urlButton: {
                                    displayText: '𝐂𝐇𝐀𝐓 𝐂𝐔𝐒𝐓𝐎𝐌𝐄𝐑 𝐒𝐄𝐑𝐕𝐈𝐂𝐄',
                                    url: 'http://wa.me/6283160327945'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝐎𝐖𝐍𝐄𝐑',
                                    id: '/owner'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝐁𝐀𝐂𝐊 𝐓𝐎 𝐌𝐄𝐍𝐔',
                                    id: 'ohlx'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                conn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
handler.help = ['payment']
handler.tags = ['info']
handler.command = /^(payment)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
