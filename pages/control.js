//const file = new custom.File();

function putLines(){
    let numbers = "";
    
    let editor = document.getElementById("editor");
    let lines = document.getElementById("lines");
    let scrollbar = document.getElementsByTagName("body")[0];

    lines.innerHTML = numbers;

    for(let line = 1; line <= editor.scrollHeight / 20;line++){
        numbers += `${line}<br>`;
    };

    lines.innerHTML = numbers;
    scrollbar.scrollTop = scrollbar.scrollHeight;

};

//TODO criar funções para os botões que editam o texto.


putLines()
document.getElementById("editor").oninput = putLines;