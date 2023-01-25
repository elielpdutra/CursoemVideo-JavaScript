function contador() {
    var inicio = +document.querySelector('input#inicio').value;
    var fim = +document.querySelector('input#fim').value;
    var passos = +document.querySelector('input#passos').value;
    var resul = document.querySelector('div#resultado');
    resul.innerHTML = 'Contando: ';
       
    if (inicio == 0 || fim == 0 || passos == 0) {
        alert('[ERRO] Faltam dados!');
        resul.innerHTML = 'Impossivel contar... ';
    } else {
        if (inicio < fim) {
                //  Contagem crescente
            for (inicio; inicio <= fim; inicio += passos){            
            resul.innerHTML += ` ${inicio} \u{1F449}`; 
            }
        } else{
                //  Contagem regressiva
            for (inicio; inicio >= fim; inicio -= passos){            
                resul.innerHTML += ` ${inicio} \u{1F449}`; 
            }
        }                   
        resul.innerHTML += `\u{1F3C1}`;         
    }   
}