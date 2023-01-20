
    var msg = document.getElementById("msg")
    var msghorario = new Date()
    let horas = addZero(msghorario.getHours())
    let minutos = addZero(msghorario.getMinutes())

   
    var imagens = document.getElementById('imagem')
    
    function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }


        
    if (horas > 18) {

        msg.innerHTML = `Agora são ${horas}:${minutos} da noite.`
        imagens.src = 'imagens/noite.png'
        document.body.style.background = '#000047'
   
    } else if (horas >= 12) {
        msg.innerHTML = `Agora são ${horas}:${minutos} da tarde.`
        imagens.src = 'imagens/tarde.png'
        document.body.style.background = '#e88a25'
        
    } else if (horas < 12) {
        
        msg.innerHTML = `Agora são ${horas} : ${minutos} da manhã.`
        imagens.src = 'imagens/manha.png'
        document.body.style.background = '#5ac7aa'
    } else {
        msg.innerHTML = '[ERRO] Horário indefinido.'
        imagens.src = 'imagens/erro.png'
    }
