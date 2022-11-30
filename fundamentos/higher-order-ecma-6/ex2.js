const drawNumber = () => {
    let number = Math.round(Math.random() * 5)

    return number
};

function checkDraw(aposta) {
    let holdDrew = drawNumber();

    if (aposta == holdDrew) {
        return `PARABÉNS VOCÊ GANHOU`
    } else {
        return `TENTE NOVAMENTE`
    }
};

console.log(checkDraw(3))