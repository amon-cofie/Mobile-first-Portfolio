const union = document.querySelector('.navbar-menu-btn-container');
const exit = document.createElement('img');
const div = document.querySelector('.menu-list-items');
const ham = document.querySelector('.navbar-menu-btn-container');
const mainBody = document.querySelector('#main-body');
const logo = document.querySelector('.logo-container');
const menuNavigation = div.querySelectorAll('li');
const headerContainer = document.querySelector('#header-container');

exit.src = './images/Icon-cancel.png';
exit.classList.add('exit');
exit.style.marginTop = '-1.25rem';

function openMenu() {
  div.classList.remove('menu-list-items');
  div.classList.add('mobile-menu-list');
  ham.classList.add('make-disappear');
  mainBody.classList.add('blur-bg');
  logo.classList.add('blur-bg');
  div.querySelector('ul').classList.add('mobile-menu-list-ul');
  div.getElementsByClassName.color = 'white';
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

// Getting everything in the original works section
const worksArray = document.querySelectorAll('.works');
const workObjArr = [];

// Creating the function that will store each article of the works section in an object
function fillObjects(
  obj,
  nameWork,
  detailsWork,
  imageWork,
  descriptionWork,
  techWork,
  buttonsWork,
) {
  obj.name = nameWork;
  obj.details = detailsWork;
  obj.image = imageWork;
  obj.description = descriptionWork;
  obj.tech = techWork;
  obj.btns = buttonsWork;
  return obj;
}

// Populating a the new array with the objects containing the works section articles
worksArray.forEach((e) => {
  const workObj = {};
  workObjArr.push(
    fillObjects(
      workObj,
      e.querySelector('h3'),
      e.querySelector('.client-frame'),
      e.querySelector('.project-card-image'),
      e.querySelector('.main-text'),
      e.querySelector('.lang-btns'),
      e.querySelector('.btn-container'),
    ),
  );
});

// Creating the exit button for the popUp window
const exit2 = document.createElement('img');
exit2.src = './images/Icon-pop-up-close.png';
exit2.classList.add('exit-popup-window');

const popUpWindowDiv = document.createElement('div');

// The dark background that will be placed behind the popUp window
const darkBgScrn = document.createElement('div');

// The container that will hold the description, tech icons and buttons of the popUp window
// to change the display on bigger screens
const gridHolder = document.createElement('div');

// The function that does listens to the click event on the "see projects" button
function popUp(itr) {
  const clkObj = workObjArr[itr];
  document.body.appendChild(popUpWindowDiv);
  popUpWindowDiv.classList.add('pop-up-window-styles');
  document.body.prepend(darkBgScrn);
  darkBgScrn.classList.add('dark-bg-screen');
  mainBody.classList.add('blur-bg');
  headerContainer.classList.add('blur-bg');
  popUpWindowDiv.appendChild(clkObj.name);
  clkObj.name.appendChild(exit2);
  popUpWindowDiv.appendChild(clkObj.details);
  popUpWindowDiv.appendChild(clkObj.image);
  popUpWindowDiv.appendChild(gridHolder);
  gridHolder.appendChild(clkObj.description);
  gridHolder.appendChild(clkObj.tech);
  gridHolder.appendChild(clkObj.btns);
  clkObj.description.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  clkObj.details.style.marginBottom = '0.5rem';
  clkObj.name.classList.add('pop-up-window-name-styles');
  clkObj.description.classList.add('float-description-left');
  clkObj.tech.classList.add('float-tech-right');
  clkObj.image.classList.add('resize-image-desktop');
  clkObj.btns.classList.add('pop-up-window-buttons-container');
  const popUpBtn1 = document.createElement('button');
  const popUpBtn2 = document.createElement('button');
  const popUpBtn1Img = document.createElement('img');
  popUpBtn1Img.src = './images/btn-1-png.png';
  const popUpBtn2Img = document.createElement('img');
  popUpBtn2Img.src = './images/btn-2-png.png';
  popUpBtn1.classList.add('pop-up-btn-styles');
  popUpBtn2.classList.add('pop-up-btn-styles');
  const abc = clkObj.btns.querySelector('.btn-removable');
  clkObj.btns.removeChild(abc);
  clkObj.btns.appendChild(popUpBtn1);
  clkObj.btns.appendChild(popUpBtn2);
  popUpBtn1.innerText = 'See live';
  popUpBtn1.appendChild(popUpBtn1Img);
  popUpBtn2.innerText = 'See Source';
  popUpBtn2.appendChild(popUpBtn2Img);
  document.body.scroll = 'no';
  document.body.style.overflow = 'hidden';

  function mediaQueryListener() {
    const query = window.matchMedia('(min-width: 768px)');

    if (query.matches) {
      clkObj.image.src = './images/desktop-version-card-image.svg';
      clkObj.description.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea";
    }
  }

  mediaQueryListener();
}

// Adding the click event and passing in the index of the article being clicked
document
  .querySelector('.work1')
  .querySelector('button')
  .addEventListener('click', () => {
    popUp(0);
  });
document
  .querySelector('.work2')
  .querySelector('button')
  .addEventListener('click', () => {
    popUp(1);
  });
document
  .querySelector('.work3')
  .querySelector('button')
  .addEventListener('click', () => {
    popUp(2);
  });
document
  .querySelector('.work4')
  .querySelector('button')
  .addEventListener('click', () => {
    popUp(3);
  });

function closePopUp() {
  window.location.reload();
}

exit2.addEventListener('click', () => {
  closePopUp();
});

const thisForm = document.querySelector('#contact-form');
const errorMessenger = document.createElement('small');
const mainFormControls = document.querySelector('#mainFormControls');
errorMessenger.innerText = 'Please enter email only in lowercase';
mainFormControls.appendChild(errorMessenger);
errorMessenger.className = 'errorMessengerHidden';

function validateEmail() {
  const userInputEmail = thisForm.querySelector('#email');
  const validatorStr = userInputEmail.value.toLowerCase();
  const validate = userInputEmail.value === validatorStr;
  return validate;
}

thisForm.addEventListener('submit', (val) => {
  if (validateEmail()) {
    thisForm.submit();
    errorMessenger.className = 'errorMessengerHidden';
  } else {
    val.preventDefault();
    errorMessenger.className = 'errorMessengerVisible';
  }
});
