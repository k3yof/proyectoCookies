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
function irAPagina2() {
    window.location.href = "pagina2.html";
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
        tituloPagina.innerHTML = "Página Española";
    } else if (idioma === "fr") {
        tituloPagina.innerHTML = "Page French";
    } else if (idioma === "ig") {
        tituloPagina.innerHTML = "Page English";
    }
});


