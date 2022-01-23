let handler  = async (m, { conn, text }) => {
  let fs = require('fs')
  let fetch = require('node-fetch')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? itsu.user.jid : m.sender
  try {
    let pp = 'https://telegra.ph/file/cbdec8c4f4423a8ef6466.jpg'
    pp = await conn.getProfilePicture(who)}
    catch (e){
    }
  const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
const anu = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6285240750713-1610340626@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "P", 
            "caption": "「 All Group Broadcast 」", 
            'jpegThumbnail': await (await fetch(pp)).buffer()
		}
	}
}
  

  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  let content = await conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + '「 All Group Broadcast 」')
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
  for (let id of groups) conn.copyNForward(id, content, 'conversation',{quoted: anu, thumbnail: await (await fetch(pp)).buffer(), contextInfo:{externalAdReply: {title: `© ${itsu.user.name} || by Relldev` , body: '>///<', sourceUrl: 'https://chat.whatsapp.com/J3j8XFLPnOR0RI937C8Biu', thumbnail: await (await fetch(pp)).buffer()}}} ,true)
  conn.reply(m.chat, `_Done_`, m)
}
handler.help = ['broadcastgroup','bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
