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
let btnMoreAccardeon1 = document.getElementById('btnAsk1');
let btnMoreAccardeon2 = document.getElementById('btnAsk2');
let btnMoreAccardeon3 = document.getElementById('btnAsk3');
let btnMoreAccardeon4 = document.getElementById('btnAsk4');
let textAccardeon1 = document.getElementById('btnAsk1-text');
let textAccardeon2 = document.getElementById('btnAsk2-text');
let textAccardeon3 = document.getElementById('btnAsk3-text');
let textAccardeon4 = document.getElementById('btnAsk4-text');
let itemAccardeon1 = document.getElementById('btnAsk1-item');
let itemAccardeon2 = document.getElementById('btnAsk2-item');
let itemAccardeon3 = document.getElementById('btnAsk3-item');
let itemAccardeon4 = document.getElementById('btnAsk4-item');
let overflow = document.getElementById('overflow');
let inputLoginEmail = document.getElementById('loginEmail');
let inputLoginPassword = document.getElementById('loginPassword');
let loginSignUp = document.getElementById('loginSignUp');
let loginWrapper = document.querySelector('loginPopup__wrapper');

mainLogin.removeAttribute('href')
mainLogin.setAttribute('href', '#')

if(btnMoreAccardeon1) {
  btnMoreAccardeon1.classList.add('showmore')
}
if(textAccardeon1) {
  textAccardeon1.classList.remove('questionsMain__content-more--nojs')
}
if(textAccardeon2) {
  textAccardeon2.classList.remove('questionsMain__content-more--nojs')
}
if(textAccardeon3) {
  textAccardeon3.classList.remove('questionsMain__content-more--nojs')
}
if(textAccardeon4) {
  textAccardeon4.classList.remove('questionsMain__content-more--nojs')
}
if(itemAccardeon1) {
  itemAccardeon1.addEventListener('click', ()=> {
    if(textAccardeon1.classList.contains('show-text-more') && btnMoreAccardeon1.classList.contains('showmore')) {
      textAccardeon1.classList.remove('show-text-more')
      btnMoreAccardeon1.classList.remove('showmore')
    } else {
      textAccardeon1.classList.add('show-text-more')
      btnMoreAccardeon1.classList.add('showmore')
    }
  });

}
if(itemAccardeon2) {
  itemAccardeon2.addEventListener('click', ()=> {
    if(textAccardeon2.classList.contains('show-text-more') && btnMoreAccardeon2.classList.contains('showmore')) {
      textAccardeon2.classList.remove('show-text-more')
      btnMoreAccardeon2.classList.remove('showmore')
    } else {
      textAccardeon2.classList.add('show-text-more')
      btnMoreAccardeon2.classList.add('showmore')
    }
  });

}
if(itemAccardeon3) {
  itemAccardeon3.addEventListener('click', ()=> {
    if(textAccardeon3.classList.contains('show-text-more') && btnMoreAccardeon3.classList.contains('showmore')) {
      textAccardeon3.classList.remove('show-text-more')
      btnMoreAccardeon3.classList.remove('showmore')
    } else {
      textAccardeon3.classList.add('show-text-more')
      btnMoreAccardeon3.classList.add('showmore')
    }
  });
}
if(itemAccardeon4) {
  itemAccardeon4.addEventListener('click', ()=> {
    if(textAccardeon4.classList.contains('show-text-more') && btnMoreAccardeon4.classList.contains('showmore')) {
      textAccardeon4.classList.remove('show-text-more')
      btnMoreAccardeon4.classList.remove('showmore')
    } else {
      textAccardeon4.classList.add('show-text-more')
      btnMoreAccardeon4.classList.add('showmore')
    }
  });
}

mainLogin.addEventListener('click', ()=> {
  loginPopup.classList.add('show')
  overflow.classList.add('show');
  body.style.overflowY = 'hidden'
  loginPopup.style.overflowY='scroll'
  body.classList.add('overflow-hidden')
  inputLoginEmail.focus()
})

mainMenuOpenedLogin.addEventListener('click', ()=> {
  loginPopup.classList.add('show')
  overflow.classList.add('show')
  body.style.overflowY = 'hidden'
  loginPopup.style.overflowY='scroll'
  body.classList.add('overflow-hidden')
  inputLoginEmail.focus()
})

