let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = await fetch(API('Velgrynd', '/api/husbu', { url: args[0] }, 'apikey'))
  conn.sendFile(m.chat, res, 'husbu.jpg', 'huu suka ama husbu', m)
}
handler.help = ['husbu']
handler.tags = ['anime']

handler.command = /^(husbu)$/i

module.exports = handler
