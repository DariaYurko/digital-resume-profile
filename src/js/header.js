const menuTitleEl = document.querySelector('.navigation__title');
const menuEl = document.querySelector('.menu');

// const headerEl = document.querySelector('.header');
// let headerHeight = headerEl.getBoundingClientRect().height;

// -----------------------------------------------------------

menuTitleEl.addEventListener('click', e => {
  if (menuEl.classList.contains('visually-hidden')) {
    menuEl.classList.add('active');
    menuEl.classList.remove('visually-hidden');

    // headerHeight = headerEl.getBoundingClientRect().height;
    // console.log(headerHeight);
  } else {
    setTimeout(() => {
      menuEl.classList.add('visually-hidden');

      // headerHeight = headerEl.getBoundingClientRect().height;
      // console.log(headerHeight);
    }, 300);
    menuEl.classList.remove('active');
  }
});

// ----------------------------------------------------------
