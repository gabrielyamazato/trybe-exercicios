const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (estudante, resposta) => {
    if (estudante === resposta) {
        return 1;
    } 
    if (estudante === 'N.A') {
        return 0;
    } 
    return -0.5;
};

const finalCount = (estudante, resposta, checador) => {
    let count = 0;

    for (let i = 0; i < resposta.length; i += 1) {
        const checkReturn = checador(estudante[i], resposta[i]);
        count += checkReturn
    }
    return `Sua nota é de: ${count} pontos!`
};

console.log(finalCount(STUDENT_ANSWERS, RIGHT_ANSWERS, check));