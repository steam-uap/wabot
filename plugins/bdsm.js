let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = await fetch(API('Velgrynd', '/api/bdsm', { url: args[0] }, 'apikey'))
  conn.sendFile(m.chat, res, 'bdsm.jpg', 'huu suka ama bdsm', m)
}
handler.help = ['bdsm']
handler.tags = ['anime']

handler.command = /^(bdsm)$/i

module.exports = handler
