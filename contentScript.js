var facebookGenerate_btn;
var protonCreate_btn;

if(document.readyState !== 'complete') {
    window.addEventListener('load', afterWindowLoaded);
} else {
    afterWindowLoaded();
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function facebookSetValue(element, value){
    if (element != undefined)
        element.value = value;
        element.focus();
        element.blur();
}

function generateAccount(){
    facebookSetValue(document.getElementsByName("firstname")[0], "Ahmed");
    facebookSetValue(document.getElementsByName("lastname")[0], "Morsy");
    facebookSetValue(document.getElementsByName("reg_email__")[0], "AhmedMorsy666@gmail.com");
    facebookSetValue(document.getElementsByName("reg_email_confirmation__")[0], "AhmedMorsy666@gmail.com")
    facebookSetValue(document.getElementsByName("reg_passwd__")[0], "ahmedelmorsy2464");
    facebookSetValue(document.getElementById("day"), getRndInteger(1,27));
    facebookSetValue(document.getElementById("month"), getRndInteger(1,12));
    facebookSetValue(document.getElementById("year"), getRndInteger(1985, 2007));
    document.querySelector("input[name='sex'][value='1']").checked = true;
}

function afterWindowLoaded(){
    if (facebookGenerate_btn == undefined){
        var webSubmit_btn = document.getElementsByName("websubmit")[0];
        if (webSubmit_btn != undefined){ var bottomControls_div = webSubmit_btn.parentElement; }
        if(bottomControls_div != undefined){
            facebookGenerate_btn = document.createElement("button");
            facebookGenerate_btn.innerText = "Generate";
            facebookGenerate_btn.classList.add("_6j", "mvm", "_6wk", "_6wl", "_58mi", "_3ma", "_6o", "_6v");
            facebookGenerate_btn.style.backgroundColor = "blue";
            facebookGenerate_btn.style.marginLeft = "6px";
            facebookGenerate_btn.addEventListener("click", generateAccount);
            bottomControls_div.appendChild(facebookGenerate_btn);
        }
    }
}