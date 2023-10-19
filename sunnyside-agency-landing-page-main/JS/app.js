(function () {
  'use strict';
  const menuOpen = document.getElementById('menu_open');
  const menuClose = document.getElementById('menu_close');
  const headerUl = document.getElementById('header__ul');

  menuOpen.addEventListener('click', () => {
    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';

    headerUl.classList.toggle('header__nav_active');
    headerUl.classList.remove('header__ul');
  });

  menuClose.addEventListener('click', () => {
    menuOpen.style.display = 'block';
    menuClose.style.display = 'none';
    headerUl.classList.toggle('header__nav_active');
    headerUl.classList.add('header__ul');
  });
})();
