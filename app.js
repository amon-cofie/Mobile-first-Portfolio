const union = document.querySelector(".navbar-menu-btn-container");
const exit = document.createElement("img");
const div = document.querySelector(".menu-list-items");
const ham = document.querySelector(".navbar-menu-btn-container");
const mainBody = document.querySelector("#main-body");
const logo = document.querySelector(".logo-container");
const menuNavigation = div.querySelectorAll("li");
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

function popUp(itr) {
  let clkObj = workObjArr[itr];
  console.log(clkObj);
  let popUpWindowDiv = document.createElement("div");
  document.body.prepend(popUpWindowDiv);
  popUpWindowDiv.classList.add("pop-up-window-styles");
  popUpWindowDiv.appendChild(exit);
  exit.classList.add("exit-popup-window");
  popUpWindowDiv.appendChild(clkObj.name);
  popUpWindowDiv.appendChild(clkObj.details);
  popUpWindowDiv.appendChild(clkObj.image);
  popUpWindowDiv.appendChild(clkObj.description);
  popUpWindowDiv.appendChild(clkObj.tech);
  popUpWindowDiv.appendChild(clkObj.btns);
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

// worksArray.forEach((element) => {
//   element.addEventListener("click", popUp());
//   while (iterator < 4) {
//     iterator++;
//   }
// });
