alert("Ola Mundo")

let faturamento, premiacoes, presentes, comissoes, lucro

faturamento=Number(prompt("qual o foi o faturamento ? "))
premiacoes=Number(prompt("qual valor gasto em premiaçoes ? "))
presentes=Number(prompt("qual o valor gasto em presentes ? "))
comissoes=Number(prompt("qual o valor gasto em comissões ? "))

lucro = faturamento - presentes - premiacoes - comissoes

alert("O valor de lucro da Dona BETe é de : R$ "+ lucro.toFixed(2))
console.log("O valor de lucro da Dona BETe é de : R$ "+ lucro.toFixed(2))



