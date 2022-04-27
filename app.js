var sodaItem = document.getElementById('soda');
var cheeseItem = document.getElementById('cheese');
var grapesItem = document.getElementById('grapes');
var breadItem = document.getElementById('bread');
var watermelonItem = document.getElementById('watermelon');

const myButton = document.getElementById('button');

sodaItem.addEventListener('click', () => {
    sodaItem.classList.toggle('picked');
});

cheeseItem.addEventListener('click', () => {
    cheeseItem.classList.toggle('picked');
});

grapesItem.addEventListener('click', () => {
    grapesItem.classList.toggle('picked');
});

breadItem.addEventListener('click', () => {
    breadItem.classList.toggle('picked');
});

watermelonItem.addEventListener('click', () => {
    watermelonItem.classList.toggle('picked');
});

myButton.addEventListener('click', () => {
    sodaItem.classList.remove('picked');
    cheeseItem.classList.remove('picked');
    grapesItem.classList.remove('picked');
    breadItem.classList.remove('picked');
    watermelonItem.classList.remove('picked');

    const randomItem = Math.ceil(Math.random() * 5);
    console.log('the random item is', randomItem);

    if (randomItem === 1) {
        sodaItem.classList.add('picked');
    } else if (randomItem === 2) {
        cheeseItem.classList.add('picked');
    } else if (randomItem === 3) {
        grapesItem.classList.add('picked');
    } else if (randomItem === 4) {
        breadItem.classList.add('picked');
    } else {
        watermelonItem.classList.add('picked');
    }
});
