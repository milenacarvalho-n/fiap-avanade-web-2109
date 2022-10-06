// const cep = document.querySelector("#cep");

// cep.addEventListener("blur", async (e) => {
//   let search = cep.value.replace("-", "");
 

//   if(search.length < 8 || Number(search.value) === NaN){
//     alert("CEP inválido");
//     cep.focus();
//     return;
//     }

//     const options = {
//         method: "GET",
//         mode: "cors", // acessar recursos de outros servidores, navegador não bloqueia.
//         cache: "default" // cache padrão do navegador
//     }

//     //recurso assíncrono, retorna uma promise - promessa, pois não sabemos se vai funcionar ou não.
//     // é uma intenção de fazer algo.
//     // se der certo ele vai retornar o resolve, se der errado o reject.
//     // usamos o then para pegar o resolve e o catch para pegar o reject.
//   fetch(`https://viacep.com.br/ws/${search}/json/`, options)
//     .then((response) => {
//       response.json().then((data) => {
//         console.log(data);
//       });
//     })
//     .catch((e) => console.log("Deu erro: " + e, message));
// });

// onde estiver o await o async deve estar presente.

// outra forma de escrever a mesma função acima:
const cep2 = document.querySelector("#cep");


const showData = (result) => {
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo];
        }
    }
};



cep2.addEventListener("blur", async (e) => {
    let search = cep.value.replace("-", "");
   
  
    if(search.length < 8 || Number(search.value) === NaN){
      alert("CEP inválido");
      cep2.focus();
      return;
      }
  
      const options = {
          method: "GET",
          mode: "cors", 
          cache: "default" 
      }

      try {
        const resultado = await fetch(`https://viacep.com.br/ws/${search}/json/`, options);

        const json = await resultado.json();
        showData(json);
        
        
      } catch (error) {
        console.log("temos um problema", error.message);
        
      }
  });
  

