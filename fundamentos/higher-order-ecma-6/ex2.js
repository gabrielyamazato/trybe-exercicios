const drawNumber = (aposta, number) => aposta === number;

const checkDraw = (aposta, drawNumber) => {
    let number = Math.round(Math.random() * 5)

    if (drawNumber(aposta, number)) {
        return `PARABÉNS VOCÊ GANHOU`
    } else {
        return `TENTE NOVAMENTE`
    }
};

console.log(checkDraw(3, drawNumber))