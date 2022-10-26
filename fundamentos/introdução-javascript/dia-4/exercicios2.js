// 1

function verificaPalindrome(ver){
    let palavra = ver.toLowerCase();
    let palavraReverso = palavra.split('').reverse().join('');

    return palavraReverso === palavra;
    
};

console.log(verificaPalindrome('arara'));

// 2

function indiceDoMaior(index) {
    let indiceMaior = 0;
    for (let indice in index) {
        if (index[indiceMaior] < index[indice]) {
            indiceMaior = indice
        }
    }
    return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));