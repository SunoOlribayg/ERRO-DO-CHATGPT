let spriteImage; // Variável para armazenar a imagem da sprite
let x = 50;
let y = 50;

function preload() {
  spriteImage = loadImage('sprite.png'); // Carrega a imagem da sprite
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Desenha a sprite na posição (x, y)
  image(spriteImage, x, y);

  // Move a sprite para a direita
  x = x + 1;

  // Reinicia a posição da sprite quando ela atingir a borda direita
  if (x > width) {
    x = 0;
  }
}