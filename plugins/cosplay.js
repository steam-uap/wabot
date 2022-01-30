let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = await fetch(API('Velgrynd', '/api/cosplay', { url: args[0] }, 'apikey'))
  conn.sendFile(m.chat, res, 'cosplay.jpg', 'huu suka ama cosplayer', m)
}
handler.help = ['cosplay']
handler.tags = ['anime']

handler.command = /^(cosplay)$/i

module.exports = handler
