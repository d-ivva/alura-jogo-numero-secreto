let listaNumerosSorteados = [];
let limiteNumeros = 10;
let numeroSecreto = gerarNumAleatorio();
exibirMsgInicial();

function verificarChute(){
    let chute = Number(document.querySelector("input").value);
    contagemChutes();
    
    if (chute == numeroSecreto){
        exibirTextoTela("h1", "Parabéns!");
        let msgTentativa = numTentativas > 1 ? "tentativas" : "tentativa";
        exibirTextoTela("p", `Você acertou o número secreto em ${numTentativas} ${msgTentativa}!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto){
            exibirTextoTela("p", "O número secreto é menor!");
            } else {
            exibirTextoTela("p", "O número secreto é maior!");
        }
        limparCampo();
    }
}

let numTentativas = 0;
function contagemChutes(){
    numTentativas ++;
    return numTentativas;
}

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.25});
}

function exibirMsgInicial(){
    exibirTextoTela("h1", "Jogo do número secreto");
    exibirTextoTela("p", "Insira um número entre 1 e 10");
}

function gerarNumAleatorio(){
    let numeroEscolhido = parseInt(Math.random()* Number(limiteNumeros) + 1);
    let qtdElementosLista = listaNumerosSorteados.length;

    if (qtdElementosLista == limiteNumeros){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    let chute = document.querySelector("input");
    chute.value = " ";
}

function novoJogo(){
    numTentativas = 0;
    limparCampo();
    exibirMsgInicial();
    numeroSecreto = gerarNumAleatorio();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
