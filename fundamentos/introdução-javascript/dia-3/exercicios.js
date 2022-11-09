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

//Utilize a estrutura de repetição for para escrever dois algoritmos:
//um que retorne a maior palavra desse array e outro que retorne a menor.
//Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavraMaior = "";

for (let i=0; i< array.length; i++) {
    if (array[i].length > palavraMaior.length){
        palavraMaior = array[i];
    }
}
console.log(palavraMaior)

//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores,
//ou seja, é divisível por 1 e por ele mesmo.
//Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let nu = 0;

for (i=2; i<=50; i++) {
    if (i%1===i && i%i===0) {
        nu+=1
    }
}
console.log(nu)