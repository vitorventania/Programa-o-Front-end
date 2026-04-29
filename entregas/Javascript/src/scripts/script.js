const imagens = {
  normal: "./src/img/normal.png",
  clicado: "./src/img/comendo.png",
  feliz: "./src/img/feliz.png",
  morto: "./src/img/morto.png",
  bravo: "./src/img/irritado.png",
};

const fundoDia = "./src/img/background.png";
const fundoNoite = "./src/img/background_noite.png";

const img = document.getElementById("mainImage");

let contador = 0; // Controla a fome da criatura
let horas = 0; // Controle numérico do ciclo de dia/noite

let timeoutClique;
let timeoutBack;
let intervaloTempo; // Substitui o uso incorreto da variável 'horas' como ID do intervalo
let intervaloFome;

function alimentar() {
  // Desafio: Impedir alimentar após morte
  if (img.src.includes("morto.png")) {
    console.log("A criatura já faleceu. Não é possível alimentá-la.");
    return;
  }

  img.src = imagens.clicado;
  contador = 0; // Reseta a fome da criatura

  console.log("Comendo");

  if (timeoutClique) clearTimeout(timeoutClique);
  if (timeoutBack) clearTimeout(timeoutBack);

  timeoutClique = setTimeout(() => {
    img.src = imagens.feliz;

    timeoutBack = setTimeout(() => {
      // Prevenção: só volta ao normal se ela não tiver "morrido" subitamente
      if (!img.src.includes("morto.png")) {
        img.src = imagens.normal;
      }
    }, 2000);
  }, 1000);
}

function atualizarFundo() {
  if (intervaloTempo) clearInterval(intervaloTempo);

  intervaloTempo = setInterval(() => {
    horas++;

    if (horas >= 12) {
      document.body.style.backgroundImage = `url('${fundoNoite}')`;
    } else {
      document.body.style.backgroundImage = `url('${fundoDia}')`;
    }

    if (horas >= 24) horas = 0;
  }, 1000); // 1 segundo real equivale a uma hora virtual (mais confortável de observar que 100ms)
}

function controle() {
  if (intervaloFome) clearInterval(intervaloFome);

  intervaloFome = setInterval(() => {
    contador++;

    if (contador >= 50 && contador < 100) {
      if (!img.src.includes("bravo.png")) img.src = imagens.bravo;
    } else if (contador >= 100) {
      // Limite estipulado de fome
      img.src = imagens.morto;
      console.log("A criatura morreu de fome!");
      clearInterval(intervaloFome); // Impede que continue contando e logando infinitamente
    }
  }, 100);
}

// Iniciando o jogo ao carregar a página
controle();
atualizarFundo();
