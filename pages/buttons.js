//TODO criar funções para os botões que editam o texto.
document.getElementById("bold").onclick = ()=>{
    selection = window.getSelection()
    document.execCommand("bold", false, selection);
};

document.getElementById("italic").onclick = ()=>{
    selection = window.getSelection()
    document.execCommand("italic", false, selection);
};

 document.getElementById("paragraph").onclick = ()=>{
    document.execCommand('formatBlock', false, '<p>');
};

document.getElementById("insertHorizontalRule").onclick = ()=>{
    selection = window.getSelection()
    document.execCommand("insertHorizontalRule", false, selection);
};

document.getElementById("justifyLeft").onclick = ()=>{
    selection = window.getSelection()
    document.execCommand("justifyLeft", false, selection);
};

document.getElementById("justifyRight").onclick = ()=>{
    selection = window.getSelection()
    document.execCommand("justifyRight", false, selection);
};

document.getElementById("justifyCenter").onclick = ()=>{
    selection = window.getSelection()
    document.execCommand("justifyCenter", false, selection);
};

document.getElementById("insertOrderedList").onclick = ()=>{
    selection = window.getSelection()
    document.execCommand("insertOrderedList", false, selection);
};


