// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre !== "") {
        amigos.push(nombre);
        mostrarAmigos();
        input.value = "";
    } else {
        alert("Ingresa un nombre en la caja de texto.");
    }
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar
    
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    let sorteo = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado antes de actualizar
    
    let li = document.createElement("li");
    li.textContent = `Amigo sorteado: ${sorteo}`;
    resultado.appendChild(li);
}