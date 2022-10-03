const aereasNacionas = ['Azul', 'Gol', 'Latam'];

const airCompanies = [
    ...aereasNacionas,
    'Delta',
    'United Airlines',
    'Emirates',
    'Qatar',
    'Tap'
];

console.log(airCompanies);

// atribuição por desestruturação

const [azul, voeGol, latam, delta, ...internacionais] = airCompanies;

console.log(internacionais, azul, voeGol);

const user = {
    name: 'Milena Carvalho',
    email: 'nascarvalho.m@gmail.com',
    password: '1234'
}

const {password, ...data} = user;

console.log(data, 'retornando dados da API');

// eventos - Javascript é uma linguagem dirigida a eventos. Algo acontece, então reagimos

//eventos - JavaScript é uma linguagem dirigida a eventos. Algo acontece, então reagimos.
// Eventos de tempo - setTimeout, setInterval
// Eventos de DOM - onClick, onChange, onSubmit
// Eventos de teclado - onKeyDown, onKeyUp, onKeyPress
// Eventos de mouse - onMouseDown, onMouseUp, onMouseMove
// Eventos de formulário - onFocus, onBlur, onChange
// Eventos de mídia - onPlay, onPause, onEnded
// Eventos de rede - onLoad, onError, onAbort



// dominar a linguagem
// funções, arrays, eventos, assíncrono , estrutura de controle e loops, objetos, controle de fluxo

const body = document.querySelector('body');
body.style.width = "100%";
body.style.height = "100%";


body.addEventListener("mouseover", (event)=> {
    body.style.backgroundColor = "#d4d4d4";

});