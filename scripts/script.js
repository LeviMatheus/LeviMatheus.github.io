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
function toggleAudio() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const botaoMudo = document.getElementById('botaoMudo');

    if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
        backgroundMusic.play();
    } else {
        backgroundMusic.muted = true;
    }
    console.log("Mute: ",backgroundMusic.muted)
}
//#endregion

//#region Controle de tela
function toggleTheme() {
    const body = document.querySelector('body');
    const icones = document.getElementsByClassName('home__container__divBotoes__btn__img');
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';

    if (currentTheme === 'light') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        for (let i = 0; i < icones.length; i++) {
            icones[i].classList.remove('light-theme');
            icones[i].classList.add('dark-theme');
        }
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        for (let i = 0; i < icones.length; i++) {
            icones[i].classList.remove('dark-theme');
            icones[i].classList.add('light-theme');
        }
    }
}
//#endregion