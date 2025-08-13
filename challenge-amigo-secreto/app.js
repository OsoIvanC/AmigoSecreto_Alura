// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []
let listaAmigosHTML = document.getElementById("listaAmigos");
let resultadoHTML = document.getElementById("resultado");
let amigoHTML = document.getElementById("amigo");

function agregarAmigo(){
    
    let value = amigoHTML.value;

    if(value.length <= 0){
        alert(`Porfavor ingresar un nombre valido`);
    }

    listaAmigos.push(value);
    
    const nuevoAmigo = document.createElement('p');
    const nuevoAmigoTxt = document.createTextNode(value);
    nuevoAmigo.appendChild(nuevoAmigoTxt);

    listaAmigosHTML.appendChild(nuevoAmigo);

    amigoHTML.value = " ";
    return;
}

function sortearAmigo() {

    if(listaAmigos.length <= 0)
        return;

    let index = Math.floor(Math.random() * listaAmigos.length);
    resultadoHTML.innerHTML = listaAmigos[index];

    listaAmigosHTML.innerHTML = " ";
    listaAmigos = [];

    return;
}
