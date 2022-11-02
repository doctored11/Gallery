let burger = document.querySelector('.burger');
let list = document.querySelector('.burger-list');
let burgerBtnEnter = document.querySelector('.burger-btn');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--desable');
  list.classList.toggle('burger-list--desable');
  burger.classList.toggle('burger--cross');
  burgerBtnEnter.classList.toggle('burgerBtn--desable');
  document.body.classList.toggle('body--block');
});

let searchBlock = document.querySelector('.search-block');
let searchInput = document.querySelector('.search-block__input');

searchBlock.addEventListener('click', () => {
  searchInput.classList.toggle('search-block__input--hidden');
});

let sHeader = document.querySelector('.second-header');
let fullScrean = document.querySelector('.full-screen');

// document.addEventListener('DOMContentLoader', () => {
window.addEventListener('scroll', () => {
  let scroll = window.scrollY;
  let fullScreanCenter = fullScrean.offsetHeight / 2;
  // console.log(scroll);
  // console.log(fullScreanCenter);

  if (fullScreanCenter < scroll) {
    sHeader.classList.remove('animate__lightSpeedInLeft');
    sHeader.classList.add('animate__fadeOutUpBig');
  } else {
    sHeader.classList.remove('animate__fadeOutUpBig');
    sHeader.classList.add('animate__lightSpeedInLeft');
  }
});

let mainBtn = document.querySelector('.full-screen__btn');
setInterval(function () {
  mainBtn.classList.toggle('animate__pulse');
}, 6000);

//artCard
let artSlides = document.querySelectorAll('.slide-art-page');
for (let i = 0, n = artSlides.length; i < n; ++i) {
  artSlides[i].addEventListener('click', showArtCard);
}

// по хорошему бы из json файла это брать  а не строкой( но не знаю как пока
// let artJSO = '{"id":0}';
// '{"id": "0","url": "../source/","heading": "Heading","date": "11.05.2021","paragraph": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,"},{"id": "1","url": "../source/ ","heading": "Heading 2","date": "19.02.2012","paragraph": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,"},{ "id": "2","url": "../source/ ","heading": "From JSON","date": "12.02.2012","paragraph": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,"},{"id": "3","url": "../source/ ","heading": "JSON parse","date": "11.02.2022","paragraph": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,"}';
//
// function showArtCard() {
//   console.log('!!!!');
//   let artID = this.dataset.artId;
//   let activeCardIndex = JSON.parse(artJSO);
//   console.log(activeCardIndex.id);

//   let card = document.createElement('div');
//   card.classList.add('card card--open');
//   let artblock = document.createElement('div');
//   artblock.classList.add(' card__img-block ');
//   artblock.style = `background: no-repeat url()`;
// }
