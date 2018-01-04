
const ideogrammi = {
    "777777": "1 Il Creativo",
    "888888": "2 Il Ricettivo",
    "788878": "3 La difficoltà Iniziale",
    "878887": "4 La Stoltezza Giovanile",
    "777878": "5 L'Attesa",
    "878777": "6 La Lite",
    "878888": "7 L'Esercito",
    "888878": "8 La Solidarietà",
    "777877": "9 La Forza Dominatrice del Piccolo",
    "778777": "10 Il Procedere",
    "777888": "11 La Pace",
    "888777": "12 Il Ristagno",
    "787777": "13 L'Associazione tra Uomini",
    "777787": "14 Il Possesso Grande",
    "887888": "15 La Modestia",
    "888788": "16 Il Fervore",
    "788778": "17 Il Seguire",
    "877887": "18 Il Risanamento delle cose guaste",
    "778888": "19 L'Avvicinamento",
    "888877": "20 La Contemplazione",
    "788787": "21 Il Morso che Spezza",
    "787887": "22 l'Avvenenza",
    "888887": "23 La Frantumazione",
    "788888": "24 Il Ritorno",
    "788777": "25 L'Innocenza",
    "777887": "26 La Forza Dominatrice del Grande",
    "788887": "27 Gli Angoli della Bocca",
    "877778": "28 La Preponderanza del Grande",
    "878878": "29 L'Abissale",
    "787787": "30 L'Aderente - Il Fuoco",
    "887778": "31 La Domanda di Matrimonio",
    "877788": "32 La Durata",
    "887777": "33 La Ritirata",
    "777788": "34 La Potenza del Grande",
    "888787": "35 Il Progresso",
    "787888": "36 L'Ottenebramento della Luce",
    "787877": "37 La Casata",
    "778787": "38 La Contrapposizione",
    "887878": "39 L'Impedimento",
    "878788": "40 La Liberazione",
    "778887": "41 La Diminuzione",
    "788877": "42 Accrescimento",
    "777778": "43 Lo Straripamento",
    "877777": "44 Il Farsi Incontro",
    "888778": "45 La Raccolta",
    "877888": "46 Ascendere",
    "878778": "47 L'Assillo",
    "877878": "48 Il Pozzo",
    "787778": "49 Il Sovvertimento",
    "877787": "50 Il Crogiolo",
    "788788": "51 L'Eccitante",
    "887887": "52 L'Arresto - Il Monte",
    "887877": "53 Lo Sviluppo",
    "778788": "54 La Ragazza che si sposa",
    "787788": "55 L'Abbondanza",
    "887787": "56 Il Viandante",
    "877877": "57 Il Mite - Il Vento",
    "778778": "58 Il Sereno - Il Lago",
    "878877": "59 La Dissoluzione",
    "778878": "60 La Delimitazione",
    "778877": "61 La Verità Interiore",
    "887788": "62 La Preponderanza del Piccolo",
    "787878": "63 Dopo il Compimento",
    "878787": "64 Prima del Compimento"
  };

const collegamenti = {
    "777777": "01.html",
    "888888": "02.html",
    "788878": "03.html",
    "878887": "04.html",
    "777878": "05.html",
    "878777": "06.html",
    "878888": "07.html",
    "888878": "08.html",
    "777877": "09.html",
    "778777": "10.html",
    "777888": "11.html",
    "888777": "12.html",
    "787777": "13.html",
    "777787": "14.html",
    "887888": "15.html",
    "888788": "16.html",
    "788778": "17.html",
    "877887": "18.html",
    "778888": "19.html",
    "888877": "20.html",
    "788787": "21.html",
    "787887": "22.html",
    "888887": "23.html",
    "788888": "24.html",
    "788777": "25.html",
    "777887": "26.html",
    "788887": "27.html",
    "877778": "28.html",
    "878878": "29.html",
    "787787": "30.html",
    "887778": "31.html",
    "877788": "32.html",
    "887777": "33.html",
    "777788": "34.html",
    "888787": "35.html",
    "787888": "36.html",
    "787877": "37.html",
    "778787": "38.html",
    "887878": "39.html",
    "878788": "40.html",
    "778887": "41.html",
    "788877": "42.html",
    "777778": "43.html",
    "877777": "44.html",
    "888778": "45.html",
    "877888": "46.html",
    "878778": "47.html",
    "877878": "48.html",
    "787778": "49.html",
    "877787": "50.html",
    "788788": "51.html",
    "887887": "52.html",
    "887877": "53.html",
    "778788": "54.html",
    "787788": "55.html",
    "887787": "56.html",
    "877877": "57.html",
    "778778": "58.html",
    "878877": "59.html",
    "778878": "60.html",
    "778877": "61.html",
    "887788": "62.html",
    "787878": "63.html",
    "878787": "64.html"
  };

