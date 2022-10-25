//1
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden:2,
        silver:3,
    }
}

console.log('A jogadora ' + player.name + ' possui ' + player.medals.silver + ' medalhas de prata.');

//2
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (let person in names) {
    console.log('Olá ' + names[person])
};

//3
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let carro in car) {
    console.log(carro + ': ' + car[carro])
}

//funções

let statusCarro = 'desligado';
let aceleracao = 0;
let rotacaoDoVolante = 0;

function ligarDesligar() {
    if (statusCarro === 'desligado'){
        statusCarro = 'ligado';
    }   else {
        statusCarro = 'desligado';
    }
        return statusCarro; 
}

function acelerar(incremento) {
    aceleracao = aceleracao + incremento;

        return 'Acelerando a ' + aceleracao + 'm/s²'
}

function frear(decremento){
    aceleracao = aceleracao - decremento;
        return 'Desacelerando para ' + aceleracao + 'm/s²'
}

function girarVolante(anguloRotacao){
    rotacaoDoVolante = anguloRotacao;
        return rotacaoDoVolante + 'º'
}

console.log(ligarDesligar())
