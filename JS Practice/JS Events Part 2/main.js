var cardo = document.getElementById("cardo_link");
var barbell = document.getElementById("barbell_link");
var darna = document.getElementById("darna_link");

var cardoPic = document.getElementById("cardo_pic");
var barbellPic = document.getElementById("barbell_pic");
var darnaPic = document.getElementById("darna_pic");

cardo.addEventListener("click", picLink);
barbell.addEventListener("click", picLink);
darna.addEventListener("click", picLink);

function hide() {
    cardoPic.className = "hidden";
    barbellPic.className = "hidden";
    darnaPic.className = "hidden";
}

function picLink() {
    var id_storage = this.attributes["data-img"].value;
    var curr_pic = document.getElementById(id_storage);
    var allimgs = document.querySelectorAll("img");

    for (i = 0; i < allimgs.length; i++) {
        if (allimgs[i] != curr_pic) {
            allimgs[i].className = "hidden";
        }
    }
    
    if (curr_pic.className === "hidden") {
        curr_pic.className = "";
    } else {
        curr_pic.className = "hidden";
    }
}