const songDecoder = song => {
  let newSong = song
    .replace(/WUB/g, " ")
    .replace(/\s\s+/g, " ")
    .trim() //mine
  // let newSong = song.replace(/(WUB)+/g," ").trim()
  // let newSong = song.split('WUB').filter(Boolean).join(' ');
  return newSong
}
songDecoder("WUBWUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
