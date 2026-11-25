function agregarRegalo() {
    let input = document.getElementById("input-regalo");
    let texto = input.value.trim();

    if (texto === "") {
        alert("Por favor, escribe un regalo.");
        return;
    }

    let lista = document.getElementById("lista-regalos");

    let item = document.createElement("li");

    let spanTexto = document.createElement("span");
    spanTexto.textContent = texto;
    spanTexto.className = "texto-regalo";
    spanTexto.onclick = function () {
        spanTexto.classList.toggle("comprado");
    };

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Quitar";
    btnEliminar.className = "btn-eliminar";
    btnEliminar.onclick = function () {
        item.remove();
    };

    item.appendChild(spanTexto);
    item.appendChild(btnEliminar);
    lista.appendChild(item);

    input.value = "";
    input.focus();
}

function limpiarLista() {
    let lista = document.getElementById("lista-regalos");
    lista.innerHTML = "";
}