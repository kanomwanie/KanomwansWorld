const update_txt =[
    {"date" : "25.12.15",
    "note": "I make this site!"
},
    {"date" : "21.2.16",
    "note": "Fix some mistake."
},
    {"date" : "9.6.16",
    "note": "Change I RE concept art and edit character's profile."
},
    {"date" : "2.9.16",
    "note": "Add Phiang aw's character page!"
},
    {"date" : "30.12.16",
    "note": "Add Roj's and Vibrate's character page . Release I WA Scream and Roj 1.00 voicebank."
},
    {"date" : "2.3.17",
    "note": "Release Vibrate and Phiang aw's VB . Edit character and download page."
},
    {"date" : "24.4.17",
    "note": "Release Kanomwan Destroy 2.0. Edit download page."
},
    {"date" : "25.4.17",
    "note": "Add wip voicebank list in download page."
},
    {"date" : "30.7.17",
    "note": "Release Kanomwan's TH2 VB."
},
    {"date" : "23.8.17",
    "note": "Release I WA's Whisper & WhisperVCV VB and add some WIP VBs."
},
    {"date" : "12.10.17",
    "note": "Release I WA's Bunny VB , add some WIP VBs , edit usage clause and add ust page."
},
    {"date" : "20.11.17",
    "note": "Release Popillious's VB and edit character's profile."
},
    {"date" : "2.12.17",
    "note": "Release Kanomwan's CV ACT3 and Iwa's ROLL VB."
},
    {"date" : "4.1.18",
    "note": "Release Fxckking's VB . Add Fxckking and 4L1C3's character page. Add Die house's UST."
},
    {"date" : "15.1.18",
    "note": "Add 'Link' page! Go and support my friend as well!!"
},
    {"date" : "2.2.18",
    "note": "Re did whole site to easier to manage! and few hint of new utau !"
},
    {"date" : "26.3.18",
    "note": "Add New Term of Use​ page."
},
    {"date" : "17.4.18",
    "note": "Release IWA cvvc act 1 and Kanomwan Sing VB. and add some wip VBs."
},
    {"date" : "30.7.18",
    "note": "Release Kanomwan Dust and sect UST. Add some WIP VB sample / Some character Relationship /Alvin profile page."
},
    {"date" : "9.10.18",
    "note": "Release IWA VCV act1 and add some WIP VB."
},
    {"date" : "22.11.18",
    "note": "Add BB kun character page."
},
    {"date" : "24.11.18",
    "note": "Release Verone and Alvin Voicebank."
},
    {"date" : "5.5.19",
    "note": "Add more charater page and voicebank sample. Release kanomwan's English bank."
},
    {"date" : "1.9.19",
    "note": "Release Kanomwan Blast vb and I WA TH vb."
},
    {"date" : "1.8.20",
    "note": "Release Kanomwan Dawn. Add Prinzer concept art."
},
    {"date" : "30.7.21",
    "note": "Release Kanomwan Mellow set. Add I WA Falsetto vb."
},
    {"date" : "23.8.21",
    "note": "Add Kanomwan Strong VB."
},
    {"date" : "30.10.22",
    "note": "Add Suspect (musicbox ver.) UST"
},
    {"date" : "4.6.23",
    "note": "Add Overd (musicbox ver.) UST"
},
    {"date" : "22.6.23",
    "note": "Add Shiny Smily Story (musicbox ver.) UST"
},
  {"date" : "30.7.23",
    "note": "Release Kanomwan Lost and Kanomwan MMD model."
},
  {"date" : "2.11.23",
    "note": "Add Iwa's MMD model and Roj's whisper bank."
},
  {"date" : "12.11.23",
    "note": "Add PSYCHO UST and update IRE's concept art."
},
  {"date" : "14.2.24",
    "note": "Release BB-Kun VCV VB."
},
  {"date" : "3.8.24",
    "note": "Add Kanomwan Deep bank. Add Alway tied, TOTW, Yoidore Shirazu mashup USTs."
},
  {"date" : "30.12.24",
    "note": "Add Roj's soft VB. Update few things."
},
  {"date" : "1.12.25",
    "note": "Add Kanomwan's Sherbet VB. Add I WA/I RE's Gemina VB. Add DO U, HELP!!, Cupid, Woven Fates, and Fact USTs."
},
  {"date" : "5.9.26",
    "note": "Migrate website to github, new website, character info update, add kishoku page, add JUTAI, Bang Bang Bang (short ver.), Ego Rock x Vocaloid song (Mashup),DEAD WORLD (Musicbox ver.) USTs."
},
]


function update_log(){
    let text = ""
    for (let i = 0; i < update_txt.length; i++){
        let new_text =  `<div class="w3-row  w3-medium" style="margin-left:20px; margin-top:10px;"> 
        <div class="w3-container w3-cell"><i class="fa fa-minus w3-margin-right"></i></div>
  <div class="w3-container w3-margin-right w3-cell">${update_txt[i].date}</div>
  <div class="w3-container w3-cell">${update_txt[i].note}</div>
</div> `
        text = text + new_text
    }
document.getElementById("update").innerHTML = text;
}

