let jogo = [7, 17, 22, 35, 44, 59];

let n1 = Math.floor(Math.random()*60) + 1;
let n2 = Math.floor(Math.random()*60) + 1;
let n3 = Math.floor(Math.random()*60) + 1;
let n4 = Math.floor(Math.random()*60) + 1;
let n5 = Math.floor(Math.random()*60) + 1;
let n6 = Math.floor(Math.random()*60) + 1;

let megaSena = [n1, n2, n3, n4, n5, n6];

console.log('MEU JOGO')
for (let index = 0; index < jogo.length; index += 1) {
    console.log(jogo[index]);
}

console.log('SORTEIO')
for (let index = 0; index < megaSena.length; index += 1) {
    console.log(megaSena[index]);
}

let acertos = 0;

for (let index1 = 0; index1 < jogo.length; index1 += 1) {
    for (let index = 0; index < megaSena.length; index += 1) {
        if (jogo[index1] == megaSena[index]){
            acertos += 1;
        }
    }
}

console.log('Seu número de acertos é: ' + acertos)