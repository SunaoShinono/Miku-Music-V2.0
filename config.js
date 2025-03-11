

module.exports = {
  TOKEN: "",
  language: "th",
  ownerID: ["705260973669482507", ""], 
  mongodbUri : "mongodb+srv://Shinono:Sunao_Shinono@miku-bot.pbceb.mongodb.net/?retryWrites=true&w=majority&appName=Miku-Bot",
  spotifyClientId : "bddc81fcd0af46d9b05a278f8f9f9939",
  spotifyClientSecret : "ee11fa4a59bf4f64b5a6433839b49c02",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "กำลังรอขึ้นเวที ใช้คำสั่ง /play", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 10, 
  errorLog: "", 
  nodes: [
    {
      name: "Hatsune Miku Node Server",
      password: "hatsune_miku",
      host: "78.46.65.243",
      port: 5979,
      secure: false
    }
  ]
}
