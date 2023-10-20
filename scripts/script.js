//#region Letreiro

// Matriz do letreiro
const letreiros = [
    ['L', 'E', 'V'],
    ['D', 'E', 'V'],
    ['P', 'Y', 'T'],
    ['R', 'P', 'A'],
    ['B', 'O', 'T']
];

// Função para trocar as letras
function trocarLetras() {
    // Obtém os elementos HTML pelo ID
    const letra1 = document.getElementById('primeira_letra');
    const letra2 = document.getElementById('segunda_letra');
    const letra3 = document.getElementById('terceira_letra');

    let index = 0; // Índice da sequência atual

    // Função que executa a cada 5 segundos
    function trocar() {
        // Obtém a sequência atual
        const letreiro = letreiros[index];

        // Atualiza o conteúdo dos elementos com as letras da sequência atual
        // setTimeout(function() {
        //     letra1.innerText = letreiro[0];
        // }, 1000);
        // setTimeout(function() {
        //     letra2.innerText = letreiro[1];
        // }, 1500);
        // setTimeout(function() {
        //     letra3.innerText = letreiro[2];
        // }, 2000);
        letra1.innerText = letreiro[0];
        letra2.innerText = letreiro[1];
        letra3.innerText = letreiro[2];

        index = (index + 1) % letreiros.length; // Próxima sequência

        // Se todas as sequências foram exibidas, parar o setInterval
        // if (index === 0) {
        //     clearInterval(intervalID);
        // }
    }

    // Chama a função trocar a cada 5 segundos
    const intervalID = setInterval(trocar, 1500);
}

// Chama a função trocarLetras para começar a alternar as letras
trocarLetras();

//#endregion

//#region Controle de audio
function checarSom(){
    const backgroundMusic = document.getElementById('backgroundMusic');
    return backgroundMusic.muted;
}

function toggleAudio() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const svgAudio = document.getElementById('svg_audio');
    if(checarSom()){
        backgroundMusic.volume = 0.1;
        backgroundMusic.play();
        svgAudio.style.transform = 'rotate(180deg)';
    }else{
        svgAudio.style.transform = 'rotate(0deg)';
    }
    backgroundMusic.muted = !backgroundMusic.muted;
}
//#endregion

//#region Controle de tema

function checarTema(){
    const body = document.querySelector('body');
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    return currentTheme;
}

function toggleTema() {
    const body = document.querySelector('body');
    const img_tema = document.getElementById('svg_tema');

    if (checarTema() === 'light') {
        //Mudar para tema escuro
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        definirCor("#FFFFFF");
    } else {
        //Mudar para tema claro
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        definirCor("#000000");
    }
}
//#endregion

//#region Controle de cor
function definirCor(corHexa){
    lista_svgs = document.getElementsByClassName("svg_path");
    svgTema = document.getElementById("svgTema");

    svgTema.setAttribute('fill',corHexa);
    for(svg of lista_svgs){
        svg.setAttribute('stroke',corHexa);
    }
}
//#endregion