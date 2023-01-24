
function verificar() {

    var data = new Date();
    var ano = data.getFullYear();
    var fano = +document.getElementById('txtano').value;
    var res = document.querySelector('div#res');
    
    console.log(fano)
    if (fano.length == 0 || fano > ano || fano == '') {
        alert('[Erro] Verifique os dados e tente novamente!');
    } else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - fano;
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        

        if (fsex[0].checked) {
            gênero = 'Homem';
            
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/homem-criança.png')
            } else if (idade < 18) {
                //Jovem
                img.setAttribute('src', 'imagens/homem-jovem.png')
            } else if (idade < 50 ) {
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher';

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/mulher-criança.png')
            } else if (idade < 18) {
                //Jovem
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            }
            else{
                //idosa
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }
        
        
        res.innerHTML = `Detectamos: ${gênero} com ${idade} anos. <br>`
        res.appendChild(img);
        
        

    }

   
   
}

    

