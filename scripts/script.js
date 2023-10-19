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
        svgAudioOn = '<path d="M33 15L18 27H6V45H18L33 57V15Z" stroke="#1D1D1D" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M57.21 14.79C62.8341 20.4158 65.9936 28.0451 65.9936 36C65.9936 43.9549 62.8341 51.5842 57.21 57.21M46.62 25.38C49.4321 28.1929 51.0118 32.0075 51.0118 35.985C51.0118 39.9625 49.4321 43.7771 46.62 46.59" stroke="#1D1D1D" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>';
        svgAudio.innerHTML = svgAudioOn;
        backgroundMusic.play();
    }else{
        svgMutado = '<path d="M33 15L18 27H6V45H18L33 57V15Z" stroke="#1D1D1D" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M69 27L51 45" stroke="#1D1D1D" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M51 27L69 45" stroke="#1D1D1D" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>';
        svgAudio.innerHTML = svgMutado;
    }
    backgroundMusic.muted = !backgroundMusic.muted;
}
//#endregion

//#region Controle de tela
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
        img_tema.setAttribute('src', 'assets/SVG/tema_escuro.svg');
    } else {
        //Mudar para tema claro
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        img_tema.setAttribute('src', 'assets/SVG/tema_claro.svg');
    }
}
//#endregion