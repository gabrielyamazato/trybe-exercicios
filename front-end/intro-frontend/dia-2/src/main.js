const token = '1938485206322039';
const url = `https://superheroapi.com/api/${token}`;

const img = document.querySelector('#image');
const nameHero = document.querySelector('#name');
const btRandom = document.querySelector('#button');

const generateId = () => Math.floor(Math.random() * 500);

btRandom.addEventListener('click', () => {
    
    const id = generateId();

    fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((hero) => {
        img.src = hero.image.url;
        nameHero.innerHTML = hero.name;
    });
})