import { search, download } from 'aptoide-scraper';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
import { image } from 'pdfkit';
const { generateWAMessageFromContent, proto } = pkg;

const apkMap = new Map();
let apkIndex = 1; // Global index for APKs

const searchAPK = async (m, Fox) => {
  let selectedListId;
  const selectedButtonId = m?.message?.templateButtonReplyMessage?.selectedId;
  const interactiveResponseMessage = m?.message?.interactiveResponseMessage;

  if (interactiveResponseMessage) {
    const paramsJson = interactiveResponseMessage.nativeFlowResponseMessage?.paramsJson;
    if (paramsJson) {
      const params = JSON.parse(paramsJson);
      selectedListId = params.id;
    }
  }

  const selectedId = selectedListId || selectedButtonId;

  const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  const validCommands = ['apk', 'searchapk', 'apkdl', 'app'];

  if (validCommands.includes(cmd)) {
    if (!text) return m.reply('Please provide a search query for APKs');

    try {
      await m.React("🪭");


      let searchResult = await search(text);
      const topAPKs = searchResult.slice(0, 10);

      if (topAPKs.length === 0) {
        m.reply('No APKs found.');
        await m.React("❌");
        return;
      }

      const apkButtons = await Promise.all(topAPKs.map(async (apk, index) => {
        const uniqueId = `apk_${apkIndex + index}`;
        const apkDetails = await download(apk.id); 
        apkMap.set(uniqueId, {
          ...apk,
          size: apkDetails.size 
        });
        return {
          "header": "",
          "title": `🦊⃟${apk.name}`, 
          "description": `Size: ${apkDetails.size}`,
          "id": uniqueId 
        };
      }));

      const msg = generateWAMessageFromContent(m.from, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              body: proto.Message.InteractiveMessage.Body.create({
                text: `*🦊⃟✨WIZARD-MD APK Downloader🦊⃟✨*\n\n🔍 Search and download your favorite APKs easily.\n\n📌 Simply select an APK from the list below to get started.\n\n`
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: "> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴇᴅ_ꜰᴏx-ᴍᴅ"
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({image: url('')}, { upload: Fox.waUploadToServer })), // Enter you 
                title: ``,
                gifPlayback: true,
                subtitle: "",
                hasMediaAttachment: false 
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                      title: "ꜱᴇʟᴇᴄᴛ ᴀɴ ᴀᴘᴋ",
                      sections: [
                        {
                          title: "🦊Top 10 APK Results",
                          highlight_label: "🦊 Top 10",
                          rows: apkButtons
                        },
                      ]
                    })
                  }
                ],
              }),
              contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
              }
            }),
          },
        },
      }, {});

      await Fox.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
      });
      await m.React("✅");


      apkIndex += topAPKs.length;
    } catch (error) {
      console.error("Error processing your request:", error);
      m.reply('Error processing your request.');
      await m.React("❌");
    }
  } else if (selectedId) { 
    const selectedAPK = apkMap.get(selectedId);

    if (selectedAPK) {
      try {
        const apkDetails = await download(selectedAPK.id); 
        const url = apkDetails.dllink;
        const iconUrl = apkDetails.icon;
        const size = apkDetails.size;

        await Fox.sendMessage(m.from, { image: { url: iconUrl }, caption: `You selected this APK:\n\nName: ${selectedAPK.name}\nsize: ${size}\n\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴇᴅ_ꜰᴏx-ᴍᴅ` }, { quoted: m });

  
        const apkMessage = {
          document: { url },
          mimetype: 'application/vnd.android.package-archive',
          fileName: `${selectedAPK.name}.apk`
        };

        await Fox.sendMessage(m.from, apkMessage, { quoted: m });
      } catch (error) {
        console.error("Error sending APK:", error);
        m.reply('Error sending APK.');
      }
    } else {
    }
  }
};

export default searchAPK;
