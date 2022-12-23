function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res'); // seletor querySelecto # sempre que for id
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img'); // cria elemento do tipo img
        img.setAttribute('id', 'foto'); // seta atributo, parametro '1' parametro '2'
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'crianca-homem.png');
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-homem.png');
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-homem.png');
            }else{
                //idoso
                img.setAttribute('src', 'velho-homem.png');
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){ // testa idade maior ou igual a zero e menor que 10
                //Criança
                img.setAttribute('src', 'crianca-mulher.png'); // tras imagem criança
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-mulher.png'); // tras imagem jovem
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-mulher.png') // tras imagem adulta
            }else{
                //idoso
                img.setAttribute('src', 'velho-mulher'); // tras imagem da velha
            }

        }
        res.style.textAlign = 'center'; // alinha no centro
        res.innerHTML = `Detectamos genero: ${genero} com idade: ${idade}` // tras o genero e a idade
        res.appendChild(img); //Adicionar elemento
    }
}