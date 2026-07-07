const personagens = [
  "Neymara",
  "Rivaldo junior",
  "Mônica",
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
    // Cria a célula de texto para mostrar todos os nomes na tela
    const celula = document.createElement('div');
    celula.className = 'celula';
    celula.id = `item-${index + 1}`;
    celula.innerHTML = `<span class='valor'>${nome}</span>`;
    lista.appendChild(celula);

    // Cria uma opção (<option>) para o menu de seleção
    const opcao = document.createElement('option');
    opcao.value = index; // Guardamos o índice do array como valor da opção
    opcao.textContent = nome; // Nome visível no menu
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
    seletor.innerHTML = `O personagem <strong>${nomeSelecionado}</strong> está na posição <strong>${indice}</strong> da lista.`;
});
