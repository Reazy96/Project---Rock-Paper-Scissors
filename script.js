const myOutput = document.querySelector(".my-output");
const cpuOutput = document.querySelector(".cpu-output");
const result = document.querySelector(".result");
let roundHTML = document.querySelector(".runden");
let rounds = 0;
let myScoreHTML = document.querySelector(".my-score");
let myWin = 0;
let cpuScoreHTML = document.querySelector(".cpu-score");
let cpuWin = 0;

// const schere = () => {
//   let schere = document.querySelector(".schere");
//   schere = 1;
//   console.log(schere);

//   let cpuChoice = Math.ceil(Math.random() * 3);
//   console.log(cpuChoice);

//   if (cpuChoice === 1 && cpuChoice === schere) {
//     cpuOutput.innerHTML = "Gegners Wahl: Schere";
//     myOutput.innerHTML = "Meine Wahl: Schere";
//     result.innerHTML = "Ergebnis: unentschieden";
//   } else if (cpuChoice === 2) {
//     cpuOutput.innerHTML = "Gegners Wahl: Stein";
//     myOutput.innerHTML = "Meine Wahl: Schere";
//     result.innerHTML = "Ergebnis: verloren";
//   } else if (cpuChoice === 3) {
//     cpuOutput.innerHTML = "Gegners Wahl: Papier";
//     myOutput.innerHTML = "Meine Wahl: Schere";
//     result.innerHTML = "Ergebnis: gewonnen";
//   }
// };

// const stein = () => {
//   let stein = document.querySelector(".stein");
//   stein = 2;

//   let cpuChoice = Math.ceil(Math.random() * 3);
//   console.log(cpuChoice);

//   if (cpuChoice === 2 && cpuChoice === stein) {
//     cpuOutput.innerHTML = "Gegners Wahl: Stein";
//     myOutput.innerHTML = " Meine Wahl: Stein";
//     result.innerHTML = "Ergebnis: unentschieden";
//   } else if (cpuChoice === 1) {
//     cpuOutput.innerHTML = "Gegners Wahl: Schere";
//     myOutput.innerHTML = " Meine Wahl: Stein";
//     result.innerHTML = "Ergebnis: gewonnen";
//   } else if (cpuChoice === 3) {
//     cpuOutput.innerHTML = "Gegners Wahl: Papier";
//     myOutput.innerHTML = " Meine Wahl: Stein";
//     result.innerHTML = "Ergebnis: verloren";
//   }
// };

// const papier = () => {
//   let papier = document.querySelector(".papier");
//   papier = 3;

//   let cpuChoice = Math.ceil(Math.random() * 3);
//   console.log(cpuChoice);

//   if (cpuChoice === 3 && cpuChoice === papier) {
//     cpuOutput.innerHTML = "Gegners Wahl: Papier";
//     myOutput.innerHTML = "Meine Wahl: Papier";
//     result.innerHTML = "Ergebnis: unentschieden";
//   } else if (cpuChoice === 1) {
//     cpuOutput.innerHTML = "Gegners Wahl: Schere";
//     myOutput.innerHTML = "Meine Wahl: Papier";
//     result.innerHTML = "Ergebnis: verloren";
//   } else if (cpuChoice === 2) {
//     cpuOutput.innerHTML = "Gegners Wahl: Stein";
//     myOutput.innerHTML = "Meine Wahl: Papier";
//     result.innerHTML = "Ergebnis: gewonnen";
//   }
// };

const playGame = (myChoice) => {
  let cpuChoice = Math.ceil(Math.random() * 3);

  if (cpuChoice === 1) {
    cpuChoice = "Schere";
    cpuOutput.innerHTML = "Gegner:" + " " + cpuChoice;
  } else if (cpuChoice === 2) {
    cpuChoice = "Stein";
    cpuOutput.innerHTML = "Gegner:" + " " + cpuChoice;
  } else {
    cpuChoice = "Papier";
    cpuOutput.innerHTML = "Gegner:" + " " + cpuChoice;
  }
  if (myChoice === cpuChoice) {
    result.innerHTML = "unentschieden";
  } else if (
    (myChoice === "Schere" && cpuChoice === "Papier") ||
    (myChoice === "Papier" && cpuChoice === "Stein") ||
    (myChoice === "Stein" && cpuChoice === "Schere")
  ) {
    result.innerHTML = " Du hast Gewonnen ! :) ";
    myWin++;
    myScoreHTML.innerHTML = "Deine Siege:" + " " + myWin;
  } else if (
    (myChoice === "Schere" && cpuChoice === "Stein") ||
    (myChoice === "Papier" && cpuChoice === "Schere") ||
    (myChoice === "Stein" && cpuChoice === "Papier")
  ) {
    result.innerHTML = " du hast leider Verloren :( ";
    cpuWin++;
    cpuScoreHTML.innerHTML = "Gegners Siege:" + " " + cpuWin;
  } else {
    result.innerHTML = "Error";
  }
  myOutput.innerHTML = "Du:" + " " + myChoice;
  rounds++;
  roundHTML.innerHTML = "Runde:" + " " + rounds;
};
