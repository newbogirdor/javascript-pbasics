function gerar(){
var numero = document.getElementById("txtnumero")
let tabuada = document.getElementById("seltab")
if(numero.value.length == 0){
    window.alert("[ERRO] Por favor, digite um numero")

} else {
    let n = Number(numero.value)
    let c = 1
    tabuada.innerHTML = ""
    while (c<=10){
        let item = document.createElement("option")
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tabuada${c}` // faz sentido colocar essa linha para outras linguagens de programacao, por exemplo cada valor da linha que gerou, seria em ordem: valor1, valor 2, valor 3 etc.
        tabuada.appendChild(item)
        c++

        
    }
}






}