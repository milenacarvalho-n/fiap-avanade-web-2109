const carrosDOM = document.querySelector('#carros');

const veiculos = ['Chevrolet', 'Ford', 'Fiat', 'Vw', 'Honda', 'Toyota', 'Hyundai'];

veiculos.forEach((value, key) => {
    carrosDOM.innerHTML += `<option name="${key}">${value}</option>`;
});


// adiciona item ao final do array 
veiculos.push("BMW");

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