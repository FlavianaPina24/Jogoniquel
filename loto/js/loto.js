var jogo = [0];

function sorteio(limite) {
    for (x = 0; x < 6; x++) {
        jogo[x] = Math.round(Math.random() * limite) + 1;
        for (y = 0; y < 6; y++) {
            if (jogo[x] == jogo[y] && x != y) {
                jogo[x] = Math.round(Math.random() * limite) + 1;
                break;//y = 6;
            }
        }
    }
    jogo.sort();
    console.log(jogo);
    return jogo;
}

function apostas(quant) {
    let caixas = "";
    for (x = 1; x <= quant; x++) {
        caixas += "<input type='number' min='1' max='59' step='1' class='form-control numeros col-md-2 m-2'>";
    }
    document.querySelector("#apostas").innerHTML = caixas;
}

function jogar(){
    let campos = document.querySelectorAll(".numeros");
    let s = sorteio(60);
    let pontos = 0;

    for (x = 0; x < s.length; x++){
        for(y = 0; y < campos.length; y++){
            if (s[x] == campos[y].value){
                pontos++;
            }
        }
    }

    //document.querySelector("#resultado").innerHTML = "";

    console.log("sorteio: " + s + " - pontos: " + pontos);
}
