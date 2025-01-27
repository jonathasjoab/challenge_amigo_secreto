//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//
//Lista vazia para recebimento dos nomes
let nomesAmigos = [];

//Adicionando nomes dos amigos
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    if (nome == '') {
        alert('Por favor, insira um nome');
    } else {
        nomesAmigos.push(nome);
    }
    listarNomes();
    limparCampo();
}

//Limpeza do campo
function limparCampo() {
    let limparCampo = document.getElementById('amigo');
    limparCampo.value = ''
}

//Listagem dos amigos adicionados
function listarNomes() {
    let listarNomes = document.getElementById('listaAmigos');
    listarNomes.innerHTML = '';

    for (let i = 0; i < nomesAmigos.length; i++) {
        let lista = document.createElement('li');
        lista.textContent = nomesAmigos[i];
        listarNomes.appendChild(lista);
    }
}

//Sorteio dos nomes
function sortearAmigo() {
    if (nomesAmigos.length < 2) {
        alert('Por favor, adicione pelo menos dois nomes para realização do sorteio');
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * nomesAmigos.length);
    let nomeSorteado = nomesAmigos[indiceSorteado];

    //Exibição do resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> O Amigo sorteado é: ${nomeSorteado}</li>`;

}