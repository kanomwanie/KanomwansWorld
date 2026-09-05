const info = {
    "info": `Name: キショク (Kishoku) <br>
Voicer: Kanomwan<br>
Pronouns: They/Them, He/Him, She/Her (any pronouns besides it/its) <br>
Age: 2 Years old (fully grown..?)<br>
Birthday: Unknown<br>
Likes: Frozen burger patty<br>
Dislikes: Being treated like an animal.<br>`,
    "desc":`A parasite born inside a farmer in the countryside, got captured by the government, currently lives in their facility made for creatures. <br><br>
They are surprisingly intelligent, understands human gestures, and English.<br><br>`
}

const CV = [
    {
        "info":`<b>1.0</b><br>1pitch CV with some VCV and CVVC extra <br>currently unrelease`,
        "link":"kishoku.html",
        "type":"audio",
        "source":"../Audio/kisho.wav",
        "note": "Sample song : かたつむり (ust by 有魚神弥/番煎P)"
    },
       
]

const VCV = [
     {
        "info":``,
        "link":"",
        "type":"video",
        "source":""
    },
]

const CVVC = [
     {
        "info":``,
        "link":"",
        "type":"video",
        "source":""
    },
]

const VCCV = [
    {
        "info":``,
        "link":"",
        "type":"video",
        "source":""
    },
]

const MMD = [
    {
        "info":``,
        "link":"",
        "type":"video",
        "source":""
    },
]

const Gallery = ["Concept Art (no blood)","Concept Art (with blood)","8tqtAFi3gVarbMqMbpl8NZVH2mqBwxUV33dSGXGYYUiwV4vQ3FwxJyprqCcj","Concept Art (Kawaii shoujo)"]

function show_all(){
char_info();
char_Gallery();
VB();
}

function char_info(){
    document.getElementById("info").innerHTML = info.info;
    document.getElementById("info_desc").innerHTML = info.desc;
}

function VB(){
    let cv = ''
    let vcv = ''
    let cvvc = ''
    let vccv = ''
    let mmd = ''
    let count = 0
            for(let i = 0; i < CV.length; i++){
            let new_data = bank_data_maker(count,CV[i])
cv= cv+ new_data
count = count+1
    }
    document.getElementById("CV").innerHTML = cv;
   //  document.getElementById("VCV").innerHTML = vcv;
  //  document.getElementById("CVVC").innerHTML = cvvc;
   // document.getElementById("VCCV").innerHTML = vccv;
    //document.getElementById("MMD").innerHTML = mmd;
}

function char_Gallery(){
    let txt = ""
     for (let i = 0; i < Gallery.length; i++){
txt=txt+ `<div class="w3-quarter w3-padding w3-animate-opacity"><a href="../Img/Kishoku/${Gallery[i]}.png" target="_blank"><img src="../Img/Kishoku/${Gallery[i]}.png" class="w3-hover-opacity" alt="img" height="200px" width="300px" style="object-position: 0px -20px;object-fit: cover;"></a></div>`
     }
     document.getElementById("Gallery").innerHTML = txt;
}

function bank_data_maker(count, data ){
    let cv = ""
    let sample = ``
     const top = `<div class="w3-row-padding w3-padding w3-center w3-animate-opacity" style="margin-left:10px;margin-top:50px;">`
    const end = `</div><p></p><div class="w3-panel w3-border-bottom"style="margin-left:45px; margin-right:45px; margin-top:20px;"></div>`
if (count%2==0){
        let detail = `    <div class="w3-half w3-container w3-border-left w3-animate-right">
   <div class="w3-row w3-medium w3-left-align"style="margin-left:20px;line-height: 2;"> <p>${data.info}</p></div>
    <div class="w3-row"style="margin-left:50px;margin-top:10px;"> <button onclick="window.open('${data.link}','_blank')" class="w3-button w3-white w3-border w3-round-large">Download</button></div>
    </div>`
    if (data.type == "video"){
        sample = `<div class="w3-half w3-display-container w3-animate-opacity"> <iframe referrerpolicy="strict-origin-when-cross-origin" width="620" height="360"src="${data.source}"></iframe> </div>`
    }
    else if(data.type == "audio"){
        sample = ` <div class="w3-half w3-display-container w3-animate-opacity"><audio controls>
  <source src="${data.source}" type="audio/wav">
Your browser does not support the audio element.
</audio> <p class="w3-medium w3-text-grey">${data.note}</p></div>`
    }
cv =  top + sample + detail+end
}
else{
        let detail = `    <div class="w3-half w3-container w3-border-right w3-animate-left">
   <div class="w3-row w3-medium w3-left-align"style="margin-left:50px;line-height: 2;"> <p>${data.info}</p></div>
    <div class="w3-row"style="margin-left:50px;margin-top:10px;"> <button target="_blank" onclick="window.open('${data.link}','_blank')" class="w3-button w3-white w3-border w3-round-large">Download</button></div>
    </div>`
    if (data.type == "video"){
        sample = `<div class="w3-half w3-display-container w3-animate-opacity"> <iframe referrerpolicy="strict-origin-when-cross-origin" width="620" height="360"src="${data.source}"></iframe> </div>`
    }
    else if(data.type == "audio"){
        sample = ` <div class="w3-half w3-display-container w3-animate-opacity"><audio controls>
  <source src="${data.source}" type="audio/wav">
Your browser does not support the audio element.
</audio> <p class="w3-medium w3-text-grey">${data.note}</p></div>`
    }
    cv = top +detail+sample+end
}
return cv
}