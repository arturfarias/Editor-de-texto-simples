//const file = new custom.File();

let editor = document.getElementById("editor");
let moldura = document.getElementById("moldura");
let lines = document.getElementById("lines");
let scrollbar = document.getElementsByTagName("body")[0];
let footer = document.getElementById("footer");

function putFooter(){
    let wordsNumber = editor.innerText.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim().split(" ").length
    let charactersNumber = editor.textContent.length;

    footer.innerHTML = `<div class="info"> <b>Caracteres: ${charactersNumber}</b></div>
    <div class="info" > <b>Palavras: ${charactersNumber == 0 && wordsNumber == 1 ? 0 : wordsNumber}</b> </div>`;
    

    scrollbar.scrollTop = scrollbar.scrollHeight;
};

document.getElementById("editor").oninput = putFooter

document.getElementsByTagName("body")[0].onclick = ()=>{
    editor.focus();
};

editor.style.minHeight = `${window.innerHeight}px`
editor.focus();
putFooter()