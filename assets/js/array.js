const carrosDOM = document.querySelector('#carros');

const veiculos = ['Chevrolet', 'Ford', 'Fiat', 'Vw', 'Honda', 'Toyota', 'Hyundai'];

veiculos.forEach((value, key) => {
    carrosDOM.innerHTML += `<option name="${key}">${value}</option>`;
});


// adiciona item ao final do array 
veiculos.push("BMW", "Mercedes");

// adiciona no inicio do array 
veiculos.unshift("Range Rover")

// removendo do inicio do array e retorna o item removido, por isso armazenamos numa variável
const inicio = veiculos.shift();
console.log('Removendo o último elemento do array ', inicio);

// removendo do final do array
const ultimo = veiculos.pop();
console.log('Removendo o último elemento do array ', ultimo);

// removendo um elemento do array 
const posicao = 2;
const removido = veiculos.splice(posicao, 1);
console.log('Removendo o último elemento do array ', removido);

// removendo mais de um item do array 
const removidos = veiculos.splice(1, 2);

// removendo e adicionando elementos 

const removidos2 = veiculos.splice(1, 2, "Ferrari", "Lamborghini");

// slice - retorna um novo array, o primeiro parâmetro é opcional e começa com zero.
// o último  parâmetro determina até onde dever ser filtrado, porém excluindo este último elemento.

const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];

const newNba = nbaTeams.slice(3, 5);

console.log(nbaTeams.slice(3, 5));
console.log(nbaTeams);

// ultimo item 
const ult = nbaTeams.slice(-1)

// Map, filter, reduce 

const name = "Milena Carvalho Nascimento";
const nameArr = name.split(" ");
const nameComplete = [nameArr[0], nameArr.slice(-1)].join(" ");
console.log(nameComplete);


// o map, gera um novo array, mapeando e buscando no array anterior
const procuraCeltic = (nomeTime) => {
    return nomeTime == "Celtics" || nomeTime == "Raptors";
};
const celticsMap = nbaTeams.map(procuraCeltic);

// retorna um novo Array, procura do começo ao fim do array anterior, quem retornou true para a função usada 
const celticsFilter = nbaTeams.filter(procuraCeltic);

// retorna a primeira occorência de uma busca com o parâmetro que a função  determinou
const celticsFind = nbaTeams.find(procuraCeltic);

console.log(celticsFilter, "Filter");
console.log(celticsMap, "Map");
console.log(celticsFind, "find");


