// const tooltip = document.querySelector('#tooltip');
const body = document.querySelector('body');
const header = document.querySelector('.top-site');

// alvo.addEventListener('evento', função)

body.addEventListener('mouseover', ()=>{
    body.style.background = "gray";
});

body.addEventListener('mouseout', ()=>{
    body.style.background = "unset";
});

tooltip.addEventListener('mouseover', (e) => {
    console.log("Altura da Página", body.clientHeight)
    console.log("Largura da Página", body.clientWidth)
    console.log("Altura da Tooltip", tooltip.clientHeight)
    console.log("Largura da Tooltip", tooltip.clientWidth)
    console.log("Altura do mouse", e.clientY)
    console.log("LArgura do mouse", e.clientX)

    if(document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
    }

    const newDiv = document.createElement('div');
    newDiv.classList.add('tooltip');
    newDiv.innerHTML =
    "Minions ipsum gelatooo uuuhhh para tú bappleees para tú tank yuuu! Gelatooo po kass. Bappleees poopayee tulaliloo pepete belloo! Wiiiii."

    newDiv.style.position = "fixed";
    newDiv.style.width = 200 + "px";
    newDiv.style.top = e.clientY + 'px';
    newDiv.style.display = "flex";

    newDiv.style.left =( e.clientX + 200 > body.clientWidth ? e.clientX - 210 : e.client + 200 ) + 'px';

    header.appendChild(newDiv);

    const largura = 200;
    newDiv.style.position = "fixed";
    newDiv.style.width = largura + "px";
    newDiv.style.top = e.clientY + "px";
    newDiv.style.display = "flex";
    newDiv.style.left =
        (e.clientX + largura > body.clientWidth
        ? e.clientX - largura
        : e.clientX + largura) + "px";

    console.log(newDiv.style.width, "width");

    header.appendChild(newDiv);


});

body.addEventListener('mouseout', ()=>{
    if(document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
    }
});

// desafio 
// tooltip("#tooltip", "texto do tooltip")

function tooltip2(seletor, text){
    const alvo = document.querySelector(seletor);
    alvo.addEventListener('mouseover', (e)=>{
        const newDiv2 = document.createElement('div');
        newDiv2.classList.add('tooltip');
        newDiv2.innerHTML = text;
    
        const largura = 200;
        newDiv2.style.position = "fixed";
        newDiv2.style.width = largura + "px";
        newDiv2.style.top = e.clientY + "px";
        newDiv2.style.display = "flex";
        newDiv2.style.left =
            (e.clientX + largura > body.clientWidth
            ? e.clientX - largura
            : e.clientX + largura) + "px";
    
        console.log(newDiv2.style.width, "width");
    
        header.appendChild(newDiv2);
    });

  

    if(document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
    }

    alvo.addEventListener('mouseout', ()=>{
        if(document.querySelector('.tooltip')){
            document.querySelector('.tooltip').remove();
        }
    });
}

tooltip2("#tooltip", "Minions ipsum gelatooo uuuhhh para tú bappleees para tú tank yuuu! Gelatooo po kass. Bappleees poopayee tulaliloo pepete belloo! Wiiiii. Baboiii hana dul sae bappleees.");