// Função chamada ao carregar a página, que altera a mensagem e a imagem com base no horário
function carregar() {
    var msg = window.document.getElementById("msg");  // Obtém o elemento de mensagem
    var img = window.document.getElementById("imagem");  // Obtém o elemento de imagem
    var data = new Date();  // Obtém a data e hora atual
    var hora = data.getHours();  // Extrai a hora atual

     // hora = 18 Para fins de teste, podemos definir a hora como 18 (noite)

    var turno = "";  // Variável que armazena o período do dia (madrugada, manhã, tarde, noite)

    // Exibe a hora atual na mensagem
    msg.innerHTML = `Agora são ${hora} horas`;
    msg.innerHTML += ` excelente `;

    // Verifica o período do dia e altera a imagem e o fundo conforme o horário
    if(hora >= 0 && hora <= 6) {
        // Madrugada
        img.src = 'foto-madrugada.png';  // Imagem da madrugada
        document.body.style.background = "#f3efe3";  // Cor de fundo da madrugada
        turno += "madrugada";  // Armazena o turno
    } else if (hora >= 7 && hora < 12) {
        // Manhã
        img.src = 'foto-manha.png';  // Imagem da manhã
        document.body.style.background = "#c59b64";  // Cor de fundo da manhã
        turno += "manhã";  // Armazena o turno
    } else if (hora >= 12 && hora <= 17) {
        // Tarde
        img.src = 'foto-tarde.png';  // Imagem da tarde
        document.body.style.background = "#c8b39d";  // Cor de fundo da tarde
        turno += "tarde";  // Armazena o turno
    } else {
        // Noite
        img.src = 'foto-noite.png';  // Imagem da noite
        document.body.style.background = "#2a282d";  // Cor de fundo da noite
        turno += "noite";  // Armazena o turno
    }

    // Exibe o período do dia após a hora
    msg.innerHTML += turno;
}