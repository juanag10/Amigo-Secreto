let participantes = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (participantes.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    participantes.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    participantes.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (participantes.length === 0) {
        alert("Agrega al menos un participante.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * participantes.length);
    let amigoSeleccionado = participantes[indiceAleatorio];

    mostrarResultado(amigoSeleccionado);
}

function mostrarResultado(amigo) {
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar antes de mostrar

    let li = document.createElement("li");
    li.textContent = `¡El amigo elegido es: ${amigo}! `;
    resultadoLista.appendChild(li);
