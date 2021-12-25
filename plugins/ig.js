let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let res = await fetch(API('https://megayaa.herokuapp.com', '/api/igdl', { url: args[0] }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (json.status != true) throw json
  for (let i = 0; i < json.result.length; i++) {
    let capt = i == 0 ? json.caption : ''
    conn.sendFile(m.chat, json.result[i].url, '', capt, m)
  }
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.command = /^(ig(dl)?)$/i

module.exports = handler
