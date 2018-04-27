
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
function nome_e_preco () {
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
