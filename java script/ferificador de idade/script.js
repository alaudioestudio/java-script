function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique as adados e tente novamente!')
   } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        gênero = 'Homem' 
        if(idade >=0 && idade <10 )  {
           img.setAttribute('src','imagem/bebe-homem.jpg')
        }else if (idade < 21) 
        {
            img.setAttribute('src','imagem/jovem-homem.jpg')
        }else if(idade < 50){
            img.setAttribute('src','imagem/adulto-homem.jpg')
        }else{
            img.setAttribute('src','imagem/idoso-homem.jpg')
        }

    }else if(fsex[1].checked){
gênero = 'Mulher'
if(idade >=0 && idade <10 )  {
    img.setAttribute('src','imagem/bebe-mulher.jpg')
}else if (idade < 21) 
{
    img.setAttribute('src','imagem/jovem-mulher.jpg')
}else if(idade < 50){
    img.setAttribute('src','imagem/adulto-mulher.jpg')
}else{
    img.setAttribute('src','imagem/idosa-mulher.jpg')
}

    }
    res.style.textAlign = 'center'
res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
res.appendChild(img)
   }
   

}
