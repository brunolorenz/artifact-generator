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
  textFont(myFont);
  fill(31,31,122,100);
  textSize(20);
  text("pressione a tela para gerar seu artefato",50,50,150);


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

textSize(40);
textStyle(BOLD);
textFont(myFont);
background(255);
fill(31,31,122,255);
text(linha1, 50, 100);
fill(31,31,122,200);
text(linha2, 50, 150);
fill(31,31,122,150);
text(linha3, 50, 200);
fill(31,31,122,100);
text(linha4, 50, 250, 400);

var finalera = (linha1+linha2+linha3+linha4);
var artefatofinal = splitTokens(finalera, ' ');
saveStrings(finalera, "artefatos", "txt");

}
