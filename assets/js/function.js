const resultado = document.querySelector('#resultado');

let myFunc1 = {
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(arguments)
    },
};

// chamando a função 
myFunc1.showArguments(
    "Vai São Paulo",
    "Full-Stack Developer",
    "React",
    "NodeJS",
    "Typescript"
);

// spread operator, destructuring assignment 
let myFunc2 = {
    showArguments: () => {
        // resultado.innerHTML = arguments;
        // console.log(...arguments)
    },
};

myFunc2.showArguments(
    "Vai São Paulo",
    "Full-Stack Developer",
    "React",
    "NodeJS",
    "Typescript"
);

let user = {
    name: 'Milena Carvalho',
    usandoArrow : () =>{
        console.log("Meu nome é ", this.onmessage, "Arrow Function")
    },
    usandoNominal(){
        console.log("Meu nome é ", this.nome, "Nominal Function");
    },
}

user.usandoArrow();
user.usandoNominal();