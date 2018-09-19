const discord = require("discord.js");
const yourbot = new discord.Client();
const prefix = "!"
const version = "1.0.7"
const profanities = require('profanities')
yourbot.on("ready",()=>{
        console.log("Bot is online");
})

yourbot.on("message",(message)=>{
   if(!message.content.startsWith(prefix)) return;
        if (message.content.toUpperCase() == profanities[x].toUpperCase()) {
          if (message.member.roles.has.name.sub('Swearing Perms.')) {
              message.reply("Wow. :o")
          } else {
              message.channel.sendMessage(message.author + ', you must have Swearing Perms. To swear.')
              message.delete
            }
    }
   if(message.content.startsWith(prefix + "hi")){
        message.reply("Hello!");
   }
   if(message.content.startsWith(prefix + "version")){
        message.reply("The current version is: " + version);
   }
   if(message.content.startsWith(prefix + "credits")){
        message.channel.send("Check your DM's " + message.author)
        message.author.send("IIBasicWonder - Founder, " + "derek8599 - Co-Founder")   
   }
   if(message.content.startsWith(prefix + "support")){
        message.channel.send("Check your DM's " + message.author)
        message.author.send("Commands: !support !credits !version !hi !help !PC-Broke !Rank !robloxuser RoBasic")
        message.author.send("https://discord.gg/wKUpAbH")
   }
    if(message.content.startsWith(prefix + "help")){
        message.channel.send("Warning! Commands are cAsE sEnSiTiVe!")
    }
    if(message.content.startsWith(prefix + "PC-Broke")){
        message.channel.send("Good for you! :)")
    }
    if(message.content.startsWith(prefix + "Rank")){
        message.channel.send("Please send the promotional code to IIBasicWonder. " + message.author)   
    }  
    if(message.content.startsWith(prefix + "robloxuser RoBasic")){
        message.reply("My roblox username is RoBasicBot");  
    }
})

yourbot.login("NDY2NTgyNzc1MzQ0OTIyNjI0.Dn3I2w.MqahSMfGftDXzaJpkxlAxh11t1Y")
