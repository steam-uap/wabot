let handler = async (m, { conn, args, command, usedPrefix }) => {
	if (!args[0]) return m.reply(`Reply video dengan command /${command}`)
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (/video/.test(mime)) {
		let vid = await q.download()
		m.reply('Loading')
		await conn.sendMessage(m.chat, vid, 'videoMessage', { quoted: m, duration: args[0] || 9 })
	} else throw 'Reply videonya!'
}
handler.help = ['bugv', 'bugvideo']
handler.tags = ['tools']
handler.command = /^bug(v|video)$/i
handler.owner = false

module.exports = handler
