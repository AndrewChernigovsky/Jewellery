"use strict";

let mainMenu = document.querySelector('.main-menu');
let mainBtnMenu = document.querySelector('.main-menu__toggle');
let mainNavNojs = 'main-menu--nojs';
let mainNavClosed = 'main-menu--closed';
let mainNavOpened = 'main-menu--opened';
let navList = document.querySelector('.main-menu__list');
let body = document.getElementsByTagName('body')[0];
let mainMenuContent = document.querySelector('.main-header__inner');
let mainMenuOpenedLogin = document.getElementById('loginMenu');

mainMenu.classList.remove(mainNavNojs);

if (mainMenu.classList.contains(mainNavOpened)) {
  mainMenu.classList.remove(mainNavOpened);
  mainMenu.classList.add(mainNavClosed);
}

mainBtnMenu.addEventListener('click', function () {
  if (mainMenu.classList.contains(mainNavClosed)) {
    mainMenu.classList.remove(mainNavClosed);
    mainMenu.classList.add(mainNavOpened);

  } else {
    mainMenu.classList.add(mainNavClosed);
    mainMenu.classList.remove(mainNavOpened);
    mainMenuContent.style.overflowY='hidden';
  }

  if(mainMenu.classList.contains(mainNavOpened)) {
    body.classList.add('overflow-hidden')
    mainMenuContent.style.overflowY='scroll';
  } else {
    body.classList.remove('overflow-hidden')
  }

  if(mainMenu.classList.contains('none')) {
    body.classList.remove('overflow-hidden')
    mainMenuContent.style.overflowY='hidden';
  }
});

if(mainMenuOpenedLogin.focus()) {
  mainMenuOpenedLogin.addEventListener("blur", ()=> {
    mainBtnMenu.focus()
  })
}

document.addEventListener("keydown", function (e) {

  if(e.key === "Tab") {
    if(e.shiftKey) {
      mainBtnMenu.focus()
    }
  }
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
