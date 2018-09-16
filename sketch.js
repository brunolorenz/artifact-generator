var letra1;
var letra2;
var letra3;
var letra4;

function preload () {
  myFont = loadFont('assets/BreeSerif-Regular.ttf')
  artefato = loadStrings("artefatomasculino.txt");
  artefata = loadStrings("artefatofeminino.txt")
  carf = loadStrings("caracteristicafeminina.txt");
  carm = loadStrings("caracteristicamasculina.txt");
  efeito = loadStrings("efeito.txt");
  gatilho = loadStrings("gatilho.txt");

}

function setup() {
	createCanvas(800,800);
  background(255);
  text("Clique")

}

function touchStarted() {
  var artefatx = random(100)
  if (artefatx > 50) {
    var linha1 = random(artefato)
  } else {
    var linha1 = random(artefata)
  }
  if (artefatx > 50) {
    var linha2 = random(carm)
      } else {
    var linha2 = random(carf)
  }

	var linha3 = random(efeito)
	var linha4 = random(gatilho)

textSize(30);
textStyle(BOLD);
textFont(myFont);
fill(0)
background(255);
text(linha1, 50, 120);
text(linha2, 50, 160);
text(linha3, 50, 200);
text(linha4, 50, 240);

saveCanvas('png', 'png');

}
