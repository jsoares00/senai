alert("Ola Mundo")

let tamanhoDoPrompt, totalTokens, custoPorToken, totalReais

tamanhoDoPrompt = Number(prompt("digite o tamanho de promt usado :"))
totalTokens = Number(tamanhoDoPrompt + 5)
custoPorToken =Number(prompt("qual valor do custo por token ?"))
totalReais = totalTokens + custoPorToken 

alert("total valor a pagar pelos prompt é de : R$" + totalReais)























    // inteiro tamanhoDoPrompt
    // inteiro totalTokens
    // real custoPorToken = 0.151, totalReai
    // escreva("Tamanho do prompt: ")
    // leia(tamanhoDoPrompt)
    // totalTokens = tamanhoDoPrompt + 5
    // totalReais = totalTokens * custoPorToken
    // escreva("Total de tokens: " + totalTokens)
    // escreva("\nValor: R$" + totalReais)