const namtForm = document.getElementById("nameForm");
const namnVisat = document.getElementById("namnVisat");
const nameButton = document.getElementById('nameButton');
const nameInput = document.getElementById("nameInput");
const knapp = document.createElement('button');
const stenen = document.getElementById("stenen");
const saxen = document.getElementById("saxen");
const påsen = document.getElementById("påsen");
const knappar = document.getElementById("knappar");
const bildElement = document.getElementById('minBild');
const bildElement2 = document.getElementById('dinBild');
const bildElement3 = document.getElementById('sinBild');
const bildElement4 = document.getElementById('tinBild');
const bildElement5 = document.getElementById('vinBild');
const bildElement6 = document.getElementById('pinBild');
const börjaom = document.createElement('button');
const resultat = document.createElement('p');
const antalVinsterElement = document.createElement('div');
const antalOavgjortElement = document.createElement('div');
const antalFörlusterElement = document.createElement('div');

const stenbild = document.createElement('img');
stenbild.classList.add('spelarbild');
const datorsten = document.createElement('img');
datorsten.classList.add('datorbild');
const saxbild = document.createElement('img');
saxbild.classList.add('spelarbild');
const datorsax = document.createElement('img');
datorsax.classList.add('datorbild');
const påsebild = document.createElement('img');
påsebild.classList.add('spelarbild');
const datorpåse = document.createElement('img');
datorpåse.classList.add('datorbild');

stenbild.src = 'Cuff_Hill_logan_stone_2.JPG';
stenbild.alt = 'Sten';
datorsten.src = 'Cuff_Hill_logan_stone_2.JPG';
datorsten.alt = 'Sten';
saxbild.src = 'Large-scissors.jpg';
saxbild.alt = 'Sax';
datorsax.src = 'Large-scissors.jpg';
datorsax.alt = 'Sax';
påsebild.src = 'R.png';
påsebild.alt = 'Påse';
datorpåse.src = 'R.png';
datorpåse.alt = 'Påse';

antalVinsterElement.innerText = 'Antal Vinster: 0';
antalVinsterElement.classList.add('ave');
antalOavgjortElement.innerText = 'Antal Oavgjorda: 0';
antalOavgjortElement.classList.add('aoe');
antalFörlusterElement.innerText = 'Antal Förluster: 0';
antalFörlusterElement.classList.add('afe');

knappar.style.display = 'none';
börjaom.classList.add('BO');
resultat.classList.add('res');

function ändraPekare () {
  knapp.style.cursor = 'pointer';
  knapp.style.backgroundColor = 'gold';
  nameButton.style.cursor = 'pointer';
  stenen.style.cursor = 'pointer';
  saxen.style.cursor = 'pointer';
  påsen.style.cursor = 'pointer';
  börjaom.style.cursor = 'pointer';
}

function ingenFärg () {
  knapp.style.backgroundColor = '';
}

function SpelarNamn () {
  const namn = nameInput.value;
  namtForm.remove();
  namnVisat.innerText = namn + " möter Superdator!";
  knapp.innerText = "Börja spelet " + namn + "!";
  knapp.classList.add('knapp');
  document.body.append(namnVisat);
  document.body.append(knapp);
  bildElement6.classList.remove('sold');

  function Börja() {
    knapp.remove();
    knappar.style.display = 'block';
    document.body.appendChild(antalVinsterElement);
    document.body.appendChild(antalOavgjortElement);
    document.body.appendChild(antalFörlusterElement);
  }
  knapp.addEventListener("click", Börja);
  knapp.addEventListener("mouseover", ändraPekare);
  knapp.addEventListener("mouseout", ingenFärg);
}

nameButton.addEventListener("click", SpelarNamn);
nameButton.addEventListener("mouseover", ändraPekare);
nameButton.addEventListener("click", ingenFärg);

const Datorval = ['sten', 'sax', 'påse'];

let draw = document.createElement('p');
draw.classList.add('dr');
const redovisa = document.createElement('p');
redovisa.classList.add('rv');
const dittVal = document.createElement('p');
dittVal.classList.add('dv');

let antalVinster = 0;
let antalFörluster = 0;
let antalOavgjorda = 0;

function uppdateraAntalVinster() {
  antalVinsterElement.innerText = `Antal Vinster: ${antalVinster}`;
}
function uppdateraAntalFörluster() {
  antalFörlusterElement.innerText = `Antal Förluster: ${antalFörluster}`;
}
function uppdateraAntalOavgjorda() {
  antalOavgjortElement.innerText = `Antal Oavgjorda: ${antalOavgjorda}`;
}

