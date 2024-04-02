const botoes = document.querySelectorALL(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick =function(){

       for(let J=0;<botoes.length;J++){
        botoes[J].classlist.remove("ativo")
       }

        botoes[i].classlist.add( "ativo");
    }
    console.log();
}