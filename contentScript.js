var facebookGenerate_btn = undefined;
var protonCreate_btn = undefined;

if(document.readyState !== 'complete') {
    window.addEventListener('load', afterWindowLoaded);
} else {
    afterWindowLoaded();
}

function afterWindowLoaded() {
    protonElements();
    facebookElements();
}

function protonElements() {
    if (window.location.href.includes("facebook.com/reg") || window.location.href.includes("facebook.com/signup")){
        if (protonCreate_btn != undefined) {
            
        }
    }
}

function facebookElements() {
    if (window.location.href.includes("facebook.com/reg") || window.location.href.includes("facebook.com/signup"))
    if (facebookGenerate_btn == undefined) {
        var webSubmit_btn = document.getElementsByName("websubmit")[0];
        if (webSubmit_btn){ var bottomControls_div = webSubmit_btn.parentElement; }
        if (bottomControls_div) {
            facebookGenerate_btn = document.createElement("button");
            facebookGenerate_btn.innerText = "Generate";
            facebookGenerate_btn.id = "facebook_generate"
            facebookGenerate_btn.classList.add("_6j", "mvm", "_6wk", "_6wl", "_58mi", "_3ma", "_6o", "_6v");
            facebookGenerate_btn.style.backgroundColor = "blue";
            facebookGenerate_btn.style.marginLeft = "6px";
            facebookGenerate_btn.addEventListener("click", generateAccount);
            bottomControls_div.appendChild(facebookGenerate_btn);
        }
    }
}

function generateAccount() {
    editValue(document.getElementsByName("firstname")[0], "Ahmed");
    editValue(document.getElementsByName("lastname")[0], "Morsy");
    editValue(document.getElementsByName("reg_email__")[0], "AhmedMorsy666@gmail.com");
    editValue(document.getElementsByName("reg_email_confirmation__")[0], "AhmedMorsy666@gmail.com")
    editValue(document.getElementsByName("reg_passwd__")[0], "ahmedelmorsy2464");
    editValue(document.getElementById("day"), getRndInteger(1,27));
    editValue(document.getElementById("month"), getRndInteger(1,12));
    editValue(document.getElementById("year"), getRndInteger(1985, 2007));
    document.querySelector("input[name='sex'][value='1']").checked = true;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function editValue(element, value){
    if (element != undefined) {
        element.value = value;
        element.focus();
        element.blur();
    }
}