// карта
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map('map', {
    center: [55.76, 37.64],

    zoom: 7,
  });

  (myPlacemark = new ymaps.Placemark(
    [55.76, 37.64],
    {},
    {
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/Subtract.svg',
      // Размеры метки.
      iconImageSize: [30, 42],

      iconImageOffset: [-5, -38],
    }
  )),
    myMap.geoObjects.add(myPlacemark);
}
// select
const element = document.querySelector('.select');
const choices = new Choices(element, {
  searchEnabled: false,
  allowHTML: true,
  searchChoices: true,
  placeholder: true,
  itemSelectText: '',
});
// slider
// const swiper = new Swiper('.swiper-container', {
//   speed: 400,
//   spaceBetween: 100,
// });

const screenWidth = window.screen.width;
const swiper = new Swiper('.swiper', {
  // Optional parameters

  allowTouchMove: true,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    750: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

swiper.on('slideChange afterInit init', function () {
  let bufIn = 0;

  if (screenWidth >= 750) bufIn = 1;
  if (screenWidth >= 1024) bufIn = 2;
  let length = this.slides.length;
  console.log(length);
  if ((length / 2) % 2 == 0) {
    length = length / 2;
  } else {
    length = length / 2 + 1;
  }

  if (length < 6) length = 6; //!

  let currentSlide = this.activeIndex - bufIn;
  if (currentSlide > length) currentSlide = 1;
  if (currentSlide < 1) currentSlide = length;
  // console.log(this.activeIndex);
  document.querySelector('.swiper-counter').innerHTML = `
    <span class="swiper-counter__current">
    ${currentSlide}
    </span> 
    / 
    <span class="swiper-counter__total">
        ${length}
    </span>`;
});
swiper.init();

//
const swiper2 = new Swiper('.swiper2', {
  // Optional parameters

  allowTouchMove: false,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  loop: true,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      spaceBetween: 50,
    },
    780: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    520: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

const swiper3 = new Swiper('.swiper3', {
  // Optional parameters

  allowTouchMove: false,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    750: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
//
$('.accordion').accordion({
  heightStyle: 'content',
  collapsible: 'true',
  active: 1,
});
