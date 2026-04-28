alert("Ola Mundo")

let lucroPersentual, gasto, ingresso, vendas, lucro

gasto=Number(prompt("quais foram os valores dos gasto ? "))
ingresso=Number(prompt("Quanto foi o faturamento em venda de ingressos ? "))
vendas=Number(prompt("Quando foi o faturamento em venda de ítens"))

lucro= ingresso + vendas - gasto
lucroPersentual= (lucro /gasto)* 100

alert("o valor do lucro é : R$"+ lucro.toFixed(2))
alert("o valor  do lucro persentual é de :"+ lucroPersentual)

console.log("o valor do lucro é : R$"+ lucro.toFixed(2))
console.log("o valor do lucro persentual é de : "+ lucroPersentual)

