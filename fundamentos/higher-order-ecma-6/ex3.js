// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const compare = (resposta, correto) => {
//     let guardaValor = 0;

//     correto.forEach((elemento, index) => {
//         if (elemento === resposta[index]) {
//             return guardaValor += 1;
//         }
//         if (resposta[index] === 'N.A') {
//             return guardaValor += 0; 
//         }
//         else (elemento !== resposta[index]) {
//             return guardaValor -= 0.5;
//         }
//     })
//       return guardaValor  
//     }
// console.log(compare(RIGHT_ANSWERS, STUDENT_ANSWERS))