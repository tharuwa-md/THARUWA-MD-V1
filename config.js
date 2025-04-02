const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "THARUWA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE1nSlBtOWp3ZEErQmVTL3ZuWU45UTNMU2NCTmxPRDBZcGc0K0xTREtFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU8xY0x1Y05JYUlScEVvaVRXR2lEazhWYjBrQlVMa25RUU5JOG5FY2NXTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTFRYdGZXYU83ait4OVRqMmptYk1pUXYvcXdzbTdxbXdsQkxqS3ZhclVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxU2xPbzVOeWZISUEvWkFvc2x5cHRzWDFZZG1RdlBKSytITHl0T1pHVldFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdQczlSblhqK3NvOC8rL0N6bkNWdVJzTTRGalYzYXJvNnlKbi9nbW5ka2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJleFpMYkdnOENBR00yOFRkbFlob3NxU09aZm04NEsxSHhOZXNITk0rRlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUFlT2pFc1dMYWtER0xTbFdsWHh4eW0vRXd1a3FSNEFHenNDUkpyYXQydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjlic1M2ZDBOYzZDQ3hlM0lab2JxNE1UWW9xaXRqMndGTzRjZkVNaWtHTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFKTzJoeXJIQjF3RXh1b25pd0docmhjQzErODNYeTRTdXppT3g4M1FxUFBCVVhKVGJ2WS8ybytzM01DMS9jczBZdWhPMzMxcjkxZEx6cHcySTJIUWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJINUNXaGJnVnVQMHZHTVEwU080blBVV3l5TDczaXZGM1M5QlJmWkFEaExRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItYXREM1R1WFIxcThWbVJ1WFNrbEVnIiwicGhvbmVJZCI6Ijg5ZTY1NDUyLTZjZDMtNDcxZC04YjFkLWIxYjAzMzk1MmMzOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwd2M1dkZ5dDZYN2xKMS8yb05aOUhmSlUrTEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVZFWXZQS2FaZHd3TmxnZ2NsY01lcVIxV1g4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik02U0pDRFFYIiwibWUiOnsiaWQiOiI5NDc2OTA0MDI1Njo4OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSk9jMjQ4RUVLS2ZzNzhHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYzR3LzBvS3h1RG15aFF6MjU1dUQ4RU05TXZDS3BFVStJVy8ybXNBQTl5OD0iLCJhY2NvdW50U2lnbmF0dXJlIjoic0x3SWt5U0R2WS9EWUo3c25admlPcmFkdU1EcEw2MlZuWW1HN0g3c0JBVS93cjQ1djJpbWg0TmNGWHFJZVFzWC9vTk5YR2dpMVBxek5Cb0VFTTlJQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IjRzTSs1NzBWNHJCbWljNFd6WXlPRlpQSm9tdHVuRnEyNkpoZzc5TVpESWllRWRhSjRpTFVFbGVWbFFKdGdjdXVJR1d1UmdiSzNwWGZRL1RjOStpVGpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjkwNDAyNTY6ODhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWE9NUDlLQ3NiZzVzb1VNOXVlYmcvQkRQVEx3aXFSRlBpRnY5cHJBQVBjdiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MzU3MjkxMX0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS JUST NOW 𝗧𝗛𝗔𝗥𝗨𝗪𝗔_MD 😎😎*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "THARUWA_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝕄𝕣   𝕋   𝕠   𝕙   𝕚   𝕕",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94761180276",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝗧𝗛𝗔𝗥𝗨𝗪𝗔",
// add bot owner name
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
DESCRIPTION: process.env.DESCRIPTION || "*© 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 © ᴛʜᴀʀᴜᴡᴀ_𝙼𝙳*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/yw7szdC/IMG-20250331-WA0270.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> HEY 👋 I'M ALIVE NOW*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
DELETE_LINK: process.env.DELETE_LINK || "true",
// make anti link true,false for groups 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94761180276",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
