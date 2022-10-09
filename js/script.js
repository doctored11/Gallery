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
