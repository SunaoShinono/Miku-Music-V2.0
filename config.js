

module.exports = {
  TOKEN: "",
  language: "th",
  ownerID: ["705260973669482507", ""], 
  mongodbUri : "mongodb+srv://Shinono:Sunao_Shinono@miku-bot.pbceb.mongodb.net/?retryWrites=true&w=majority&appName=Miku-Bot",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Music on Shinono Server with my darling.", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 10, 
  errorLog: "", 
  nodes: [
    {
      name: "INZEWORLD.COM (DE)",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    },
    {
      name: "Koi Node V4",
      password: "prplmoe.me",
      host: "lavav4.prplmoe.me",
      port: 1118,
      secure: false
    },   
    {
      name: "Public Lavalink v4 NonSSL",
      password: "https://dsc.gg/ajidevserver",
      host: "lava-v4.ajieblogs.eu.org",
      port: 80,
      secure: false
    }
  ]
}
