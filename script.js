
CONST ={
    a : "ai",
    e : "enter",
    i : "imes",
    o : "ober",
    u : "ufat"
}

function encriptar () {
    var texto = document.getElementById("texto").value.toLowerCase();
    var textoEncrip = texto.replace(/e/gm,"enter");
    var textoEncrip = textoEncrip.replace(/o/gm,"ober");
    var textoEncrip = textoEncrip.replace(/i/gm,"imes");
    var textoEncrip = textoEncrip.replace(/a/gm,"ai");
    var textoEncrip = textoEncrip.replace(/u/gm,"ufat");

    if(texto == ""){
        document.getElementById("error").classList.remove("d-none");
        document.getElementById("pie").classList.add("d-none");
        return false;
    }

    document.getElementById("entrada").classList.add("d-none");
    document.getElementById("exito").classList.remove("d-none");
    document.getElementById("texto2").innerHTML = textoEncrip;
}

function desencriptar () {
    var texto = document.getElementById("texto").value.toLowerCase();
    var textoEncrip = texto.replace(/enter/gm,"e");
    var textoEncrip = textoEncrip.replace(/ober/gm,"o");
    var textoEncrip = textoEncrip.replace(/imes/gm,"i");
    var textoEncrip = textoEncrip.replace(/ai/gm,"a");
    var textoEncrip = textoEncrip.replace(/ufat/gm,"u");

    if(texto == ""){
        document.getElementById("error").classList.remove("d-none");
        document.getElementById("pie").classList.add("d-none");
        return false;
    }

    document.getElementById("entrada").classList.add("d-none");
    document.getElementById("exito").classList.remove("d-none");
    document.getElementById("texto2").innerHTML = textoEncrip;
}

function copiar() {
    var contenido = document.getElementById("texto2");
    contenido.select();
    navigator.clipboard.writeText(contenido.value);
}