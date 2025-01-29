
// Primeiro criei as variaveis mencionadas no html os input no caso.
function contador(){
var tinicio = document.getElementById("txtinicio")
var tfim = document.getElementById("txtfim")
var tpasso = document.getElementById("txtpasso")
var fbutton = document.getElementById('txtbutton')
var msg = document.getElementById("msg")

// validacao se os campos estao vazios.
if(tinicio.value.length == 0 || tfim.value.length == 0 || tpasso.value.length == 0){
    msg.innerHTML = "Impossivel contar"
    window.alert(`[ERRO] Faltam dados !`)
    
} else {
    
    msg.innerHTML =`Contando: </br>`
    // por mais que a caixa que foi pega acima seja numerica nao esta como um numero entao e necessario converter conforme abaixo.
    let i = Number(tinicio.value)
    let f = Number(tfim.value)
    let p = Number(tpasso.value)
    if (p <= 0){
        window.alert('Passo invalido! Considerando PASSO 1')
        p = 1
    }
    if(i <f){
        // Contagem crescente
    for (let c=i; c<=f; c+= p){
    msg.innerHTML += ` ${c} \u{1F449}`
    }
      
    } else {
        // Contagem regressiva
        for(let c=i; c>=f; c-=p){
            msg.innerHTML += `${c} \u{1F449}`
        }
        
    }
    msg.innerHTML += `\u{1F3C1}`
  
}


}

/*msg.innerHTML ='Contando: '*/