function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 3) {
                res.innerHTML = `Detectamos <strong>Bebê</strong> com <u>${idade} anos</u>.</break>`
                img.setAttribute('src', 'imagens/bebeM.png')
            } else if(idade < 11){
                res.innerHTML = `Detectamos <strong>Criança</strong> com <u>${idade} anos</u>.</break>`
                img.setAttribute('src', 'imagens/foto-crianca-m.png')
            } else if(idade < 14){
                res.innerHTML = `Detectamos <strong>Pré-adolescente</strong> com <u>${idade} anos</u>.</break>`
                img.setAttribute('src', 'imagens/preM.png')
            } else if(idade < 18){
                res.innerHTML = `Detectamos <strong>Adolescente</strong> com <u>${idade} anos</u>.</break>`
                img.setAttribute('src', 'imagens/adolescenteM.png')
            } else if(idade < 35){
                res.innerHTML = `Detectamos <strong>Jovem</strong> com <u>${idade} anos</u>.</break>`
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if(idade < 60){
                res.innerHTML = `Detectamos <strong>Adulto</strong> com <u>${idade} anos</u>.</break>`
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                res.innerHTML = `Detectamos <strong>Idoso</strong> com <u>${idade} anos</u>.</break>`
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }                           
        }else if (fsex[1].checked){
            genero = 'Mulher'            
            if(idade >= 0 && idade < 3) {
                res.innerHTML = `Detectamos <strong>Bebê</strong> com <u>${idade} anos</u>.</break>`
                img.setAttribute('src', 'imagens/bebeF.png')
            } else if(idade < 11){
                res.innerHTML = `Detectamos <strong>Criança</strong> com <u>${idade} anos</u>.</break>`
                img.setAttribute('src', 'imagens/foto-crianca-f.png')
            } else if(idade < 14){
                res.innerHTML = `Detectamos <strong>Pré-adolescente</strong> com <u>${idade} anos</u>.</break>`
                img.setAttribute('src', 'imagens/preF.png')
            } else if(idade < 18){
                res.innerHTML = `Detectamos <strong>Adolescente</strong> com <u>${idade} anos</u>.</break>`
                img.setAttribute('src', 'imagens/adolescenteF.png')
            } else if(idade < 35){
                res.innerHTML = `Detectamos <strong>Jovem</strong> com <u>${idade} anos</u>.</break>`
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if(idade < 60){
                res.innerHTML = `Detectamos <strong>Adulto</strong> com <u>${idade} anos</u>.</break>`
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                res.innerHTML = `Detectamos <strong>Idoso</strong> com <u>${idade} anos</u>.</break>`
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }   
        }
        res.style.textAlign = 'center'
        res.style.color = 'skyblue'
        res.style.fontSize = '25px'
        res.appendChild(img)
    }
}