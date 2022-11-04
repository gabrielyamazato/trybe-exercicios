const btnBranco = document.getElementById('bt-branco');
const btnVerde = document.getElementById('bt-verde');
const btnVermelho = document.getElementById('bt-vermelho');
const btnPreto = document.getElementById('bt-preto');
const btnAzul = document.getElementById('bt-azul');
const bt8Px = document.getElementById('8px');
const bt12Px = document.getElementById('12px');
const bt16Px = document.getElementById('16px');
const btZeroCinco = document.getElementById('0,5');
const btUm = document.getElementById('1');
const btUmMeio = document.getElementById('1,5');
const btArial = document.getElementById('arial');
const btTimes = document.getElementById('timesNewRoman');

btnBranco.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    localStorage.setItem('backgroundColor', 'white');
});

btnVerde.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
    localStorage.setItem('backgroundColor', 'green');
});

btnVermelho.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
    localStorage.setItem('backgroundColor', 'red');
})