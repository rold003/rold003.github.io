
function encriptar()
{
    var texto=document.getElementById("cajaTexto").value.toLowerCase();
    var textoEncriptado=texto.replace(/e/img,"enter");
    var textoEncriptado=textoEncriptado.replace(/o/img,"ober");
    var textoEncriptado=textoEncriptado.replace(/i/img,"imes");
    var textoEncriptado=textoEncriptado.replace(/a/img,"ai");
    var textoEncriptado=textoEncriptado.replace(/u/img,"ufat");
    document.getElementById("resultado").innerHTML=textoEncriptado;
    document.getElementById("btn_copiar").style.display="show";
    document.getElementById("btn_copiar").style.display="inherit";
    document.getElementById("resultado").style.display="show";
    document.getElementById("resultado").style.display="inherit";
    document.getElementById("Cambio").style.display="none";
}
function desencriptar()
{
    var texto=document.getElementById("cajaTexto").value.toLowerCase();
    var textoEncriptado=texto.replace(/enter/img,"e");
    var textoEncriptado=textoEncriptado.replace(/ober/img,"o");
    var textoEncriptado=textoEncriptado.replace(/imes/img,"i");
    var textoEncriptado=textoEncriptado.replace(/ai/img,"a");
    var textoEncriptado=textoEncriptado.replace(/ufat/img,"u");
    document.getElementById("resultado").innerHTML=textoEncriptado;
    document.getElementById("resultado").style.display="show";
    document.getElementById("resultado").style.display="inherit";
    
}
function copiar()
{
    var contenido= document.querySelector("#resultado");
    contenido.select();
    document.execCommand("copy");
}