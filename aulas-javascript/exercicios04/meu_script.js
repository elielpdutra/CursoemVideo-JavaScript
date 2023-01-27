function tabuada() {
    var num = document.querySelector('input#num');
    var resul = document.querySelector('select#resultado');
    
    if (num.value.length == 0){
        alert('Por favor, digite um número!!');
    } else {        
        num = Number(num.value);
        resul.innerHTML = '';
        for (let contador = 0; contador <= 100; contador++) {    
            let addOption = document.createElement('option');
            addOption.text = `${num} X ${contador} = ${num*contador}`;
            addOption.value = `tab${contador}`;
            resul.appendChild(addOption);
        }      
    }  
}