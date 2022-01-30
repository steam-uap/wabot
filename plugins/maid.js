let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = await fetch(API('Velgrynd', '/api/maid', { url: args[0] }, 'apikey'))
  conn.sendFile(m.chat, res, 'maid.jpg', 'huu suka ama maid', m)
}
handler.help = ['maid']
handler.tags = ['anime']

handler.command = /^(maid)$/i

module.exports = handler
