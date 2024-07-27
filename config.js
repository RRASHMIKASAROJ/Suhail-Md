const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_38_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3LFxuICAgICAgICAyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNixcbiAgICAgICAgMTEwLFxuICAgICAgICA0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgxLFxuICAgICAgICA0LFxuICAgICAgICAyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDksXG4gICAgICAgIDExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDU2LFxuICAgICAgICA1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk4LFxuICAgICAgICA2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0MixcbiAgICAgICAgMTA1LFxuICAgICAgICA4OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDMzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDM3LFxuICAgICAgICA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQxLFxuICAgICAgICA3NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3SGR5eWdIWjAzNDJhVmxMcEJoRDRwY2dGME9BMHhKTllsQmNMeHlHOFk0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGX2JSYy0zYlFSbXp6aF9rQnRrbFJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZmMWM2NmMxLTcxYTEtNDZmOS04NTVmLTQ1Zjk3ODllYzdlZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICA5MSxcbiAgICAgIDExOSxcbiAgICAgIDYyLFxuICAgICAgOTcsXG4gICAgICAyMjEsXG4gICAgICAxNSxcbiAgICAgIDQ3LFxuICAgICAgMjU0LFxuICAgICAgMjA0LFxuICAgICAgMjA5LFxuICAgICAgMjU1LFxuICAgICAgMzUsXG4gICAgICAxNzYsXG4gICAgICAyMjQsXG4gICAgICA4NixcbiAgICAgIDE4LFxuICAgICAgMjQ4LFxuICAgICAgMTIzLFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ2LFxuICAgICAgMjMzLFxuICAgICAgMjIsXG4gICAgICA3MyxcbiAgICAgIDE4NixcbiAgICAgIDExNyxcbiAgICAgIDE5MyxcbiAgICAgIDgzLFxuICAgICAgMTMwLFxuICAgICAgMTE5LFxuICAgICAgMTcwLFxuICAgICAgMTA4LFxuICAgICAgMTI3LFxuICAgICAgMjAsXG4gICAgICAxNjUsXG4gICAgICAxMjUsXG4gICAgICAxMDEsXG4gICAgICA1MixcbiAgICAgIDQyLFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1RHNTVRTVdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzUwNjI1Mzc1OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODAxNjU3NzQ3MTY5Mjg6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSm0wbk44QkVPZVBrclVHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4UDR0OEx2Rm9ZQUlNeEZjRFB6S2hNY1dtRjRPbGRDdGUxV1RMN0poUUhBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlwWWhWSFR5dW56MU01blRzck5uRkN3dHFZMDczOVBMaXBFL2lqQjlTWDFLbDN4eisvQVZhVkdBbU8yQ1R4NXFFRkxhVGpTMVd3T3ZBcUtMN0hOWENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpLTXIvTkZuMHo0L2ovdElFZXpId3BzcE1XZ29tTEM2MC9FUDk2ckQ0T25PQ1pSa25tVTJoc1ZKaE54ZUVpb0VIaTZ1cTd0Q2w2NlltQm4vMXVNQml3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzUwNjI1Mzc1OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjA1ODczMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU93a1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3drLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNmxaVStRNnVGV212amFWN0VUdzRNMjNxaFdWYzJvd0IzSFgzSHZ1aTBrVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjgxMzAzMjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE5MTIzNTg0ODFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
