let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = await fetch(API('Velgrynd', '/api/feet', { url: args[0] }, 'apikey'))
  conn.sendFile(m.chat, res, 'feet.jpg', 'huu suka ama kaki', m)
}
handler.help = ['feet']
handler.tags = ['anime']

handler.command = /^(feet)$/i

module.exports = handler
