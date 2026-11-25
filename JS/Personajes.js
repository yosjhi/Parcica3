function mostrarDescripcion(personaje){
    let parrafo=document.getElementById("desc-" + personaje)
    if (parrafo.innerHTML !== ""){
        parrafo.innerHTML = "";
        return;
    }
    if (personaje === "noel"){
        parrafo.innerHTML = "Es el encargado de fabricar y repartir todos los regalos a todos los niños del mundo.";
    } else if(personaje === "rodolfo"){
        parrafo.innerHTML = "Es el reno lider de Santa claus. Su brillante naris roja ilumina el camino atraves de las tormentas.";
    } else if(personaje === "duende"){
        parrafo.innerHTML = "Son los trabajadores magicos del Polo Norte, ayudan en la construccion de juguetes y cuidan los renos.";
    }
}