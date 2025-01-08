const meses = {
        "janeiro": 1,
        "fevereiro": 2,
        "março": 3,
        "abril": 4,
        "maio": 5,
        "junho": 6,
        "julho": 7,
        "agosto": 8,
        "setembro": 9,
        "outubro": 10,
        "novembro": 11,
        "dezembro": 12
};

function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear() // ano atual
    const mesNascimento = document.getElementById('mes').value.trim().toLowerCase(); // mesNascimento
    var fano = document.getElementById ('txtano') //anoNascimento
    var res = document.querySelector('div#res') // resultado
    
    const mesNascimentoNum = meses[mesNascimento];
    const mesAtual = data.getMonth() + 1 //o mes atual, em js comeca em 0 
    // aqui tinha um dataAtual por isso nao foi
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente");
        return;
        
    } 
    // Verifica se o mes de nascimento é valido
    if (!(mesNascimento in meses)){
        document.getElementById('res').innerHTML = 'Mês inválido! Por favor, insira um mês válido'; return;
    } 
    
    // Calcula a idade
    //aqui tinha um else
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)

    if(mesAtual < mesNascimentoNum){
            idade --;
        }
        var gênero = ''
        var img = document.createElement('img')
        
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero  = 'Homem'
            if(idade >=0 && idade <10){
                //crianca
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade <10){
                //crianca
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade <50){
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
        
    }



