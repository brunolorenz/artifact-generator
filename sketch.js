var letra1;
var letra2;
var letra3;
var letra4;

function preload () {
  artefato = loadStrings("artefato.txt");
  caracteristica = loadStrings("caracteristica.txt");
  efeito = loadStrings("efeito.txt");
  gatilho = loadStrings("gatilho.txt");

}

function setup() {
	createCanvas(800,800);
  background(255,60,100);
  console.log(letra1);
  console.log(letra2);
  console.log(letra3);
  console.log(letra4);
}

function mouseClicked() {
	var linha1 = random(artefato)
	var linha2 = random(caracteristica)
	var linha3 = random(efeito)
	var linha4 = random(gatilho)

textSize(30);
textStyle(BOLD);
fill(0)
background(255);
text(linha1, 50, 120);
text(linha2, 50, 160);
text(linha3, 50, 200);
text(linha4, 50, 240);

saveCanvas('png', 'png');

}