
var ID;
var tempo = 5;
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

var div = document.getElementById("confronto");
div.style.display="none";

if(tempo == 0){
  clearInterval(tmp);
  if(pontoA < 4 && pontoB < 4){
  Jogar();
  tempo=6;
  setTimeout(inicia,1000);
  }
  else{
    var venceu = document.getElementById("Venceu");
    var perdeu = document.getElementById("perdeu")
     if(pontoA == 4){
        venceu.style.display="block";
     }else{
      perdeu.style.display="block";
     }
  }
}
tempo--;
}

function Rotate(){
  var div = document.getElementById("confronto");
  div.style.display="block";
  div.style.animationName="RodaConfronto";
  div.style.animationDuration="1s";
  div.style.animationIterationCount="2";
}

var Rot_cont= 0;
function inicia(){
  var botao = document.getElementById("btn");
  botao.style.display="none"

  var botao2 = document.getElementById("btn2");
  botao2.style.display="block"
  botao2.style.backgroundColor="blue";

  if(Rot_cont == 0){
  setTimeout(Rotate,200);
  Rot_cont++;
  }
  tmp = setInterval(Tempo,800);
}

function Jogar(){
var vetor_Pc2 = ["mao-pc","pedra-pc","tesoura-pc"];
var nome2 = [];

min = Math.ceil(0);
max = Math.floor(3);

for(let i = 0; i < 3; i++){
 nome2[i] = document.getElementById(vetor_Pc2[i]);
 nome2[i].style.transform="none";
}

var num = document.getElementById("num");
num = Math.floor(Math.random() * (max - min)) + min;

nome2[num].style.transform="scale(1.3)";


var nomePC = vetor_Pc2[num];
var nomeJog = ID;


var divjogA = document.getElementById("PontuacaoA");
var divjogB = document.getElementById("PontuacaoB");

divjogA.innerHTML = pontoA;
divjogB.innerHTML = pontoB;

if(nomePC == "pedra-pc" && nomeJog == "mao-jog" || nomePC == "tesoura-pc" && nomeJog == "pedra-jog" || nomePC == "mao-pc" && nomeJog == "tesoura-jog"){
  pontoA++;
}
else if(nomePC == "pedra-pc" && nomeJog == "pedra-jog" || nomePC == "tesoura-pc" && nomeJog == "tesoura-jog" || nomePC == "mao-pc" && nomeJog == "mao-jog"){/*Pontua????o para nenhum lado*/}
else{
    pontoB++;
}

divjogA.innerHTML = pontoA;
divjogB.innerHTML = pontoB;


setTimeout(TirarTrasformPC,930)
}

function TirarTrasformPC(){
  var vetor_Pc2 = ["mao-pc","pedra-pc","tesoura-pc","mao-jog","pedra-jog","tesoura-jog"];
  var nome2 = [];

  
  for(let i = 0; i < 6; i++){
   nome2[i] = document.getElementById(vetor_Pc2[i]);
   nome2[i].style.transform="none";
  }

}

function Recomecar(){
  location.reload();
}