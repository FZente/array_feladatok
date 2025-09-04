//1.feladat

function getOtosLotteryNumbers() {
  const lottoszamok = [];
  const szamlalalo = 5;
  // for (i = 0; i < szamlalalo; i++){
  //     const szam = Math.floor(Math.random() * (90 - 1 + 1) ) + 1
  //     if (szam != lottoszamok){
  //         lottoszamok.push(szam);
  //     }

  // }
  for (i = 0; i < szamlalalo; i++) {
    const szam = () => Math.floor(Math.random() * (90 - 1 + 1)) + 1;
    let temp = szam();
    while (lottoszamok.includes(temp)) temp = szam();
    lottoszamok.push(temp);
  }
  return lottoszamok;
}

//2.feladat

function getSortedtLotteryNumbers(lotto) {
  const sorban = lotto.sort();
  return sorban;
}

const lottoszamok = getOtosLotteryNumbers();
console.log(lottoszamok);
const rendezettlottoszamok = getSortedtLotteryNumbers(lottoszamok);
console.log(rendezettlottoszamok);

//3.feladat

function getNumberOfHits(lottoszamok, talal) {
  // const hosszegyenlo = talal.length === talalatok.lenght
  // if (!hosszegyenlo) {return false;}
  // let egyenlo = true;
  // for (let i = 0; i < talal.length; i++){
  //     if (talal[i] !== talalatok[i]){
  //         return false;
  //     }
  // }
  // return egyenlo

  let talalatok = 0;

  for (let i = 0; i < talal.length; i++) {
    if (lottoszamok.includes(talal[i])) {
      talalatok++;
    }
  }
  return talalatok;
}
const talal = [1, 20, 30, 67, 84];
console.log("Tippek: ", talal);
const talalatok = getNumberOfHits(lottoszamok, talal);
console.log("Találatok száma: ", talalatok);

//4.feladat

function getMonthlyLotteryArrayNumbers() {
  // const negy = []
  // let szamlalo = 4
  // for (i = 0; i < szamlalo.lenght; i++){
  //     negy.push(sokSzam)
  // }

  const honapSzamai = [];
  const hetekSzama = 4;
  for (let i = 0; i < hetekSzama; i++) {
    honapSzamai.push(getOtosLotteryNumbers());
  }
  return honapSzamai;
}

const negyhet = getMonthlyLotteryArrayNumbers();
console.log(negyhet);

//5.feladat

function getMonthlyLotteryArrayUniqueNumbers() {
  //let ossz = tomb1.concat(negyhet);
  //let tomb1 = [...new Set(negyhet)];

  return tomb1;
}

const negyhetkihuzott = getMonthlyLotteryArrayUniqueNumbers();
console.log(negyhetkihuzott);

//6.feladat

function monthlyStatistics() {}

const stat = monthlyStatistics();
console.log(stat);
