var entrada = 0;
var despesas = [];

while (entrada != 6) {
  entrada = prompt(
    "Seja bem Vindo a Calculadora de despesas JS\n Menu:\n 1 - adicionar despesa. \n 2 - Calcular Total.\n 3 - CalcularMédia.\n 4 - Encontar Despesa Mais Alta.\n 5 - Ver Lista De Despesas. \n 6 - Sair. \n Digite o número correspondente a sua função"
  );

  if (entrada != " ") {
    switch (entrada) {
      case "1":
        adicionarDespesa();
        break;
      case "2":
        calcularTotal();
        break;
      case "3":
        calcularMedia();
        break;
      case "4":
        maisAlta();
        break;
      case "5":
        exibirLista();
        break;
    }
  }

  function adicionarDespesa() {
    var valor = prompt("Insira o valor de uma despesa: ");
    if (valor != null) {
      despesas.push(valor);
      console.log(`Valor de: R$${valor} adicionado`);
    }
  }

  function calcularTotal() {
    var soma = 0;
    for (var i = 0; i < despesas.length; i++) {
      soma += Number(despesas[i]);
    }
    console.log(`A sua despesa total é de: R$${soma}`);
  }

  function calcularMedia() {
    var soma = 0;
    for (var i = 0; i < despesas.length; i++) {
      soma += Number(despesas[i]);
    }
    console.log(`A média das suas despesas é de: R$${soma / despesas.length}`);
  }

  function maisAlta() {
    var maior = 0;
    for (var i = 0; i < despesas.length; i++) {
      if (despesas[i] > maior) {
        maior = despesas[i];
      }
    }
    console.log(`A sua maior despesa é de: R$${maior}`);
  }

  function exibirLista() {
    console.log("Sua lista de despesas: ");
    for (var i = 0; i < despesas.length; i++) {
      console.log(`R$${despesas[i]}`);
    }
  }
}
