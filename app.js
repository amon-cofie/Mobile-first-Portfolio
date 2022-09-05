let union = document.querySelector('.navbar-menu-btn-container');
let exit = document.createElement('img');
let div = document.querySelector('.menu-list-items');
union.addEventListener('click', openMenu);

function openMenu() {
  div.classList.remove('menu-list-items');
  div.classList.add('mobile-menu-list');
  div.querySelector('ul').classList.add('mobile-menu-list-ul');
  div.getElementsByClassName.color = 'white';

  exit.src = './images/Icon-cancel.png'
  exit.classList.add('exit');

  div.prepend(exit);
}

exit.addEventListener('click', closeMenu);

function closeMenu() {
  div.classList.remove('mobile-menu-list');
  div.classList.add('menu-list-items');
  div.re
}