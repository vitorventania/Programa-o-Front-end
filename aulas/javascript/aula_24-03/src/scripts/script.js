const create = document.getElementById('pet');
const button = document.getElementById('btn_burguer');

const state = {
    normal: "src/img/fofinho_gem-removebg-preview.png",    
    morto: "src/img/morto-removebg-preview.png",
    bravo: "src/img/bravo_gem-removebg-preview.png",
    comendo: "src/img/comendo-removebg-preview.png",
    feliz: "src/img/amavel_gem-removebg-preview.png"
};

let count = 0;
let intervall = null;
let time_click = null;
let time_out = null;

function controller(){
    if(intervall) clearInterval();

    intervall = setInterval(() => {
        count++;
        console.log("time: ",count);

        if(count >= 30){
            create.src = state.bravo;
        }

        if(count >= 60){
            create.src = state.morto;
        }
    }, 100);
}

controller();
