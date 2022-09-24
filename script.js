//"TAB" KEY IDENTATION
document.getElementById('inputText').addEventListener('keydown', function (e) {
    if (e.key == 'Tab') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;

        this.value = this.value.substring(0, start) +
            "\t" + this.value.substring(end);

        this.selectionStart =
            this.selectionEnd = start + 1;
    }
    });
//END

//LOCAL STORAGE
var n = document.getElementById("inputText");
var s = function () {
    localStorage.setItem("inputText", n.value);
}

if (window.localStorage) {
    n.value = localStorage.getItem("inputText");
}

n.onchange = s();
setInterval(s, 500);
window.onunload = s();
//END

//LIGHT COLOR CHANGER
function down() {document.getElementById("luzinha").style.color = "#ff0000"}
function up() {document.getElementById("luzinha").style.color = "#00ff00"}
//END

//CHARCOUNT
var inputText = document.getElementById("inputText");
var charCount = document.getElementById("charCount");


window.addEventListener("load",function(){
    var characters = inputText.value.split('');
    charCount.innerText = characters.length;
    
    let wordCountString = document.getElementById("inputText").value.split(" ").length
    wordCount.innerText = wordCountString
});

inputText.addEventListener("keyup",function(){
    var characters = inputText.value.split('');
    charCount.innerText = characters.length;
    
    let wordCountString = document.getElementById("inputText").value.split(" ").length 
    wordCount.innerText = wordCountString
});
//END