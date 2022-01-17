let handler = async(m, { conn }) => {
   let numb = Math.floor(Math.random() * 100) + 1
   let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
   conn.sendFile(m.chat, API('Velgrynd', '/api/seberapagay', { name: conn.getName(who), image: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), num: numb }, 'apikey'), 'gay.png', 'Lariii ada gay', m)
}
handler.help = ['gay']
handler.tags = ['maker']
handler.command = /^(gay)$/i
module.exports = handler