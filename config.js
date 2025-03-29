

module.exports = {
  TOKEN: "",
  language: "th",
  ownerID: ["705260973669482507", ""], 
  mongodbUri : "mongodb+srv://Shinono:Shinono@hatsunemikubot.yonuta5.mongodb.net/?retryWrites=true&w=majority&appName=HatsuneMikuBot",
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
      name: "Avinan",
      password: "avinan",
      host: "new-york-node-1.vortexcloud.xyz",
      port:  5008,
      secure: false
  }
  ]
}
