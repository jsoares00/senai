let valorDADO=0, totalDADO=0,D4=0, D6=0,D10=0,D12=0
function resetar(){
    valorDADO= valorDADO*0
    totalDADO= totalDADO*0
document.getElementById('TotalDADO').innerHTML='Total valor dos Dados :'+totalDADO
document.getElementById('valorDado').innerHTML='Ultimo Dado :  '
document.getElementById('listaDADOS').innerHTML='  '
document.getElementById('D4').innerHTML='DADO 4'
document.getElementById('D6').innerHTML='DADO 6'
document.getElementById('D10').innerHTML='DADO 10'
document.getElementById('D12').innerHTML='DADO 12'

}

function rolagemD12(){

    valorDADO =Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    totalDADO = totalDADO + valorDADO 
    D12= D12+1
document.getElementById('TotalDADO').innerHTML='Total valor dos Dados :'+totalDADO
document.getElementById('valorDado').innerHTML='Ultimo Dado :'+valorDADO
document.getElementById('D12').innerHTML='DADO 12('+D12 +")"
document.getElementById('listaDADOS').innerHTML += + valorDADO + ', '
}

function rolagemD10(){
    valorDADO =Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    totalDADO = totalDADO + valorDADO 
    D10= D10+1
document.getElementById('TotalDADO').innerHTML='Total valor dos Dados :'+totalDADO
document.getElementById('valorDado').innerHTML='Ultimo Dado :'+valorDADO
document.getElementById('D10').innerHTML='DADO 10('+D10 +")"
document.getElementById('listaDADOS').innerHTML += + valorDADO + ', '
}
function rolagemD6(){

    valorDADO =Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    totalDADO = totalDADO + valorDADO 
    D6= D6+1
document.getElementById('TotalDADO').innerHTML='Total valor dos Dados :'+totalDADO
document.getElementById('valorDado').innerHTML='Ultimo Dado :'+valorDADO
document.getElementById('D6').innerHTML='DADO 6('+D6 +")"
document.getElementById('listaDADOS').innerHTML += + valorDADO + ', '
}

function rolagemD4(){
valorDADO =Math.floor(Math.random() * (4 - 1 + 1)) + 1;
totalDADO = totalDADO + valorDADO
D4= D4+1

document.getElementById('TotalDADO').innerHTML='Total valor dos Dados :'+totalDADO
document.getElementById('valorDado').innerHTML='Ultimo Dado :'+valorDADO
document.getElementById('D4').innerHTML='DADO 4('+D4 +")"
document.getElementById('listaDADOS').innerHTML += + valorDADO + ', '
}





let total = 0
function registrarVenda(){
    let valor = Number(document.getElementById('inputVenda').value)
    // registrar venda no total
    total = total + valor
    // atualizar total na página
    document.getElementById('totalVendido').innerHTML =  
    'Total de vendas: R$' + total.toFixed(2)

    // lista de vendas
    document.getElementById('listaVendas').innerHTML += 'R$' + valor.toFixed(2) + '<br>'
    
    document.getElementById('inputVenda').value = ''
    document.getElementById('inputVenda').focus()


    console.log(valor)
}


let cont = 0
function incrementarContagem(){
    // cont = cont + 1
    // cont += 1
    cont++
    document.getElementById('p-contagem').innerHTML = cont
}

function decrementarContagem(){
    cont--
    document.getElementById('p-contagem').innerHTML = cont
}
function somar10(){
    cont = cont + 10
    // cont += 10
    document.getElementById('p-contagem').innerHTML = cont
}
function somar2(){
    cont += 2
    document.getElementById('p-contagem').innerHTML = cont
}
function zerarContagem(){
    cont = 0
    document.getElementById('p-contagem').innerHTML = cont
}







let global = 'Eu sou uma variável global :/'
function funcao1(){
    let local = 'Sou uma variável local :D'
    // let global = 'ME identifico como global'
    console.log(local);
    console.log(global);
}
function funcao2(){
    // let local
    console.log(global);
    // console.log(local);
}

// funcao1()
// funcao2()