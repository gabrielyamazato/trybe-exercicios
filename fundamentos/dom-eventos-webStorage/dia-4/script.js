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
})

btnVerde.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
    localStorage.setItem('backgroundColor', 'green');
})

btnVermelho.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
    localStorage.setItem('backgroundColor', 'red');
})

btnPreto.addEventListener('click', () => {
    let fontColorBlack = document.getElementsByClassName('bodyG')[0];
    fontColorBlack.style.color = 'black';
    localStorage.setItem('fontColor', 'black');
})

btnAzul.addEventListener('click', () => {
    let fontColorBlue = document.getElementsByClassName('bodyG')[0];
    fontColorBlue.style.color = 'blue';
    localStorage.setItem('fontColor', 'blue');
})

bt8Px.addEventListener('click', () => {
    let fontSize8 = document.getElementsByTagName('body')[0];
    fontSize8.style.fontSize = '8px';
    localStorage.setItem('fontSize', '8px');
})

bt12Px.addEventListener('click', () => {
    let fontSize12 = document.getElementsByTagName('body')[0];
    fontSize12.style.fontSize = '12px';
    localStorage.setItem('fontSize', '12px');
})

bt16Px.addEventListener('click', () => {
    let fontSize16 = document.getElementsByTagName('body')[0];
    fontSize16.style.fontSize = '16px';
    localStorage.setItem('fontSize', '16px');
})

btZeroCinco.addEventListener('click', () => {
    let lineHeight0 = document.getElementsByTagName('body')[0];
    lineHeight0.style.lineHeight = '14px';
    localStorage.setItem('lineHeight', '14px');
})

btUm.addEventListener('click', () => {
    let lineHeight1 = document.getElementsByTagName('body')[0];
    lineHeight1.style.lineHeight = '19px';
    localStorage.setItem('lineHeight', '19px');
})

btUmMeio.addEventListener('click', () => {
    let lineHeight2 = document.getElementsByTagName('body')[0];
    lineHeight2.style.lineHeight = '26px'
    localStorage.setItem('lineHeight', '26px');
})

btArial.addEventListener('click', () => {
    let fontChangeArial = document.getElementsByTagName('body')[0];
    fontChangeArial.style.fontFamily = 'Arial, Helvetica, sans-serif';
    localStorage.setItem('fontFamily', 'arial');
})

btTimes.addEventListener('click', () => {
    let fontChangeTimes = document.getElementsByTagName('body')[0];
    fontChangeTimes.style.fontFamily = `'Times New Roman', Times, serif`;
    localStorage.setItem('fontFamily', 'timesNewRoman');
})