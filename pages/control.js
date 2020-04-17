//const file = new custom.File();

function putLines(){
    let numbers = "";
    
    let editor = document.getElementById("editor");
    let lines = document.getElementById("lines");

    lines.innerHTML = numbers;

    for(let line = 1; line <= editor.scrollHeight / 24;line++){
        numbers += `${line}<br>`;
    };

    lines.innerHTML = numbers;
};

//TODO criar funções para os botões que editam o texto.


putLines()
document.getElementById("editor").oninput = putLines;