loginBtnPopup.addEventListener('click', ()=>{
  loginPopup.classList.remove('show')
  overflow.classList.remove('show');
})

loginPopup.addEventListener('click', ()=> {
  loginPopup.classList.remove('show')
  overflow.classList.remove('show');
})

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    loginPopup.classList.remove('show')
    overflow.classList.remove('show')
    filterShowContent.classList.remove('show');
  }

  if(loginPopup.classList.contains('show')) {

    loginBtnPopup.addEventListener('focus', ()=> {
      if(e.key === 'Shift' && e.key === 'Tab') {
        loginSignUp.focus()
      }
    })
  }

  if(loginPopup.classList.contains('show')) {

    loginSignUp.addEventListener('focus', ()=> {
      if(e.key === 'Tab') {
        loginBtnPopup.focus()
      }
    })
  }
})

inputLoginEmail.removeAttribute('required');
inputLoginPassword.removeAttribute('required');

loginPopup.addEventListener('submit', function (e) {

  if (inputLoginEmail.value.length == 0) {
    e.preventDefault()
    inputLoginEmail.classList.add('error');
  } else {
    inputLoginEmail.classList.remove('error')
    inputLoginEmail.classList.add('success')
    localStorage.setItem('LoginEmail', inputLoginEmail.value);
  }

  if (inputLoginPassword.value.length == 0) {
    e.preventDefault();
    inputLoginPassword.classList.add('error')
  } else {
    inputLoginPassword.classList.remove('error')
    inputLoginPassword.classList.add('success')
  }

  if (inputLoginEmail.classList.contains("success") && inputLoginPassword.classList.contains("success")) {
    alert("Форма успешно отправлена");
  }
})

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

let filterWrapperProducts = document.getElementById('products')
let filterWrapperMaterial = document.getElementById('material')
let filterWrapperCollection = document.getElementById('collection')
let filterWrapperPrice = document.getElementById('price')

let filterButtonProducts = document.getElementById('btnfilter1')
let filterButtonMaterial = document.getElementById('btnfilter2')
let filterButtonCollection = document.getElementById('btnfilter3')
let filterButtonPrice = document.getElementById('btnfilter4')

let filterContentProducts = document.getElementById('productsContent')
let filterContentMaterial = document.getElementById('materialContent')
let filterContentCollection = document.getElementById('collectionContent')
let filterContentPrice = document.getElementById('priceContent')
let filterBtnClear = document.getElementById('filterClear')

filterContentProducts.classList.remove('filterCatalog__filter--nojs')
filterContentMaterial.classList.remove('filterCatalog__filter--nojs')
filterContentCollection.classList.remove('filterCatalog__filter--nojs')
filterContentPrice.classList.remove('filterCatalog__filter--nojs')

filterWrapperProducts.addEventListener('click', ()=> {
  filterContentProducts.classList.toggle('show')
  filterButtonProducts.classList.toggle('showmore')
})
filterWrapperMaterial.addEventListener('click', ()=> {
  filterContentMaterial.classList.toggle('show')
  filterButtonMaterial.classList.toggle('showmore')
})
filterWrapperCollection.addEventListener('click', ()=> {
  filterContentCollection.classList.toggle('show')
  filterButtonCollection.classList.toggle('showmore')
})
filterWrapperPrice.addEventListener('click', ()=> {
  filterContentPrice.classList.toggle('show')
  filterButtonPrice.classList.toggle('showmore')
})

let filterShowButton = document.getElementById('filterShowButton');
let filterShowContent = document.querySelector('.filter-wrapper');
let filterCloseButton = document.getElementById('filterCloseButton');


if (filterShowButton && filterShowContent) {
  filterShowButton.addEventListener('click', ()=> {
    filterShowContent.classList.toggle('show')
    overflow.classList.add('show')
  })
}

if (filterCloseButton) {
  filterCloseButton.addEventListener('click', ()=> {
    filterShowContent.classList.toggle('show')
    overflow.classList.remove('show')
  })
}
