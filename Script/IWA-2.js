const info = {
    "info": `Name:  キサマワ イレ(  Kisamawa Ire )<br>
Voice source : Kisamawa Iwa<br>
Pronouns: He/him<br>
Age: 15<br>
Flags : g+25<br>
`,
    "desc":"Note : He is genderbend of Iwa ."
}

const CV = [
    {
        "info":`
<b>Gemina</b><br>
​Japanese<br>
Monopitch<br>
Natural, deep<br>
A#3<br><br>

This voicebank is meant to be a shared bank between Iwa and Ire!<br>
Unlike the recommended flag state on his profile, <b>this bank uses a different g flag.</b><br>
Please read readme.txt to see the flag.`,
        "link":"https://bowlroll.net/file/345091",
        "type":"video",
        "source":"https://www.youtube.com/embed/Mx-k6EmkGiE?wmode=opaque"
    }
]

const Gallery = ["856016023_orig","6762833_orig","64-20231109192714_orig"]

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
    let count = 0
    for(let i = 0; i < CV.length; i++){
            let new_data = bank_data_maker(count,CV[i])
cv= cv+ new_data
count = count+1
    }

    document.getElementById("CV").innerHTML = cv;
}

function char_Gallery(){
    let txt = ""
     for (let i = 0; i < Gallery.length; i++){
txt=txt+ `<div class="w3-quarter w3-padding w3-animate-opacity"><a href="../Img/IWA/${Gallery[i]}.png" target="_blank"><img src="../Img/IWA/${Gallery[i]}.png" class="w3-hover-opacity" alt="img" height="200px" width="300px" style="object-position: 0px -20px;object-fit: cover;"></a></div>`
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