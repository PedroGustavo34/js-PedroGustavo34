let palavra;

function setup() {

createCanvas (400, 400);

palavra palavraAleatoria();

}

function palavraAleatoria() {

let palavras = ["Caminhante", "Caminho", "Caminha"];

return random(palavras);

}

function inicializaCores() { background("white"); textAlign(CENTER, CENTER);

fill("black"); textSize(64);

}

function palavraParcial (minimo, maximo) {

let quantidade = map(mousex, minimo, maximo, 1, palavra.length);

let parcial quantidade); palavra.substring(0,

return parcial;

}

function draw() {

inicializaCores();

let parcial palavraParcial(0, width);

text(parcial, 200, 200);

}
