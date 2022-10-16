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
