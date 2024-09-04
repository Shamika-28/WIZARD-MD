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



import config from '../config.cjs';

const alwaysonlineCommand = async (m, Fox) => {
  const botNumber = await Fox.decodeJid(Fox.user.id);
  const isCreator = [botNumber, config.OWNER_NUMBER + '@s.whatsapp.net'].includes(m.sender);
  const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim().toLowerCase();

  if (cmd === 'alwaysonline') {
    if (!isCreator) return m.reply("*📛 THIS IS AN OWNER COMMAND*");
    let responseMessage;

    if (text === 'on') {
      config.ALWAYS_ONLINE = true;
      responseMessage = "Always Online has been enabled.";
    } else if (text === 'off') {
      config.ALWAYS_ONLINE = false;
      responseMessage = "Always Online has been disabled.";
    } else {
      responseMessage = "Usage:\n- `alwaysonline on`: Enable Always Online\n- `alwaysonline off`: Disable Always Online";
    }

    try {
      await Fox.sendMessage(m.from, { text: responseMessage }, { quoted: m });
    } catch (error) {
      console.error("Error processing your request:", error);
      await Fox.sendMessage(m.from, { text: 'Error processing your request.' }, { quoted: m });
    }
  }
};

export default alwaysonlineCommand;
