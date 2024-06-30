//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/Fk61zc1TQOeCc4Utr04PZL";
global.website = process.env.GURL || "https://chat.whatsapp.com/Fk61zc1TQOeCc4Utr04PZL";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "2347017071590";
global.owner = process.env.OWNER_NUMBER || "2347017071590";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0d6Y3NPZkZIemtWaG0yZGo1RENTV0N4QWxkNWVodzNCV2ErSEtTSTVIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWZWRFRGZHY3dkZzTHcrZXlYNjhmYXFCcys2MHdPZGdGcmMrNitDU0RGbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySVhyZVV4Rk0zamd3OEVhbXhHOHdHcVlWMys0cGkyYWVuRFpxZzRrazE0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RGM3Y3cwTGZXTGtxMzl6dEhGRndKZ3l5YWtDZU1Zd0NRK3Q4TDhPMTJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndFN21ML3FFZFNFb1RuNVN3YzFlVzFFN3BCajI5UkFwRHppNTRTL2hEMGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkorN3Iwa3NHLzJPRXQwaDA0d0FUNDZPQ0ltY1V3RWE1VWsram5QZXVyMHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxvdWVjUnlsUlc0SVZiQXAvZkF2VW12T3ZMM1Z3SFdHMndzdFFnbmMwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU84cGM1UjNaZ2xwaVlHZ09UcHZYRjFZa1NDZjRoMDFqSzdpdHRGbXNBUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1xMTNFMzN1bUFnSnAyYWNBVEY3cXJ5NGVUUmJFUGpnTjNCV3NqUUJSekRrcVVPOVNsUU5MMmxMZmE4eHpGdC9vV3ZkTlZvcXNMUHlKMzdMNzQrTEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc2LCJhZHZTZWNyZXRLZXkiOiJ2K2FHREN2Ynl0eG1BdGtYZG4rTWo5dkJZQmVpSmRscEdoR0twa3FEa0hrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHSWJMTUZpQ1M4MlMxQXdDblZrQVJRIiwicGhvbmVJZCI6IjgxYTY4ZDRhLTdlYzctNDQ3OS05MzJiLTdiOTEyMmM1MjUzOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWZXVNMWdYLzlqSzVNa1hNZ3VXWDdoNXVlSmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEdwOGgvanpBQmJFUExkSlZzSDZHMFRiZjM4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNBWFAxRjVIIiwibWUiOnsiaWQiOiIyMzQ3MDE3MDcxNTkwOjZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05LRDU0VUhFTzNsaExRR0dCUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlhTdUs5TkR2TFZ0YnFuRVp3Zlc4OGJGUUhZUkNKbmZzcE5URnNUbDRyRFE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlVxeU5UWk9GUlhES2tUblp5OUQybUVSWmNXNEJFamxBZFBWTUFtcTVTU3dYdGplWU9ZUFVZM1owWHBmbkRsS3JNbU0xK1lHVDd4RmliRnBNd3B5RURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJteENzZndGL0F0MTJkRTBGVk55OEZmYklnSlpSQkFOdEJHcWNCNWpLLzF0Q0c4NXoxWkM0ajNhZGpKUE4vYVIzTWJYbXh1WjZIZWtIMzJTb3k4OWVCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwMTcwNzE1OTA6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWMHJpdlRRN3kxYlc2cHhHY0gxdlBHeFVCMkVRaVozN0tUVXhiRTVlS3cwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NzQzMjI2fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "null",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝓘𝓫𝓻𝓪𝓱𝓲𝓶 𝓨𝓾𝓼𝓾𝓯😍",
  author: process.env.PACK_AUTHER || "𝓘𝓫𝓻𝓪𝓱𝓲𝓶 𝓨𝓾𝓼𝓾𝓯",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝓘𝓫𝓻𝓪𝓱𝓲𝓶 𝓨𝓾𝓼𝓾𝓯",
  ownername: process.env.OWNER_NAME || "𝓘𝓫𝓻𝓪𝓱𝓲𝓶 𝓨𝓾𝓼𝓾𝓯",
  errorChat: process.env.ERROR_CHAT || "2347017071590",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
