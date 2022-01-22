let limit = 30
let yts = require('yt-search')
let fetch = require('node-fetch')

let handler = async (m, { conn, args, isPrems, isOwner }) => {
	if (!args || !args[0]) throw 'Uhm... urlnya mana?'
	let chat = db.data.chats[m.chat]
	let { videos } = await yts(args[0])
	let dl_link = `https://yt-downloader.akkun3704.repl.co/?url=${args[0]}&filter=&quality=&contenttype=`
	let res = await (await fetch(dl_link)).buffer()
	let isLimit = (isPrems || isOwner ? 99 : limit) * 1000000 < res.length
	conn.sendFile(m.chat, videos[0].image, 'thumbnail.jpg', `
*Title:* ${videos[0].title}
*Upload:* ${videos[0].ago}
*Views:* ${videos[0].views}
*${isLimit ? 'Pakai ': ''}Link:* ${dl_link}
`.trim(), m)
	let _thumb = {}
	try { _thumb = { thumbnail: await (await fetch(videos[0].image)).buffer() } }
	catch (e) { }
	if (!isLimit) conn.sendFile(m.chat, res, videos[0].title + '.mp4', `
*Title:* ${videos[0].title}
*Upload:* ${videos[0].ago}
*Views:* ${videos[0].views}
`.trim(), m, false, { ..._thumb, asDocument: chat.useDocument })
}
handler.help = ['mp4','v',''].map(v => 'yt' + v)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.limit = true

module.exports = handler
