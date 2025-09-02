//1.feladat

function getOtosLotteryNumbers() {
    const lottoszamok = []
    const szamlalalo = 5;
    // for (i = 0; i < szamlalalo; i++){
    //     const szam = Math.floor(Math.random() * (90 - 1 + 1) ) + 1
    //     if (szam != lottoszamok){
    //         lottoszamok.push(szam);
    //     }
        
    // }
    for (i = 0; i < szamlalalo; i++){
        const szam = () => Math.floor(Math.random() * (90 - 1 + 1) ) + 1;
        let temp = szam();
        while (lottoszamok.includes(temp))
            temp = szam()
        lottoszamok.push(temp);
    }
    return lottoszamok
}

//2.feladat

function getSortedtLotteryNumbers(lotto) {
    const sorban = lotto.sort();
    return sorban
}


const lottoszamok = getOtosLotteryNumbers()
console.log(lottoszamok);
const rendezettlottoszamok = getSortedtLotteryNumbers(lottoszamok)
console.log(rendezettlottoszamok)

//3.feladat

function getNumberOfHits(talalatok){
    const hosszegyenlo = talal.length === talalatok.lenght
    if (!hosszegyenlo) {return false;}

    let egyenlo = true;
    for (let i = 0; i < talal.length; i++){
        if (talal[i] !== talalatok[i]){
            return false;
        }
    }
    return egyenlo
}
const talal = [1,20,30,67,84]
const talalatok = getNumberOfHits(lottoszamok)
console.log(talalatok)

//4.feladat

function getMonthlyLotteryArrayNumbers(sokSzam){
    const negy = []
    let szamlalo = 4 
    for (i = 0; i < szamlalo.lenght; i++){
        negy.push(sokSzam)
    }
}

const negyhet = getMonthlyLotteryArrayNumbers(lottoszamok)
console.log(negyhet)