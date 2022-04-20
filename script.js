    //IDENTAÇÃO COM TAB
    //Ao precionar a tecla "tab" sem esta função, o usuário é jogado para o próximo campo de texto disponível no navegador.
    //Função altera o funcionamento da tecla tab, para seu funcionamento padrão em editor de textos.

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

    //FIM

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
    //FIM