// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = [];
let numeroAmigos = 0;
let nombreAmigo = '';
let listaAmigos = '';
let amigoActual = 0;
let amigoSorteado = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    nombreAmigo = document.querySelector('#amigo').value.trim();
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
    } else {
    arrayAmigos.push(nombreAmigo);
    numeroAmigos++;
    limpiarCaja();
    console.log(arrayAmigos);
    mostrarAmigos();
    asignarTextoElemento('#resultado', ''); // Borrar el resultado del sorteo
    }
}

function mostrarAmigos() {
    
    listaAmigos = ''; // Inicializar la lista

    for (amigoActual=0;amigoActual < arrayAmigos.length; amigoActual++) {
        listaAmigos += `${amigoActual + 1}) ${arrayAmigos[amigoActual]}<br>`; // Concatenar en cada iteración
    }
    asignarTextoElemento('#listaAmigos', listaAmigos); // Usar listaAmigos
}

function sortearAmigo() {
    if(arrayAmigos.length === 0) {
        alert('Por favor, ingresa al menos un amigo para continuar.');
    } else {
    amigoSorteado = Math.floor(Math.random() * arrayAmigos.length);
    console.log(amigoSorteado);
    asignarTextoElemento('#resultado', `El amigo sorteado es: ${arrayAmigos[amigoSorteado]}`);
    reiniciarJuego();
    }
}

function reiniciarJuego() {
    arrayAmigos = []; // Vaciar la lista de amigos
    numeroAmigos = 0; // Reiniciar contador
    asignarTextoElemento('#listaAmigos', ''); // Borrar la lista en pantalla
    limpiarCaja(); // Limpiar el campo de entrada
}

function limpiarCaja() {
    document.querySelector('#amigo').value= '';
}