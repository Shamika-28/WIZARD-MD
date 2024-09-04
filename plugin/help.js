/*


██╗      ██╗██╗███████╗ █████╗     ██████╗    ██████╗       ███╗   ███╗██████╗ 
██║      ██║██║╚══███╔╝██╔══██╗ ██╔══██╗ ██╔══██╗        ████╗ ████║██╔══██╗
██║ █╗  ██║██║  ███╔╝   ███████║ ██████╔╝██║  ██║█████╗██╔████╔██║██║  ██║
██║███╗██║██║ ███╔╝    ██╔══██║ ██╔══██╗██║  ██║╚════╝██║╚██╔╝██║██║  ██║
╚███╔███╔╝██║███████╗██║  ██║ ██║    ██║██████╔╝          ██║ ╚═╝ ██║██████╔╝
 ╚══╝╚══╝ ╚═╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═════╝              ╚═╝     ╚═╝╚═════╝
 ================ 𝗔  𝗠𝘂𝗹𝘁𝗶  𝗗𝗲𝘃𝗶𝗰𝗲  𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽  𝗨𝘀𝗲𝗿  𝗕𝗼𝘁 ===================

Copyright 2024
Created By:- Mr.Shamika
*/



import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';

import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}
// Bot Process Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

// Uptime
const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
const runMessage = `*☀️ ${day} Day*\n*🕐 ${hours} Hour*\n*⏰ ${minutes} Minutes*\n*⏱️ ${seconds} Seconds*\n`;

const xtime = moment.tz("Asia/Colombo").format("HH:mm:ss");
const xdate = moment.tz("Asia/Colombo").format("DD/MM/YYYY");
const time2 = moment().tz("Asia/Colombo").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `ɢᴏᴏᴅ ᴀꜰᴛᴇʀɴᴏᴏɴ 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌃`;
} else {
  pushwish = `ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌃`;
}

