
function carregar() {
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
hora = 18

turno = ""
msg.innerHTML = ` Agora são ${hora} horas`
msg.innerHTML +=`\n excelente `
if(hora >= 0 && hora <=6){
    //madrugada
img.src = 'foto-madrugada.png'
document.body.style.background = "#f3efe3"
turno += "madrugada"
msg.innerHTML += turno

} else if (hora >=7 && hora <12){
//dia
img.src = 'foto-manha.png'
document.body.style.background = "#c59b64"
turno += "manhã"
msg.innerHTML += turno

} else if(hora >=12 && hora <=17){
//tarde
img.src = 'foto-tarde.png'
document.body.style.background = "#c8b39d"
turno += "tarde"
msg.innerHTML += turno
}
else {
//noite
img.src = 'foto-noite.png'
document.body.style.background = "#2a282d"
turno += "noite"
msg.innerHTML += turno
}
}

