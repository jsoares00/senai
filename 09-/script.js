const nome =[
    "Chico Moedas",
    "Gk bruno",
    "Trevor",
    "Mc Katrina",
    "Bob 🐶",
    "Maiconjackeson",
    "Oruam",
    "Osama",
    "Mohamed"
]
const listNome=document.getElementById('lista2')

nome.forEach(nome) =>{

    
}

const personagens = [
  "Neymara",
  "Rivaldo junior",
  "Ney Mato Grosso",
  "Capitão Ganso",
  "Peba",
  "Gill Bates",
  "Dona Bete",
  "Kowalski",
  "Heitor Tuga",
  "Junin",
  "Padre Ernan Buco",
  "GENéZio",
  "Bilu",
  "Waldisney",
  "Tião"
];

const lista = document.getElementById('lista');
const seletor = document.getElementById('seletor');
const selectPersonagens = document.getElementById('select-personagens');

personagens.forEach((nome, index) => {
    const celula = document.createElement('div');
    celula.className = 'celula';
    celula.id = `item-${index + 1}`;
    celula.innerHTML = `<span class='valor'>${nome}</span>`;
    lista.appendChild(celula);

    const opcao = document.createElement('option');
    opcao.value = index;
    opcao.textContent = nome; 
    selectPersonagens.appendChild(opcao);
});

selectPersonagens.addEventListener('change', (evento) => {
    const valorSelecionado = evento.target.value;

    if (valorSelecionado === "") {
        seletor.innerHTML = "";
        return;
    }

    const indice = Number(valorSelecionado);
    const nomeSelecionado = personagens[indice];

    // ${indice +1}(começar a contar do 1 )
    seletor.innerHTML = `O jogador <strong>${nomeSelecionado}</strong>,seu numero da camisa é <strong>${indice +1}</strong> .`;
});
