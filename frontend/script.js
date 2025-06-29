const res = require("express/lib/response");

const listanomes = document.getElementById('.listanomes');

async function mostranomes() { 
    resposta = await fetch("http://localhost:3000/nomes");
    nomes = await response.json();
    for (cadanome of nomes) {
        novop = document.createElement('p');
        novop.innerHTML = cadanome.nome;
        listanomes.appendChild(novop);
    }   
}
mostranomes();