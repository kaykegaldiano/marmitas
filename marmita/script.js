let inputMarmita = document.getElementsByName('marmita')
let btnComprar = document.querySelector('button#comprar')

btnComprar.addEventListener('click', () => {
  for (let i = 0; i < inputMarmita.length; i++) {
    if (inputMarmita[i].checked) {
      alert(`Você escolheu a ${inputMarmita[i].value}. Ótima escolha!`)
    }
  }
})
