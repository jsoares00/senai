alert("ola mundo")

let peso, volume, distancia, frete


peso = Number(prompt("digite o peso do produto"))
distancia = Number(prompt("digite a distancia total do frete em km "))
volume = Number(prompt("digite o volume do produto"))

frete = 15+(2*peso) + (0.05*distancia) + (10*volume)
alert("o valor do frete é : " + frete)