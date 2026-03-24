const create = getElementId("pet")
const button = getElementId("btn_burguer")

const state = {
    normal: "/img/fofinho_gem-removebg-preview.png",    
    morto: "/img/morto-removebg-preview.png",
    bravo: "/img/bravo_gem-removebg-preview.png",
    comendo: "/img/comendo-removebg-preview.png",
    feliz: "/img/amavel_gem-removebg-preview.png",
}

let contador = 0;
let itervalo = null;
let time_click = null;
let time_out = null;

function controlador(){
    if(intervalo) clearInterval();

    intervalo = setInterval(() => {
        contador++;
        console.log("time: ",conador);

        if(contador >= 30){
            create.src = state.bravo;
        }

        if(contador >= 60){
            create.src = state.morto
        }
    }, 100);
}

controlador()