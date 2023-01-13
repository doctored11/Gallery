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
let artJSO =
  '[{"id": "0","url": "../source/","heading": "Heading","date": "11.05.2021","paragraph": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,"},{"id": "1","url": "../source/ ","heading": "Heading 2","date": "19.02.2012","paragraph": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,"},{ "id": "2","url": "../source/ ","heading": "From JSON","date": "12.02.2012","paragraph": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,"},{"id": "3","url": "../source/ ","heading": "JSON parse","date": "11.02.2022","paragraph": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,"},{"id": "4","url": "../source/","heading": "Heading","date": "11.05.2021","paragraph": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,"},{"id": "5","url": "../source/","heading": "Heading","date": "11.05.2021","paragraph": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,"}]';
//
function showArtCard() {
  console.log('!!!!');
  let artID = this.dataset.artId;
  console.log(artID);
  let activeCardIndex = JSON.parse(artJSO);
  // console.log(activeCardIndex[artID].id);

  let card = document.createElement('div');
  card.classList.add(
    'card-art',
    'card--open',
    'animate__animated',
    'animate__zoomInLeft'
  );

  let artblock = document.createElement('div');
  artblock.classList.add('card__img-block');
  artblock.style = `background: no-repeat url(${activeCardIndex[artID].url})`;

  card.appendChild(artblock);

  const cardHeading = document.createElement('h2');
  cardHeading.classList.add('card__heading');
  cardHeading.textContent = activeCardIndex[artID].heading;

  const cardDate = document.createElement('p');
  cardDate.classList.add('txt', 'txt--gray', 'card__date');
  cardDate.textContent = activeCardIndex[artID].date;

  const cardContent = document.createElement('p');
  cardContent.classList.add('txt', 'card__txt');
  cardContent.textContent = activeCardIndex[artID].paragraph;

  const cardBox = document.createElement('div');
  cardBox.classList.add('card__block');

  cardBox.appendChild(cardHeading);
  cardBox.appendChild(cardDate);
  cardBox.appendChild(cardContent);

  card.appendChild(cardBox);
  const cardBackground = document.createElement('div');
  cardBackground.classList.add('cardBack');

  document.body.appendChild(cardBackground);
  cardBackground.appendChild(card);

  cardBackground.addEventListener('click', () => {
    cardBackground.remove();
  });
}

// выпадающие вещи из второго меню

let arrOfNavLinks = document.querySelectorAll('.nav__nav-link');
for (let i = 0; i < arrOfNavLinks.length; i++) {
  arrOfNavLinks[i].addEventListener('mouseover', () => {
    let dataKey = arrOfNavLinks[i].getAttribute('data-list-menu');
    console.log(dataKey);
    createMenuBox(dataKey, i);
  });

  let sHeader = document.querySelector('.header__second-header');
}

states_dictionary = {
  A1: [
    ['ru_name', 'link'],
    ['ru_name', 'link'],
    ['ru_name', 'link'],
  ],
  B2: [['ru_name', 'link']],
  C3: [
    ['ru_name', 'link'],
    ['ru_name', 'link'],
  ],
  D4: [
    ['ru_name', 'link'],
    ['ru_name', 'link'],
  ],
  E5: [
    ['ru_name', 'link'],
    ['ru_name', 'link'],
    ['ru_name', 'link'],
    ['ru_name', 'link'],
  ],
};

function createMenuBox(_key, num) {
  if (arrOfNavLinks[num].children.length > 1) return;
  const menucard = document.createElement('div');
  menucard.classList.add('nav__mini-menu');
  console.log(_key, states_dictionary[_key].length);
  for (let i = 0; i < states_dictionary[_key].length; ++i) {
    const menuLink = document.createElement('a');
    menuLink.classList.add('nav__link-mini');
    menuLink.href = states_dictionary[_key][i][1];
    menuLink.textContent = states_dictionary[_key][i][0];
    menucard.appendChild(menuLink);
  }
  menucard.addEventListener('mouseleave', () => {
    menucard.remove();
  });

  arrOfNavLinks[num].appendChild(menucard);
}