const test = async (m, Wizard) => {
  let selectedListId;
  const selectedButtonId = m?.message?.templateButtonReplyMessage?.selectedId;
  const interactiveResponseMessage = m?.message?.interactiveResponseMessage;
  if (interactiveResponseMessage) {
    const paramsJson = interactiveResponseMessage.nativeFlowResponseMessage?.paramsJson;
    if (paramsJson) {
      const params = JSON.parse(paramsJson);
      selectedListId = params.id;
     // console.log(selectedListId);
    }
  }
  const selectedId = selectedListId || selectedButtonId;
  
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '.';
        const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
        const mode = process.env.MODE;
        const validCommands = ['list', 'help', 'menu'];

  if (validCommands.includes(cmd)) {
    let msg = generateWAMessageFromContent(m.from, {
      viewOnceMessage: {
        message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `
┏━━━━━━━━━━━━━━┈⊷
> 🤖 ʙᴏᴛ ɴᴀᴍᴇ: ʀᴇᴅ-ꜰᴏx-ᴍᴅ
> 📍 ᴠᴇʀꜱɪᴏɴ: 1.0.1
> 👨‍💻 ᴏᴡɴᴇʀ : ᴍʀ ʜᴀɴꜱᴀᴍᴀʟᴀ      
> 👤 ɴᴜᴍʙᴇʀ: +94781708673
> 📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
> 🛡 ᴍᴏᴅᴇ: *${mode}*
> 💫 ᴘʀᴇғɪx: [ . ]
┗━━━━━━━━━━━━━┈⊷`
}),
footer: proto.Message.InteractiveMessage.Footer.create({
  text: "> ©ʀᴇᴅ-ꜰᴏx-ᴍᴅ"
}),
header: proto.Message.InteractiveMessage.Header.create({
    ...(await prepareWAMessageMedia({ image : fs.readFileSync('../../media/wizard-md.png')}, { upload: Wizard.waUploadToServer})), 
      title: `🦊ʀᴇᴅ-ꜰᴏx🦊`,
      gifPlayback: true,
      subtitle: "ᴍᴇɴᴜ",
      hasMediaAttachment: false  
    }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
  buttons: [
 /*   {
      name: "quick_reply",
      buttonParamsJson: JSON.stringify({
        display_text: "ᴀʟɪᴠᴇ ɴᴏᴡ",
        id: ".alive"
      })
    },
       {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
          display_text: "ᴄᴏɴᴛᴀᴄᴛ ɴᴏᴡ",
          id: ".owner"
                  })
                },*/
      {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({
        display_text: "ᴊᴏɪɴ ᴏᴜʀ ᴄᴏᴍᴍᴜɴɪᴛʏ",
        url: `https://whatsapp.com/channel/0029Vaej5TsAe5Vxx0getx1Z`
      })
    },
    {
      "name": "single_select",
      "buttonParamsJson": `{"title":"View Options ✨",
     "sections":
       [{
        "title":"Please select the menu you want",
        "highlight_label":"🦊ʀᴇᴅ-ꜰᴏx🦊",
        "rows":[
          {
           "header":"",
           "title":"ᴀʟʟ ᴍᴇɴᴜ",
           "description":"> ᴀʟʟ ᴍᴇɴᴜ ",
           "id":"View All Menu"
          },
          {
            "header":"",
            "title":"ᴅᴏᴡɴʟᴀᴏᴅᴇʀ ᴍᴇɴᴜ",
            "description":"> ꜱʜᴏᴡ ᴀʟʟ ᴅᴏᴡɴʟᴏᴀᴅ ꜰᴇᴀᴛᴜᴛᴇꜱ ",
            "id":"Downloader Menu"
          },
          {
            "header":"",
            "title":"ɢʀᴏᴜᴘ ᴍᴇɴᴜ",
            "description":"> ꜰᴇᴀᴛᴜᴛᴇꜱ ᴛʜᴇᴛ ᴀʀᴇ ᴏɴʟʏ ᴀᴠɪʟᴀʙʟᴇ ꜰᴏʀ ɢʀᴏᴜᴘ ",
            "id":"Group Menu"
          },
          {
            "header":"",
            "title":"ᴛᴏᴏʟ ᴍᴇɴᴜ",
            "description":"> ꜱʜᴏᴡ ᴍᴇ ᴛᴏᴏʟ ᴍᴇɴᴜ ",
            "id":"Tool Menu"
          },
          {
            "header":"",
            "title":"ᴍᴀɪɴ ᴍᴇɴᴜ",
            "description":"> ʙᴏᴛ ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅꜱ ",
            "id":"Main Menu"
          },
         {
            "header":"",
            "title":"ᴏᴡɴᴇʀ ᴍᴇɴᴜ",
            "description":"> ꜰᴇᴀᴛᴜᴛᴇꜱ ᴛʜᴀᴛ ᴀʀᴇ ᴏɴʟʏ ꜰᴏʀ ᴍʏ ʜᴀɴᴅꜱᴏᴍᴇ ᴏᴡɴᴇʀ ",
            "id":"Owner Menu"
          },
          {
            "header":"",
            "title":"ᴀɪ ᴍᴇɴᴜ",
            "description":"> ꜱʜᴏᴡ ᴍᴇ ᴀɪ ᴍᴇɴᴜ ",
            "id":"Ai Menu"
          },
          {
            "header":"",
            "title":"sᴇᴀʀᴄʜ ᴍᴇɴᴜ",
            "description":"> ꜱʜᴏᴡ ᴍᴇ ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ ",
            "id":"Search Menu"
          },
          {
            "header":"",
            "title":"sᴛᴀʟᴋ ᴍᴇɴᴜ",
            "description":"> ꜱʜᴏᴡ ᴍᴇ ꜱᴛᴀʟᴋ ᴍᴇɴᴜ ",
            "id":"Stalk Menu"
          },
          {
            "header":"",
            "title":"ᴄᴏᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ",
            "description":"> ꜱʜᴏᴡ ᴍᴇ ᴄᴏᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ ",
            "id":"Converter Menu"
          }
        ]}
      ]}`
    },
  ],
}),
contextInfo: {
      mentionedJid: [m.sender], 
      forwardingScore: 9999,
      isForwarded: false,
    }
}),
},
},
}, {});

    await Wizard.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id
    });
  }
      if (selectedId == "View All Menu") {
        const mode = process.env.MODE;
        const str = `hey ${m.pushName} ${pushwish}
┏━━━━━━━━━━━━━━┈⊷
│> 🤖 ʙᴏᴛ ɴᴀᴍᴇ: ʀᴇᴅ-ꜰᴏx-ᴍᴅ
│> 📍 ᴠᴇʀꜱɪᴏɴ: 1.0.1
│> 👨‍💻 ᴏᴡɴᴇʀ : ᴍʀ ʜᴀɴꜱᴀᴍᴀʟᴀ      
│> 👤 ɴᴜᴍʙᴇʀ: 94781708673
│> 📡 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
│> 🛡 ᴍᴏᴅᴇ: *${mode}*
┗━━━━━━━━━━━━━┈⊷  
┏━♼ ᴄᴏɴᴠᴇʀᴛᴇʀ ♽━┓ 
│> 🦊⃝🎋.ᴀᴛᴛᴘ
│> 🦊⃝🎋.ᴀᴛᴛᴘ2
│> 🦊⃝🎋.ᴀᴛᴛᴘ3
│> 🦊⃝🎋.ᴇʙɪɴᴀʀʏ
│> 🦊⃝🎋.ᴅʙɪɴᴀʀʏ
│> 🦊⃝🎋.ᴇᴍᴏᴊɪᴍɪx
│> 🦊⃝🎋.ᴍᴘ3
┗━━━━━━━━━━━━━━━⪼
┏━♼  ᴀɪ ♽━┓
│> 🦊⃝🎋.ᴀɪ 
│> 🦊⃝🎋.ʀᴇᴘᴏʀᴛ
│> 🦊⃝🎋.ɢᴘᴛ
│> 🦊⃝🎋.ᴅᴀʟʟᴇ
│> 🦊⃝🎋.ʀᴇᴍɪɴɪ
│> 🦊⃝🎋.ɢᴇᴍɪɴɪ
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴛᴏᴏʟ ♽━┓
|> 🦊⃝🎋.ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
|> 🦊⃝🎋.ᴛᴇᴍᴘᴍᴀɪʟ
|> 🦊⃝🎋.ᴄʜᴇᴄᴋᴍᴀɪʟ
|> 🦊⃝🎋.ʙᴜɢ
|> 🦊⃝🎋.ᴛʀᴛ
|> 🦊⃝🎋.ᴛᴛꜱ
┗━━━━━━━━━━━━━━━⪼
┏━♼ ɢʀᴏᴜᴘ ♽━┓
> 🦊⃝🎋.ʟɪɴᴋɢʀᴏᴜᴘ
> 🦊⃝🎋.ꜱᴇᴛᴘᴘɢᴄ
> 🦊⃝🎋.ꜱᴇᴛɴᴀᴍᴇ
> 🦊⃝🎋.ꜱᴇᴛᴅᴇꜱᴄ
> 🦊⃝🎋.ɢʀᴏᴜᴘ
> 🦊⃝🎋.ɢᴄꜱᴇᴛᴛɪɴɢ
> 🦊⃝🎋.ᴡᴇʟᴄᴏᴍᴇ
> 🦊⃝🎋.ᴀᴅᴅ
> 🦊⃝🎋.ᴋɪᴄᴋ
> 🦊⃝🎋.ʜɪᴅᴇᴛᴀɢ
> 🦊⃝🎋.ᴛᴀɢᴀʟʟ
> 🦊⃝🎋.ᴀɴᴛɪʟɪɴᴋ
> 🦊⃝🎋.ᴀɴᴛɪᴛᴏxɪᴄ
> 🦊⃝🎋.ᴘʀᴏᴍᴏᴛᴇ
> 🦊⃝🎋.ᴅᴇᴍᴏᴛᴇ
> 🦊⃝🎋.ɢᴇꜰʙɪᴏ
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴅᴏᴡɴʟᴏᴀᴅ ♽━┓
> 🦊⃝🎋.ᴀᴘᴋ
> 🦊⃝🎋.ꜰᴀᴄᴇʙᴏᴏᴋ
> 🦊⃝🎋.ᴍᴇᴅɪᴀꜰɪʀᴇ
> 🦊⃝🎋.ᴘɪɴᴛᴇʀᴇꜱᴛᴅʟ
> 🦊⃝🎋.ɢᴜᴛᴄʟᴏɴᴇ
> 🦊⃝🎋.ɢᴅʀɪᴠᴇ
> 🦊⃝🎋.ɪɴꜱʀᴀ
> 🦊⃝🎋.ʏᴛᴍᴘ3
> 🦊⃝🎋.ʏᴛᴍᴘ4
> 🦊⃝🎋.ᴘʟᴀʏ
> 🦊⃝🎋.ꜱᴏɴɢ
> 🦊⃝🎋.ᴠɪᴅᴇᴏ
> 🦊⃝🎋.ʏᴛᴍᴘ3ᴅᴏᴄ
> 🦊⃝🎋.ʏᴛᴍᴘ4ᴅᴏᴄ
> 🦊⃝🎋.ᴛɪᴋᴛᴏᴋ
┗━━━━━━━━━━━━━━━⪼
┏━♼ ꜱᴇᴀʀᴄʜ ♽━┓
> 🦊⃝🎋.ᴘʟᴀʏ
> 🦊⃝🎋.ʏᴛꜱ
> 🦊⃝🎋.ɪᴍᴅʙ
> 🦊⃝🎋.ɢᴏᴏɢʟᴇ
> 🦊⃝🎋.ɢɪᴍᴀɢᴇ
> 🦊⃝🎋.ɪᴍɢ
> 🦊⃝🎋.ᴘɪɴᴛᴇʀᴇꜱᴛ
> 🦊⃝🎋.ᴡᴀʟʟᴘᴀᴘᴇʀ
> 🦊⃝🎋.ᴡɪᴋɪᴍᴇᴅɪᴀ
> 🦊⃝🎋.ʏᴛꜱᴇᴀʀᴄʜ
> 🦊⃝🎋.ʀɪɴɢᴛᴏɴᴇ
> 🦊⃝🎋.ʟʏʀɪᴄꜱ
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴍᴀɪɴ ♽━┓
> 🦊⃝🎋.ᴘɪɴɢ
> 🦊⃝🎋.ᴀʟɪᴠᴇ
> 🦊⃝🎋.ᴏᴡɴᴇʀ
> 🦊⃝🎋.ᴍᴇɴᴜ
> 🦊⃝🎋.ʜᴇʟᴘ
> 🦊⃝🎋.ɪɴꜰᴏʙᴏᴛ
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴏᴡɴᴇʀ ♽━┓
> 🦊⃝🎋.ᴊᴏɪɴ
> 🦊⃝🎋.ʟᴇᴀᴠᴇ
> 🦊⃝🎋.ʙʟᴏᴄᴋ
> 🦊⃝🎋.ᴜɴʙʟᴏᴄᴋ
> 🦊⃝🎋.ꜱᴇᴛᴘᴘʙᴏᴛ
> 🦊⃝🎋.ᴀɴᴛɪᴄᴀʟʟ
> 🦊⃝🎋.ꜱᴇᴛꜱᴛᴀᴛᴜꜱ
> 🦊⃝🎋.ꜱᴇᴛɴᴀᴍᴇʙᴏᴛ
> 🦊⃝🎋.ᴀᴜᴛᴏᴛʏᴘɪɴɢ
> 🦊⃝🎋.ᴀʟᴡᴀʏꜱᴏɴʟɪɴᴇ
> 🦊⃝🎋.ᴀᴜᴛᴏʀᴇᴀᴅ
> 🦊⃝🎋.ᴀᴜᴛᴏꜱᴠɪᴇᴡ
> 🦊⃝🎋.ᴜᴘᴅᴀᴛᴇ
> 🦊⃝🎋.ʀᴇꜱᴛᴀʀᴛ
┗━━━━━━━━━━━━━━━⪼
┏━♼ ꜱᴛᴀʟᴋ ♽━┓
> 🦊⃝🎋.ᴛʀᴜᴇᴄᴀʟʟᴇʀ
> 🦊⃝🎋.ɪɴꜱᴛᴀꜱᴛᴀʟᴋ
> 🦊⃝🎋.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ
┗━━━━━━━━━━━━━━━⪼

• ᴄʀᴇᴀᴛᴇ ʙʏ ᴡɪᴢᴀʀᴅ-ᴍᴅ`;
        /*let fgg = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: `🦊ʀᴇᴅ-ꜰᴏx-ᴍᴅ🦊`,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'WIZARD'\nitem1.TEL;waid=${
                        m.sender.split("@")[0]
                    }:${
                        m.sender.split("@")[0]
                    }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
            }
        };*/
       let { key } = await Wizard.sendMessage(m.from, {
  image: fs.readFileSync('../../media/wizard-md.png'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: false,
  }
}, {
  quoted: fgg
});
}
   if ( selectedId == "Downloader Menu") {
     const str = `┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴅᴏᴡɴʟᴏᴀᴅ ♽━┓
> 🦊⃝🎋 .ᴀᴘᴋ
> 🦊⃝🎋.ꜰᴀᴄᴇʙᴏᴏᴋ
> 🦊⃝🎋.ᴍᴇᴅɪᴀꜰɪʀᴇ
> 🦊⃝🎋.ᴘɪɴᴛᴇʀᴇꜱᴛᴅʟ
> 🦊⃝🎋.ɢᴜᴛᴄʟᴏɴᴇ
> 🦊⃝🎋.ɢᴅʀɪᴠᴇ
> 🦊⃝🎋.ɪɴꜱʀᴀ
> 🦊⃝🎋.ʏᴛᴍᴘ3
> 🦊⃝🎋.ʏᴛᴍᴘ4
> 🦊⃝🎋.ᴘʟᴀʏ
> 🦊⃝🎋.ꜱᴏɴɢ
> 🦊⃝🎋.ᴠɪᴅᴇᴏ
> 🦊⃝🎋.ʏᴛᴍᴘ3ᴅᴏᴄ
> 🦊⃝🎋.ʏᴛᴍᴘ4ᴅᴏᴄ
> 🦊⃝🎋.ᴛɪᴋᴛᴏᴋ
┗━━━━━━━━━━━━━━━⪼

• ᴄʀᴇᴀᴛᴇ ʙʏ ᴡɪᴢᴀʀᴅ-ᴍᴅ`
await Wizard.sendMessage(m.from, {
  image: fs.readFileSync('../../media/wizard-md.png'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: false,
  }
}, {
  quoted: m
});
}
   
   if ( selectedId == "Group Menu") {
     const str = `┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼ ɢʀᴏᴜᴘ ♽━┓
> 🦊⃝🎋.ʟɪɴᴋɢʀᴏᴜᴘ
> 🦊⃝🎋.ꜱᴇᴛᴘᴘɢᴄ
> 🦊⃝🎋.ꜱᴇᴛɴᴀᴍᴇ
> 🦊⃝🎋.ꜱᴇᴛᴅᴇꜱᴄ
> 🦊⃝🎋.ɢʀᴏᴜᴘ
> 🦊⃝🎋.ɢᴄꜱᴇᴛᴛɪɴɢ
> 🦊⃝🎋.ᴡᴇʟᴄᴏᴍᴇ
> 🦊⃝🎋.ᴀᴅᴅ
> 🦊⃝🎋.ᴋɪᴄᴋ
> 🦊⃝🎋.ʜɪᴅᴇᴛᴀɢ
> 🦊⃝🎋.ᴛᴀɢᴀʟʟ
> 🦊⃝🎋.ᴀɴᴛɪʟɪɴᴋ
> 🦊⃝🎋.ᴀɴᴛɪᴛᴏxɪᴄ
> 🦊⃝🎋.ᴘʀᴏᴍᴏᴛᴇ
> 🦊⃝🎋.ᴅᴇᴍᴏᴛᴇ
> 🦊⃝🎋.ɢᴇꜰʙɪᴏ
┗━━━━━━━━━━━━━━━⪼

• ᴄʀᴇᴀᴛᴇ ʙʏ ᴡɪᴢᴀʀᴅ-ᴍᴅ`
     await Wizard.sendMessage(m.from, {
  image: fs.readFileSync('../../media/wizard-md.png'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: false,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "Main Menu") {
     const str =`┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴍᴀɪɴ ♽━┓
> 🦊⃝🎋.ᴘɪɴɢ
> 🦊⃝🎋.ᴀʟɪᴠᴇ
> 🦊⃝🎋.ᴏᴡɴᴇʀ
> 🦊⃝🎋.ᴍᴇɴᴜ
> 🦊⃝🎋.ʜᴇʟᴘ
> 🦊⃝🎋.ɪɴꜰᴏʙᴏᴛ
┗━━━━━━━━━━━━━━━⪼

• ᴄʀᴇᴀᴛᴇ ʙʏ ᴡɪᴢᴀʀᴅ-ᴍᴅ`
await Wizard.sendMessage(m.from, {
  image: fs.readFileSync('../../media/wizard-md.png'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: false,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "Owner Menu") {
     const str = `┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴏᴡɴᴇʀ ♽━┓
> 🦊⃝🎋.ᴊᴏɪɴ
> 🦊⃝🎋.ʟᴇᴀᴠᴇ
> 🦊⃝🎋.ʙʟᴏᴄᴋ
> 🦊⃝🎋.ᴜɴʙʟᴏᴄᴋ
> 🦊⃝🎋.ꜱᴇᴛᴘᴘʙᴏᴛ
> 🦊⃝🎋.ᴀɴᴛɪᴄᴀʟʟ
> 🦊⃝🎋.ꜱᴇᴛꜱᴛᴀᴛᴜꜱ
> 🦊⃝🎋.ꜱᴇᴛɴᴀᴍᴇʙᴏᴛ
> 🦊⃝🎋.ᴀᴜᴛᴏᴛʏᴘɪɴɢ
> 🦊⃝🎋.ᴀʟᴡᴀʏꜱᴏɴʟɪɴᴇ
> 🦊⃝🎋.ᴀᴜᴛᴏʀᴇᴀᴅ
> 🦊⃝🎋.ᴀᴜᴛᴏꜱᴠɪᴇᴡ
> 🦊⃝🎋.ᴜᴘᴅᴀᴛᴇ
> 🦊⃝🎋.ʀᴇꜱᴛᴀʀᴛ
┗━━━━━━━━━━━━━━━⪼

• ᴄʀᴇᴀᴛᴇ ʙʏ ᴡɪᴢᴀʀᴅ-ᴍᴅ`
await Wizard.sendMessage(m.from, {
  image: fs.readFileSync('../../media/wizard-md.png'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: false,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "Search Menu") {
     const str =`┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼ ꜱᴇᴀʀᴄʜ ♽━┓
> 🦊⃝🎋.ᴘʟᴀʏ
> 🦊⃝🎋.ʏᴛꜱ
> 🦊⃝🎋.ɪᴍᴅʙ
> 🦊⃝🎋.ɢᴏᴏɢʟᴇ
> 🦊⃝🎋.ɢɪᴍᴀɢᴇ
> 🦊⃝🎋.ɪᴍɢ
> 🦊⃝🎋.ᴘɪɴᴛᴇʀᴇꜱᴛ
> 🦊⃝🎋.ᴡᴀʟʟᴘᴀᴘᴇʀ
> 🦊⃝🎋.ᴡɪᴋɪᴍᴇᴅɪᴀ
> 🦊⃝🎋.ʏᴛꜱᴇᴀʀᴄʜ
> 🦊⃝🎋.ʀɪɴɢᴛᴏɴᴇ
> 🦊⃝🎋.ʟʏʀɪᴄꜱ
┗━━━━━━━━━━━━━━━⪼

• ᴄʀᴇᴀᴛᴇ ʙʏ ᴡɪᴢᴀʀᴅ-ᴍᴅ`
await Wizard.sendMessage(m.from, {
  image: fs.readFileSync('../../media/wizard-md.png'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: false,
  }
}, {
  quoted: m
});
}
   if (selectedId == "Stalk Menu") {
     const str =`┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼ ꜱᴛᴀʟᴋ ♽━┓
> 🦊⃝🎋 .ᴛʀᴜᴇᴄᴀʟʟᴇʀ
> 🦊⃝🎋 .ɪɴꜱᴛᴀꜱᴛᴀʟᴋ
> 🦊⃝🎋 .ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ
┗━━━━━━━━━━━━━━━⪼

• ᴄʀᴇᴀᴛᴇ ʙʏ ᴡɪᴢᴀʀᴅ-ᴍᴅ`
await Wizard.sendMessage(m.from, {
  image: fs.readFileSync('../../media/wizard-md.png'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: false,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "Tool Menu") {
     const str =`┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴛᴏᴏʟ ♽━┓
> 🦊⃝🎋.ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
> 🦊⃝🎋.ᴛᴇᴍᴘᴍᴀɪʟ
> 🦊⃝🎋.ᴄʜᴇᴄᴋᴍᴀɪʟ
> 🦊⃝🎋.ᴛʀᴛ
> 🦊⃝🎋.ᴛᴛꜱ
┗━━━━━━━━━━━━━━━⪼

• ᴄʀᴇᴀᴛᴇ ʙʏ ᴡɪᴢᴀʀᴅ-ᴍᴅ`
await Wizard.sendMessage(m.from, {
  image: fs.readFileSync('../../media/wizard-md.png'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: false,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "Ai Menu") {
     const str =`┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼  ᴀɪ ♽━┓
> 🦊⃝🎋.ᴀɪ
> 🦊⃝🎋.ʙᴜɢ
> 🦊⃝🎋.ʀᴇᴘᴏʀᴛ
> 🦊⃝🎋.ɢᴘᴛ
> 🦊⃝🎋.ᴅᴀʟʟᴇ
> 🦊⃝🎋.ʀᴇᴍɪɴɪ
> 🦊⃝🎋.ɢᴇᴍɪɴɪ
┗━━━━━━━━━━━━━━━⪼

• ᴄʀᴇᴀᴛᴇ ʙʏ ᴡɪᴢᴀʀᴅ-ᴍᴅ`
await Wizard.sendMessage(m.from, {
  image: fs.readFileSync('../../media/wizard-md.png'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: false,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "Converter Menu") {
     const str =`┏━♼ *s ᴇ ʀ ᴠ ᴇ ʀ* ━┓
> 🦊⃟💈ᴛᴏᴛᴀʟ ʀᴏᴍ : ${formatBytes(totalMemoryBytes)}
> 🦊⃟💈ꜰʀᴇᴇ ʀᴏᴍ ${formatBytes(freeMemoryBytes)}
┗━━━━━━━━━━━━━━━⪼
┏━♼ ᴄᴏɴᴠᴇʀᴛᴇʀ ♽━┓ 
> 🦊⃝🎋.ᴀᴛᴛᴘ
> 🦊⃝🎋.ᴀᴛᴛᴘ2
> 🦊⃝🎋.ᴀᴛᴛᴘ3
> 🦊⃝🎋.ᴇʙɪɴᴀʀʏ
> 🦊⃝🎋.ᴅʙɪɴᴀʀʏ
> 🦊⃝🎋.ᴇᴍᴏᴊɪᴍɪx
> 🦊⃝🎋.ᴍᴘ3
┗━━━━━━━━━━━━━━━⪼

• ᴄʀᴇᴀᴛᴇ ʙʏ ᴡɪᴢᴀʀᴅ-ᴍᴅ`
     await Wizard.sendMessage(m.from, {
  image: fs.readFileSync('../../media/wizard-md.png'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: false,
  }
}, {
  quoted: m
});
}
};

export default test;
