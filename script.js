function encriptar() {
    var texto= document.getElementById("input-text").value.toLowerCase();
    var txtCifrado =texto.replace(/e/igm,"enter");
    var txtCifrado =txtCifrado.replace(/o/igm,"ober");
    var txtCifrado =txtCifrado.replace(/i/igm,"imes");
    var txtCifrado =txtCifrado.replace(/a/igm,"ai");
    var txtCifrado =txtCifrado.replace(/u/igm,"ufat");
    
    document.getElementById("image").style.display= "none";
    document.getElementById("text").style.display= "none";
    document.getElementById("mensaje").innerHTML=txtCifrado;
    document.getElementById("copy").style.display="show";
    document.getElementById("copy").style.display="inherit"; 
}

function desencriptar() {
    var texto= document.getElementById("input-text").value.toLowerCase();
    var txtCifrado =texto.replace(/enter/igm,"e");
    var txtCifrado =txtCifrado.replace(/ober/igm,"o");
    var txtCifrado =txtCifrado.replace(/imes/igm,"i");
    var txtCifrado =txtCifrado.replace(/ai/igm,"a");
    var txtCifrado =txtCifrado.replace(/ufat/igm,"u");
    
    document.getElementById("image").style.display= "none";
    document.getElementById("text").style.display= "none";
    document.getElementById("mensaje").innerHTML=txtCifrado;
    document.getElementById("copy").style.display="show";
    document.getElementById("copy").style.display="inherit"; 
}

function copy() {
    var contenido =document.querySelector("#mensaje");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado");
}