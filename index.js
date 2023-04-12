
/*
document.addEventListener('DOMContentLoaded', function() {
    var div = document.createElement('div');
    var padre = document.getElementById("jugadores");
    div.id = 'container';
    div.innerHTML = 'Hi there!';
    div.className = 'border pad';
 
    padre.appendChild(div);
}, false);

*/

function agregarJugadores(){
    let padre = document.getElementById("jugadores");
    let numJugadores = document.getElementById("numJugadores").value;
    let nombres = document.getElementById("nombreJugadores").value;
    let arrNombre = nombres.split(',');
    var elems = padre.getElementsByTagName("*");

    //Eliminar elementos anteriores.
    if(elems.length !== 0){
        eliminarJugadores(elems.length);
    }

    if(arrNombre.length == numJugadores){
        for (let index = 0; index < numJugadores; index++) {
            var div = document.createElement('div');
            div.id = 'ID'+index;
            div.innerHTML = arrNombre[index]+ " " + numJugadores;
            div.className = 'jugador';
            padre.appendChild(div);         
        }

    }else{
        alert("Faltan nombres");
    }    
}

function eliminarJugadores(numJugadores){
    for (let index = 0; index < numJugadores; index++) {
        var obtenerId = 'ID'+ index;
        document.getElementById("jugadores").removeChild(document.getElementById(obtenerId));
    }

}

function respuestaCorrecta(numJugadores){
    var obtenerId = 'capsula'+ '2';
    document.getElementById(obtenerId).className='dineroSelecionado';

}