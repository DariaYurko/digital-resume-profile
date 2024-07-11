const menuTitleEl = document.querySelector('.navigation__title');
const menuEl = document.querySelector('.menu');
console.log(menuTitleEl);
console.log(menuEl);

menuTitleEl.addEventListener('click', e => {

  menuEl.classList.toggle('active');
});

