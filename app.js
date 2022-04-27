var sodaItem = document.getElementById('soda');
var cheeseItem = document.getElementById('cheese');
var grapesItem = document.getElementById('grapes');

sodaItem.addEventListener('click', () => {
    sodaItem.classList.toggle('picked');
});

cheeseItem.addEventListener('click', () => {
    cheeseItem.classList.toggle('picked');
});

grapesItem.addEventListener('click', () => {
    grapesItem.classList.toggle('picked');
});