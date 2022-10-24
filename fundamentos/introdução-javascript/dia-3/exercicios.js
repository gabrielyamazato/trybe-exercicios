//Crie um algoritmo que imprima na tela o fatorial de 10.

let num = 5;

if (num === 0 || num === 1){
    num = 1
}

for (i = num - 1; i >= 1; i--) {
    num *= i;
}
console.log(num)

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra.

let word = 'tryber';
let newWord = '';

for (i=word.length-1; i>=0; i--) {
    newWord+=word[i]
}

console.log(newWord)