
//Não funfa mais
function daCrawl () {
  lojas = [];
  $(".icon").each(function( index ) {
    if($(this).attr("height") != "21") {
      if(!lojas.includes($(this).attr("title"))) {
        lojas.push($(this).attr("title"));
      }
    }
  });
  resultado = lojas.join();
  console.log(resultado);
}

//só funfa o nome. Vai pegar precos repetidos
function crawler2 () {
  lojas = [];
  precos = [];
  $(".e-col1").each(function() {
    nome = $(this).children().children().attr("title");
    if(!lojas.includes(nome)) {
      lojas.push(nome);
    }
  });
  $(".e-col3").each(function() {
    valor = $(this).text();
    //se ela for grande tem desconto
    if(valor.length == 5) {
      valor = valor.slice(3).replace(',','.');
    }
    else {
      valor = valor.slice(11).replace(',','.');
    }
    if(!precos.includes(valor)) {
      precos.push(valor);
    }
  });

  resultado = lojas.join() + '\n\n' + precos.join();
  console.log(resultado);
}


function nome_e_preco () {
  lojas = [];
  precos = [];
  $(".estoque-linha primeiro,.estoque-linha").each(function() {
    nome = $(this).find("img").attr("title");
    if(!lojas.includes(nome)) {
      lojas.push(nome);
      valor = $(this).children(".e-col3").text()
      if(valor.length == 8) { //NORMAL
        precos.push(valor.slice(3).replace(',','.'));
      }
      else if(valor.length == 16) {//PROMOCAO
        precos.push(valor.slice(11).replace(',','.'));
      }
      else {
        precos.push("[Erro no tamanho do preço :(]");
      }
    }
  });
  resultado = lojas.join() + '\n\n' + precos.join();
  console.log(resultado);
}
nome_e_preco();


function nome_e_preco () {
  lojas = [];
  precos = [];
  //Limpa as Promocoes
  $(".estoque-linha primeiro,.estoque-linha").find(".e-col3").children('font').text("")
  $(".estoque-linha primeiro,.estoque-linha").each(function() {
    nome = $(this).find("img").attr("title");
    if(!lojas.includes(nome)) {
      lojas.push(nome);
      
      valor = $(this).children(".e-col3").text()
      valor = valor.slice(3);
      precos.push(valor);
    }
  });
  resultado = lojas.join() + '\n\n' + precos.join();
  console.log(resultado);
}
nome_e_preco();
