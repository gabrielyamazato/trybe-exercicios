let pecas ='bisPO';
let result = pecas.toLowerCase();

switch (result) {
    case 'peoes':
        console.log('Uma casa a sua frente. No seu primeiro movimento pode ser duas casas.');
        break;
    case 'torre':
        console.log('Infinitas casas a frente, atras, direita e esquerda');
        break;
    case 'cavalo':
        console.log('Avança em um formato de L, duas casas a frente e uma a esquerda ou direita');
        break;
    case 'bispo':
        console.log('Infinitas casas nas diagonais.');
        break;
    case 'rainha':
        console.log('Infinitas casas em todas as direções.')
        break;
    case 'rei':
        console.log('Uma casa em todas as direções.')
        break;
    default:
        console.log('Peça Invalida.')
}