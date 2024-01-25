const color = obtenerCookie('color');
if(color === 'negro'){
    activarNegro();
}else{
    activarBlanco();
}

function activarNegro(){
    document.body.classList.add('negro');
}

function activarBlanco(){
    document.body.classList.remove('negro');
}
function irAPagina1() {
    window.location.href = "pagina1.html";
}
function irAConfiguracion() {
    window.location.href = "index.html";
}
document.addEventListener("DOMContentLoaded", function () {
    var idioma = obtenerCookie("idioma");
    var tituloPagina = document.getElementById("tituloPagina");

    if (idioma === "es") {
        tituloPagina.innerHTML = "Página Española 2";
    } else if (idioma === "fr") {
        tituloPagina.innerHTML = "Page French 2";
    } else if (idioma === "ig") {
        tituloPagina.innerHTML = "Page English 2";
    }
});
