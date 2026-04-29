
function relatoriosKowalski(){
    let relatoriosPF, relatoriosPJ, tempoPF, tempoPJ, valorPF, valorPJ, valorTotal
    let qtdtotal, tempoTotal, mediaValorPF, mediaValorPJ, mediaTempoPF, mediaTempoPJ
relatoriosPF = Number(prompt("quantidade de relatórios PF: "))
relatoriosPJ = Number(prompt("quantidade de relatórios PJ: "))
tempoPF = Number(prompt("tempo gasto nos relatórios PF(horas): "))
tempoPJ = Number(prompt("tempo gasto nos relatórios PJ(horas): "))
valorPF = Number(prompt("valor total dos relatórios PF: R$"))
valorPJ = Number(prompt("valor total dos relatórios PJ: R$"))

    qtdtotal = relatoriosPF + relatoriosPJ
    tempoTotal = tempoPF + tempoPJ
    valorTotal = valorPF + valorPJ
    mediaValorPF = valorPF / relatoriosPF
    mediaValorPJ = valorPJ / relatoriosPJ
    mediaTempoPF = tempoPF / relatoriosPF
    mediaTempoPJ = tempoPJ / relatoriosPJ

console.log("Quantidade total (PF+PJ): " + qtdtotal)
console.log("\nTempo total (PF+PJ, em horas): " + tempoTotal)
console.log("\nValor total (PF+PJ): R$" + valorTotal)
console.log("\nMédia de valor por rel. PF: R$" + mediaValorPF)
console.log("\nMédia de valor por rel. PJ: R$" + mediaValorPJ)
console.log("\nMédia tempo por rel. PF (horas): " + mediaTempoPF)
console.log("\nMédia tempo por rel. PJ (horas): " + mediaTempoPJ)
}

function lucroDosJares(){    
    
let lucroPorCaminhao, lucroTotal, caminhões


caminhões = Number(prompt("digite o numero de caminhões para calcular o lucro : "))

lucroPorCaminhao = Number((90 * 50) -450)

lucroTotal = Number(lucroPorCaminhao * caminhões)


alert("o lucro total com a vendas dos jacares sao de : R$"+ lucroTotal.toFixed(2))
console.log("o lucro total com a vendas dos jacares sao de : R$"+ lucroTotal.toFixed(2))
document.getElementById(resultado).innerHTML = "o lucro total com a vendas dos jacares sao de : R$"+ lucroTotal.toFixed(2)
}

function lucroDosFree(){
let pagarDev, horas, salario, receberhrs

    horas = Number(prompt("quanto sera a horas estimada do free ? "))
    horas = (horas * 350)

    pagarDev = Number(prompt("qual o valor sera pago para saber as horas ?"))

    salario= Number
    salario= horas - 500

alert("o valor a receber do free é de : R$"+ salario.toFixed(2))
console.log("o valor a receber do free é de : R$"+ salario.toFixed(2))

document.getElementById("resultado").innerHTML = "o valor a receber do free é de : R$"+ salario.toFixed(2)
}

function valorprompt(){

let tamanhoDoPrompt, totalTokens, custoPorToken, totalReais

tamanhoDoPrompt = Number(prompt("digite o tamanho de promt usado :"))
totalTokens = Number(tamanhoDoPrompt + 5)
custoPorToken =Number(prompt("qual valor do custo por token ?"))
totalReais = totalTokens * custoPorToken 

alert("total valor a pagar pelos prompt é de : R$" + totalReais.toFixed(2))
console.log("total valor a pagar pelos prompt é de : R$" + totalReais.toFixed(2))

document.getElementById("resultado").innerHTML = "total valor a pagar pelos prompt é de : R$" + totalReais.toFixed(2)
}

function calcularPrecoBrique(){
    // INFOS
    let precoCompra, precoVenda
    // LEITURAS 
    precoCompra = Number(prompt("Preço de compra:"))
    // PROCESSAMENTO
    precoVenda = precoCompra * 3
    // SAIDAS
    console.log("Preço para venda: R$" + precoVenda.toFixed(2));
    alert("Preço para venda: R$" + precoVenda.toFixed(2));

    document.getElementById("resultado").innerHTML = "Preço para venda: R$" + precoVenda.toFixed(2)

}