let musica;

function preload(){
  musica = loadSound("musicagay.mp3")
}

function setup(){
  musica.play();
  musica.loop();
}