const union = document.querySelector('.navbar-menu-btn-container');
const exit = document.createElement('img');
const div = document.querySelector('.menu-list-items');
const ham = document.querySelector('.navbar-menu-btn-container');
const mainBody = document.querySelector('#main-body');
const logo = document.querySelector('.logo-container');
const menuNavigation = div.querySelectorAll('li');

function openMenu() {
  div.classList.remove('menu-list-items');
  div.classList.add('mobile-menu-list');
  ham.classList.add('make-disappear');
  mainBody.classList.add('blur-bg');
  logo.classList.add('blur-bg');
  div.querySelector('ul').classList.add('mobile-menu-list-ul');
  div.getElementsByClassName.color = 'white';

  exit.src = './images/Icon-cancel.png';
  exit.classList.add('exit');
  exit.style.marginTop = '-1.25rem';
  div.prepend(exit);
}

function closeMenu() {
  div.classList.remove('mobile-menu-list');
  div.classList.add('menu-list-items');
  ham.classList.remove('make-disappear');
  mainBody.classList.remove('blur-bg');
  logo.classList.remove('blur-bg');
}

union.addEventListener('click', openMenu);
exit.addEventListener('click', closeMenu);
menuNavigation.forEach((element) => {
  element.addEventListener('click', closeMenu);
});
