var sodaItem = document.getElementById('soda');
var cheeseItem = document.getElementById('cheese');
var grapesItem = document.getElementById('grapes');
var breadItem = document.getElementById('bread');
var watermelonItem = document.getElementById('watermelon');

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

