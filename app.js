
var ID;
var tempo = 9;
var pontoA = 0;
var pontoB = 0;

function PegaID(id){
ID = id;
var vetor_Jog = ["mao-jog","pedra-jog","tesoura-jog"];
var nome = [];

for(let i = 0; i < 3; i++){
 nome[i] = document.getElementById(vetor_Jog[i]);
 nome[i].style.transform="none"
} 

var tag = document.getElementById(id);
tag.style.transform="scale(1.3)";
}

function Tempo(){
var div = document.getElementById("tempo");
div.innerHTML = "00:0" + tempo;
if(tempo == 0){
  clearInterval(tmp);
  alert(ID);
  Jogar();
  tempo=10;
}
tempo--;
}

function inicia(){
  tmp = setInterval(Tempo,100);
}


function Jogar(){
var vetor_Pc2 = ["mao-pc","pedra-pc","tesoura-pc"];
var nome2 = [];

min = Math.ceil(0);
max = Math.floor(3);

for(let i = 0; i < 3; i++){
 nome2[i] = document.getElementById(vetor_Pc2[i]);
}

var num = document.getElementById("num");
num = Math.floor(Math.random() * (max - min)) + min;
console.log(num);

var nomePC = vetor_Pc2[num];
var nomeJog = ID;

var divjogA = document.getElementById("PontuacaoA");
var divjogB = document.getElementById("PontuacaoB");

divjogA.innerHTML = pontoA;
divjogB.innerHTML = pontoB;

}