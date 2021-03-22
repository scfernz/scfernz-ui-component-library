const listItems = document.querySelectorAll('.menu-item');
const photos = document.querySelectorAll('img');

console.log(listItems);
console.log(photos);

listItems.forEach((menuitem, i) => {
    menuitem.addEventListener('mouseenter', () => {
        photos[i].classList.add('show');
    });
    menuitem.addEventListener('mouseleave', () => {
        photos[i].classList.remove('show');
    });
    menuitem.addEventListener('mousemove', (e) => {
        photos[i].style.left = -e.clientX * .5 + 'px';
        photos[i].style.top = e.clientY * .5 - 100 + 'px';
    });
});