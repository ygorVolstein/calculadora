document.addEventListener("DOMContentLoaded", function () {


  //--------------- declaração de váriaveis de escopo global ---------------//

  var despesas = [];
  const formulario = document.getElementById('meuFormulario');
  const adicionar = document.getElementById('adicionar');
  const limpar = document.getElementById('limpar');
  const lista = document.getElementById('lista')
  const valorMaior = document.getElementById('maior');
  const total = document.getElementById('total');
  const mediaId = document.getElementById('media');
  const excluir = document.getElementById('excluir');
  var totalDespesas = 0;
  var media = 0;



  //-------------- Parte do código onde estão as funções de cada botão -----------------//


  //-------------- função que adiciona um novo valor a lista de despesas -----------------//
  adicionar.addEventListener('click', function () {

    var valor = document.getElementById('valor').value;


    //--------------- adiciona a data atual formatada junto ao valor inserido ---------------//
    const hoje = new Date();
    const dia = hoje.getDate().toString().padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();
    const dataAtual = `${dia} / ${mes} / ${ano}`;
    //--------------- adiciona os valores para um objeto ---------------//
    const dados = {
      valor: valor,
      data: dataAtual
    }
    //--------------- adiciona o objeto a lista ---------------//
    despesas.push(dados);
    console.log(despesas);
    formulario.reset();
    exibirDespesas();
    calcularTotal(dados.valor);
    calcularMedia();
    maiorValor();
  })


  //-------------- função que calcula o total de despesas e exibe na tela -----------------//
  function calcularTotal() {
    totalDespesas = 0;
    for (var a = 0; a < despesas.length; a++) {
      totalDespesas = parseInt(totalDespesas) + parseInt(despesas[a].valor);
    }
    console.log(totalDespesas);
    total.innerHTML = totalDespesas;
  }

  //-------------- função que calcula a média de despesas e exibe na tela -----------------//
  function calcularMedia() {
    if (despesas.length != 0) {
      media = totalDespesas / despesas.length;
      var mediaId = document.getElementById('media');
      mediaId.innerHTML = media.toFixed(2);
    }
    else {
      mediaId.innerHTML = 0;
    }

  }

  //-------------- função que calcula a maior despesa e exibe na tela -----------------//
  function maiorValor() {
    valor = 0;
    for (var a = 0; a < despesas.length; a++) {
      if (despesas[a].valor > valor) {
        valor = despesas[a].valor;
      }
    }

    valorMaior.innerHTML = valor;
  }

  //-------------- função que limpa todos os valores na tela -----------------//
  limpar.addEventListener('click', function () {
    total.innerHTML = 0;
    valorMaior.innerHTML = 0;
    mediaId.innerHTML = 0;
    lista.innerHTML = '';
  })


  excluir.addEventListener('click', function () {

    var valorExcluido = document.getElementById('valorExcluido').value;
    if (despesas.length >= valorExcluido && valorExcluido != 0) {
      console.log('sim');
      despesas.splice(despesas.indexOf(despesas[valorExcluido - 1]), 1);

      if (despesas.length != 0) {
        exibirDespesas();
        calcularTotal();
        calcularMedia();
        maiorValor();
      }
      else {
        total.innerHTML = 0;
        valorMaior.innerHTML = 0;
        mediaId.innerHTML = 0;
        lista.innerHTML = '';
      }


    }

    else {
      alert('insira um valor válido')
    }


  })

  //-------------- função que exibe a lista de despesas na tela -----------------//
  function exibirDespesas() {
    lista.innerHTML = "";
    despesas.forEach(function (despesa, indice) {
      const listaItem = document.createElement("li");
      listaItem.innerHTML = `${indice + 1} - Despesa do dia ${despesa.data}, valor:  $${despesa.valor},00 `
      lista.appendChild(listaItem);
    })
  }



})


