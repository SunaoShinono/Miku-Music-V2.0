module.exports = {
    footer: "จัดการ และ รันระบบโดย Hatsune_miku_16 | Miku Music v2.1",
    ping: {
      description: "เช็ก Ping ",
      response: "กำลังดึงข้อมูลจาก Shinono Server...",
      embed: {
        title: "Ping ของ Miku ในตอนนี้",
        responseTime: "- เวลาตอบสนองของ Miku : **{latency}ms**",
        websocketPing: "- เวลาตอบสนองระหว่างเว็บ : **{ping}ms**",
        uptime: "- Miku ได้ออนไลน์มาแล้วเป็นเวลา : **{uptime}**",
        footer: "จัดการ และ รันระบบโดย Hatsune_miku_16 | Miku Music v2.1"
      }
    },
    addsong: {
      embed: {
          playlistNotFound: "เอ๊ะ Miku หา Playlist ไม่เจองะ",
          playlistNotFoundDescription: "- ไม่เจอ playlist",
          accessDenied: "ไม่สามารถเข้าถึงได้",
          accessDeniedDescription: "- คุณไม่มีสิทธิที่จะเพิ่มเพลงลงใน Playlist นี้นะคะ",
          songAdded: "เพิ่มเพลงเรียบร้อยแล้วค่ะ",
          songAddedDescription: "- เพลง **{songInput}** ได้ถูกเพิ่มลง **{playlistName}** เรียบร้อยแล้วค่ะ",
          error: "อ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
          errorDescription: "- ไม่สามารถเพิ่มเพลงได้"
      }
  },
  allplaylists: {
    embed: {
        noPlaylistsFound: "ไม่พบ Playlist",
        noPlaylistsFoundDescription: "- ตอนนี้ Miku ไม่เจอ Playlist รวมของเซิร์ฟเวอร์นี้นะคะ",
        createdBy: "สร้างโดย: {userId}",
        serverName: "เซิร์ฟเวอร์: {serverName}",
        songs: "จำนวนเพลง: **{songCount}**",
        publicPlaylistsTitle: "Public Playlists (Page {currentPage}/{totalPages})",
        error: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        errorDescription: "- การดึง Playlist จาก Server ไม่สำเร็จ"
    }
  },
  autoplay: {
    embed: {
        autoplayUpdated: "อัพเดท Auto Play แล้ว",
        autoplayStatus: "- Auto Play ได้ถูก **{status}** สำหรับเซิร์ฟเวอร์นี้แล้ว",
        enabled: "เปิดใช้งาน",
        disabled: "ปิดใช้งาน",
        error: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        errorDescription: "- พบ Error ระหว่างการอัพเดท Auto Play"
    },
    commandDescription: "เปิดหรือปิด autoplay"
  },
  createplaylist: {
    embed: {
        playlistExists: "ชื่อ Playlist มีอยู่แล้ว",
        playlistExistsDescription: "- ชื่อ Playlist ได้ถูกสร้างไว้แล้วนะคะ",
        playlistCreated: "สร้าง Playlist เรียบร้อย",
        playlistCreatedDescription: "- Playlist **{playlistName}** ถูกสร้างแล้วค่ะ\n- ถูกสร้างเป็นแบบ: **{visibility}**.",
        private: "ส่วนตัว",
        public: "ส่วนรวม",
        error: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        errorDescription: "- สร้าง Playlist ไม่สำเร็จ"
    },
    commandDescriptionName: "ใส่ชื่อ playlist",
    commandDescriptionPrivate: "ตั้งค่า playlist เป็นแบบส่วนตัว (มีแค่คุณที่มองเห็น)"
  },
  deleteplaylist: {
    embed: {
        playlistNotFound: "ไม่พบ Playlist",
        playlistNotFoundDescription: "- ไม่เจอ playlist ที่จะลบเลยค่ะ.",
        accessDenied: "ไม่มีสิทธิ์เข้าถึง",
        accessDeniedDescription: "- คุณไม่มีสิทธิ์ที่จะลบ playlist นี้นะคะ",
        playlistDeleted: "ลบ playlist เรียบร้อยแล้วค่ะ",
        playlistDeletedDescription: "- Playlist **{playlistName}** ถูกลบเรียบร้อย",
        error: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        errorDescription: "- เหมือนว่าจะเกิดปัญหาระหว่างการลบ playlist"
    },
    commandDescriptionName: "ใส่ชื่อ playlist"
  },
  deletesong: {
    embed: {
        playlistNotFound: "เอ๊ะ Miku หา playlist ไม่เจออะ",
        playlistNotFoundDescription: "- ไม่พบ playlist",
        songDeleted: "ลบเพลงออกจาก playlist เรียบร้อยแล้วค่ะ",
        songDeletedDescription: "- เพลง **{songName}** ได้ถูกลบออกจาก playlist **{playlistName}** เรียบร้อย",
        error: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        errorDescription: "- เหมือนว่าจะลงเพลงออกจาก playlist ไม่ได้"
    },
    commandDescriptionPlaylist: "ใส่ชื่อ playlist",
    commandDescriptionSong: "ใส่ชื่อเพลง"
  },
  filters: {
    embed: {
        error: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        noPlayer: "- ไม่มีเพลงที่กำลังเล่นอยู่ โปรดใช้คำสั่ง `/play` เพื่อเล่นเพลงก่อน แล้วค่อย DJ ปรับเสียงให้นะคะ",
        wrongChannel: "- เอ๋ คุณต้องอยู่คอนเสิร์ตเดเียวกับ Miku ก่อนนะคะ ถึงจะให้ DJ ปรับเสียงให้ได้ มาค่ะ มานั่งด้วยกัน",
        filtersCleared: "DJ ได้ปรับเพลงคืนเรียบร้อยแล้วค่ะ",
        invalidFilter: "เลือกตัวปรับเสียงไม่ถูกต้อง โปรดเลือกใหม่นะคะ",
        filterApplied: "DJ ได้ปรับเสียงเป็นโหมด **{filter}** เรียบร้อยแล้วค่ะ",
        errorProcessing: "- เหมือนว่าเครื่อง Mixer จะควันขึ้นนะคะ รอเจ้านายมาแก้ก่อนนะคะ (Error)"
    },
    commandDescription: "ให้ DJ ปรับเสียงให้คุณ"
  },
  help: {
    embed: {
        title: "📜 {botName} เมนูช่วยเหลือ",
        author: "ผู้ช่วยประจำตัวของ Miku ตัวน้อย",
        description: `
        **ยินดีต้อนรับเหล่าแฟนคลับทุกท่านนะคะ หนู Miku เองค่ะ**

        > เป็นคู่หู และ นักร้องประจำตัวของทุกๆคน
        > มาดูกัน ว่า Miku ตัวน้อย สามารถทำอะไรได้บ้าง:
                
        **📂 จำนวนคำสั่ง:** {totalCommands}
        **🌐 จำนวนเซิร์ฟเวอร์:** {totalServers}
        **👥 จำนวนผู้ใช้:** {totalUsers}
        **⏳ เปิดมาแล้วเป็นเวลา:** {uptimeString}
        **📡 ความล่าช้าในการเรียกคำสั่ง:** {ping} ms
        `,
        availableCommands: "คำสั่งที่สามารถใช้งานได้",
        noDescription: "รายละเอียดไม่พร้อมใช้งาน",
        noCommands: "ไม่มีคำสั่งที่ใช้งานได้",
        error: "❌ เกิด Error ระหว่างการเรียกคำสั่งเมนูช่วยเหลือจาก Server"
    },
    commandDescription: "ดูรายละเอียดสำหรับบอท"
  },
  myplaylists: {
    embed: {
        noPlaylistsFound: "ไม่พบ Playlist",
        noPlaylistsFoundDescription: "- คุณยังไม่ได้สร้าง playlist เลย ลองใช้คำสั่ง `/createplaylist` เพื่อสร้าง playlist",
        yourPlaylistsTitle: "Playlists ของคุณ (หน้าปัจจุบัน {currentPage}/{totalPages})",
        visibility: "สิทธิการมองเห็น",
        private: "ส่วนตัว",
        public: "ส่วนรวม",
        server: "เซิร์ฟเวอร์",
        songs: "เพลง",
        error: "Error",
        errorDescription: "- ไม่สามารถดึง playlist จาก database ได้ โปรดติดต่อเจ้านายของ Miku"
    }
  },
  nowPlaying: {
    embed: {
        error: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        noSong: "- ไม่มีเพลงที่กำลังเล่นอยู่ในตอนนี้นะคะ",
        nowPlaying: "กำลังเล่นเพลง",
        errorDescription: "- อ๊ะ เหมือนว่ากระดาษเพลงจะหายไปแล้ว แงงง ติดต่อเจ้านายของ Miku เพื่อเอากระดาษเพลงคืนมา"
    }
  },
  pause: {
    embed: {
        error: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        noActivePlayer: "- ไม่มีเพลงเล่นอยู่ในตอนนี้นะคะ",
        paused: "หยุดเพลงชั่วคราวเรียบร้อยค่ะ",
        pausedDescription: "**- เพลงปัจจุบัน ได้ถูกหยุดเรียบร้อย หากต้องการเล่นต่อ ใช้ `/resume` นะคะ**",
        errorDescription: "- ไม่สามารถหยุดเพลงได้ โปรดติดต่อเจ้านายของ Miku เพื่อซ่อมปุ่ม Spacebar"
    }
  },
  play: {
    embed: {
        error: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        noVoiceChannel: "- โปรดเข้าห้องเสียงก่อนนะคะ แล้วใช้คำสั่งเล่นเพลงอีกครั้ง",
        noLavalinkNodes: "- ไม่พบ Node สำหรับเล่นเพลง โปรดติดต่อเจ้านายของ Miku เพื่อให้เจ้านายเสียบสายสัญญาณก่อน",
        noResults: "- เอ๊ะ หาเพลงไม่เจออ่าาาาา",
        requestUpdated: "คำขอได้ถูกอัพเดทแล้วค่ะ",
        successProcessed: "- คำขอเพลงของคุณได้อัพเดทลงในคิวเพลงเรียบร้อยแล้วค่ะ\n- ใช้ปุ่มด้านล่าง เพื่อควบคุมเพลง",
        errorProcessing: "- เหมือนว่าเครื่องเสียงจะเจ๊งนะคะ ติดต่อเจ้านายของ Miku ให้เอาตัวใหม่เข้ามาเปลี่ยนเดี๋ยวนี้เลยค่ะ"
    },
    commandDescription: "ใส่ชื่อเพลง / ลิงค์เพลง หรือ playlist"
  },
  playCustomPlaylist: {
    embed: {
        error: "Error",
        noVoiceChannel: "- โปรดเข้าห้องเสียงก่อนนะคะ แล้วใช้คำสั่งเล่นเพลงอีกครั้ง",
        playlistNotFound: "- ไม่พบ Playlist",
        accessDenied: "ไม่มีสิทธิเข้าถึง",
        noPermission: "- คุณไม่มีสิทธิที่จะเล่น playlist ส่วนตัวนี้",
        emptyPlaylist: "- playlist โคตรโล่งเลย หาเพลงมาใส่เร็ว",
        playingPlaylist: "กำลังเล่น Playlist",
        playlistPlaying: "- Playlist **{playlistName}** กำลังเล่น\n- ใช้ปุ่มด้านล่างเพื่อควบคุมเพลง",
        errorResolvingSong: "- Error ระหว่างการแก้ไขเพลง",
        errorPlayingPlaylist: "- ไม่สามารถเล่นเพลงใน playlist ได้"
    },
    commandDescription: "ใส่ชื่อ playlist"
  },
  queue: {
    embed: {
        queueEmpty: "คิวเพลงโล่งมากเจ้าค่ะ",
        queueEmptyDescription: "- ตอนนี้คิวเพลงว่างมากกกกก หาเพลงมาใส่โดยใช้คำสั่ง `/play` ได้เลยค่ะ",
        currentQueue: "คิวเพลงปัจจุบัน",
        noMoreSongs: "- ไม่มีเพลงในคิวเพลงแล้ว",
        error: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        errorDescription: "- เกิดปัญหาระหว่างการดึงคิวเพลงมาดูอะ"
    }
  },
  remove: {
    embed: {
        queueEmpty: "คิวเพลงโล่งมากเจ้าค่ะ",
        queueEmptyDescription: "- ตอนนี้คิวเพลงว่างมากกกกก หาเพลงมาใส่โดยใช้คำสั่ง `/play` ได้เลยค่ะ",
        invalidPosition: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        invalidPositionDescription: "- ตำแหน่งไม่ถูกต้อง โปรดใส่ตัวเลขระหว่าง 1 และ {queueLength}",
        songRemoved: "เพลงถูกลบออกแล้วค่ะ",
        songRemovedDescription: "- ลบเพลง: **{songTitle}** ออกจากคิวเพลงเรียบร้อย",
        error: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        errorDescription: "- เหมือนว่ายางลบจะด้านจนลบเพลงออกจากคิวไม่ได้่ ติดต่อเจ้านายของ Miku เพื่อเปลี่ยนยางลบใหม่"
    }
  },
  resume: {
    embed: {
        noActivePlayer: "ไม่พบเพลงที่เล่นอยู่ในปัจจุบัน",
        noActivePlayerDescription: "- ไม่พบเพลงที่เล่นอยู่ในปัจจุบัน ใช้คำสั่ง `/play` เพื่อเล่นเพลงก่อนนะคะ",
        resumed: "เล่นเพลงต่อเรียบร้อย",
        resumedDescription: "**- Miku ร้องเพลงต่อให้เรียบร้อยแล้วค่ะ**",
        error: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        errorDescription: "- เหมือนว่าไมค์จะเจ๊งนะ โปรดติดต่อเจ้านายเพื่อเปลี่ยนไมค์"
    }
  },
  showsongs: {
    embed: {
        error: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        playlistNotFound: "- ไม่พบ Playlist",
        accessDenied: "ไม่สามารถเข้าถึงได้",
        noPermission: "- คุณไม่มีสิทธิที่จะดู playlist ส่วนตัวนี้ได้",
        noSongs: "- ไม่มีเพลงใน playlist นี้นะคะ",
        songsInPlaylist: "เพลงใน Playlist {playlistName}",
        songsInPlaylistPage: "เพลงใน playlist {playlistName} (หน้าปัจจุบัน {currentPage}/{totalPages})",
        errorDescription: "- เหมือนว่าจะเกิดปัณหาระหว่างการดึงข้อมูลเพลงใน playlist"
    }
  },
  shuffle: {
    embed: {
        queueEmpty: "คิวเพลงโล่งมากเจ้าค่ะ",
        queueEmptyDescription: "- ตอนนี้คิวเพลงว่างมากกกกก หาเพลงมาใส่โดยใช้คำสั่ง `/play` ได้เลยค่ะ",
        queueShuffled: "เล่นแบบสลับเพลงเรียบร้อยแล้วค่ะ",
        queueShuffledDescription: "- เล่นเพลงในคิวเพลงแบบสลับเรียบร้อยแล้ว",
        error: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        errorDescription: "- เหมือนว่าจะเล่นสลับเพลงไม่ได้"
    }
  },
  skip: {
    embed: {
        noActivePlayer: "ไม่พบเพลงที่เล่นอยู่ในปัจจุบัน",
        noActivePlayerDescription: "- ไม่พบเพลงที่เล่นอยู่ในปัจจุบัน ใช้คำสั่ง `/play` เพื่อเล่นเพลงก่อนนะคะ",
        songSkipped: "ข้ามเพลงเรียบร้อย",
        songSkippedDescription: "**- Miku ร้องเพลงต่อไปแล้วค่ะ**",
        error: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        errorDescription: "- ข้ามเพลงไม่ได้อ่า เกิดอะไรขึ้นกันนะ"
    }
  },
  stop: {
    embed: {
        noActivePlayer: "ไม่พบเพลงที่เล่นอยู่ในปัจจุบัน",
        noActivePlayerDescription: "- ไม่พบเพลงที่เล่นอยู่ในปัจจุบัน ใช้คำสั่ง `/play` เพื่อเล่นเพลงก่อนนะคะ",
        musicHalted: "หยุดเล่นเพลงแล้ว",
        musicHaltedDescription: "**- ตอนนี้เพลงได้หยุดแล้ว ถ้างั้น Miku ขอไปพักก่อนนะคะ**",
        error: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        errorDescription: "- หยุดร้องเพลงไม่ได้ ช่วยด้วยยยยยยยยยยยยยยย เอา Miku ออกจากเวทีหน่อยยย"
    }
  },
  support: {
    embed: {
        authorName: "Support Server",
        description: "➡️ **Join our Discord server for support and updates:**\n- Discord - {supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - {githubLink}\n- Replit - {replitLink}\n- YouTube - {youtubeLink}",
        error: "Error",
        errorDescription: "- An error occurred while processing your request."
    }
  },
  volume: {
    embed: {
        noActivePlayer: "ไม่พบเพลงที่เล่นอยู่ในปัจจุบัน",
        noActivePlayerDescription: "- ไม่พบเพลงที่เล่นอยู่ในปัจจุบัน ใช้คำสั่ง `/play` เพื่อเล่นเพลงก่อนนะคะ",
        volumeUpdated: "ปรับระดับเสียงเรียบร้อย",
        volumeUpdatedDescription: "- ระดับเสียงถูกปรับเป็น **{volume}% แล้วค่ะ**",
        error: "เอ๊ะ เหมือนว่าจะเจอ Error เข้าให้แล้ว",
        errorDescription: "อ่าว Volume เสียหรอ งั้นตามเจ้านายของ Miku มาซ่อมเร็ว"
    },
    volumeRangeError: "ระดับเสียง จะสามารถปรับได้ระหว่าง 0 ถึง 100 เท่านั้นนะคะ โปรดใส่ระดับเสียงที่ต้องการจะปรับใหม่ด้วย"
  },
    errors: {
      noPermission: "เอ๊ะ เหมือนว่าคุณจะไม่มีสิทธิได้การปรับระดับเสียงนะคะ",
      generalError: "- Error: {error}"
    }
  };

  
