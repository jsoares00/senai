programa {
  funcao inicio() {
    real salario, moradia, agua, luz, internet, gasolina, streamings, telefone, outros, totalconta
    escreva("qual seu salario ? ")
    leia(salario)
escreva("\nDIGA A BAIXO O VALOR DE CADA UMA DAS SUAS CONTAS PARA PAGAR :")
escreva("\n")
escreva("\nMoradia : R$")
leia(moradia)
escreva("Agua : R$")
leia(agua)
escreva("Internet : R$")
leia(internet)
escreva("Gasolina : R$")
leia(gasolina)
escreva("Streamings : R$")
leia(streamings)
escreva("Telefone : R$")
leia(telefone)
escreva("Outros : R$")
leia(outros)
escreva("\n")
totalconta= moradia + agua +internet + gasolina +streamings + telefone +outros
escreva("\nvalor total de todas as conta é de R$", totalconta)
escreva(" e oque sobrou do salario é : R$" )
escreva(salario - totalconta)

  }
}
//- moradia
//- água
//- Luz
//- internet
//- gasolina
//- streamings
//- telefone
//- outros