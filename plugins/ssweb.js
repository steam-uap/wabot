let handler = async (m, { conn, command, args }) => {
  if (!args[0]) throw 'Tidak ada url'
  await m.reply('Loading...')
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = /f$/i.test(command) ? API('http://hadi-api.herokuapp.com', '/api/ssweb2', { url }) : API('https://api.popcat.xyz', '/screenshot', { url })
  conn.sendFile(m.chat, ss, 'screenshot.png', url, m)
}

handler.help = ['ss', 'ssf'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^ss(web)?f?$/i

module.exports = handler
