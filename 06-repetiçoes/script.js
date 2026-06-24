// var contador=0
// while(contador < 10){
//     alert("contador"+ contador)

//     contador++

// }
// console.log(contador)


let numero=10
function questao2(){
if(numero <= 10){

    numero-=1

document.getElementById("resultado2").innerHTML= " "+numero

}
}

function questao3(){

}
function x1(){
    var tabuada=5
tabuada*=1

document.getElementById('resultado4').innerHTML="  "+tabuada
}
function x2(){
    var tabuada=5

tabuada*=2
document.getElementById('resultado4').innerHTML=tabuada
}
function x3(){
    var tabuada=5

tabuada*=3
document.getElementById('resultado4').innerHTML=tabuada
}
function x4(){
var tabuada=5
tabuada*=4

document.getElementById('resultado4').innerHTML=tabuada
}
function x5(){
    var tabuada=5
tabuada*=5
document.getElementById('resultado4').innerHTML=tabuada
}
function x6(){
    var tabuada=5
tabuada*=6
document.getElementById('resultado4').innerHTML=tabuada
}
function x7(){
    var tabuada=5
tabuada*=7
document.getElementById('resultado4').innerHTML=tabuada

}
function x8(){
var tabuada=5
tabuada*=8
document.getElementById('resultado4').innerHTML=tabuada
}
function x9(){
    var tabuada=5
tabuada*=9
document.getElementById('resultado4').innerHTML=tabuada
}
function x10(){
var tabuada=5
tabuada*=10
document.getElementById('resultado4').innerHTML=tabuada
}
function calcular(){
    var tabuada=5,
    multiplicador=document.getElementById('multiplicar').value
tabuada*=multiplicador
document.getElementById('resultado4').innerHTML=tabuada
console.log(tabuada)
}
function tabuada(){
   var multiplicar=Number(prompt("digite um valor para ver a tabela"))
var multiplicador=Number(prompt("digite um valor para multiplicar"))
var resultado=0
resultado=(multiplicar*multiplicador)

console.log(resultado)
document.getElementById('resultadoq5').innerHTML="  "+resultado
}
var num=1
function impar(){
num+=2
if(num > 0 & num < 20){
    document.getElementById('resultadoq6').innerHTML=num
}
}
function crescentar(){
    
}