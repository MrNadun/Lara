const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "X7ID0Kib#PDx1_5BzF1ZvR7_1gYl2ok5RyeQuB3jLlRkskjHydsQ", // Add your session id
PREFIX: process.env.PREFIX || ".",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
STATUES_REPLY: process.env.STATUES_REPLY || "false",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",   
READ_MESSAGE: process.env.READ_MESSAGE || "true",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '94760405102' : process.env.DELETEMSGSENDTO,
INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
};
