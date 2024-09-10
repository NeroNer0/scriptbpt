const fs = require('fs')

global.pairing = false
 // ganti false kalo mau pake qr dan ganti true kalo mau pake pairing
global.namabot = "NEROBOT STORE"
global.namaowner = "NERODEV"
global.footer_text = "NERODEV" + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6285816684572']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = ` *PAYMENT METHOD*
🟤DANA : 085816684572
🟤SHOPEEPAY : 081357443836
🟤OVO : 085816684572
🟤GOPAY : 085816684572
🟤LINKAJA : 085816684572
🟤SEABANK : 901171014311
🟤BCA : 8161634140
🟤BNI : 1250190632
🟤BLU : 005440037999
🟤JAGO : 504362902963

ALL PAYMENT a.n. M*****D I*********N
🟤QRIS : https://whatsapp.com/channel/0029VaewtToDOQISaMSEGN23/144

*SAAT TRANSFER WAJIB MENGISI CATATAN/KETERANGAN ORDERAN KALIAN*

Kesalahan Payment Bukan Tanggung Jawab Kami❗
Bukti Transfer Kirim Ke Admin❕

*untuk bank mandiri & bri PC admin*
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*

\`\`\`» owner
» addsewa
» delsewa
» ceksewa
» listsewa
» list
» addlist
» updatelist
» renamelist
» dellist
» jeda
» tambah
» kurang
» kali
» bagi
» setproses
» changeproses
» delsetproses
» setdone
» changedone
» delsetdone
» proses
» done
» welcome
» goodbye
» setwelcome
» changewelcome
» delsetwelcome
» setleft
» changeleft
» delsetleft
» antiwame
» antiwame2
» antilink
» antilink2
» open
» close
» hidetag
» add
» kick
» stiker
» setppgc
» setnamegc
» setdesgc
» linkgc
» resetlinkgc
» promote
» demote
» setbot
» updatesetbot
» delsetbot
» bot
» mw
\`\`\`

📝 *NOTE*: 
Fitur nya bisa dipakai dengan atau
tanpa prefix (simbol awalan). Sebagai contoh 
fitur .owner (prefix)
dan bisa juga owner (tanpa prefix)
`
}