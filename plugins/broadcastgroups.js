let handler  = async (m, { conn, text }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid).filter(v => !v.endsWith('1579797815@g.us') && !v.endsWith('1583886195@g.us') && !v.endsWith('1600421058@g.us'))
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
  for (let id of groups) prep = conn.prepareMessageFromContent(id, { orderMessage: { 
itemCount: -10112006, status: 500,
surface: 999,
message: teks + '\n' + readMore + '「 All Group Broadcast 」\n',
description: 'pler',
orderTitle: 'awikwok',
token: '9',
curreyCode: 'IDR',
totalCurrencyCode: '>〰<',
totalAmount1000: '1000000',
sellerJid: '6283820073017@s.whatsapp.net',
thumbnail: global.thumb3
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)

  m.reply('Selesai Broadcast All Group :)')
}
handler.help = ['broadcastgroup','bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
