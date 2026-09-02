const data =[{
    "Unit_name": "No unit",
    "desc": "UTAU with out any specific unit.",
    "char": [{
 "Name": "Kanomwan",
 "img": "kanomwan.bmp",
        "link": "index.html"
    },
    {
 "Name": "Kisamawa Iwa",
 "img": "iwa.bmp",
        "link": "index.html"
    },
    {
 "Name": "Roj",
 "img": "roj.bmp",
        "link": "index.html"
    },
    {
 "Name": "Phiang aw",
 "img": "icon.bmp",
        "link": "index.html"
    },
    {
 "Name": "vibrate",
 "img": "vvv.bmp",
        "link": "index.html"
    },]
},
{ "Unit_name": "Alien Alien Alien",
    "desc": "A Group of 3 Alien.",
    "char": [{
 "Name": "4L1C3",
 "img": "208.bmp",
        "link": "index.html"
    },
    {
 "Name": "Fxckking",
 "img": "209.bmp",
        "link": "index.html"
    },
    {
 "Name": "BB-Kun",
 "img": "IMG_3607.bmp",
        "link": "index.html"
    },
]
},
{ "Unit_name": "The Alcoholic",
    "desc": "A Group of alcoholic whose enjoy getting drunk.",
    "char": [{
 "Name": "Alvin",
 "img": "76.bmp",
        "link": "index.html"
    },
    {
 "Name": "Verone",
 "img": "79.bmp",
        "link": "index.html"
    },
    {
 "Name": "Prinzer",
 "img": "cats.jpg",
        "link": "index.html"
    },
    {
 "Name": "Colin",
 "img": "cats.jpg",
        "link": "index.html"
    },
]

},
{ "Unit_name": "Mutant Creatures",
    "desc": "A group of mutant who escape from labs.",
    "char": [{
 "Name": "Phia",
 "img": "cats.jpg",
        "link": "index.html"
    },
    {
 "Name": "Julio",
 "img": "cats.jpg",
        "link": "index.html"
    },
    {
 "Name": "???",
 "img": "cats.jpg",
        "link": "index.html"
    },
    {
 "Name": "An",
 "img": "cats.jpg",
        "link": "index.html"
    },
]

},
{ "Unit_name": "?????",
    "desc": "Unknown Project",
    "char": [{
 "Name": "Popillious",
 "img": "194.bmp",
        "link": "index.html"
    },
    {
 "Name": "ZacQ",
 "img": "cats.jpg",
        "link": "index.html"
    },
    {
 "Name": "Sweztia",
 "img": "cats.jpg",
        "link": "index.html"
    },
    {
 "Name": "Loon",
 "img": "cats.jpg",
        "link": "index.html"
    },
]

},
{
    "Unit_name": "One Off",
    "desc": "There is no plan for an update for these UTAU.",
    "char": [{
 "Name": "Kishoku",
 "img": "111_20251119213428.bmp",
        "link": "index.html"
    },]
}
]
function char_list(){
    let text = ""
    for (let i = 0; i < data.length; i++){
        let new_text =  ` <h3 class="w3-left-align w3-xlarge w3-animate-left" style="margin-left: 50px; margin-top: 45px;">${data[i].Unit_name}</h3>
  <hr style="margin-left: 50px;width:50px;border:5px solid black" class="w3-round">
  <p class="w3-text-grey"  style="margin-left: 50px;">${data[i].desc}</p>`
  let sub_text = ""
  let count = 1
  let topp = `<div class="w3-row-padding" style="margin-left: 50px;"><br>`
  for(let j = 0; j < data[i].char.length; j++){
    let sub_new = `<div class="w3-quarter w3-center">
 <a href="${data[i].char[j].link}"> <img src="../Img/${data[i].char[j].img}" style="width: 150px;" class="w3-round w3-hover-opacity"></a>
  <h4>${data[i].char[j].Name}</h4>
</div>`
if (count == 1){
sub_text = sub_text + topp + sub_new
}
else{
    sub_text = sub_text+ sub_new
}
count = count +1
if (count >=5){
    sub_text = sub_text+"</div>"
    count =1
}
  }
        text = text + new_text + sub_text +"</div>"
    }
document.getElementById("ch_list").innerHTML = text;
}