const trigrammi = {
  "777": "Il Cielo &#9776;",
  "888": "La Terra &#9783;",
  "887": "Il Monte &#9782;",
  "878": "L'Acqua &#9781;",
  "788": "Il Tuono &#9779;",
  "778": "Il Lago &#9777;",
  "787": "Il Fuoco &#9778;",
  "877": "Il Vento &#9780;"
};

var lancio;
var moneta;
var presente = "";
var futuro = "";
var sentenzaPresente = "";
var sentenzaFutura = "";
var questione = "";
var agora = "";
var porvir = "";
var yinYang;
var linea;
var trigramma1Presente;
var trigramma2Presente;
var trigramma1Futuro;
var trigramma2Futuro;

function lanciaMoneta() {
  lancio = 0;
  moneta = 0;
  presente = "";
  futuro = "";
  agora = "";
  porvir = "";
  yinYang ="";
  
  var i;
  for (i = 0; i < 3; i++) {

    moneta = Math.floor(Math.random() * (8 - 2)) + 2;

    switch (moneta) {
    case 2:
    case 4:
    case 6:
      lancio = lancio + 2;
      yinYang = yinYang + "- Yin 阴 ";
      break;
    default:
    lancio = lancio + 3;
    yinYang = yinYang + "- Yang 阳 ";
    break;
    }
  }

  document.getElementById("immagini").innerHTML = "&#9775; " + yinYang + "-" + " &#9775;";
  
  switch (lancio) {
  case 6:
    linea = "immagini/linea_x.png";
    presente = "8";
    futuro = "7";
    break;
  case 7:
    linea = "immagini/linea_yang.png";
    presente = "7";
    futuro = "7";
    break;
  case 8:
    linea = "immagini/linea_yin.png";
    presente = "8";
    futuro = "8";
    break;
  case 9:
    linea = "immagini/linea_0.png";
    presente = "7";
    futuro = "8";
    break;
  }
  return linea;
}


function scriviLinea1() {
  document.getElementById("uno").src = lanciaMoneta();
  sentenzaPresente = presente;
  sentenzaFutura = futuro;
  sentenza = lancio.toString();
  document.getElementById("lanciaMonete1").style.display = "none";
  document.getElementById("lanciaMonete2").style.display = "block";
}

function scriviLinea2() {
  document.getElementById("due").src = lanciaMoneta();
  sentenzaPresente = sentenzaPresente + presente;
  sentenzaFutura = sentenzaFutura + futuro;
  document.getElementById("lanciaMonete2").style.display = "none";
  document.getElementById("lanciaMonete3").style.display = "block";
}

function scriviLinea3() {
  document.getElementById("tre").src = lanciaMoneta();
  sentenzaPresente = sentenzaPresente + presente;
  trigramma1Presente = sentenzaPresente;
  sentenzaFutura = sentenzaFutura + futuro;
  trigramma1Futuro = sentenzaFutura;
  document.getElementById("lanciaMonete3").style.display = "none";
  document.getElementById("lanciaMonete4").style.display = "block";
}

function scriviLinea4() {
  document.getElementById("quattro").src = lanciaMoneta();
  sentenzaPresente = sentenzaPresente + presente;
  sentenzaFutura = sentenzaFutura + futuro;
  document.getElementById("lanciaMonete4").style.display = "none";
  document.getElementById("lanciaMonete5").style.display = "block";
}

function scriviLinea5() {
  document.getElementById("cinque").src = lanciaMoneta();
  sentenzaPresente = sentenzaPresente + presente;
  sentenzaFutura = sentenzaFutura + futuro;
  document.getElementById("lanciaMonete5").style.display = "none";
  document.getElementById("lanciaMonete6").style.display = "block";
}

function scriviLinea6() {
  document.getElementById("sei").src = lanciaMoneta();
  sentenzaPresente = sentenzaPresente + presente;
  sentenzaFutura = sentenzaFutura + futuro;
  agora = sentenzaPresente;
  porvir = sentenzaFutura;
  trigramma2Presente = agora.slice(3);
  trigramma2Futuro = porvir.slice(3);
  document.getElementById("lanciaMonete6").style.display = "none";
  
  document.getElementById("risultatoIdeogramma").innerHTML = ideogrammi[agora];
  document.getElementById("att").innerHTML = "Situazione Attuale: " + trigrammi[trigramma1Presente] + 
    " + " + trigrammi[trigramma2Presente];
  document.getElementById("attuale").innerHTML = ideogrammi[agora];
  document.getElementById("attuale").setAttribute("href", "sentenze/" + collegamenti[agora]);
  
  document.getElementById("fut").innerHTML = "Evoluzione: " + trigrammi[trigramma1Futuro] + " + " + trigrammi[trigramma2Futuro];
  document.getElementById("futura").innerHTML = ideogrammi[porvir];
  document.getElementById("futura").setAttribute("href", "sentenze/" + collegamenti[porvir]);
}
