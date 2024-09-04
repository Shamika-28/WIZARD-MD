
import dotenv from 'dotenv';
dotenv.config();

import {
    makeWASocket,
    Browsers,
    fetchLatestBaileysVersion,
    DisconnectReason,
    useMultiFileAuthState,
} from '@whiskeysockets/baileys';
import { Handler, Callupdate, GroupUpdate } from './config/index.js';
import express from 'express';
import pino from 'pino';
import fs from 'fs';
import NodeCache from 'node-cache';
import path from 'path';
import chalk from 'chalk';
import moment from 'moment-timezone';
import axios from 'axios';
import config from './config.cjs';
import pkg from './lib/autoreact.cjs';
const { emojis, doReact } = pkg;

const sessionName = "session";
const app = express();
const orange = chalk.bold.hex("#FFA500");
const lime = chalk.bold.hex("#32CD32");
let useQR = false;
let initialConnection = true;
const PORT = process.env.PORT || 3000;

const MAIN_LOGGER = pino({
    timestamp: () => `,"time":"${new Date().toJSON()}"`
});
const logger = MAIN_LOGGER.child({});
logger.level = "trace";

const msgRetryCounterCache = new NodeCache();

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const sessionDir = path.join(__dirname, 'session');
const credsPath = path.join(sessionDir, 'creds.json');

if (!fs.existsSync(sessionDir)) {
    fs.mkdirSync(sessionDir, { recursive: true });
}

async function downloadSessionData() {
    if (!config.SESSION_ID) {
        console.error('🛠️⚙️Please add your session to SESSION_ID env ‼️');
        return false;
    }
    const sessdata = config.SESSION_ID.split("Wizard-MD:/")[1];
    const url = `https://pastebin.com/raw/${sessdata}`;
    try {
        const response = await axios.get(url);
        const data = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
        await fs.promises.writeFile(credsPath, data);
        console.log("🔐 Session Successfully Loaded !!⏳");
        return true;
    } catch (error) {
       // console.error('Failed to download session data:', error);
        return false;
    }
}

async function start() {
    // ===========================MongoDB connect================================
/*    const connectDB = require('./lib/mongodb.js')
    connectDB();
    //===========================================================================
*/
    try {
        const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
        const { version, isLatest } = await fetchLatestBaileysVersion();
        console.log(`🧙‍♂️using WA v${version.join('.')}, isLatest: ${isLatest}`);
        
        const Fox = makeWASocket({
            version,
            logger: pino({ level: 'silent' }),
            printQRInTerminal: useQR,
            browser: ["Wizard--MD", "safari", "3.3"],
            auth: state,
            getMessage: async (key) => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id);
                    return msg.message || undefined;
                }
                return { conversation: "⏳Testing⏳" };
            }
        });

        Fox.ev.on('connection.update', (update) => {
            const { connection, lastDisconnect } = update;
            if (connection === 'close') {
                if (lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut) {
                    start();
                }
            } else if (connection === 'open') {
                if (initialConnection) {
                    console.log(chalk.green("🧙‍♂️Successful️ ✅"));
                    Fox.sendMessage(Fox.user.id, { text: `┌─𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐁𝐲
│
│ 𝐸𝑡ℎ𝑖𝑥 𝑆𝑖𝑑  x  𝐻𝐴𝑆𝐸𝐸𝐵
└─────────
┌─𝗢𝘄𝗻𝗲𝗿  𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽
│ wa.me/+917050906659
└─────────
┌─  𝗢𝘄𝗻𝗲𝗿 𝗬𝘁
│𝑆𝑢𝑏𝑠𝑐𝑟𝑖𝑏𝑒 𝑀𝐻 𝑀𝑂𝐷𝑆 𝑂𝐹𝐶
https://youtube.com/@SuadhaiTech
 https://youtube.com/@mhmodsofc
└─────────
┌─ 𝗩𝗶𝘀𝗶𝘁 𝗢𝘂𝗿 𝗢𝘁𝗵𝗲𝗿 𝗕𝗼𝘁𝘀
│https://github.com/chhaseeb47 
└─────────
┌─ 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗖𝗵𝗮𝗻𝗻𝗲𝗹𝘀
│ 
https://whatsapp.com/channel/0029Va8SjGU1noyxsYBA2K2e
└─────────
┌─  𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗚𝗿𝗼𝘂𝗽𝘀
│
https://chat.whatsapp.com/HwhBcKPN1AWKuImlq5kG3X
└─────────\n\n\n` });
                    initialConnection = false;
                } else {
                    console.log(chalk.blue("♻️ Connection reestablished after restart.🦊"));
                }
            }
        });

        Fox.ev.on('creds.update', saveCreds);

        Fox.ev.on("messages.upsert", async chatUpdate => await Handler(chatUpdate, Fox, logger));
        Fox.ev.on("call", async (json) => await Callupdate(json, Fox));
        Fox.ev.on("group-participants.update", async (messag) => await GroupUpdate(Fox, messag));

        if (config.MODE === "public") {
            Fox.public = true;
        } else if (config.MODE === "private") {
            Fox.public = false;
        }

        Fox.ev.on('messages.upsert', async (chatUpdate) => {
            try {
                const mek = chatUpdate.messages[0];
                if (!mek.key.fromMe && config.AUTO_REACT) {
                    console.log(mek);
                    if (mek.message) {
                        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                        await doReact(randomEmoji, mek, Fox);
                    }
                }
            } catch (err) {
                console.error('Error during auto reaction:', err);
            }
        });
    } catch (error) {
        console.error('Critical Error:', error);
        process.exit(1);
    }
}

async function init() {
    if (fs.existsSync(credsPath)) {
        console.log("🛠️ Session ID found📛");
        await start();
    } else {
        const sessionDownloaded = await downloadSessionData();
        if (sessionDownloaded) {
            console.log("🔑 Session downloaded, starting bot.�🔓");
            await start();
        } else {
            console.log("🔐No session found or downloaded⚙️");
            useQR = true;
            await start();
        }
    }
}

init();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`✨Server is running on port ${PORT}`);
});
