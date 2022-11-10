// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let result = 0;
for (i=2; i<=150;i+=1) {
    if (i%3===0) {
        result+=1;
    }
}
if (result===50) {
    console.log('Parabéns!');
}
