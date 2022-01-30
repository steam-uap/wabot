let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = await fetch(API('Velgrynd', '/api/milf', { url: args[0] }, 'apikey'))
  conn.sendFile(m.chat, res, 'milf.jpg', 'huu suka ama milf', m)
}
handler.help = ['milf']
handler.tags = ['anime']

handler.command = /^(milf)$/i

module.exports = handler
