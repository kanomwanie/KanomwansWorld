const UST_list = [
    {
        "name": "Oh! One True Love",
        "type": "Eng cvvc",
        "link": "https://www.mediafire.com/file/wg1gzazka24dgdr/Oh%21_One_true_love_UST.rar"
    },
        {
        "name": "Oh! Dungeon",
        "type": "Eng cvvc",
        "link": "https://www.mediafire.com/file/pkaiixfewz3h63z/Oh%21_Dungeon_UST.rar"
    },
            {
        "name": "Gravity Falls opening theme (Thai ver.)",
        "type": "Thai vccv / cvvc",
        "link": "https://drive.google.com/file/d/0B4ARNM2BPvHnVV9Qc2pyMUpZVnc/view?resourcekey=0-20ec5fjqe1QqA1K9u1k_Lw"
    },
            {
        "name": "ช้าง (Elephent)",
        "type": "Thai cvvc ",
        "link": "https://drive.google.com/file/d/0B4ARNM2BPvHnVTFKZXFmT3VaaFE/view?resourcekey=0-z7tUY4AOpbEsN0fQjY3Heg"
    },
            {
        "name": "ไอ้จิตร(มึงออกไปเลย) ",
        "type": "Thai cvvc",
        "link": "https://drive.google.com/file/d/0B4ARNM2BPvHnWG5GeGVPMjQwREU/view?resourcekey=0-SdHC1had9fvPCCSA1zGrtg"
    },
            {
        "name": "Die House (All Bets Are Off!) ",
        "type": "Eng Arpasing",
        "link": "https://www.mediafire.com/file/hk2raq84h8h7m5h/Die+house+%28All+bet+are+off%29+UST.rar"
    },
            {
        "name": "Sect",
        "type": "JP cv(Hiragana/romanji)",
        "link": "https://bowlroll.net/file/171135"
    },
            {
        "name": "Suspect (Musicbox ver.)",
        "type": "JP vcv(Hiragana)",
        "link": "https://www.mediafire.com/file/yt06t68cl868580/Suspect+hololive+IDOL+PROJECT+(Musicbox+ver.)+UST.rar/file"
    },
            {
        "name": "Overd (Musicbox ver.)",
        "type": "JP vcv(Hiragana)",
        "link": "https://www.mediafire.com/file/fnrydi3n5oykp7o/Overd+(Musicbox+version)+UST.rar/file"
    },
            {
        "name": "Shiny Smily Story (Musicbox ver.)",
        "type": "JP vcv(Hiragana)",
        "link": "https://www.mediafire.com/file/0ogjq8l9xbgz5b3/Shiny+Smily+Story+(Musicbox+version)+UST.zip/file"
    },
            {
        "name": "PSYCHO/HAKOS BAELZ (Musicbox ver.)",
        "type": "JP vcv(Hiragana)",
        "link": "https://www.mediafire.com/file/kmevk6n5v8tsis2/PSYCHO-HAKOS_BAELZ_%2528Musicbox_version%2529_UST.zip/file"
    },
            {
        "name": "Always Tied (Musicbox ver.)",
        "type": "Eng cvvc(Delta) w/ MIDI",
        "link": "https://www.mediafire.com/file/vfu8gnp2h2xfnqx/Always_Tied_%2528Musicbox_version%2529_UST.zip/file"
    },
                {
        "name": "Top of the World (Musicbox ver.)",
        "type": "Eng cvvc(Delta) w/ MIDI",
        "link": "https://www.mediafire.com/file/zn3dg6mg8mddfg1/Top_of_the_world_%2528Musicbox_version%2529_UST-Midi.zip/file"
    },
                {
        "name": "Yoidore Shirazu x Vocaloid song (Mashup)",
        "type": "Jp cv(Hiragana)",
        "link": "https://bowlroll.net/file/321522"
    },
                {
        "name": "Do U (Musicbox ver.) ",
        "type": "Diffsinger USTx",
        "link": "https://bowlroll.net/file/331829"
    },
                {
        "name": "HELP!! (Musicbox ver.)",
        "type": "JP vcv(Hiragana)",
        "link": "https://bowlroll.net/file/332687"
    },
                {
        "name": "Cupid/Jack Stauber (Musicbox ver.)",
        "type": "Eng cvvc(Delta)",
        "link": "https://bowlroll.net/file/333770"
    },
                {
        "name": "Woven Fates (Musicbox ver.)",
        "type": "Eng cvvc(Delta) w/ MIDI",
        "link": "https://bowlroll.net/file/336175"
    },
                {
        "name": "Fact/Tokoyami Towa (Musicbox ver.)",
        "type": "JP cvvc(Hiragana)",
        "link": "https://bowlroll.net/file/338850"
    },
]

function UST_log(){
    let text = ""
    for (let i = 0; i < UST_list.length; i++){
        let new_text =  `    <div class="w3-row" style="margin-left:20px; margin-top:10px;"> 
  <div class="w3-container w3-cell">${i+1}.</div>
  <div class="w3-container w3-cell">${UST_list[i].name}</div>
  <div class="w3-container w3-cell">${UST_list[i].type}</div>
  <div class="w3-container w3-cell"> <a href="${UST_list[i].link}" class="w3-hover-blue">Link</a></div>
</div> `
        text = text + new_text
    }
document.getElementById("ust").innerHTML = text;
}