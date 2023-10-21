var header = document.querySelector(".header");
//var root = "/codoacoco_23533__G8_el_recetario";

// Función para agregar o quitar la clase "shrink" al header al hacer scroll hacia abajo
function shrinkHeader() {
    if (window.scrollY > 0) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
}

// Agrega un evento de desplazamiento (scroll) para llamar a la función shrinkHeader
window.addEventListener("scroll", shrinkHeader);

let pie = "pages/footer.html"
console.log("pie: " + pie);
fetch (pie)
.then(x => x.text())
.then(y => document.getElementById("footer").innerHTML = y);

let encabezado = "pages/header.html"
console.log("encabezado: " + encabezado);
fetch (encabezado)
.then(x => x.text())
.then(y => document.getElementById("header").innerHTML = y);

// Asignar la función al evento 'submit' del formulario
document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página
    mostrarMensaje(); // Llama a la función para mostrar el mensaje
});


function mostrarMensaje() {
    // Puedes personalizar el mensaje aquí
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto con vos muy pronto.");
}


