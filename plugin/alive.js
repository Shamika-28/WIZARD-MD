/*

$$\      $$\ $$$$$$\ $$$$$$$$\  $$$$$$\  $$$$$$$\  $$$$$$$\          $$\      $$\ $$$$$$$\  
$$ | $\  $$ |\_$$  _|\____$$  |$$  __$$\ $$  __$$\ $$  __$$\         $$$\    $$$ |$$  __$$\ 
$$ |$$$\ $$ |  $$ |      $$  / $$ /  $$ |$$ |  $$ |$$ |  $$ |        $$$$\  $$$$ |$$ |  $$ |
$$ $$ $$\$$ |  $$ |     $$  /  $$$$$$$$ |$$$$$$$  |$$ |  $$ |$$$$$$\ $$\$$\$$ $$ |$$ |  $$ |
$$$$  _$$$$ |  $$ |    $$  /   $$  __$$ |$$  __$$< $$ |  $$ |\______|$$ \$$$  $$ |$$ |  $$ |
$$$  / \$$$ |  $$ |   $$  /    $$ |  $$ |$$ |  $$ |$$ |  $$ |        $$ |\$  /$$ |$$ |  $$ |
$$  /   \$$ |$$$$$$\ $$$$$$$$\ $$ |  $$ |$$ |  $$ |$$$$$$$  |        $$ | \_/ $$ |$$$$$$$  |
\__/     \__|\______|\________|\__|  \__|\__|  \__|\_______/         \__|     \__|\_______/ 

========================= 𝗔  𝗠𝘂𝗹𝘁𝗶  𝗗𝗲𝘃𝗶𝗰𝗲  𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽  𝗨𝘀𝗲𝗿  𝗕𝗼𝘁  =========================

Copyright 2024
Created By:- Mr.Shamika
*/


import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';

import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
import { title } from 'process';
import { subscribe } from 'diagnostics_channel';
import { subtle } from 'crypto';
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

const alive = async (m, Wizard) => {
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
        const validCommands = ['alive'];



  
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
              text: `Hello ${m.pushName} ツ 
${pushwish}
I'M WIZARD-MD A Multi Device WhatsApp User Bot. ✨🍂

╭─「🧙‍♂️ 𝗪𝗜𝗭𝗔𝗥𝗗-𝗠𝗗 🧙‍♂️」
╰──────────────┈
╭─────────┈◦•✘
> ❐ *ʙᴏᴛ ɴᴀᴍᴇ: ᴡɪᴢᴀʀᴅ-ᴍᴅ*
> ❐ *ᴠᴇʀꜱɪᴏɴ: 1.0.1*
> ❐ *ʙᴏᴛ ᴏᴡɴᴇʀ: ᴍʀ.ꜱʜᴀᴍɪᴋᴀ*
> ❐ *ɴᴜᴍʙᴇʀ: +94775229931*
> ❐ *ᴍᴏᴅᴇ: ${mode}*
╚─────────✘>

╭─「  ★ 𝗨𝗦𝗘𝗥𝗦 ★  」
╎‣ ʙᴏᴛ ᴜꜱᴇᴅ: ${m.pushName}
╎‣ ʀᴜɴ ᴛɪᴍᴇ: ${uptime}
╰─────────────┈ `
}),
footer: proto.Message.InteractiveMessage.Footer.create({
  text: "• ᴄʀᴇᴀᴛᴇ ʙʏ ᴡɪᴢᴀʀᴅ-ᴍᴅ"
}),
header: proto.Message.InteractiveMessage.Header.create({
    ...(await prepareWAMessageMedia({ image : fs.readFileSync('../../media/image.png')}, { upload: Wizard.waUploadToServer})), 
      title: ``,
      gifPlayback: true,
      subtitle: "",
      hasMediaAttachment: false  
    }),
header: proto.Message.InteractiveMessage.Header.create({ 
    ...(await prepareWAMessageMedia({ voice : fs.readFileSync('../../media/alive.mp3')}, {upload: Wizard.waUploadToServer})),
    title:``,
    gifPlayback: true,
    subtle: "",
    hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
  buttons: [
      {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({
        display_text: "Follow Us ⚜️",
        url: `` // Please put your whatsapp Channel URL
      })
    },
    /*{
      name: "quick_reply",
      buttonParamsJson: JSON.stringify({
        display_text: "✨Select Option ヅ",
        id: ".sc"
      })
    },*/
    {
      "name": "single_select",
      "buttonParamsJson": `{"title":"✨ Select Option  ヅ",
        "sections":
       [{
        "title":"WIZARD-MD Options Panel   🌟",
        "highlight_label":"🧙  WIZARD-MD 🧙",
        "rows":[
        {
          "header":"",
          "title":"MENU",
          "description":"",
          "id":".menu"
        },
        {
          "header":"",
          "title":"PING",
          "description":"",
          "id":".ping"
        },
        {
          "header":"",
          "title":"𝗥𝗲𝗽𝗼 𝗟𝗶𝗻𝗸",
          "description":"Github Repository Link",
          "id":"AAA"
        },
        {
          "header":"",
          "title":"𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗚𝗿𝗼𝘂𝗽",
          "description":"WhatsApp Group Link",
          "id":"BBB"
        },
        {
          "header":"",
          "title":"𝗪𝗲𝗯𝘀𝗶𝘁𝗲 𝗟𝗶𝗻𝗸",
          "description":"WebSite Link",
          "id":"CCC"
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

/*const voiceMessage = fs.readFileSync('../../media/voice-message.mp3'); // Replace with your actual file path
    await Wizard.sendMessage(m.from, { 
       audio: voiceMessage,
       mimetype: 'audio/mp3'
      });*/

    await Wizard.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id
    });
      }
};

export default alive;
