// trabalhando com javascript em um arquivo externo 

const nome = 'Fiap';
console.log(nome, "chamando variável criada com var");

// // variaveis criadas com var ou funções com function sofrem hoisting: são içadas para o início do código
// escreve('Exemplo de função nominal');
// // função nominal - udf (sofre hoisting)
function escreve(params) {
    // alert(params);    
};

// 7 tipos diferentes de erros Javascript - 3 são os mais comuns 

// 1. SyntaxError - escreveu algo errado 
// 2. ReferenceError - chamou quem não existe ou não está acessível 
// 3. TypeError - violou alguma regra javascript 
// 4. RangeError - estoroy o limite de aninhamento ou faixa de valores 
// 5. EvalError - existe um comando perigoso no javascript chamado eval 
// 6. InternalError - memória, processamento, crash no chrome ou v8
// 7. URIError - erros que acontecem ao consumir dados externos, com url inválidas 

// 4 formas de criar funções 
// função nominal - sofre hoisting 
function mudaTitulo(novoTitulo){
    document.querySelector('h1').innerHTML = novoTitulo;
};

// mudaTitulo("Vai São Paulo");

// expressão de função(variável recebe umaa função como um valor) - Function Expression 
// Função Anônima 
const mudaTitulo2 = function(target,novoTitulo) {
    document.querySelector("h2").innerHTML = novoTitulo;
};
// mudaTitulo2("h1", "Trocando o subtítulo");

// Arrow Function - criada no ES6 ou ES2015
// não existe o this dentro de uma arrow function
// não existe um metódo construtor 
// sintaxe mais simples e prática
const relogio = ()=>{
    const date = new Date();
    mudaTitulo2("h2", date.toLocaleTimeString());
};
setInterval(relogio, 1000);

// uma função anônima precisa de contexto 

// desafio 
// setInterval(()=>{}, tempo); 
// a cada 4 segundos, mudar a frase; 

const frases = ["A vida é bela", "A vida é curta", "A vida é uma dádiva"];
// mudaFrase("h1", frases, 4);

const mudaFrase = (target, arr, tempo) =>{
    
let total = 0;
    setInterval(()=>{
        document.querySelector(target, arr, tempo).innerHTML = arr[total >= arr.length -1? (total = 0): (total+=1)];
    }, tempo * 1000);

};

mudaFrase("h1", frases, 4);



// const frase = frases[Math.floor(Math.random() * frases.length)];

// frases.forEach(function(frase) {
    
//     console.log(nome);
//   });