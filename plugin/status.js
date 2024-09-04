import fs from 'fs';

const handleGreeting = async (m, Wizard) => {
  try {
    const textLower = m.body.toLowerCase();

    const triggerWords = [
      'send', 'statusdown', 'take', 'sent', 'giv', 'gib', 'upload', 'dpn', 'Dpn' , 'Eva', 'Evan' , 'Ewan' , 'evn',
      'send me', 'sent me', 'znt', 'snt', 'ayak', 'do', 'mee', 'diyan', 'Diyan' , 'DPN', 'EVAN' , 'EVAPAN', 
      'එවපන්','දාපන්කෝ', 'දකෝ', ' එවකෝ' , 'දාපන්', 'එව' , 'එවාන්' ,'දාකො' , 'දාකෝ' ,'මේක ගත්තා මන්',
    ];

    if (triggerWords.includes(textLower)) {
      if (m.message && m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo) {
        const quotedMessage = m.message.extendedTextMessage.contextInfo.quotedMessage;

        if (quotedMessage) {
          // Check if it's an image
          if (quotedMessage.imageMessage) {
            const imageCaption = quotedMessage.imageMessage.caption;
            const imageUrl = await Wizard.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
            await Wizard.sendMessage(m.from, {image: { url: imageUrl },caption:' > Sended By Shamika_BotWa', imageCaption,
              contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
              },
            });
          }

          // Check if it's a video
          if (quotedMessage.videoMessage) {
            const videoCaption = quotedMessage.videoMessage.caption;
            const videoUrl = await Wizard.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
            await Wizard.sendMessage(m.from, {video: { url: videoUrl },caption: ' > Sended By Shamika_BotWa', videoCaption,
              contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 9999,
                isForwarded: true,
              },
            });
          }
        }
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export default handleGreeting;
