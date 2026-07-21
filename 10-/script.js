
function testar() {
    const dino ={
        nome: "rex",
        altura: 2,
        cor: "azul",
        custo: 7
    }
    console.log(dino)
    
}

function cadastrar(){
const dino = {
    id :315842184,
    nome: document.getElementById('nome').value,
    altura: Number(document.getElementById('altura').value),
    cor: document.getElementById('cor').value,
    custo: Number(document.getElementById('custo').value)
}


console.log(dino)
}

function limparForm(){
    document.getElementById('nome').value=""
    document.getElementById('altura').value=""
    document.getElementById('cor').value=""
    document.getElementById('custo').value=""

    document.getElementById('nome').focus()

}
function listaDino(){ 
    const listaDinos = [
        dinoFormulario, // O dino que o usuário digitou no formulário
        {
            id: 315842185,
            nome: "Tiranossauro Rex",
            altura: 4.0,
            cor: "Verde Escuro",
            custo: 50000
        },
        {
            id: 315842186,
            nome: "Tricerátops",
            altura: 3.0,
            cor: "Marrom",
            custo: 35000
        },
        {
            id: 315842187,
            nome: "Velociraptor",
            altura: 1.0,
            cor: "Cinza",
            custo: 20000
        },
        {
            id: 315842188,
            nome: "Braquiossauro",
            altura: 12.0,
            cor: "Bege",
            custo: 80000
        },
        {
            id: 315842189,
            nome: "Pterodáctilo",
            altura: 1.5,
            cor: "Azul",
            custo: 25000
        }
    ];

    // Mostra a lista completa com os 6 dinossauros no console
    console.log(listaDinos);
}