function nollställSpelet() {
  antalVinster = 0;
  antalFörluster = 0;
  antalOavgjorda = 0;
  uppdateraAntalVinster();
  uppdateraAntalFörluster();
uppdateraAntalOavgjorda();
stenen.disabled = false;
saxen.disabled = false;
påsen.disabled = false;
stenen.style.cursor = 'pointer';
saxen.style.cursor = 'pointer';
påsen.style.cursor = 'pointer';
börjaom.remove();
resultat.remove();
stenbild.remove();
datorsten.remove();
saxbild.remove();
datorsax.remove();
påsebild.remove();
datorpåse.remove();
bildElement4.classList.add('hold');
bildElement5.classList.add('told');
bildElement6.classList.remove('sold');
}

function StenVal() {
document.body.appendChild(draw);
const randomValue = Math.floor(Datorval.length * Math.random());
const slumpatVal = Datorval[randomValue];
redovisa.innerText = (slumpatVal);
dittVal.innerText = "sten";
document.body.append(dittVal);
document.body.append(redovisa);
document.body.appendChild(stenbild);
saxbild.remove();
påsebild.remove();
bildElement6.classList.add('sold');

if (slumpatVal === 'sten') {
  draw.innerText = "Oavgjort";
  document.body.appendChild(datorsten);
  datorsax.remove();
datorpåse.remove();
} else if (slumpatVal === 'sax') {
  draw.innerText = "Vinst";
  document.body.appendChild(datorsax);
  datorsten.remove();
datorpåse.remove();
} else if (slumpatVal === 'påse') {
  draw.innerText = "Förlust";
  document.body.appendChild(datorpåse);
  datorsten.remove();
datorsax.remove();
}
console.log(dittVal.innerText, 'VS', slumpatVal, draw.innerText);

if (draw.innerText === "Vinst") {
  antalVinster++;
  bildElement.classList.remove('dold');
  bildElement2.classList.add('bold');
  bildElement3.classList.add('fold');
}
else if (draw.innerText === "Förlust") {
  antalFörluster++;
  bildElement2.classList.remove('bold');
  bildElement.classList.add('dold');
  bildElement3.classList.add('fold');
}
else {
  antalOavgjorda++;
  bildElement3.classList.remove('fold');
  bildElement.classList.add('dold');
  bildElement2.classList.add('bold');
}
uppdateraAntalVinster();
uppdateraAntalFörluster();
uppdateraAntalOavgjorda();

if (antalVinster === 3 || antalFörluster === 3) {
  börjaom.innerText = "Börja om";
  document.body.appendChild(resultat);
  document.body.appendChild(börjaom);
  stenen.disabled = true;
  saxen.disabled = true;
  påsen.disabled = true;
  stenen.style.cursor = 'not-allowed';
saxen.style.cursor = 'not-allowed';
påsen.style.cursor = 'not-allowed';
  börjaom.addEventListener("click", nollställSpelet);

  if (antalVinster === 3) {
    resultat.innerText = "Du vann matchen!";
    bildElement.classList.add('dold');
    bildElement2.classList.add('bold');
    bildElement3.classList.add('fold');
    bildElement4.classList.remove('hold');
  }
  else if (antalFörluster === 3) {
    resultat.innerText = "Du förlorade matchen!";
    bildElement.classList.add('dold');
    bildElement2.classList.add('bold');
    bildElement3.classList.add('fold');
    bildElement5.classList.remove('told');
  }
}
}

stenen.addEventListener("click", StenVal);

