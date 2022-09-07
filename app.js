const documentDefault = document.body.innerHTML;
const union = document.querySelector(".navbar-menu-btn-container");
const exit = document.createElement("img");
const div = document.querySelector(".menu-list-items");
const ham = document.querySelector(".navbar-menu-btn-container");
const mainBody = document.querySelector("#main-body");
const logo = document.querySelector(".logo-container");
const menuNavigation = div.querySelectorAll("li");
const headerContainer = document.querySelector("#header-container");

exit.src = "./images/Icon-cancel.png";
exit.classList.add("exit");
exit.style.marginTop = "-1.25rem";

function openMenu() {
  div.classList.remove("menu-list-items");
  div.classList.add("mobile-menu-list");
  ham.classList.add("make-disappear");
  mainBody.classList.add("blur-bg");
  logo.classList.add("blur-bg");
  div.querySelector("ul").classList.add("mobile-menu-list-ul");
  div.getElementsByClassName.color = "white";
  div.prepend(exit);
}

function closeMenu() {
  div.classList.remove("mobile-menu-list");
  div.classList.add("menu-list-items");
  ham.classList.remove("make-disappear");
  mainBody.classList.remove("blur-bg");
  logo.classList.remove("blur-bg");
}

union.addEventListener("click", openMenu);
exit.addEventListener("click", closeMenu);
menuNavigation.forEach((element) => {
  element.addEventListener("click", closeMenu);
});

let worksArray = document.querySelectorAll(".works");
let workObjArr = [];

function fillObjects(
  obj,
  nameWork,
  detailsWork,
  imageWork,
  descriptionWork,
  techWork,
  buttonsWork
) {
  obj.name = nameWork;
  obj.details = detailsWork;
  obj.image = imageWork;
  obj.description = descriptionWork;
  obj.tech = techWork;
  obj.btns = buttonsWork;

  return obj;
}

for (let e of worksArray) {
  let workObj = {};
  workObjArr.push(
    fillObjects(
      workObj,
      e.querySelector("h3"),
      e.querySelector(".client-frame"),
      e.querySelector(".project-card-image"),
      e.querySelector(".main-text"),
      e.querySelector(".lang-btns"),
      e.querySelector(".btn-container")
    )
  );
}

console.log(worksArray);
console.log(workObjArr);

const exit2 = document.createElement("img");
exit2.src = "./images/Icon-pop-up-close.png";
exit2.classList.add("exit-popup-window");

let darkBgScrn = document.createElement("div");
let popUpWindowDiv = document.createElement("div");
let gridHolder = document.createElement("div");

function popUp(itr) {
  let clkObj = workObjArr[itr];
  document.body.appendChild(popUpWindowDiv);
  popUpWindowDiv.classList.add("pop-up-window-styles");
  document.body.prepend(darkBgScrn);
  darkBgScrn.classList.add("dark-bg-screen");
  mainBody.classList.add("blur-bg");
  headerContainer.classList.add("blur-bg");
  popUpWindowDiv.appendChild(clkObj.name);
  clkObj.name.appendChild(exit2);
  popUpWindowDiv.appendChild(clkObj.details);
  popUpWindowDiv.appendChild(clkObj.image);
  popUpWindowDiv.appendChild(gridHolder);
  gridHolder.appendChild(clkObj.description);
  gridHolder.appendChild(clkObj.tech);
  gridHolder.appendChild(clkObj.btns);
  clkObj.description.innerHTML =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  clkObj.details.style.marginBottom = "0.5rem";
  clkObj.name.classList.add("pop-up-window-name-styles");
  clkObj.description.classList.add("float-description-left");
  clkObj.tech.classList.add("float-tech-right");
  clkObj.image.classList.add("resize-image-desktop");
  clkObj.btns.classList.add("pop-up-window-buttons-container");
  let popUpBtn1 = document.createElement("button");
  let popUpBtn2 = document.createElement("button");
  let popUpBtn1Img = document.createElement("img");
  popUpBtn1Img.src = "./images/btn-1-png.png";
  let popUpBtn2Img = document.createElement("img");
  popUpBtn2Img.src = "./images/btn-2-png.png";
  popUpBtn1.classList.add("pop-up-btn-styles");
  popUpBtn2.classList.add("pop-up-btn-styles");
  let abc = clkObj.btns.querySelector(".btn-removable");
  clkObj.btns.removeChild(abc);
  clkObj.btns.appendChild(popUpBtn1);
  clkObj.btns.appendChild(popUpBtn2);
  popUpBtn1.innerText = "See live";
  popUpBtn1.appendChild(popUpBtn1Img);
  popUpBtn2.innerText = "See Source";
  popUpBtn2.appendChild(popUpBtn2Img);
}

document
  .querySelector(".work1")
  .querySelector("button")
  .addEventListener("click", function () {
    popUp(0);
  });
document
  .querySelector(".work2")
  .querySelector("button")
  .addEventListener("click", function () {
    popUp(1);
  });
document
  .querySelector(".work3")
  .querySelector("button")
  .addEventListener("click", function () {
    popUp(2);
  });
document
  .querySelector(".work4")
  .querySelector("button")
  .addEventListener("click", function () {
    popUp(3);
  });

function closePopUp() {
  history.go(0);
}

exit2.addEventListener("click", () => {
  closePopUp();
});
