let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre: nombre, precio: precio });
    actualizarCarrito();
}

function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    let lista = document.getElementById("lista-carrito");
    let spanTotal = document.getElementById("total-pagar");

    lista.innerHTML = "";
    total = 0;

    for (let i = 0; i < carrito.length; i++) {
        let item = carrito[i];
        total += item.precio;

        let li = document.createElement("li");
        li.innerHTML = `
            <span>${item.nombre} - Bs. ${item.precio}</span>
            <button class="btn-quitar" onclick="eliminarDelCarrito(${i})">X</button>
        `;
        lista.appendChild(li);
    }

    spanTotal.textContent = total;
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. Agrega algún plato primero.");
        return;
    }

    alert("¡Pedido realizado con éxito! Total a pagar: Bs. " + total);
    vaciarCarrito();
}