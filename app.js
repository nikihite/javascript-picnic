var sodaItem = document.getElementById('soda');
var cheeseItem = document.getElementById('cheese');

sodaItem.addEventListener('click', () => {
    sodaItem.classList.toggle('picked');
});

cheeseItem.addEventListener('click', () => {
    cheeseItem.classList.toggle('picked');
});