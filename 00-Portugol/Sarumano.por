programa {
  funcao inicio() {
    inteiro show =7, quantidadeShow
    real bombaFumaca
    escreva("quantos shows tem marcados ? ")
    leia(quantidadeShow)
    escreva("voce precisa exatamente de ", quantidadeShow * show)
    escreva(" bomba de fumaca para todos os shows")
"\n"
    escreva("\nqual o valor da bomba de fumaca usada no show ? ")
    leia(bombaFumaca)
    escreva("o valor total gasto com bomba de fumaca é de : R$")
    escreva(bombaFumaca * (quantidadeShow* show))
  }
}
