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
let mainLogin = document.getElementById('login');
let loginBtnPopup = document.getElementById('btnloginPopup');
let loginPopup = document.getElementById('loginPopup');


mainLogin.addEventListener('click', ()=> {
  loginPopup.classList.add('show');
})

mainMenuOpenedLogin.addEventListener('click', ()=> {
  loginPopup.classList.add('show');
})

loginBtnPopup.addEventListener('click', ()=>{
  loginPopup.classList.remove('show');
})

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    loginPopup.classList.remove('show');
  }
});


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
