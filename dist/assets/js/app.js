/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
window.addEventListener('DOMContentLoaded', function () {
  var data = [{
    id: 1,
    name: 'Коптильня 10л',
    price: 1200
  }, {
    id: 2,
    name: 'Коптильня 20л',
    price: 1400
  }, {
    id: 3,
    name: 'Коптильня 30л',
    price: 1600
  }];
  var cards = document.querySelectorAll('.card');
  cards.forEach(function (item, index) {
    item.querySelector('.card__button').setAttribute('id', "".concat(data[index].id));
    item.querySelector('.card__header').innerText = data[index].name;
    item.querySelector('.card__price').innerText = "".concat(new Intl.NumberFormat('ru-RU').format(data[index].price), " \u0440\u0443\u0431.");
    item.querySelector('.card__button').addEventListener('click', disableButton);
  });
  var sumEl = document.querySelector('.sum span');
  var sum = 0;

  function disableButton(e) {
    e.currentTarget.setAttribute('disabled', 'disabled');
    e.currentTarget.classList.add('clicked');
    e.currentTarget.innerText = 'ДОБАВЛЕНО';
    var btnId = e.currentTarget.getAttribute('id');
    sum += data[btnId - 1].price;
    sumEl.textContent = "".concat(new Intl.NumberFormat('ru-RU').format(sum));
  }
});
/******/ })()
;