function SaxVal() {
document.body.appendChild(draw);
const randomValue = Math.floor(Datorval.length * Math.random());
const slumpatVal = Datorval[randomValue];
redovisa.innerText = (slumpatVal);
dittVal.innerText = "sax";
document.body.append(dittVal);
document.body.append(redovisa);
document.body.appendChild(saxbild);
stenbild.remove();
påsebild.remove();
bildElement6.classList.add('sold');

if (slumpatVal === 'sten') {
draw.innerText = "Förlust";
document.body.appendChild(datorsten);
datorsax.remove();
datorpåse.remove();
} else if (slumpatVal === 'sax') {
draw.innerText = "Oavgjort";
document.body.appendChild(datorsax);
datorsten.remove();
datorpåse.remove();
} else if (slumpatVal === 'påse') {
draw.innerText = "Vinst";
document.body.appendChild(datorpåse);
datorsten.remove();
datorsax.remove();
}

console.log(dittVal.innerText, 'VS', slumpatVal, draw.innerText);

if (draw.innerText === "Vinst") {
  antalVinster++;
  bildElement.classList.remove('dold');
  bildElement2.classList.add('bold');
  bildElement3.classList.add('fold');
}
else if (draw.innerText === "Förlust") {
  antalFörluster++;
  bildElement2.classList.remove('bold');
  bildElement.classList.add('dold');
  bildElement3.classList.add('fold');
}
else {
  antalOavgjorda++;
  bildElement3.classList.remove('fold');
  bildElement.classList.add('dold');
  bildElement2.classList.add('bold');
}
uppdateraAntalVinster();
uppdateraAntalFörluster();
uppdateraAntalOavgjorda();

if (antalVinster === 3 || antalFörluster === 3) {
  börjaom.innerText = "Börja om";
  document.body.appendChild(resultat);
  document.body.appendChild(börjaom);
  stenen.disabled = true;
  saxen.disabled = true;
  påsen.disabled = true;
  stenen.style.cursor = 'not-allowed';
  saxen.style.cursor = 'not-allowed';
  påsen.style.cursor = 'not-allowed';
  börjaom.addEventListener("click", nollställSpelet);

  if (antalVinster === 3) {
    resultat.innerText = "Du vann matchen!";
    bildElement.classList.add('dold');
    bildElement2.classList.add('bold');
    bildElement3.classList.add('fold');
    bildElement4.classList.remove('hold');
  }
  else if (antalFörluster === 3) {
    resultat.innerText = "Du förlorade matchen!";
    bildElement.classList.add('dold');
    bildElement2.classList.add('bold');
    bildElement3.classList.add('fold');
    bildElement5.classList.remove('told');
  }
}
}

saxen.addEventListener("click", SaxVal);

function PåseVal() {
document.body.appendChild(draw);
const randomValue = Math.floor(Datorval.length * Math.random());
const slumpatVal = Datorval[randomValue];
redovisa.innerText = (slumpatVal);
dittVal.innerText = "påse";
document.body.append(dittVal);
document.body.append(redovisa);
document.body.appendChild(påsebild);
saxbild.remove();
stenbild.remove();
bildElement6.classList.add('sold');

if (slumpatVal === 'sten') {
draw.innerText = "Vinst";
document.body.appendChild(datorsten);
datorsax.remove();
datorpåse.remove();
} else if (slumpatVal === 'sax') {
draw.innerText = "Förlust";
document.body.appendChild(datorsax);
datorsten.remove();
datorpåse.remove();
} else if (slumpatVal === 'påse') {
draw.innerText = "Oavgjort";
document.body.appendChild(datorpåse);
datorsten.remove();
datorsax.remove();
}
console.log(dittVal.innerText, 'VS', slumpatVal, draw.innerText);

if (draw.innerText === "Vinst") {
  antalVinster++;
  bildElement.classList.remove('dold');
  bildElement2.classList.add('bold');
  bildElement3.classList.add('fold');
}
else if (draw.innerText === "Förlust") {
  antalFörluster++;
  bildElement2.classList.remove('bold');
  bildElement.classList.add('dold');
  bildElement3.classList.add('fold');
}
else {
  antalOavgjorda++;
  bildElement3.classList.remove('fold');
  bildElement.classList.add('dold');
  bildElement2.classList.add('bold');
}
uppdateraAntalVinster();
uppdateraAntalFörluster();
uppdateraAntalOavgjorda();

if (antalVinster === 3 || antalFörluster === 3) {
  börjaom.innerText = "Börja om";
  document.body.appendChild(resultat);
  document.body.appendChild(börjaom);
  stenen.disabled = true;
  saxen.disabled = true;
  påsen.disabled = true;
  stenen.style.cursor = 'not-allowed';
  saxen.style.cursor = 'not-allowed';
  påsen.style.cursor = 'not-allowed';
  börjaom.addEventListener("click", nollställSpelet);

  if (antalVinster === 3) {
    resultat.innerText = "Du vann matchen!";
    bildElement.classList.add('dold');
    bildElement2.classList.add('bold');
    bildElement3.classList.add('fold');
    bildElement4.classList.remove('hold');
  }
  else if (antalFörluster === 3) {
    resultat.innerText = "Du förlorade matchen!";
    bildElement.classList.add('dold');
    bildElement2.classList.add('bold');
    bildElement3.classList.add('fold');
    bildElement5.classList.remove('told');
  }
}
}

påsen.addEventListener("click", PåseVal);









