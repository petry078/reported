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
    function down() {
        document.getElementById("luzinha").style.color = "#ff0000";
    }

    function up() {
        document.getElementById("luzinha").style.color = "#00ff00";
    }
//END

//CHARACTER COUNTER
    let stringA = document.querySelector("textarea").value;
    let stringALenght = stringA.length
    console.log(stringALenght)

    //Other way
    let total = document.querySelector("textarea").value;
    let stringTotal = String(total)
    let charCounter = stringTotal.length
    console.log(charCounter)

    //SENDING charCounter TO HTML
    document.querySelector("#char-count").innerHTML = stringALenght;
    //it prints the number of characters after reload. It needs to be refreshed after key stroke. Maybe with eventListeners... Work on it!
//END
