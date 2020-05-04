const dialog = new Dialog();

function command(command,value){
    document.execCommand(command, false, value);
};


document.getElementById("bold").onclick = ()=>{command("bold",window.getSelection())};
document.getElementById("italic").onclick = ()=>{command("italic",window.getSelection())};
document.getElementById("paragraph").onclick = ()=>{command("formatBlock",'<p>')};
document.getElementById("superscript").onclick = ()=>{command("superscript",window.getSelection())};
document.getElementById("insertHorizontalRule").onclick = ()=>{command("insertHorizontalRule",window.getSelection())};

document.getElementById("justifyLeft").onclick = ()=>{command("justifyLeft",window.getSelection())};
document.getElementById("justifyRight").onclick = ()=>{command("justifyRight",window.getSelection())};
document.getElementById("justifyCenter").onclick = ()=>{command("justifyCenter",window.getSelection())};

document.getElementById("insertOrderedList").onclick = ()=>{command("insertOrderedList",window.getSelection())};
document.getElementById("insertUnorderedList").onclick = ()=>{command("insertUnorderedList",window.getSelection())};

document.getElementById("insertImage").onclick = ()=>{
    dialog.getImage().then((data)=>{
        command("insertImage",data);
    });
};

document.getElementById("font").onchange = ()=>{command("fontName",document.getElementById("font").value)};
document.getElementById("fontSize").onchange = ()=>{command("fontSize",document.getElementById("fontSize").value)};
document.getElementById("foreColor").onchange = ()=>{command("foreColor",document.getElementById("foreColor").value)};